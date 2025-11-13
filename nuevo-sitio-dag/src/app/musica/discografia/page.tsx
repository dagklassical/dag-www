import { Metadata } from 'next'
import Link from 'next/link'
import { Disc, Play, Download, Heart, Filter, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Discografía - DAG Klassical',
  description: 'Explora nuestro catálogo completo de música clásica con la más alta calidad de audio',
}

export default function DiscografiaPage() {
  const albums = [
    {
      id: 1,
      title: 'Mozart: Sinfonías Completas',
      artist: 'Orquesta Sinfónica DAG',
      year: '2024',
      duration: '5h 42m',
      tracks: 41,
      genre: 'Clasicismo',
      cover: '/covers/mozart-sinfonias.jpg',
      price: '15.99',
      available: true,
      featured: true
    },
    {
      id: 2,
      title: 'Bach: Arte de la Fuga',
      artist: 'Ensemble Barroco DAG',
      year: '2024',
      duration: '3h 15m',
      tracks: 14,
      genre: 'Barroco',
      cover: '/covers/bach-arte-fuga.jpg',
      price: '12.99',
      available: true,
      featured: true
    },
    {
      id: 3,
      title: 'Beethoven: Sonatas Completas',
      artist: 'Pianista Residente DAG',
      year: '2023',
      duration: '8h 30m',
      tracks: 32,
      genre: 'Romanticismo',
      cover: '/covers/beethoven-sonatas.jpg',
      price: '18.99',
      available: true,
      featured: false
    },
    {
      id: 4,
      title: 'Vivaldi: Las Cuatro Estaciones',
      artist: 'Orquesta de Cámara DAG',
      year: '2023',
      duration: '1h 45m',
      tracks: 12,
      genre: 'Barroco',
      cover: '/covers/vivaldi-estaciones.jpg',
      price: '9.99',
      available: true,
      featured: false
    },
    {
      id: 5,
      title: 'Debussy: Suite Bergamasque',
      artist: 'Pianista Residente DAG',
      year: '2023',
      duration: '2h 10m',
      tracks: 24,
      genre: 'Impresionismo',
      cover: '/covers/debussy-bergamasque.jpg',
      price: '11.99',
      available: false,
      featured: false
    },
    {
      id: 6,
      title: 'Tchaikovsky: Sinfonía No. 6',
      artist: 'Orquesta Sinfónica DAG',
      year: '2023',
      duration: '3h 25m',
      tracks: 16,
      genre: 'Romanticismo',
      cover: '/covers/tchaikovsky-6.jpg',
      price: '13.99',
      available: true,
      featured: false
    }
  ]

  const genres = ['Todos', 'Barroco', 'Clasicismo', 'Romanticismo', 'Impresionismo']

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-white">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <Disc className="w-4 h-4 mr-2" />
              Catálogo Completo
            </div>
            <h1 className="text-4xl lg:text-5xl font-light mb-4">
              Discografía DAG Klassical
            </h1>
            <p className="text-xl text-dag-ivory/90 max-w-3xl mx-auto">
              Más de 1,000 obras clásicas grabadas con la más alta calidad técnica y artística
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-dag-ivory">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    genre === 'Todos'
                      ? 'bg-dag-burgundy text-dag-white'
                      : 'bg-dag-white text-dag-caramel hover:bg-dag-golden hover:text-dag-burgundy border border-dag-ivory'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dag-caramel w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar álbumes..."
                  className="pl-10 pr-4 py-2 bg-dag-white border border-dag-ivory rounded-xl focus:outline-none focus:ring-2 focus:ring-dag-golden text-dag-burgundy"
                />
              </div>
              <button className="flex items-center px-4 py-2 bg-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-ivory transition-colors duration-300">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className={`group bg-dag-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                  album.featured ? 'ring-2 ring-dag-golden' : ''
                }`}
              >
                {/* Album Cover */}
                <div className="relative aspect-square bg-gradient-to-br from-dag-ivory to-dag-buttermilk flex items-center justify-center">
                  <Disc className="w-24 h-24 text-dag-caramel group-hover:scale-110 transition-transform duration-300" />
                  {album.featured && (
                    <div className="absolute top-4 left-4 bg-dag-golden text-dag-burgundy px-3 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </div>
                  )}
                  {!album.available && (
                    <div className="absolute inset-0 bg-dag-burgundy/80 flex items-center justify-center">
                      <span className="text-dag-white font-medium">Próximamente</span>
                    </div>
                  )}
                </div>

                {/* Album Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-dag-burgundy group-hover:text-dag-caramel transition-colors duration-300">
                      {album.title}
                    </h3>
                    <button className="text-dag-caramel hover:text-dag-golden transition-colors duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-dag-caramel mb-2">{album.artist}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-dag-caramel mb-4">
                    <span>{album.year}</span>
                    <span>•</span>
                    <span>{album.tracks} pistas</span>
                    <span>•</span>
                    <span>{album.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm px-2 py-1 bg-dag-golden/20 text-dag-burgundy rounded-full">
                      {album.genre}
                    </span>
                    <span className="text-xl font-bold text-dag-burgundy">
                      ${album.price}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-colors duration-300">
                      <Play className="w-4 h-4 mr-2" />
                      Escuchar
                    </button>
                    <button className="px-4 py-2 border border-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">1,000+</div>
              <div className="text-dag-caramel">Obras Clásicas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">98%</div>
              <div className="text-dag-caramel">Calidad Audio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">50+</div>
              <div className="text-dag-caramel">Artistas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">24/7</div>
              <div className="text-dag-caramel">Streaming</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}