import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dagklassical.gitlab.io',
  base: '/dag-www',
  outDir: 'public'  // ← FORZAR que genere en public/
});