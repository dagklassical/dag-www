import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dagklassical.github.io',
  base: '/dag-www',
  
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  }
});