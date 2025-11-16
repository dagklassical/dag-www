// next.config.js - Versión sin basePath para GitHub Pages
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  },
  // basePath removido para evitar problemas con rutas CSS
  // assetPrefix removido para evitar problemas con rutas CSS
}
module.exports = nextConfig
