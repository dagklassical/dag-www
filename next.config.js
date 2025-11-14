// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/dag-www' : '',
}

module.exports = nextConfig