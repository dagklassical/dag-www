import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Users, Music, Bell, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lanzamientos - DAG Klassical',
  description: 'Descubre los próximos lanzamientos y novedades musicales que revolucionarán la escena clásica',
}

export default function LanzamientosPage() {
  const upcomingReleases = [
    {
      id: 1,
      title: 'Bach: Misas Completas',
      artist: 'Coro Sinfónico DAG',
      releaseDate: '2025-12-15',
      daysRemaining: 33,
      type: 'Album',
      status: 'Producción Final',
      genre: 'Barroco',
      duration: '4h 30m',
      tracks: 28,
      preOrders: 1250,
      rating: 4.9,
      preview: true,
      special: true
    },
    {
      id: 2,
      title: 'Rachmaninoff: Conciertos para Piano',
      artist: 'Orquesta Sinfónica DAG',
      releaseDate: '2025-11-28',
      daysRemaining: 16,
      type: 'Album',
      status: 'Masterización',
      genre: 'Romanticismo',
      duration: '3h 45m',
      tracks: 18,
      preOrders: 890,
      rating: 4.8,
      preview: false,
      special: false
    },
    {
      id: 3,
      title: 'Ravel: Bolero (Nueva Interpretación)',
      artist: 'Orquesta de Cámara DAG',
      releaseDate: '2025-12-01',
      daysRemaining: 19,
      type: 'Single',
      status: 'Post-Producción',
      genre: 'Impresionismo',
      duration: '15m',
      tracks: 1,
      preOrders: 650,
      rating: 4.7,
      preview: true,
      special: false
    },
    {
      id: 4,
      title: 'Dvořák: Sinfonías Nos. 7-9',
      artist: 'Orquesta Sinfónica DAG',
      releaseDate: '2026-01-10',
      daysRemaining: 59,
      type: 'Album',
      status: 'Grabación',
      genre: 'Romanticismo',
      duration: '4h 15m',
      tracks: 12,
      preOrders: 720,
      rating: 4.6,
      preview: false,
      special: false
    }
  ]

  const news = [
    {
      title: 'Sesión de grabación completa: Bach Misas',
      date: '2025-11-10',
      excerpt: 'Finalizamos la grabación de todas las obras corales de Bach con la participación de 45 músicos...',
      category: 'Producción'
    },
    {
      title: 'Nueva tecnología de grabación surround',
      date: '2025-11-08',
      excerpt: 'Implementamos la última tecnología de grabación multi-canal para una experiencia inmersiva única...',
      category: 'Tecnología'
    },
    {
      title: 'Colaboración con la Filarmónica de Berlín',
      date: '2025-11-05',
      excerpt: 'Anunciamos nuestra primera colaboración internacional con la prestigiosa orquesta alemana...',
      category: 'Colaboraciones'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-dag-golden to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-burgundy">
            <div className="inline-flex items-center px-4 py-2 bg-dag-white/20 rounded-full text-dag-burgundy font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Próximos Lanzamientos
            </div>
            <h1 className="text-4xl lg:text-5xl font-light mb-4">
              Lanzamientos DAG Klassical
            </h1>
            <p className="text-xl text-dag-burgundy/80 max-w-3xl mx-auto">
              Sé el primero en descubrir las nuevas obras que revolucionarán la escena musical clásica
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Próximos Lanzamientos
            </h2>
            <p className="text-xl text-dag-caramel">
              Cada obra es preparada con la máxima atención al detalle y calidad artística
            </p>
          </div>

          <div className="grid gap-8">
            {upcomingReleases.map((release) => (
              <div
                key={release.id}
                className={`bg-dag-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-500 ${
                  release.special ? 'border-dag-golden' : 'border-dag-ivory'
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Cover/Art */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-dag-ivory to-dag-buttermilk rounded-xl flex items-center justify-center">
                      <Music className="w-16 h-16 text-dag-caramel" />
                    </div>
                    {release.special && (
                      <div className="absolute -top-2 -right-2 bg-dag-golden text-dag-burgundy px-3 py-1 rounded-full text-sm font-bold">
                        Destacado
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-dag-burgundy mb-2">
                          {release.title}
                        </h3>
                        <p className="text-dag-caramel mb-2">{release.artist}</p>
                        <div className="flex items-center gap-4 text-sm text-dag-caramel mb-3">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {release.daysRemaining} días
                          </span>
                          <span>{release.genre}</span>
                          <span>{release.tracks} pistas</span>
                          <span>{release.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-dag-golden/20 text-dag-burgundy px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 mr-1" />
                          {release.rating}
                        </div>
                        <span className="text-sm text-dag-caramel bg-dag-ivory px-3 py-1 rounded-full">
                          {release.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-dag-burgundy">{release.preOrders}</div>
                          <div className="text-dag-caramel">Pre-órdenes</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-dag-burgundy">{release.releaseDate}</div>
                          <div className="text-dag-caramel">Fecha lanzamiento</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-dag-burgundy">{release.status}</div>
                          <div className="text-dag-caramel">Estado</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex items-center px-4 py-2 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-colors duration-300">
                          <Bell className="w-4 h-4 mr-2" />
                          Notificar
                        </button>
                        {release.preview && (
                          <button className="px-4 py-2 border border-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300">
                            Vista Previa
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Últimas Noticias
            </h2>
            <p className="text-xl text-dag-caramel">
              Mantente al día con el proceso de creación de nuestras nuevas obras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article key={index} className="bg-dag-white rounded-xl p-6 shadow-lg border border-dag-ivory hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm px-3 py-1 bg-dag-golden/20 text-dag-burgundy rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-dag-caramel">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-dag-burgundy mb-3">
                  {article.title}
                </h3>
                <p className="text-dag-caramel leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center text-dag-burgundy font-medium hover:text-dag-caramel transition-colors duration-300">
                  Leer más
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">8</div>
              <div className="text-dag-caramel">Lanzamientos Q4 2025</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">15</div>
              <div className="text-dag-caramel">Artistas Colaboradores</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">95%</div>
              <div className="text-dag-caramel">Satisfacción Audiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">4.8</div>
              <div className="text-dag-caramel">Rating Promedio</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}