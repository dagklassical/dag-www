import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitLab Pages
  site: 'https://aprado4.gitlab.io',
  base: '/dag-www',
  
  // Configuración de build
  build: {
    format: 'directory',
    assets: '_assets'
  },
  
  // Optimización para producción
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_assets/[name].[hash][extname]',
          chunkFileNames: '_assets/[name].[hash].js',
          entryFileNames: '_assets/[name].[hash].js'
        }
      }
    }
  },
  
  // Configuración para el sitio de música
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  }
});
