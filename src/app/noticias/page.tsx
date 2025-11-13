import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NoticiasPage() {
  const noticias = [
    {
      id: 1,
      titulo: 'DAG Klassical presenta su primera temporada de conciertos',
      resumen: 'Un programa exclusivo que reúne a los mejores artistas clásicos en una serie de conciertos íntimos.',
      fecha: '2025-11-10',
      categoria: 'Eventos',
      imagen: '/api/placeholder/600/400',
      destacado: true
    },
    {
      id: 2,
      titulo: 'Nueva plataforma digital para músicos clásicos',
      resumen: 'Lanzamos un espacio exclusivo donde los artistas pueden conectar y colaborar.',
      fecha: '2025-11-08',
      categoria: 'Tecnología',
      imagen: '/api/placeholder/600/400',
      destacado: false
    },
    {
      id: 3,
      titulo: 'Entrevista: El futuro de la música clásica en la era digital',
      resumen: 'Conversamos con expertos sobre cómo la tecnología está transformando la música clásica.',
      fecha: '2025-11-05',
      categoria: 'Entrevistas',
      imagen: '/api/placeholder/600/400',
      destacado: false
    },
    {
      id: 4,
      titulo: 'Festival Internacional DAG Klassical 2025',
      resumen: 'El evento más esperado del año llega con una programación excepcional.',
      fecha: '2025-11-02',
      categoria: 'Eventos',
      imagen: '/api/placeholder/600/400',
      destacado: true
    },
    {
      id: 5,
      titulo: 'Nuevos talentos emergentes en el panorama clásico',
      resumen: 'Conoce a los jóvenes músicos que están revolucionando el género.',
      fecha: '2025-10-30',
      categoria: 'Artistas',
      imagen: '/api/placeholder/600/400',
      destacado: false
    },
    {
      id: 6,
      titulo: 'Colaboración con conservatorios europeos',
      resumen: 'Iniciativa para conectar jóvenes talentos con profesionales establecidos.',
      fecha: '2025-10-28',
      categoria: 'Educación',
      imagen: '/api/placeholder/600/400',
      destacado: false
    }
  ]

  const categorias = ['Todas', 'Eventos', 'Artistas', 'Tecnología', 'Educación', 'Entrevistas']

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-dag-ivory min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-dag-burgundy to-dag-caramel text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              Noticias
            </h1>
            <p className="text-xl text-dag-ivory max-w-3xl mx-auto leading-relaxed">
              Mantente al día con las últimas novedades del mundo de la música clásica 
              y las actividades de nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dag-white border-b border-dag-ivory">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="px-6 py-2 rounded-full bg-dag-ivory text-dag-caramel hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300 font-medium"
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container-max section-padding">
          <h2 className="heading-secondary mb-12">Noticias Destacadas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {noticias.filter(noticia => noticia.destacado).map((noticia) => (
              <article key={noticia.id} className="card group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-dag-burgundy to-dag-caramel rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-dag-white text-2xl font-light">{noticia.categoria}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-dag-caramel">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(noticia.fecha)}</span>
                    </div>
                    <span className="bg-dag-golden text-dag-burgundy px-3 py-1 rounded-full text-xs font-medium">
                      {noticia.categoria}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dag-burgundy group-hover:text-dag-golden transition-colors duration-300">
                    {noticia.titulo}
                  </h3>
                  
                  <p className="text-body">{noticia.resumen}</p>
                  
                  <div className="pt-4">
                    <Link
                      href={`/noticias/${noticia.id}`}
                      className="inline-flex items-center space-x-2 text-dag-golden hover:text-dag-burgundy transition-colors duration-300 font-medium"
                    >
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 bg-dag-white">
        <div className="container-max section-padding">
          <h2 className="heading-secondary mb-12">Todas las Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <article key={noticia.id} className="card group cursor-pointer">
                <div className="aspect-video bg-dag-ivory rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-dag-caramel text-lg font-medium">{noticia.categoria}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-dag-caramel">
                    <Clock className="w-4 h-4" />
                    <span>{formatDate(noticia.fecha)}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-dag-burgundy group-hover:text-dag-golden transition-colors duration-300 line-clamp-2">
                    {noticia.titulo}
                  </h3>
                  
                  <p className="text-body text-sm line-clamp-3">{noticia.resumen}</p>
                  
                  <div className="pt-2">
                    <Link
                      href={`/noticias/${noticia.id}`}
                      className="inline-flex items-center space-x-2 text-dag-golden hover:text-dag-burgundy transition-colors duration-300 text-sm font-medium"
                    >
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}