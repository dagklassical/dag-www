# DAG Klassical - Sitio Web Oficial

🎵 Casa disquera venezolana pionera en música clásica y tecnología blockchain.

## 🚀 Despliegue en GitLab Pages

Este sitio está configurado para desplegarse automáticamente en GitLab Pages utilizando Astro.

### Archivos Clave Corregidos

- `.gitlab-ci.yml` - Pipeline de CI/CD corregido
- `astro.config.mjs` - Configuración optimizada para GitLab Pages
- `package.json` - Dependencias actualizadas

## 🛠️ Tecnologías

- **Framework**: Astro 4.0
- **CMS**: Decap CMS (NetlifyCMS)
- **Deployment**: GitLab Pages
- **Blockchain**: Algorand (para NFTs)

## 🏠 Estructura del Sitio

```ascii
src/
├── pages/
│   ├── index.astro           # Página principal
│   ├── discografia.astro     # Catálogo musical
│   ├── lanzamientos.astro    # Próximos lanzamientos
│   ├── tienda.astro          # Tienda NFT Algorand
│   ├── sobre-nosotros.astro  # Historia de la empresa
│   └── contactos.astro       # Información de contacto
└── public/
    └── admin/
        └── config.yml        # Configuración Decap CMS
```

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🔄 Proceso de Despliegue

1. **Push a la rama `main`** - El pipeline se ejecuta automáticamente
2. **Build de Astro** - Se genera el sitio en la carpeta `dist/`
3. **Copia a `public/`** - Los archivos se mueven para GitLab Pages
4. **Despliegue** - El sitio se publica en `https://aprado4.gitlab.io/dag-www`

## 🎵 Características del Sitio

### Música y Arte

- Catálogo de grabaciones clásicas venezuelas
- Perfiles de artistas y compositores
- Historia de la música clásica venezolana

### Tecnología Blockchain

- **NFTs en Algorand**: Venta de música como tokens no fungibles
- **Contratos Inteligentes**: Gestión automática de regalías
- **MusicCards**: Formato innovador de colección musical

### Funcionalidades

- Diseño responsive y moderno
- Optimizado para SEO
- Integración con CMS para gestión de contenido
- Preparado para integración con wallets de Algorand

## 🔧 Solución de Problemas

### Problema Original

El pipeline fallaba porque:

- Astro configurado para generar en `public/` pero el pipeline esperaba `dist/`
- Conflicto entre directorios de salida

### Solución Implementada

- Astro genera en `dist/` (por defecto)
- Pipeline copia de `dist/*` a `public/` para GitLab Pages
- Configuración de `base` correcta para subdominio

## 🌐 URLs del Sitio

- **Producción**: <https://dagclassical.gitlab.io/dag-www>
- **Desarrollo**: <http://localhost:4321>

## 📞 Contacto

Para consultas sobre el desarrollo del sitio o colaboraciones:

- Email: <adrian.prado@gmail.com>
- GitLab: <https://gitlab.com/dagklassical/dag-www>

---

**Autor**: Adrián Prado / MiniMax Agent
**Fecha**: Septiembre 2025
**Versión**: 1.0.0
