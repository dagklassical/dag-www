import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://dagklassical.github.io',
  base: '/dag-www',
  
  // Configuración de build simplificada
  build: {
    format: 'directory',
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  
  // Optimización básica para producción
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_assets/[name]-[hash][extname]',
          chunkFileNames: '_assets/js/[name]-[hash].js',
          entryFileNames: '_assets/js/[name]-[hash].js'
        }
      },
      minify: 'esbuild',
      cssCodeSplit: true,
      sourcemap: false,
      target: 'es2020',
      css: {
        minify: true
      }
    },
    server: {
      hmr: {
        overlay: false
      }
    }
  },
  
  // Configuración para Markdown
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  
  // Compresión
  compressHTML: true,
  
  // Prefetch optimization
  experimental: {
    prefetch: true
  }
});