# DAG Klassical - Documentación

Bienvenido a la documentación del proyecto **DAG Klassical**, la primera disquera en Latinoamérica con plataforma Blockchain.

## 📁 Estructura de Documentación

Esta carpeta contiene toda la documentación técnica y guías para el desarrollo del proyecto:

### 🔧 Guías de Configuración
- **[GUIA_BLOCKCHAIN_SETUP.md](./GUIA_BLOCKCHAIN_SETUP.md)** - Configuración completa del entorno blockchain (Polygon)
- **[GUIA_GESTION_CONTENIDO.md](./GUIA_GESTION_CONTENIDO.md)** - Gestión de contenido con Decap CMS
- **[SETUP_GITHUB_PROJECTS.md](./SETUP_GITHUB_PROJECTS.md)** - Configuración de GitHub Projects para gestión

### 📋 Ejemplos y Plantillas
- **[PRIMEROS_ISSUES_EJEMPLO.md](./PRIMEROS_ISSUES_EJEMPLO.md)** - Plantillas para issues iniciales del proyecto

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- Git
- npm o yarn

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/dagklassical/dag-www.git
cd dag-www

# Cambiar a la rama de desarrollo
git checkout feature/astro-basic-structure

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo (http://localhost:4321/dag-www)
npm run build        # Compilar para producción
npm run preview      # Previsualizar build de producción
npm run astro        # Comandos de Astro CLI
```

## 🏗️ Arquitectura del Proyecto

### Frontend (este repositorio)
- **Framework**: Astro 4.x
- **Deployment**: GitHub Pages
- **Base URL**: `/dag-www/` (para GitHub Pages)

### Repositories Relacionados
- **[dag-klassical-blockchain](https://github.com/dagklassical/dag-klassical-blockchain)** - Smart contracts y nodo Polygon
- **[dag-klassical-api](https://github.com/dagklassical/dag-klassical-api)** - Backend API y servicios

## 📝 Contribuir

1. **Fork** del repositorio
2. Crear **branch** desde `develop`: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. **Push** al branch: `git push origin feature/nueva-funcionalidad`
5. Crear **Pull Request** hacia `develop`

### Convenciones de Commits
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de errores
- `docs:` - Documentación
- `style:` - Cambios de formato/estilo
- `refactor:` - Refactorización de código
- `test:` - Agregar/modificar tests

## 🌐 Links Útiles

- **Sitio Web**: https://dagklassical.github.io/dag-www/
- **Organización GitHub**: https://github.com/dagklassical
- **Polygon Network**: Red blockchain utilizada para NFTs y contratos

## 📞 Soporte

Para dudas o problemas, crear un **issue** en este repositorio o contactar al equipo de desarrollo.

---

**DAG Klassical** - Revolucionando la música con blockchain 🎵⛓️