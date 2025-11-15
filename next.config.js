// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  },
  // BasePath y assetPrefix eliminados para servir desde la raíz
}
module.exports = nextConfig
