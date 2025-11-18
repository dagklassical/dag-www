// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tus configuraciones normales
  experimental: {
    // Asegúrate que App Router esté bien soportado
  },
  // Opcional: Si usas imágenes externas
  images: {
    domains: ['localhost', 'dag-www.vercel.app'], // Ajusta según necesites
  },
}

module.exports = nextConfig