import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aprado4.gitlab.io',
  base: '/dag-www',
  outDir: 'public',  // ← GENERA directamente en public
  build: {
    format: 'directory'
  }
});