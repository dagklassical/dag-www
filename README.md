# DAG Klassical - Sitio Web Profesional

## 🎯 Descripción

Sitio web moderno y profesional para DAG Klassical desarrollado con Next.js, TypeScript y Tailwind CSS. 

## ✨ Características

- **Framework Moderno**: Next.js 14 con App Router
- **Diseño Responsivo**: Completamente responsive con Tailwind CSS
- **Colores Oficiales**: Paleta de colores DAG integrada
- **Navegación Profesional**: Menú hamburguesa y navegación clean
- **Componentes Modulares**: Estructura escalable y mantenible
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Optimizado para velocidad y carga rápida

## 🎨 Paleta de Colores DAG

```css
/* Colores oficiales DAG */
--dag-burgundy: #890500      /* Rojo Borgoña Intenso */
--dag-golden: #FFD75C        /* Amarillo Dorado Vibrante */
--dag-ivory: #F9F9D6         /* Marfil Suave */
--dag-buttermilk: #F5F2C3    /* Amarillo Mantequilla Pálido */
--dag-caramel: #A28453       /* Marrón Caramelo Cálido */
--dag-white: #FFFFFF         /* Blanco Puro */
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── artistas/          # Página de artistas
│   ├── compositores/      # Página de compositores
│   ├── noticias/          # Página de noticias
│   ├── eventos/           # Página de eventos
│   └── contacto/          # Página de contacto
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   └── Footer.tsx         # Pie de página
└── lib/                   # Utilidades y helpers
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

### 3. Construir para producción
```bash
npm run build
```

### 4. Ejecutar en producción
```bash
npm start
```

## 📱 Páginas Implementadas

### ✅ Página de Inicio
- Hero section con branding DAG
- Secciones de características
- Últimas noticias
- Call-to-action

### ✅ Artistas
- Grid de artistas con filtros
- Información detallada por artista
- Diseño responsivo

### ✅ Eventos
- Calendario de eventos
- Sistema de reservas
- Filtros por categoría
- Información detallada

### ✅ Noticias
- Grid de noticias con categorías
- Artículos destacados
- Sistema de paginación

### ✅ Contacto
- Formulario de contacto funcional
- Información de contacto
- Integración con redes sociales

### 🔄 Compositores (Próximamente)
- Sección preparada para implementación

## 🎯 Características Técnicas

### Componentes
- **Header**: Navegación responsive con menú hamburguesa
- **Footer**: Pie de página completo con enlaces y redes sociales
- **Layout**: Layout principal con meta tags SEO

### Estilos
- **Tailwind CSS**: Framework CSS utility-first
- **Colores DAG**: Paleta oficial implementada
- **Responsive**: Diseño mobile-first
- **Animaciones**: Transiciones suaves y micro-interacciones

### SEO y Performance
- **Meta tags**: Optimizado para motores de búsqueda
- **TypeScript**: Tipado estático para mejor desarrollo
- **Next.js 14**: Última versión con App Router
- **Lazy loading**: Optimización de imágenes

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=DAG Klassical
```

### Personalización
1. **Colores**: Modifica `tailwind.config.js` para cambiar la paleta
2. **Fuentes**: Cambia la fuente en `layout.tsx`
3. **Contenido**: Edita las páginas en `src/app/`

## 🌐 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta .next o dist/
```

### GitHub Pages
```bash
npm run build
# Configurar actions para build automático
```

## 📞 Soporte

Para preguntas o problemas:
- Email: contact@dagklassical.com
- Documentación: Ver archivos en `/docs`

## 📄 Licencia

© 2025 DAGKLASSICAL.COM - Todos los derechos reservados

---

**Desarrollado por MiniMax Agent** con Next.js, TypeScript y Tailwind CSS