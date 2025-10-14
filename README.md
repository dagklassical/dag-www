# DAG Klassical - Disquera Blockchain

> **Una disquera independiente potenciada por tecnología blockchain en Polygon**

---

## 🎵 Descripción del Proyecto

DAG Klassical es una plataforma integral que combina:

- **Sitio web tradicional** para la disquera
- **Marketplace de NFTs musicales** en blockchain Polygon
- **Gestión de contenido** descentralizada via GitHub

## 🏗️ Arquitectura del Sistema

```ascii
Frontend (Astro) ←→ Polygon Blockchain ←→ Smart Contracts
     ↑                    ↑                    ↑
GitHub Pages         RPC Provider      MusicCardNFT.sol
                                      Marketplace.sol
```

### 🔗 Repositorios del ecosistema

- **[dag-www](https://github.com/dagklassical/dag-www)** - Sitio web principal
- **[dag-klassical-blockchain](https://github.com/dagklassical/dag-klassical-blockchain)** - Smart contracts
- **[dag-klassical-api](https://github.com/dagklassical/dag-klassical-api)** - Backend API (opcional)

## 📚 Documentación del Proyecto

### 📖 Guías por audiencia

| Guía | Audiencia | Propósito | Estado |
|------|-----------|-----------|--------|
| [**Gestión de Contenido**](GUIA_GESTION_CONTENIDO.md) | Content Managers, Editores | Administrar contenido del sitio | ✅ Completa |
| [**Integración Blockchain**](GUIA_BLOCKCHAIN_SETUP.md) | Desarrolladores | Configurar conexión con Polygon | 🚧 En desarrollo |
| [**Marketplace NFT**](GUIA_MARKETPLACE_NFT.md) | Business, Desarrolladores | Implementar tienda de NFTs | ⏳ Pendiente |
| [**Deploy y Producción**](GUIA_DEPLOYMENT.md) | DevOps, Administradores | Publicar y mantener el sitio | ⏳ Pendiente |

### 🎯 Guías por fase del proyecto

#### **Fase 1-2: Sitio Web Base** ✅

- [Gestión de Contenido](GUIA_GESTION_CONTENIDO.md)
- Arquitectura Astro + GitHub Pages
- Sistema de gestión sin CMS externo

#### **Fase 3: Integración Blockchain** 🚧

- [Integración Blockchain](GUIA_BLOCKCHAIN_SETUP.md)
- [Marketplace NFT](GUIA_MARKETPLACE_NFT.md)
- Conexión con contratos en Polygon

#### **Fase 4: Producción** ⏳

- [Deploy y Producción](GUIA_DEPLOYMENT.md)
- Optimizaciones finales
- Monitoreo y mantenimiento

## 🚀 Stack Tecnológico

### **Frontend**

- **Astro** - Framework principal del sitio
- **JavaScript/TypeScript** - Lógica del cliente
- **Ethers.js** - Interacción con blockchain
- **Tailwind CSS** - Estilos (opcional)

### **Blockchain**

- **Polygon Network** - Blockchain principal
- **Solidity** - Smart contracts
- **Hardhat** - Framework de desarrollo
- **MetaMask** - Wallet de usuario

### **Infraestructura**

- **GitHub Pages** - Hosting gratuito
- **GitHub Actions** - CI/CD automático
- **Polygon RPC** - Conexión blockchain

## 📋 Quick Start

### **Para editores de contenido:**

1. Lee la [Guía de Gestión de Contenido](GUIA_GESTION_CONTENIDO.md)
2. Accede al repositorio en GitHub
3. Edita archivos `.md` directamente en la web

### **Para desarrolladores:**

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Desarrollo local: `npm run dev`
4. Sigue la [Guía de Integración Blockchain](GUIA_BLOCKCHAIN_SETUP.md)

## 🌐 Enlaces Importantes

### **Sitios de producción:**

- **Sitio principal:** <https://dagklassical.github.io/dag-www>
- **Marketplace NFT:** <https://dagklassical.github.io/dag-www/marketplace>

### **Blockchain:**

- **Red:** Polygon Mainnet
- **Contratos:** [Ver en blockchain explorer](https://polygonscan.com/)

### **Desarrollo:**

- **Repositorio principal:** <https://github.com/dagklassical/dag-www>
- **Issues y roadmap:** <https://github.com/dagklassical/dag-www/issues>

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build

# Git workflow
git checkout -b feat/nueva-funcionalidad
git commit -m "feat: descripción del cambio"
git push origin feat/nueva-funcionalidad

# Blockchain (desde dag-klassical-blockchain)
npx hardhat compile  # Compilar contratos
npx hardhat test     # Ejecutar tests
npx hardhat deploy   # Deploy a testnet
```

## 📞 Soporte y Contacto

- **Issues técnicos:** [GitHub Issues](https://github.com/dagklassical/dag-www/issues)
- **Documentación:** Este mismo repositorio
- **Equipo de desarrollo:** DAG Klassical

## 📄 Licencia

Este proyecto está licenciado bajo [MIT License](LICENSE).

---

## 🎯 Roadmap

### **✅ Completado**

- [x] Configuración inicial del repositorio
- [x] Deploy automático en GitHub Pages
- [x] Sistema de gestión de contenido
- [x] Estructura base del sitio

### **🚧 En desarrollo (Fase 3)**

- [ ] Integración con Polygon blockchain
- [ ] Conexión a smart contracts
- [ ] Marketplace de NFTs musicales
- [ ] Integración con wallets

### **⏳ Pendiente (Fase 4)**

- [ ] Optimizaciones de performance
- [ ] SEO avanzado
- [ ] Analytics y métricas
- [ ] Testing de carga

---

**Última actualización:** 14 de octubre, 2025  
**Versión de la documentación:** 1.0
