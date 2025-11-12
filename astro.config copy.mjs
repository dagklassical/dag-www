import { defineConfig } from 'astro/config';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: isDev ? 'http://localhost:4321' : 'https://dagklassical.github.io',
  base: isDev ? '/' : '/dag-www',
  
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  }
});