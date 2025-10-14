# Guía de Integración Blockchain - DAG Klassical

**Fecha de creación:** 14 de octubre, 2025  
**Versión:** 1.0  
**Fase:** 3 - Integración Blockchain  
**Estado:** En desarrollo

## 📋 Descripción General

Esta guía documenta la integración completa de funcionalidades blockchain en el sitio web de DAG Klassical, conectando directamente con los smart contracts desplegados en Polygon Network.

## 🎯 Objetivos de la Fase 3

✅ **Conectar Astro con Polygon blockchain**  
✅ **Mostrar NFTs musicales** desde el contrato `MusicCardNFT.sol`  
✅ **Implementar marketplace** usando `Marketplace.sol`  
✅ **Integrar wallets** (MetaMask, WalletConnect)  
✅ **Transacciones en tiempo real**  

## 🏗️ Arquitectura Blockchain

```ascii
Usuario → Astro Frontend → Ethers.js → Polygon RPC → Smart Contracts
    ↓                                                      ↓
MetaMask Wallet                                    MusicCardNFT.sol
                                                  Marketplace.sol
```

## 📦 Dependencias Requeridas

### Instalar librerías blockchain

```bash
# En el directorio dag-www
npm install ethers@6.7.1
npm install @wagmi/core viem
npm install web3modal
```

### Dependencias opcionales (recomendadas)

```bash
# Para mejor UX
npm install @web3modal/ethereum @web3modal/react
npm install @walletconnect/ethereum-provider
```

## ⚙️ Configuración Inicial

### 1. Variables de entorno

Crear archivo `.env` en la raíz del proyecto:

```env
# .env
PUBLIC_POLYGON_RPC_URL=https://polygon-rpc.com/
PUBLIC_POLYGON_CHAIN_ID=137
PUBLIC_MUSICCARD_NFT_ADDRESS=0x... # Tu dirección del contrato
PUBLIC_MARKETPLACE_ADDRESS=0x...   # Tu dirección del marketplace
PUBLIC_WALLETCONNECT_PROJECT_ID=your-project-id

# Solo para desarrollo (usar Polygon Mumbai testnet)
PUBLIC_TESTNET_RPC_URL=https://rpc-mumbai.maticvigil.com/
PUBLIC_TESTNET_CHAIN_ID=80001
```

### 2. Configuración de Astro

Modificar `astro.config.mjs`:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  
  // Permitir variables de entorno en el cliente
  vite: {
    define: {
      global: 'globalThis',
    }
  },
  
  // Configurar para blockchain
  integrations: [],
  
  // Para GitHub Pages
  site: 'https://dagklassical.github.io',
  base: '/dag-www',
});
```

## 🔧 Implementación Core

### 1. Configuración de conexión blockchain

Crear `src/lib/blockchain.js`:

```javascript
// src/lib/blockchain.js
import { ethers } from 'ethers';

// Configuración de red
const POLYGON_MAINNET = {
  chainId: parseInt(import.meta.env.PUBLIC_POLYGON_CHAIN_ID),
  name: 'Polygon',
  currency: 'MATIC',
  rpcUrl: import.meta.env.PUBLIC_POLYGON_RPC_URL,
  blockExplorer: 'https://polygonscan.com'
};

// ABIs de los contratos (importar desde blockchain repo)
import { MUSICCARD_ABI } from './abis/MusicCardNFT.js';
import { MARKETPLACE_ABI } from './abis/Marketplace.js';

// Addresses de los contratos
const CONTRACTS = {
  musicCardNFT: import.meta.env.PUBLIC_MUSICCARD_NFT_ADDRESS,
  marketplace: import.meta.env.PUBLIC_MARKETPLACE_ADDRESS
};

// Provider de solo lectura
let provider;
let musicCardContract;
let marketplaceContract;

// Inicializar conexión
export function initializeProvider() {
  if (typeof window !== 'undefined') {
    provider = new ethers.JsonRpcProvider(POLYGON_MAINNET.rpcUrl);
    
    // Contratos de solo lectura
    musicCardContract = new ethers.Contract(
      CONTRACTS.musicCardNFT,
      MUSICCARD_ABI,
      provider
    );
    
    marketplaceContract = new ethers.Contract(
      CONTRACTS.marketplace,
      MARKETPLACE_ABI,
      provider
    );
  }
}

// Conexión a wallet
export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error('MetaMask no detectado. Instala MetaMask.');
  }
  
  try {
    // Solicitar conexión
    await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    });
    
    // Cambiar a Polygon si es necesario
    await switchToPolygon();
    
    // Crear signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    return {
      address: await signer.getAddress(),
      signer,
      provider
    };
    
  } catch (error) {
    console.error('Error conectando wallet:', error);
    throw error;
  }
}

// Cambiar a red Polygon
async function switchToPolygon() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${POLYGON_MAINNET.chainId.toString(16)}` }],
    });
  } catch (switchError) {
    // Si la red no está agregada, agregarla
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${POLYGON_MAINNET.chainId.toString(16)}`,
          chainName: POLYGON_MAINNET.name,
          nativeCurrency: {
            name: POLYGON_MAINNET.currency,
            symbol: POLYGON_MAINNET.currency,
            decimals: 18
          },
          rpcUrls: [POLYGON_MAINNET.rpcUrl],
          blockExplorerUrls: [POLYGON_MAINNET.blockExplorer]
        }]
      });
    }
  }
}

// Obtener NFTs de un usuario
export async function getUserNFTs(userAddress) {
  if (!musicCardContract) initializeProvider();
  
  try {
    const balance = await musicCardContract.balanceOf(userAddress);
    const nfts = [];
    
    for (let i = 0; i < balance; i++) {
      const tokenId = await musicCardContract.tokenOfOwnerByIndex(userAddress, i);
      const tokenURI = await musicCardContract.tokenURI(tokenId);
      
      // Obtener metadata
      const metadata = await fetch(tokenURI).then(res => res.json());
      
      nfts.push({
        tokenId: tokenId.toString(),
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        attributes: metadata.attributes,
        owner: userAddress
      });
    }
    
    return nfts;
  } catch (error) {
    console.error('Error obteniendo NFTs:', error);
    return [];
  }
}

// Obtener NFTs en venta
export async function getNFTsForSale() {
  if (!marketplaceContract) initializeProvider();
  
  try {
    // Obtener eventos de listing
    const listingEvents = await marketplaceContract.queryFilter(
      marketplaceContract.filters.TokenListed()
    );
    
    const nftsForSale = [];
    
    for (const event of listingEvents) {
      const { tokenId, seller, price } = event.args;
      
      // Verificar si sigue en venta
      const listing = await marketplaceContract.listings(tokenId);
      if (listing.active) {
        // Obtener metadata del NFT
        const tokenURI = await musicCardContract.tokenURI(tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
        
        nftsForSale.push({
          tokenId: tokenId.toString(),
          seller,
          price: ethers.formatEther(price),
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          attributes: metadata.attributes
        });
      }
    }
    
    return nftsForSale;
  } catch (error) {
    console.error('Error obteniendo NFTs en venta:', error);
    return [];
  }
}

// Comprar NFT
export async function buyNFT(tokenId, price, signer) {
  try {
    const marketplaceWithSigner = new ethers.Contract(
      CONTRACTS.marketplace,
      MARKETPLACE_ABI,
      signer
    );
    
    const priceInWei = ethers.parseEther(price);
    
    const tx = await marketplaceWithSigner.buyToken(tokenId, {
      value: priceInWei,
      gasLimit: 300000 // Límite de gas apropiado
    });
    
    return tx;
  } catch (error) {
    console.error('Error comprando NFT:', error);
    throw error;
  }
}

// Listar NFT para venta
export async function listNFT(tokenId, price, signer) {
  try {
    const marketplaceWithSigner = new ethers.Contract(
      CONTRACTS.marketplace,
      MARKETPLACE_ABI,
      signer
    );
    
    const priceInWei = ethers.parseEther(price);
    
    const tx = await marketplaceWithSigner.listToken(tokenId, priceInWei, {
      gasLimit: 200000
    });
    
    return tx;
  } catch (error) {
    console.error('Error listando NFT:', error);
    throw error;
  }
}

// Formatear dirección para mostrar
export function formatAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Verificar si wallet está conectada
export function isWalletConnected() {
  return window.ethereum && window.ethereum.selectedAddress;
}
```

### 2. ABIs de los contratos

Crear `src/lib/abis/MusicCardNFT.js`:

```javascript
// src/lib/abis/MusicCardNFT.js
export const MUSICCARD_ABI = [
  // Funciones principales del ERC721
  "function balanceOf(address owner) view returns (uint256)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  
  // Funciones específicas del contrato
  "function mintMusicCard(address to, string uri) returns (uint256)",
  "function burn(uint256 tokenId)",
  
  // Eventos
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event MusicCardMinted(address indexed to, uint256 indexed tokenId, string uri)"
];
```

Crear `src/lib/abis/Marketplace.js`:

```javascript
// src/lib/abis/Marketplace.js
export const MARKETPLACE_ABI = [
  // Funciones del marketplace
  "function listToken(uint256 tokenId, uint256 price)",
  "function buyToken(uint256 tokenId) payable",
  "function cancelListing(uint256 tokenId)",
  "function updatePrice(uint256 tokenId, uint256 newPrice)",
  
  // Vistas
  "function listings(uint256 tokenId) view returns (address seller, uint256 price, bool active)",
  "function getActiveListings() view returns (uint256[])",
  
  // Eventos
  "event TokenListed(uint256 indexed tokenId, address indexed seller, uint256 price)",
  "event TokenSold(uint256 indexed tokenId, address indexed buyer, address indexed seller, uint256 price)",
  "event ListingCancelled(uint256 indexed tokenId)"
];
```

## 🎵 Componentes de UI

### 1. Conexión de Wallet

Crear `src/components/WalletConnect.astro`:

```astro
---
// src/components/WalletConnect.astro
---

<div class="wallet-connect">
  <button id="connectWallet" class="btn-connect">
    Conectar Wallet
  </button>
  
  <div id="walletInfo" class="wallet-info hidden">
    <span id="walletAddress"></span>
    <button id="disconnectWallet" class="btn-disconnect">
      Desconectar
    </button>
  </div>
</div>

<style>
  .wallet-connect {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .btn-connect {
    background: #8B5CF6;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .btn-connect:hover {
    background: #7C3AED;
  }
  
  .wallet-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: #F3F4F6;
    border-radius: 0.5rem;
  }
  
  .hidden {
    display: none;
  }
</style>

<script>
  import { connectWallet, formatAddress, isWalletConnected } from '../lib/blockchain.js';
  
  const connectBtn = document.getElementById('connectWallet');
  const walletInfo = document.getElementById('walletInfo');
  const walletAddress = document.getElementById('walletAddress');
  const disconnectBtn = document.getElementById('disconnectWallet');
  
  // Estado inicial
  if (isWalletConnected()) {
    showWalletInfo(window.ethereum.selectedAddress);
  }
  
  // Conectar wallet
  connectBtn?.addEventListener('click', async () => {
    try {
      const wallet = await connectWallet();
      showWalletInfo(wallet.address);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });
  
  // Desconectar wallet
  disconnectBtn?.addEventListener('click', () => {
    hideWalletInfo();
  });
  
  // Mostrar info de wallet conectada
  function showWalletInfo(address) {
    connectBtn.classList.add('hidden');
    walletInfo.classList.remove('hidden');
    walletAddress.textContent = formatAddress(address);
  }
  
  // Ocultar info de wallet
  function hideWalletInfo() {
    connectBtn.classList.remove('hidden');
    walletInfo.classList.add('hidden');
  }
  
  // Escuchar cambios de cuenta
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        hideWalletInfo();
      } else {
        showWalletInfo(accounts[0]);
      }
    });
  }
</script>
```

### 2. Grid de NFTs

Crear `src/components/NFTGrid.astro`:

```astro
---
// src/components/NFTGrid.astro
export interface Props {
  title: string;
  type: 'owned' | 'marketplace';
}

const { title, type } = Astro.props;
---

<div class="nft-section">
  <h2>{title}</h2>
  
  <div id="nftGrid" class="nft-grid">
    <div class="loading">Cargando NFTs...</div>
  </div>
</div>

<style>
  .nft-section {
    margin: 2rem 0;
  }
  
  .nft-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .nft-card {
    border: 1px solid #E5E7EB;
    border-radius: 0.75rem;
    overflow: hidden;
    transition: transform 0.2s;
  }
  
  .nft-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .nft-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .nft-info {
    padding: 1rem;
  }
  
  .nft-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .nft-description {
    color: #6B7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  
  .nft-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #8B5CF6;
    margin-bottom: 1rem;
  }
  
  .nft-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .btn-primary {
    background: #8B5CF6;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    flex: 1;
  }
  
  .btn-secondary {
    background: #F3F4F6;
    color: #374151;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
  }
  
  .loading {
    text-align: center;
    color: #6B7280;
    padding: 2rem;
  }
</style>

<script define:vars={{ type }}>
  import { 
    getUserNFTs, 
    getNFTsForSale, 
    buyNFT, 
    connectWallet,
    formatAddress 
  } from '../lib/blockchain.js';
  
  const nftGrid = document.getElementById('nftGrid');
  
  // Cargar NFTs según el tipo
  async function loadNFTs() {
    try {
      let nfts = [];
      
      if (type === 'owned') {
        // NFTs del usuario conectado
        if (window.ethereum?.selectedAddress) {
          nfts = await getUserNFTs(window.ethereum.selectedAddress);
        }
      } else if (type === 'marketplace') {
        // NFTs en venta
        nfts = await getNFTsForSale();
      }
      
      renderNFTs(nfts);
    } catch (error) {
      console.error('Error cargando NFTs:', error);
      nftGrid.innerHTML = '<div class="loading">Error cargando NFTs</div>';
    }
  }
  
  // Renderizar NFTs
  function renderNFTs(nfts) {
    if (nfts.length === 0) {
      nftGrid.innerHTML = '<div class="loading">No hay NFTs disponibles</div>';
      return;
    }
    
    const nftCards = nfts.map(nft => createNFTCard(nft)).join('');
    nftGrid.innerHTML = nftCards;
    
    // Agregar event listeners
    addEventListeners();
  }
  
  // Crear card de NFT
  function createNFTCard(nft) {
    const isMarketplace = type === 'marketplace';
    
    return `
      <div class="nft-card" data-token-id="${nft.tokenId}">
        <img src="${nft.image}" alt="${nft.name}" class="nft-image" />
        <div class="nft-info">
          <h3 class="nft-title">${nft.name}</h3>
          <p class="nft-description">${nft.description}</p>
          ${isMarketplace ? `
            <div class="nft-price">${nft.price} MATIC</div>
            <div class="nft-seller">Vendedor: ${formatAddress(nft.seller)}</div>
          ` : ''}
          <div class="nft-actions">
            ${isMarketplace ? `
              <button class="btn-primary buy-btn">Comprar</button>
            ` : `
              <button class="btn-secondary list-btn">Vender</button>
            `}
          </div>
        </div>
      </div>
    `;
  }
  
  // Agregar event listeners
  function addEventListeners() {
    // Botones de comprar
    document.querySelectorAll('.buy-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const card = e.target.closest('.nft-card');
        const tokenId = card.dataset.tokenId;
        const priceElement = card.querySelector('.nft-price');
        const price = priceElement.textContent.split(' ')[0];
        
        await handleBuy(tokenId, price);
      });
    });
    
    // Botones de vender
    document.querySelectorAll('.list-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const card = e.target.closest('.nft-card');
        const tokenId = card.dataset.tokenId;
        
        await handleList(tokenId);
      });
    });
  }
  
  // Manejar compra
  async function handleBuy(tokenId, price) {
    try {
      const wallet = await connectWallet();
      const tx = await buyNFT(tokenId, price, wallet.signer);
      
      alert('Transacción enviada. Esperando confirmación...');
      await tx.wait();
      alert('¡NFT comprado exitosamente!');
      
      // Recargar NFTs
      loadNFTs();
    } catch (error) {
      alert(`Error comprando NFT: ${error.message}`);
    }
  }
  
  // Manejar listado para venta
  async function handleList(tokenId) {
    const price = prompt('Ingresa el precio en MATIC:');
    if (!price) return;
    
    try {
      const wallet = await connectWallet();
      const tx = await listNFT(tokenId, price, wallet.signer);
      
      alert('Transacción enviada. Esperando confirmación...');
      await tx.wait();
      alert('¡NFT listado para venta exitosamente!');
      
      // Recargar NFTs
      loadNFTs();
    } catch (error) {
      alert(`Error listando NFT: ${error.message}`);
    }
  }
  
  // Cargar NFTs al inicializar
  loadNFTs();
  
  // Recargar cuando cambie la cuenta
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', () => {
      if (type === 'owned') {
        loadNFTs();
      }
    });
  }
</script>
```

## 📄 Páginas del Marketplace

### 1. Página principal del marketplace

Crear `src/pages/marketplace.astro`:

```astro
---
// src/pages/marketplace.astro
import Layout from '../layouts/Layout.astro';
import WalletConnect from '../components/WalletConnect.astro';
import NFTGrid from '../components/NFTGrid.astro';
---

<Layout title="Marketplace NFT - DAG Klassical">
  <main>
    <header class="marketplace-header">
      <div class="container">
        <h1>Marketplace de NFTs Musicales</h1>
        <p>Descubre y colecciona música única en la blockchain</p>
        <WalletConnect />
      </div>
    </header>
    
    <section class="marketplace-content">
      <div class="container">
        <NFTGrid title="NFTs en Venta" type="marketplace" />
      </div>
    </section>
  </main>
</Layout>

<style>
  .marketplace-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .marketplace-content {
    padding: 2rem 0;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
</style>
</Layout>
```

### 2. Página de perfil del usuario

Crear `src/pages/mi-coleccion.astro`:

```astro
---
// src/pages/mi-coleccion.astro
import Layout from '../layouts/Layout.astro';
import WalletConnect from '../components/WalletConnect.astro';
import NFTGrid from '../components/NFTGrid.astro';
---

<Layout title="Mi Colección - DAG Klassical">
  <main>
    <header class="profile-header">
      <div class="container">
        <h1>Mi Colección</h1>
        <p>Gestiona tus NFTs musicales</p>
        <WalletConnect />
      </div>
    </header>
    
    <section class="profile-content">
      <div class="container">
        <div id="walletRequired" class="wallet-required">
          <h2>Conecta tu wallet</h2>
          <p>Para ver tu colección, conecta tu wallet de Polygon</p>
        </div>
        
        <div id="collectionView" class="collection-view hidden">
          <NFTGrid title="Mis NFTs" type="owned" />
        </div>
      </div>
    </section>
  </main>
</Layout>

<style>
  .profile-header {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .profile-content {
    padding: 2rem 0;
  }
  
  .wallet-required {
    text-align: center;
    padding: 4rem 0;
    color: #6B7280;
  }
  
  .hidden {
    display: none;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
</style>

<script>
  import { isWalletConnected } from '../lib/blockchain.js';
  
  const walletRequired = document.getElementById('walletRequired');
  const collectionView = document.getElementById('collectionView');
  
  function updateView() {
    if (isWalletConnected()) {
      walletRequired.classList.add('hidden');
      collectionView.classList.remove('hidden');
    } else {
      walletRequired.classList.remove('hidden');
      collectionView.classList.add('hidden');
    }
  }
  
  // Verificar estado inicial
  updateView();
  
  // Escuchar cambios de wallet
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', updateView);
  }
</script>
</Layout>
```

## 🚀 Testing y Desarrollo

### 1. Ambiente de desarrollo

```bash
# Inicializar provider al cargar
npm run dev

# Verificar en consola del navegador:
# 1. Conexión a Polygon RPC
# 2. Carga de contratos
# 3. Conexión a MetaMask
```

### 2. Testnet (Mumbai)

Para desarrollo, usar Mumbai testnet:

```env
# .env.development
PUBLIC_POLYGON_RPC_URL=https://rpc-mumbai.maticvigil.com/
PUBLIC_POLYGON_CHAIN_ID=80001
```

### 3. Deploy de contratos

Asegurar que los contratos estén desplegados en Polygon:

```bash
# En el repo dag-klassical-blockchain
npx hardhat deploy --network polygon
```

## ⚠️ Consideraciones Importantes

### Seguridad

- **Nunca** incluir claves privadas en el código
- Validar todas las transacciones del lado del cliente
- Implementar límites de gas apropiados

### Performance

- Cache de metadatos NFT cuando sea posible
- Lazy loading de imágenes
- Paginación para colecciones grandes

### UX

- Feedback claro durante transacciones
- Manejo de errores de red
- Estados de carga apropiados

## 📋 Checklist de Implementación

### **Setup inicial**

- [ ] Instalar dependencias blockchain
- [ ] Configurar variables de entorno
- [ ] Crear archivos de configuración

### **Desarrollo core**

- [ ] Implementar `blockchain.js`
- [ ] Crear ABIs de contratos
- [ ] Desarrollar componentes de UI

### **Páginas**

- [ ] Marketplace principal
- [ ] Página de colección personal
- [ ] Integrar con navegación

### **Testing**

- [ ] Conectar a testnet Mumbai
- [ ] Probar transacciones
- [ ] Verificar en mainnet

---

**Próximo documento:** [Guía del Marketplace NFT](GUIA_MARKETPLACE_NFT.md)

**Última actualización:** 14 de octubre, 2025
