import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  base: '/dag-www', // GITHUB PAGES - Base path correcto
  integrations: [
    pagefind({
      // Configuración optimizada para GitHub Pages
      bundleStyles: false, // No incluir estilos automáticos
      bundleScripts: false, // No incluir scripts automáticos  
    })
  ],
  // Configuración adicional para GitHub Pages
  server: {
    host: true,
    port: 4321
  },
  // Optimizaciones para producción
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
