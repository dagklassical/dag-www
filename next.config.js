// next.config.js - Configuración correcta para GitHub Pages
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: { 
    unoptimized: true 
  },
  // Configurar basePath para que coincida con GitHub Pages
  basePath: '/dag-www',
  assetPrefix: '/dag-www',
}

module.exports = nextConfig
