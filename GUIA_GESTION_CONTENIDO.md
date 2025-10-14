# Guía de Gestión de Contenido - DAG Klassical

**Fecha de creación:** 14 de octubre, 2025  
**Versión:** 1.0  
**Estado:** Activo

## Descripción General

Esta guía documenta el flujo de trabajo oficial para la gestión de contenido del sitio web DAG Klassical utilizando **edición directa en GitHub**. Esta metodología garantiza simplicidad, confiabilidad y control total sobre el contenido.

## ¿Por qué edición directa en GitHub?

### ✅ Ventajas

- **Cero dependencias externas** - No requiere servicios de terceros
- **Completamente gratuito** - Sin límites ni suscripciones
- **Interfaz confiable** - GitHub UI es estable y familiar
- **Control total** - Acceso completo al historial de cambios
- **Seguridad** - Autenticación robusta de GitHub
- **Colaborativo** - Sistema nativo de permisos y revisión

### ❌ Problemas evitados

- Dependencias de servicios externos (Netlify, TinaCloud)
- Configuraciones complejas de autenticación
- Bugs en bibliotecas de terceros
- Costos ocultos o limitaciones de uso
- Puntos únicos de falla en servicios externos

## Estructura del Contenido

```ascii
src/content/
├── albums/          # Discografía - álbumes y EP
│   └── *.md
├── artists/         # Perfiles de artistas
│   └── *.md  
├── news/           # Noticias y novedades
│   └── *.md
└── pages/          # Páginas estáticas
    ├── about.md    # Acerca de
    ├── contact.md  # Contacto
    └── home.md     # Página principal
```

## 🎵 Gestión de Álbumes

### Crear un nuevo álbum

1. **Acceder a la carpeta de álbumes:**
   - Ir a: `https://github.com/dagklassical/dag-www/tree/main/src/content/albums`

2. **Crear nuevo archivo:**
   - Clic en "Add file" → "Create new file"
   - Nombre: `YYYY-MM-DD-nombre-del-album.md`
   - Ejemplo: `2025-10-15-nueva-sinfonia-clasica.md`

3. **Estructura del archivo:**

```yaml
---
title: "Nueva Sinfonía Clásica"
description: "Descripción del álbum"
releaseDate: "2025-10-15"
artist: "Artista Principal"
genre: ["Clásica", "Sinfónica"]
duration: "45:30"
tracks: 12
coverImage: "/images/albums/nueva-sinfonia-clasica-cover.jpg"
spotifyUrl: "https://open.spotify.com/album/..."
appleUrl: "https://music.apple.com/album/..."
youtubeUrl: "https://youtube.com/playlist?list=..."
price: "$12.99"
featured: false
---

## Descripción

Descripción detallada del álbum, historia de la creación, colaboradores, etc.

## Lista de Pistas

1. **Obertura** - 3:45
2. **Movimiento I: Allegro** - 8:20
3. **Movimiento II: Andante** - 6:15
...

## Créditos

- **Compositor:** Nombre del compositor
- **Director:** Nombre del director
- **Orquesta:** Nombre de la orquesta
- **Grabado en:** Estudio/Lugar
- **Fecha de grabación:** YYYY-MM-DD
```

### Editar álbum existente

1. Navegar al archivo en GitHub
2. Clic en el ícono de lápiz (✏️) "Edit this file"
3. Realizar cambios
4. Scroll hacia abajo → "Commit changes"
5. Añadir mensaje descriptivo del cambio
6. Clic en "Commit changes"

## 📰 Gestión de Noticias

### Crear nueva noticia

1. **Acceder a noticias:**
   - Ir a: `https://github.com/dagklassical/dag-www/tree/main/src/content/news`

2. **Crear archivo:**
   - Nombre: `YYYY-MM-DD-titulo-de-la-noticia.md`

3. **Estructura del archivo:**

```yaml
---
title: "Título de la Noticia"
description: "Breve descripción para SEO"
pubDate: "2025-10-15"
author: "DAG Klassical"
category: "Lanzamientos" # Lanzamientos, Eventos, Colaboraciones, General
featured: true
image: "/images/news/imagen-destacada.jpg"
tags: ["etiqueta1", "etiqueta2"]
---

## Contenido principal

Contenido de la noticia en Markdown.

### Subtítulos según sea necesario

Más contenido...

## Enlaces relacionados

- [Enlace 1](#)
- [Enlace 2](#)
```

## 👨‍🎤 Gestión de Artistas

### Agregar nuevo artista

1. **Acceder a artistas:**
   - Ir a: `https://github.com/dagklassical/dag-www/tree/main/src/content/artists`

2. **Crear archivo:**
   - Nombre: `nombre-del-artista.md`

3. **Estructura:**

```yaml
---
name: "Nombre del Artista"
bio: "Biografía breve"
image: "/images/artists/nombre-artista.jpg"
website: "https://sitio-web-artista.com"
social:
  spotify: "https://open.spotify.com/artist/..."
  youtube: "https://youtube.com/@artista"
  instagram: "@artista"
  facebook: "https://facebook.com/artista"
genres: ["Clásica", "Jazz"]
active: true
featured: false
---

## Biografía completa

Historia detallada del artista...

## Discografía destacada

- Álbum 1 (2024)
- Álbum 2 (2023)

## Colaboraciones

Lista de colaboraciones importantes...
```

## 📄 Gestión de Páginas Estáticas

### Editar páginas principales

Las páginas están en: `https://github.com/dagklassical/dag-www/tree/main/src/content/pages`

- **home.md** - Contenido de la página principal
- **about.md** - Página "Acerca de"  
- **contact.md** - Información de contacto

Editar directamente haciendo clic en el archivo → ✏️ Edit

## 🖼️ Gestión de Imágenes

### Subir nuevas imágenes

1. **Acceder a la carpeta de imágenes:**
   - Ir a: `https://github.com/dagklassical/dag-www/tree/main/public/images`

2. **Crear subcarpetas según tipo:**

   ```ascii
   public/images/
   ├── albums/     # Portadas de álbumes
   ├── artists/    # Fotos de artistas  
   ├── news/       # Imágenes de noticias
   └── general/    # Imágenes generales
   ```

3. **Subir archivos:**
   - Clic en "Add file" → "Upload files"
   - Arrastrar imágenes o usar "choose your files"
   - Commit con mensaje descriptivo

### Optimización de imágenes

**Especificaciones recomendadas:**

- **Álbumes:** 800x800px, JPG, <200KB
- **Artistas:** 400x400px, JPG, <150KB  
- **Noticias:** 1200x630px, JPG, <300KB
- **General:** Según necesidad, <500KB

## 🔄 Flujo de Trabajo de Publicación

### Proceso estándar

1. **Crear/editar contenido** en GitHub
2. **Review** - Verificar formato y contenido
3. **Commit** con mensaje descriptivo
4. **Deploy automático** - GitHub Actions despliega automáticamente
5. **Verificar** - Revisar cambios en <https://dagklassical.github.io/dag-www>

### Mensajes de commit

Usar formato conventional commits:

```bash
feat(albums): agregar nuevo álbum "Sinfonía Clásica"
fix(news): corregir fecha en noticia del concierto  
docs(artists): actualizar biografía de artista
content(pages): actualizar información de contacto
```

## 🚀 Deploy y Publicación

### Deploy automático

- **Trigger:** Push a la rama `main`
- **Tiempo:** ~2-3 minutos
- **URL de producción:** <https://dagklassical.github.io/dag-www>

### Verificación post-deploy

1. Verificar que los cambios aparezcan en el sitio
2. Comprobar enlaces y imágenes
3. Verificar responsividad en móvil

## 👥 Gestión de Permisos

### Roles recomendados

- **Admin:** Acceso completo al repositorio
- **Content Editor:** Permisos para crear/editar archivos de contenido
- **Reviewer:** Permisos para revisar pull requests

### Colaboradores externos

Para colaboradores sin permisos directos:

1. **Fork** del repositorio
2. **Crear rama** para cambios
3. **Pull Request** para revisión
4. **Merge** tras aprobación

## 📋 Checklist de Contenido

### Antes de publicar un álbum

- [ ] Archivo con nomenclatura correcta (`YYYY-MM-DD-nombre.md`)
- [ ] Metadatos completos (título, descripción, fecha, etc.)
- [ ] Imagen de portada subida y optimizada
- [ ] Enlaces a plataformas de streaming
- [ ] Lista de pistas completa
- [ ] Créditos detallados

### Antes de publicar una noticia

- [ ] Título atractivo y descriptivo
- [ ] Fecha correcta
- [ ] Categoría apropiada
- [ ] Imagen destacada optimizada
- [ ] Contenido sin errores ortográficos
- [ ] Enlaces externos verificados

## 🛠️ Solución de Problemas

### Error: "No se ven los cambios en el sitio"

1. Verificar que el commit se hizo a la rama `main`
2. Comprobar el estado de GitHub Actions en la pestaña "Actions"
3. Esperar 2-3 minutos para el deploy completo
4. Refrescar el navegador (Ctrl+F5)

### Error: "Imagen no se muestra"

1. Verificar que la imagen esté en `public/images/`
2. Comprobar que la ruta en el archivo sea correcta
3. Verificar que el nombre del archivo no tenga espacios o caracteres especiales

### Error: "Formato de fecha incorrecto"

- Usar formato ISO: `YYYY-MM-DD`
- Ejemplo correcto: `2025-10-15`
- Ejemplo incorrecto: `15/10/2025`

## 📚 Recursos Adicionales

### Markdown

- [Guía de Markdown](https://www.markdownguide.org/basic-syntax/)
- [Editor online](https://dillinger.io/)

### Para optimización de imágenes

- [TinyPNG](https://tinypng.com/) - Compresión de imágenes
- [Squoosh](https://squoosh.app/) - Editor de imágenes web

### Git y GitHub

- [GitHub Docs](https://docs.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## Historial de Cambios

**v1.0** (2025-10-14)

- Creación de la guía inicial
- Documentación del flujo de trabajo con GitHub
- Especificaciones de estructura de contenido
- Guías de optimización de imágenes

---

**Mantenido por:** DAG Klassical  
**Última actualización:** 14 de octubre, 2025
