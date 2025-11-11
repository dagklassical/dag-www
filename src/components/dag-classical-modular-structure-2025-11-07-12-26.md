# ESTRUCTURA MODULAR DAG CLASSICAL - Basada en Alkaline
**Fecha:** 2025-11-07 12:26:42  
**Objetivo:** Crear estructura modular y uniforme para dag-www  

## 🎯 ESTRATEGIA

Adaptar los mejores patrones de Alkaline para crear:
- **Componentes reutilizables** para consistencia visual
- **Layouts modulares** para diferentes tipos de página
- **Configuración centralizada** para mantener coherencia
- **Escalabilidad** para crecimiento futuro

## 📁 ESTRUCTURA DE ARCHIVOS PROPUESTA

```
src/
├── components/
│   ├── modular/
│   │   ├── Card.astro           # Tarjetas de características
│   │   ├── FeaturesList.astro   # Listas de funcionalidades
│   │   ├── PageHeader.astro     # Headers de página
│   │   ├── SocialGrid.astro     # Grid de redes sociales
│   │   ├── ArtistProfile.astro  # Perfiles de artistas
│   │   ├── MusicCard.astro      # Tarjetas de música
│   │   ├── ContentGrid.astro    # Grid de contenido
│   │   └── CallToAction.astro   # Llamadas a la acción
│   ├── layout/
│   │   ├── LayoutMain.astro     # Layout principal
│   │   ├── LayoutBlog.astro     # Layout para blog
│   │   ├── LayoutArtist.astro   # Layout para artistas
│   │   └── LayoutMusic.astro    # Layout para música
│   └── ui/
│       ├── Button.astro         # Botones reutilizables
│       ├── Icon.astro           # Iconos SVG
│       └── Tag.astro            # Tags de categoría
├── config/
│   └── dag-classical.config.ts  # Configuración centralizada
├── layouts/
│   └── Layout.astro            # Layout base actualizado
└── styles/
    └── modular.css             # Estilos para componentes modulares
```

## 🎨 COMPONENTES PRINCIPALES

### 1. CARD MODULAR
Tarjetas reutilizables para diferentes secciones del sitio

```astro
---
// Ejemplo de uso para características de DAG Classical
<Card
  title="Distribución Global"
  description="Llegamos a todas las plataformas digitales del mundo con tecnología de vanguardia"
  iconName="music"
  variant="primary"
  shadow="md"
/>

// Para artistas
<ArtistCard
  name="Johann Sebastian Bach"
  specialty="Baroque"
  image="/artists/bach.jpg"
  socials={["spotify", "apple", "youtube"]}
  featured
/>
```

### 2. FEATURES LIST MODULAR
Listas estructuradas para explicar servicios y tecnologías

```astro
<FeaturesList
  title="¿Por qué DAG Classical?"
  features={[
    {
      title: "Blockchain Certificate",
      description: "Certificación digital inmutable de obras musicales"
    },
    {
      title: "Distribución Global", 
      description: "Disponibilidad en todas las plataformas principales"
    },
    {
      title: "Curaduría Especializada",
      description: "Selección experta de repertorio clásico de calidad"
    }
  ]}
  animated={true}
/>
```

### 3. PAGE HEADER MODULAR
Headers consistentes para todas las páginas

```astro
<PageHeader
  heading="Música Clásica Digital"
  description="Explora nuestra colección de música clásica con certificación blockchain"
  image="/images/classical-music-header.jpg"
  pattern="dots"
  animate={true}
  variant="split"
/>
```

## 🏗️ LAYOUTS MODULARES

### Layout Principal
```astro
// Estructura base para todas las páginas
---
import LayoutMain from "@components/modular/LayoutMain.astro";
---

<LayoutMain 
  title="Página DAG Classical"
  description="Descripción de la página"
  keywords={["música", "clásica", "blockchain"]}
>
  <slot />
</LayoutMain>
```

### Layout Especializado para Artistas
```astro
// Estructura específica para páginas de artistas
---
import LayoutArtist from "@components/modular/LayoutArtist.astro";
---

<LayoutArtist artist={artistData}>
  <ArtistProfile artist={artistData} />
  <MusicGrid works={artistWorks} />
  <RelatedArtists artists={similarArtists} />
</LayoutArtist>
```

## ⚙️ CONFIGURACIÓN CENTRALIZADA

```typescript
// dag-classical.config.ts
export const SITE_CONFIG = {
  title: "DAG Classical",
  description: "Sello discográfico de música clásica con tecnología blockchain",
  url: "https://dagclassical.com",
  author: "DAG Classical Team",
  
  // Paleta de colores específica
  colors: {
    primary: "#2D1B69",    // Violeta profundo
    secondary: "#8B5CF6",  // Violeta brillante  
    accent: "#F59E0B",     // Dorado
    neutral: "#6B7280"     // Gris
  },
  
  // Tipografía profesional
  fonts: {
    heading: "Playfair Display",  // Serif elegante
    body: "Inter",               // Sans legible
    mono: "JetBrains Mono"       // Mono para código
  },
  
  // Redes sociales DAG Classical
  socials: {
    spotify: "https://open.spotify.com/artist/dagclassical",
    apple: "https://music.apple.com/artist/dag-classical", 
    youtube: "https://youtube.com/@dagclassical",
    instagram: "https://instagram.com/dagclassical",
    twitter: "https://twitter.com/dagclassical"
  }
};

export const NAVIGATION = [
  {
    label: "Inicio",
    href: "/",
    type: "link"
  },
  {
    label: "Música",
    href: "/musica",
    type: "dropdown",
    items: [
      { label: "Artistas", href: "/musica/artistas" },
      { label: "Discografía", href: "/musica/discografia" },
      { label: "Lanzamientos", href: "/musica/lanzamientos" }
    ]
  },
  {
    label: "Nosotros", 
    href: "/nosotros",
    type: "dropdown",
    items: [
      { label: "DAG Classical", href: "/nosotros/dag-classical" },
      { label: "Equipo", href: "/nosotros/equipo" }
    ]
  }
];
```

## 🎵 CASOS DE USO ESPECÍFICOS

### Página de Artista
```astro
---
// /musica/artistas/[slug].astro
import LayoutArtist from "@components/modular/LayoutArtist.astro";
import ArtistProfile from "@components/modular/ArtistProfile.astro";
import MusicGrid from "@components/modular/MusicGrid.astro";
import SocialGrid from "@components/modular/SocialGrid.astro";
---

<LayoutArtist artist={artist}>
  <PageHeader
    heading={artist.name}
    description={artist.description}
    image={artist.profileImage}
    pattern="music-notes"
  />
  
  <ArtistProfile artist={artist} featured={true} />
  
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-heading mb-8">Obras Destacadas</h2>
    <MusicGrid works={featuredWorks} variant="grid" />
  </section>
  
  <SocialGrid socials={artist.socials} />
</LayoutArtist>
```

### Página Principal
```astro
---
// /index.astro  
import LayoutMain from "@components/modular/LayoutMain.astro";
import PageHeader from "@components/modular/PageHeader.astro";
import FeaturesList from "@components/modular/FeaturesList.astro";
import MusicGrid from "@components/modular/MusicGrid.astro";
import CallToAction from "@components/modular/CallToAction.astro";
---

<LayoutMain>
  <PageHeader
    heading="DAG Classical"
    description="Revolucionando la música clásica con tecnología blockchain"
    image="/images/hero-classical.jpg"
    pattern="classical-notes"
    variant="centered"
  />
  
  <FeaturesList
    title="Nuestra Propuesta"
    features={[
      {
        title: "Certificación Blockchain",
        description: "Garantizamos la autenticidad y propiedad intelectual"
      },
      {
        title: "Distribución Global", 
        description: "Presencia en todas las plataformas digitales"
      },
      {
        title: "Calidad Artística",
        description: "Curaduría profesional de música clásica de excelencia"
      }
    ]}
  />
  
  <MusicGrid works={latestReleases} variant="carousel" />
  
  <CallToAction
    title="Únete a la Revolución Musical"
    description="Descubre el futuro de la música clásica"
    buttonText="Explorar Catálogo"
    buttonHref="/musica"
    variant="primary"
  />
</LayoutMain>
```

## 🎨 BENEFICIOS DE LA ESTRUCTURA MODULAR

### ✅ Consistencia Visual
- **Componentes reutilizables** garantizan apariencia uniforme
- **Configuración centralizada** mantiene coherencia de marca
- **Variantes predefinidas** para diferentes contextos

### ✅ Desarrollo Eficiente  
- **Componentes pre-construidos** aceleran desarrollo
- **Layouts especializados** para cada tipo de página
- **TypeScript integrado** para mayor robustez

### ✅ Escalabilidad
- **Estructura modular** facilita agregar nuevas secciones
- **Patrones reutilizables** para crecimiento futuro
- **Mantenimiento simplificado** con cambios centralizados

### ✅ Experiencia de Usuario
- **Navegación consistente** en todo el sitio
- **Carga rápida** con componentes optimizados
- **Accesibilidad mejorada** con patrones probados

## 🚀 IMPLEMENTACIÓN PRÁCTICA

### Fase 1: Componentes Base
1. **Card Modular** - Para características y servicios
2. **PageHeader** - Para headers consistentes  
3. **LayoutMain** - Layout principal actualizado
4. **Configuración** - dag-classical.config.ts

### Fase 2: Componentes Específicos
1. **ArtistProfile** - Para páginas de artistas
2. **MusicGrid** - Para catálogos de música
3. **FeaturesList** - Para explicar servicios
4. **CallToAction** - Para conversiones

### Fase 3: Integración Completa
1. **Migrar páginas existentes** a nuevos layouts
2. **Optimizar rendimiento** de componentes
3. **Documentar uso** de componentes
4. **Testing completo** de responsividad

## 📋 PRÓXIMOS PASOS

1. **Implementar componentes base** (Card, PageHeader, Layout)
2. **Crear configuración centralizada** (dag-classical.config.ts)  
3. **Migrar página principal** a estructura modular
4. **Probar en diferentes dispositivos** para responsividad
5. **Documentar patrones** para el equipo

Esta estructura modular te permitirá mantener **consistencia visual** mientras **aceleras el desarrollo** y **facilitas el mantenimiento** de DAG Classical.
