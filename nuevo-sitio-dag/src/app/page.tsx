import Link from 'next/link'
import { Play, Calendar, Users, Music } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Music,
      title: 'Artistas Excepcionales',
      description: 'Descubre talentosos músicos clásicos de todo el mundo',
      href: '/artistas'
    },
    {
      icon: Calendar,
      title: 'Eventos Exclusivos',
      description: 'Conciertos y presentaciones únicas en su género',
      href: '/eventos'
    },
    {
      icon: Users,
      title: 'Compositores Únicos',
      description: 'Obras originales y reinterpretaciones clásicas',
      href: '/compositores'
    }
  ]

  const latestNews = [
    {
      title: 'Nuevo Álbum de Música Clásica Contemporánea',
      excerpt: 'Descubre las últimas composiciones que están revolucionando el género...',
      date: '10 Nov 2025',
      href: '/noticias/nuevo-album'
    },
    {
      title: 'Festival Internacional de DAG Klassical',
      excerpt: 'El evento más esperado del año llega con artistas de renombre mundial...',
      date: '08 Nov 2025',
      href: '/noticias/festival-2025'
    },
    {
      title: 'Colaboración con Jóvenes Talentos',
      excerpt: 'Iniciativa para apoyar a la nueva generación de músicos clásicos...',
      date: '05 Nov 2025',
      href: '/noticias/colaboracion-talentos'
    }
  ]

  return (
    <div className="bg-dag-ivory min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dag-burgundy via-dag-burgundy/90 to-dag-caramel overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-max section-padding py-24 lg:py-32">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6">
              <span className="block text-dag-golden">DAG</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">KLASSICAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-dag-ivory mb-8 max-w-2xl mx-auto leading-relaxed">
              Donde la tradición clásica encuentra la innovación contemporánea
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/artistas" className="btn-primary inline-flex items-center space-x-2">
                <span>Explorar Artistas</span>
              </Link>
              <Link href="/eventos" className="btn-secondary inline-flex items-center space-x-2">
                <span>Ver Eventos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Virginia Ramírez Launch Banner */}
      <section className="py-16 bg-gradient-to-r from-dag-golden to-dag-buttermilk border-y-4 border-dag-burgundy">
        <div className="container-max section-padding">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-dag-burgundy text-white px-4 py-2 rounded-full text-sm font-medium">
              <span>LANZAMIENTO MAÑANA • 15 DE NOVIEMBRE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-dag-burgundy">
              Virginia Ramírez
            </h2>
            <p className="text-xl text-dag-caramel max-w-2xl mx-auto">
              Descubre "Reflejos Contemporáneos" - El álbum que revoluciona la música clásica con tecnología blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/virginia-ramirez" 
                className="bg-dag-burgundy text-white px-8 py-3 rounded-xl font-medium hover:bg-dag-burgundy/90 transition-colors inline-flex items-center space-x-2"
              >
                <span>Explorar Álbum</span>
              </Link>
              <button className="border-2 border-dag-burgundy text-dag-burgundy px-8 py-3 rounded-xl font-medium hover:bg-dag-burgundy hover:text-white transition-colors">
                Pre-reservar Music Card
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Nuestra Misión</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              Conectar a los amantes de la música clásica con excepcionales artistas y compositores 
              que están preservando y evolucionando este género atemporal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} href={feature.href} className="card group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-dag-golden rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-dag-burgundy" />
                    </div>
                    <h3 className="text-xl font-semibold text-dag-burgundy mb-3">{feature.title}</h3>
                    <p className="text-body">{feature.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-dag-white">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center mb-12">
            <h2 className="heading-secondary">Últimas Noticias</h2>
            <Link href="/noticias" className="btn-primary">
              Ver Todas
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <article key={index} className="card">
                <div className="flex items-center space-x-2 text-sm text-dag-caramel mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-dag-burgundy mb-3">{news.title}</h3>
                <p className="text-body mb-4">{news.excerpt}</p>
                <Link 
                  href={news.href}
                  className="inline-flex items-center space-x-2 text-dag-golden hover:text-dag-burgundy transition-colors duration-300"
                >
                  <span>Leer más</span>
                  <Play className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-max section-padding text-center">
          <h2 className="heading-primary mb-6">¿Listo para Explorar?</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de amantes de la música clásica y descubre 
            un mundo de arte, pasión y talento excepcional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Contactarnos
            </Link>
            <Link href="/sobre-nosotros" className="btn-secondary">
              Conocer Más
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}