# Primeros Issues para GitHub Projects

**Issues listos para copiar y pegar - Fases 2 y 3**

---

## 🎨 **FASE 2: SITIO BASE (12 Issues)**

### Issue #1: Estructura de páginas principales
```
Título: [FASE-2] Crear estructura de páginas principales faltantes

Labels: fase-2-sitio-base, frontend, priority-high, medium

## 📋 Descripción
Crear las páginas principales del sitio que están faltando para tener una estructura completa.

## 🎯 Criterios de Aceptación
- [ ] Página de inicio (/) con hero section
- [ ] Página "Sobre nosotros" (/sobre-nosotros) 
- [ ] Página de contacto (/contactos) actualizada
- [ ] Página de discografía (/discografia) base
- [ ] Navegación entre páginas funcional

## 📋 Checklist de Implementación
- [ ] Crear archivos .astro para cada página
- [ ] Implementar layouts consistentes
- [ ] Agregar contenido placeholder
- [ ] Testing de navegación
- [ ] Verificar responsive design

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 6 horas

Milestone: Sitio Base Funcional
```

### Issue #2: Contenido inicial de álbumes
```
Título: [FASE-2] Agregar contenido inicial - 3 álbumes completos

Labels: fase-2-sitio-base, content, priority-high, easy

## 📋 Descripción
Crear contenido inicial para 3 álbumes que servirán como ejemplos y para testing del sitio.

## 🎯 Criterios de Aceptación
- [ ] 3 archivos .md en src/content/albums/
- [ ] Metadatos completos (título, fecha, artista, etc.)
- [ ] Imágenes de portada optimizadas
- [ ] Descripciones atractivas de al menos 100 palabras
- [ ] Lista de pistas para cada álbum

## 📋 Checklist de Implementación
- [ ] Buscar/crear imágenes de portada
- [ ] Escribir descripciones de álbumes
- [ ] Crear archivos Markdown con formato correcto
- [ ] Optimizar imágenes (<200KB cada una)
- [ ] Verificar que se muestran en /discografia

## 📊 Estimación
**Complejidad:** 🟢 Easy  
**Tiempo estimado:** 4 horas

Milestone: Sitio Base Funcional
```

### Issue #3: Menú responsive
```
Título: [FASE-2] Implementar menú de navegación responsive

Labels: fase-2-sitio-base, frontend, design, priority-medium, medium

## 📋 Descripción
Crear un sistema de navegación responsive que funcione perfectamente en desktop, tablet y móvil.

## 🎯 Criterios de Aceptación
- [ ] Menú horizontal en desktop (>1024px)
- [ ] Menú hamburguesa en móvil (<768px)
- [ ] Transiciones suaves
- [ ] Enlaces a todas las páginas principales
- [ ] Estado activo de página actual

## 📋 Checklist de Implementación
- [ ] Crear componente Navigation.astro
- [ ] Implementar toggle para móvil
- [ ] Agregar CSS para diferentes breakpoints
- [ ] Testing en múltiples dispositivos
- [ ] Verificar accesibilidad (ARIA labels)

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 5 horas

Milestone: Sitio Base Funcional
```

### Issue #4: Optimización de imágenes
```
Título: [FASE-2] Implementar optimización de imágenes y lazy loading

Labels: fase-2-sitio-base, frontend, priority-medium, medium

## 📋 Descripción
Optimizar todas las imágenes del sitio e implementar lazy loading para mejorar performance.

## 🎯 Criterios de Aceptación
- [ ] Todas las imágenes <500KB
- [ ] Lazy loading implementado
- [ ] Formatos WebP cuando sea posible
- [ ] Responsive images (srcset)
- [ ] Loading states para imágenes

## 📋 Checklist de Implementación
- [ ] Instalar herramientas de optimización
- [ ] Comprimir imágenes existentes
- [ ] Configurar lazy loading en Astro
- [ ] Implementar responsive images
- [ ] Testing de performance con Lighthouse

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 4 horas

Milestone: Sitio Base Funcional
```

### Issue #5: SEO básico
```
Título: [FASE-2] Configurar SEO básico en todas las páginas

Labels: fase-2-sitio-base, frontend, priority-medium, easy

## 📋 Descripción
Implementar SEO básico para mejorar el ranking en buscadores.

## 🎯 Criterios de Aceptación
- [ ] Meta tags en todas las páginas
- [ ] Sitemap.xml generado automáticamente
- [ ] Robots.txt configurado
- [ ] Schema markup para música
- [ ] Open Graph tags para redes sociales

## 📋 Checklist de Implementación
- [ ] Agregar meta tags en Layout.astro
- [ ] Configurar generación de sitemap
- [ ] Crear robots.txt optimizado
- [ ] Implementar JSON-LD schema
- [ ] Testing con herramientas SEO

## 📊 Estimación
**Complejidad:** 🟢 Easy  
**Tiempo estimado:** 3 horas

Milestone: Sitio Base Funcional
```

---

## ⛓️ **FASE 3: BLOCKCHAIN (15 Issues clave)**

### Issue #6: Setup inicial blockchain
```
Título: [BLOCKCHAIN] Instalar y configurar dependencias blockchain

Labels: fase-3-blockchain, blockchain, priority-critical, easy

## 📋 Descripción
Instalar todas las dependencias necesarias para la integración blockchain.

## 🎯 Criterios de Aceptación
- [ ] ethers.js v6 instalado
- [ ] Web3Modal configurado
- [ ] Variables de entorno configuradas
- [ ] Conexión a Polygon RPC funcionando
- [ ] Estructura de archivos blockchain creada

## 📋 Checklist de Implementación
- [ ] npm install ethers@6.7.1 web3modal
- [ ] Crear archivo .env con variables
- [ ] Crear /src/lib/blockchain.js
- [ ] Crear /src/lib/abis/ directory
- [ ] Testing de conexión básica

## 📊 Estimación
**Complejidad:** 🟢 Easy  
**Tiempo estimado:** 2 horas

Milestone: Blockchain Integrado
```

### Issue #7: Componente WalletConnect
```
Título: [BLOCKCHAIN] Crear componente WalletConnect

Labels: fase-3-blockchain, blockchain, frontend, priority-critical, medium

## 📋 Descripción
Implementar componente para conectar y gestionar wallets de usuarios.

## 🎯 Criterios de Aceptación
- [ ] Botón "Conectar Wallet" funcional
- [ ] Detección automática de MetaMask
- [ ] Cambio automático a red Polygon
- [ ] Estado de conexión visible
- [ ] Manejo de errores de conexión

## 📋 Checklist de Implementación
- [ ] Crear WalletConnect.astro
- [ ] Implementar función connectWallet()
- [ ] Agregar manejo de eventos de wallet
- [ ] Styling responsive del componente
- [ ] Testing con diferentes wallets

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 6 horas

Milestone: Blockchain Integrado
```

### Issue #8: ABIs de contratos
```
Título: [BLOCKCHAIN] Integrar ABIs de smart contracts

Labels: fase-3-blockchain, blockchain, priority-critical, easy

## 📋 Descripción
Crear archivos con las ABIs de los contratos MusicCardNFT y Marketplace.

## 🎯 Criterios de Aceptación
- [ ] ABI de MusicCardNFT.sol agregado
- [ ] ABI de Marketplace.sol agregado  
- [ ] Funciones principales exportadas
- [ ] Eventos importantes incluidos
- [ ] Documentación de funciones

## 📋 Checklist de Implementación
- [ ] Crear /src/lib/abis/MusicCardNFT.js
- [ ] Crear /src/lib/abis/Marketplace.js
- [ ] Copiar ABIs desde el repo blockchain
- [ ] Verificar que las funciones coinciden
- [ ] Agregar comentarios explicativos

## 📊 Estimación
**Complejidad:** 🟢 Easy  
**Tiempo estimado:** 1 hora

Milestone: Blockchain Integrado
```

### Issue #9: Función getUserNFTs
```
Título: [BLOCKCHAIN] Implementar función getUserNFTs()

Labels: fase-3-blockchain, blockchain, priority-high, medium

## 📋 Descripción
Crear función para consultar los NFTs que posee un usuario específico.

## 🎯 Criterios de Aceptación
- [ ] Función getUserNFTs(address) implementada
- [ ] Consulta balance del usuario
- [ ] Obtiene metadatos de cada NFT
- [ ] Maneja errores de red
- [ ] Retorna array de objetos NFT

## 📋 Checklist de Implementación
- [ ] Implementar lógica de consulta
- [ ] Integrar con contrato MusicCardNFT
- [ ] Fetch de metadatos desde IPFS
- [ ] Error handling robusto
- [ ] Testing con diferentes addresses

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 5 horas

Milestone: Blockchain Integrado
```

### Issue #10: Componente NFTGrid
```
Título: [BLOCKCHAIN] Crear componente NFTGrid para mostrar NFTs

Labels: fase-3-blockchain, blockchain, frontend, priority-high, medium

## 📋 Descripción
Componente reutilizable para mostrar grids de NFTs tanto en marketplace como en colección personal.

## 🎯 Criterios de Aceptación
- [ ] Grid responsive de NFTs
- [ ] Soporte para diferentes tipos (owned/marketplace)
- [ ] Estados de carga y error
- [ ] Acciones por NFT (comprar/vender)
- [ ] Información completa de cada NFT

## 📋 Checklist de Implementación
- [ ] Crear NFTGrid.astro
- [ ] Implementar lógica de rendering
- [ ] Agregar estilos responsive
- [ ] Integrar con funciones blockchain
- [ ] Testing con datos reales

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 8 horas

Milestone: Blockchain Integrado
```

### Issue #11: Página Marketplace
```
Título: [BLOCKCHAIN] Crear página principal del marketplace (/marketplace)

Labels: fase-3-blockchain, blockchain, frontend, priority-high, hard

## 📋 Descripción
Implementar la página principal del marketplace donde los usuarios pueden ver y comprar NFTs.

## 🎯 Criterios de Aceptación
- [ ] Página /marketplace accesible
- [ ] Lista de NFTs en venta
- [ ] Integración con WalletConnect
- [ ] Funcionalidad de compra
- [ ] Filtros básicos (opcional)

## 📋 Checklist de Implementación
- [ ] Crear src/pages/marketplace.astro
- [ ] Integrar NFTGrid component
- [ ] Implementar getNFTsForSale()
- [ ] Agregar hero section atractivo
- [ ] Testing de flujo completo de compra

## 📊 Estimación
**Complejidad:** 🔴 Hard  
**Tiempo estimado:** 12 horas

Milestone: Blockchain Integrado
```

### Issue #12: Funcionalidad de compra
```
Título: [BLOCKCHAIN] Implementar función buyNFT()

Labels: fase-3-blockchain, blockchain, priority-critical, hard

## 📋 Descripción
Implementar la funcionalidad para que los usuarios puedan comprar NFTs del marketplace.

## 🎯 Criterios de Aceptación
- [ ] Función buyNFT(tokenId, price, signer) implementada
- [ ] Validación de fondos suficientes
- [ ] Manejo de transacciones pendientes
- [ ] Feedback al usuario durante compra
- [ ] Actualización de UI post-compra

## 📋 Checklist de Implementación
- [ ] Implementar lógica de compra
- [ ] Integrar con contrato Marketplace
- [ ] Agregar validaciones de seguridad
- [ ] Implementar estados de loading
- [ ] Testing con transacciones reales

## 📊 Estimación
**Complejidad:** 🔴 Hard  
**Tiempo estimado:** 10 horas

Milestone: Blockchain Integrado
```

### Issue #13: Página Mi Colección
```
Título: [BLOCKCHAIN] Crear página personal (/mi-coleccion)

Labels: fase-3-blockchain, blockchain, frontend, priority-medium, medium

## 📋 Descripción
Página donde los usuarios pueden ver y gestionar sus NFTs propios.

## 🎯 Criterios de Aceptación
- [ ] Página /mi-coleccion accesible
- [ ] Requiere wallet conectada
- [ ] Muestra NFTs del usuario
- [ ] Opciones para listar NFTs para venta
- [ ] Historial básico de transacciones

## 📋 Checklist de Implementación
- [ ] Crear src/pages/mi-coleccion.astro
- [ ] Implementar guards de wallet conectada
- [ ] Integrar con getUserNFTs()
- [ ] Agregar opciones de gestión
- [ ] Testing con diferentes usuarios

## 📊 Estimación
**Complejidad:** 🟡 Medium  
**Tiempo estimado:** 6 horas

Milestone: Blockchain Integrado
```

---

## 🚀 **ISSUES DE INICIO RÁPIDO (Quick Wins)**

### Issue #14: Footer del sitio
```
Título: [FASE-2] Crear footer responsive con enlaces importantes

Labels: fase-2-sitio-base, frontend, quick-win, easy

## 📋 Descripción
Crear footer consistente para todas las páginas con enlaces importantes.

## 🎯 Criterios de Aceptación
- [ ] Footer responsive
- [ ] Enlaces a páginas principales
- [ ] Información de copyright
- [ ] Links a redes sociales (placeholder)
- [ ] Consistente en todas las páginas

## 📊 Estimación
**Complejidad:** 🟢 Easy  
**Tiempo estimado:** 2 horas

Milestone: Sitio Base Funcional
```

### Issue #15: Variables de entorno template
```
Título: [BLOCKCHAIN] Crear archivo .env.example

Labels: fase-3-blockchain, docs, quick-win, easy

## 📋 Descripción
Crear template de variables de entorno para facilitar la configuración.

## 🎯 Criterios de Aceptación
- [ ] Archivo .env.example creado
- [ ] Todas las variables blockchain incluidas
- [ ] Comentarios explicativos
- [ ] Valores de ejemplo seguros
- [ ] Documentación en README

## 📊 Estimación
**Complejidad:** 🟢 Easy  
**Tiempo estimado:** 30 minutos

Milestone: Blockchain Integrado
```

---

## 📋 **ORDEN RECOMENDADO DE IMPLEMENTACIÓN**

### Sprint 1 (Días 1-4): Sitio Base
1. Issue #1: Estructura de páginas
2. Issue #3: Menú responsive  
3. Issue #14: Footer
4. Issue #2: Contenido álbumes
5. Issue #4: Optimización imágenes
6. Issue #5: SEO básico

### Sprint 2 (Días 5-12): Blockchain Core
1. Issue #6: Setup blockchain
2. Issue #15: Variables entorno
3. Issue #8: ABIs contratos
4. Issue #7: WalletConnect
5. Issue #9: getUserNFTs function

### Sprint 3 (Días 13-20): Marketplace
1. Issue #10: NFTGrid component
2. Issue #11: Página marketplace
3. Issue #12: Función buyNFT
4. Issue #13: Página mi-colección

---

**Copia estos issues directamente en GitHub y ¡empezamos!** 🚀

Cada issue tiene el formato exacto para GitHub Issues con toda la información necesaria.
