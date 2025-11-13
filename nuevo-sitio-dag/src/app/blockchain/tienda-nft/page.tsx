import { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart, Filter, Search, Heart, ExternalLink, Zap, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tienda NFT - DAG Klassical',
  description: 'Marketplace exclusivo de NFTs musicales con obras coleccionables y contenido premium',
}

export default function TiendaNFTPage() {
  const featuredNFTs = [
    {
      id: 1,
      title: 'Mozart: Requiem - Edición Histórica',
      artist: 'Orquesta Sinfónica DAG',
      price: '1.25 ETH',
      currencyPrice: '$3,125',
      image: '/nft/mozart-requiem.jpg',
      collection: 'Grandes Sinfonías',
      rarity: 'Legendary',
      totalSupply: 1,
      available: false,
      soldOut: true,
      rating: 4.9,
      sales: 0,
      tags: ['Clásico', 'Único', 'Histórico']
    },
    {
      id: 2,
      title: 'Bach: Variaciones Goldberg',
      artist: 'Pianista Residente DAG',
      price: '0.45 ETH',
      currencyPrice: '$1,125',
      image: '/nft/bach-goldberg.jpg',
      collection: 'Obras Maestras',
      rarity: 'Epic',
      totalSupply: 100,
      available: true,
      soldOut: false,
      rating: 4.8,
      sales: 73,
      tags: ['Barroco', 'Piano', 'Premium']
    },
    {
      id: 3,
      title: 'Beethoven: Novena Sinfonía',
      artist: 'Coro Sinfónico DAG',
      price: '0.85 ETH',
      currencyPrice: '$2,125',
      image: '/nft/beethoven-novena.jpg',
      collection: 'Sinfonías Completas',
      rarity: 'Epic',
      totalSupply: 500,
      available: true,
      soldOut: false,
      rating: 4.7,
      sales: 234,
      tags: ['Romanticismo', 'Coro', 'Épica']
    },
    {
      id: 4,
      title: 'Vivaldi: Cuatro Estaciones NFT',
      artist: 'Orquesta de Cámara DAG',
      price: '0.25 ETH',
      currencyPrice: '$625',
      image: '/nft/vivaldi-estaciones.jpg',
      collection: 'Barroco Clásico',
      rarity: 'Rare',
      totalSupply: 1000,
      available: true,
      soldOut: false,
      rating: 4.6,
      sales: 567,
      tags: ['Barroco', 'Instrumental', 'Popular']
    }
  ]

  const collections = [
    { name: 'Todas', count: 1245, active: true },
    { name: 'Grandes Sinfonías', count: 156, active: false },
    { name: 'Obras Maestras', count: 234, active: false },
    { name: 'Sinfonías Completas', count: 89, active: false },
    { name: 'Barroco Clásico', count: 445, active: false },
    { name: 'Romanticismo', count: 321, active: false }
  ]

  const filters = [
    { name: 'Disponibles', count: 876 },
    { name: 'Vendidos', count: 369 },
    { name: 'Precio: Alto a Bajo', count: 0 },
    { name: 'Precio: Bajo a Alto', count: 0 },
    { name: 'Más Populares', count: 0 },
    { name: 'Mejor Calificados', count: 0 }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'text-amber-600 bg-amber-100'
      case 'Epic': return 'text-purple-600 bg-purple-100'
      case 'Rare': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-white">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Marketplace NFT
            </div>
            <h1 className="text-4xl lg:text-5xl font-light mb-4">
              Tienda NFT DAG
            </h1>
            <p className="text-xl text-dag-ivory/90 max-w-3xl mx-auto">
              Descubre y colecciona NFTs únicos de música clásica con contenido exclusivo y beneficios únicos
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-b border-dag-ivory bg-dag-white">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-dag-burgundy mb-1">1,245</div>
              <div className="text-sm text-dag-caramel">NFTs Disponibles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-dag-burgundy mb-1">874</div>
              <div className="text-sm text-dag-caramel">NFTs Vendidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-dag-burgundy mb-1">3,450</div>
              <div className="text-sm text-dag-caramel">Coleccionistas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-dag-burgundy mb-1">125.6 ETH</div>
              <div className="text-sm text-dag-caramel">Volumen Total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Collections Sidebar */}
            <div className="lg:w-64">
              <h3 className="font-semibold text-dag-burgundy mb-4">Colecciones</h3>
              <div className="space-y-2">
                {collections.map((collection) => (
                  <button
                    key={collection.name}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      collection.active
                        ? 'bg-dag-burgundy text-dag-white'
                        : 'text-dag-caramel hover:bg-dag-ivory'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{collection.name}</span>
                      <span className="text-sm opacity-70">{collection.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              <h3 className="font-semibold text-dag-burgundy mb-4 mt-8">Filtros</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.name}
                    className="w-full text-left px-4 py-2 text-dag-caramel hover:bg-dag-ivory rounded-lg transition-all duration-300"
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dag-caramel w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar NFTs por título, artista o colección..."
                    className="w-full pl-10 pr-4 py-3 bg-dag-white border border-dag-ivory rounded-lg focus:outline-none focus:ring-2 focus:ring-dag-golden text-dag-burgundy"
                  />
                </div>
                <button className="flex items-center px-6 py-3 bg-dag-golden text-dag-burgundy rounded-lg font-medium hover:bg-dag-ivory transition-colors duration-300">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros Avanzados
                </button>
              </div>

              {/* NFTs Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredNFTs.map((nft) => (
                  <div
                    key={nft.id}
                    className={`group bg-dag-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                      nft.soldOut ? 'opacity-75' : ''
                    }`}
                  >
                    {/* NFT Image */}
                    <div className="relative aspect-square bg-gradient-to-br from-dag-ivory to-dag-buttermilk flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-dag-caramel rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <Zap className="w-10 h-10 text-dag-white" />
                        </div>
                        <div className="text-dag-caramel text-sm">NFT Preview</div>
                      </div>
                      
                      {nft.soldOut && (
                        <div className="absolute inset-0 bg-dag-burgundy/80 flex items-center justify-center">
                          <span className="text-dag-white font-bold text-lg">VENDIDO</span>
                        </div>
                      )}
                      
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(nft.rarity)}`}>
                          {nft.rarity}
                        </span>
                        <button className="p-2 bg-dag-white/90 rounded-full hover:bg-dag-golden hover:text-dag-white transition-colors duration-300">
                          <Heart className="w-4 h-4 text-dag-caramel" />
                        </button>
                      </div>
                    </div>

                    {/* NFT Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-dag-burgundy group-hover:text-dag-caramel transition-colors duration-300">
                            {nft.title}
                          </h3>
                          <p className="text-dag-caramel text-sm">{nft.artist}</p>
                        </div>
                        <div className="flex items-center bg-dag-golden/20 text-dag-burgundy px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          {nft.rating}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {nft.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-dag-ivory text-dag-caramel rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-dag-burgundy">{nft.price}</div>
                          <div className="text-sm text-dag-caramel">≈ {nft.currencyPrice}</div>
                        </div>
                        <div className="text-right text-sm text-dag-caramel">
                          <div>Vendidos: {nft.sales}/{nft.totalSupply}</div>
                          <div>Colección: {nft.collection}</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button 
                          className={`flex-1 py-3 rounded-lg font-medium transition-colors duration-300 ${
                            nft.soldOut
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : 'bg-dag-burgundy text-dag-white hover:bg-dag-burgundy/90'
                          }`}
                          disabled={nft.soldOut}
                        >
                          {nft.soldOut ? 'Agotado' : 'Comprar'}
                        </button>
                        <button className="px-4 py-3 border border-dag-golden text-dag-burgundy rounded-lg font-medium hover:bg-dag-golden hover:text-dag-white transition-all duration-300">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-ivory transition-colors duration-300">
                  Cargar Más NFTs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Info */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-6">
              Respaldado por Polygon
            </h2>
            <p className="text-xl text-dag-caramel mb-8">
              Todos nuestros NFTs están mintados en la red Polygon, garantizando transacciones seguras y rápidas
            </p>
            <Link
              href="/blockchain/polygon-networks"
              className="inline-flex items-center px-8 py-4 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300"
            >
              Conocer Polygon
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}