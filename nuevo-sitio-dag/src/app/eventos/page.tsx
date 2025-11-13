import { Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react'
import Link from 'next/link'

export default function EventosPage() {
  const eventos = [
    {
      id: 1,
      titulo: 'Concierto de Piano Romántico',
      artista: 'María Elena Fernández',
      fecha: '2025-11-25',
      hora: '19:00',
      lugar: 'Teatro Real, Madrid',
      descripcion: 'Una noche mágica con las obras más hermosas del romanticismo tardío.',
      precio: 'Desde €45',
      imagen: '/api/placeholder/600/400',
      disponible: true,
      destacado: true
    },
    {
      id: 2,
      titulo: 'Recital de Violín Barroco',
      artista: 'Carlos Mendoza',
      fecha: '2025-12-02',
      hora: '20:00',
      lugar: 'Teatro Colón, Buenos Aires',
      descripcion: 'Bach, Vivaldi y otros maestros del barroco en una interpretación única.',
      precio: 'Desde $120 ARS',
      imagen: '/api/placeholder/600/400',
      disponible: true,
      destacado: true
    },
    {
      id: 3,
      titulo: 'Noche de Ópera Contemporánea',
      artista: 'Sofia Andersen',
      fecha: '2025-12-08',
      hora: '18:30',
      lugar: 'Ópera Real, Copenhague',
      descripcion: 'Operetas clásicas con un toque contemporáneo y vanguardista.',
      precio: 'Desde 300 DKK',
      imagen: '/api/placeholder/600/400',
      disponible: false,
      destacado: false
    },
    {
      id: 4,
      titulo: 'Festival Internacional DAG 2025',
      artista: 'Artistas Varios',
      fecha: '2025-12-15',
      hora: '16:00',
      lugar: 'Auditorio Nacional, México DF',
      descripcion: 'El evento más importante del año con artistas de renombre mundial.',
      precio: 'Desde $800 MXN',
      imagen: '/api/placeholder/600/400',
      disponible: true,
      destacado: true
    },
    {
      id: 5,
      titulo: 'Música Clásica Asiática',
      artista: 'Hiroshi Yamamoto',
      fecha: '2025-12-20',
      hora: '19:30',
      lugar: 'Suntory Hall, Tokio',
      descripcion: 'Descubre la belleza de la música clásica con influencias asiáticas.',
      precio: 'Desde ¥8,000',
      imagen: '/api/placeholder/600/400',
      disponible: true,
      destacado: false
    },
    {
      id: 6,
      titulo: 'Gala de Año Nuevo',
      artista: 'Orquesta Sinfónica',
      fecha: '2025-12-31',
      hora: '21:00',
      lugar: 'Carnegie Hall, Nueva York',
      descripcion: 'Celebra la llegada del nuevo año con los mejores clásicos.',
      precio: 'Desde $150 USD',
      imagen: '/api/placeholder/600/400',
      disponible: true,
      destacado: true
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    return `${hours}:${minutes} hrs`
  }

  return (
    <div className="bg-dag-ivory min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-dag-burgundy to-dag-caramel text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              Próximos Eventos
            </h1>
            <p className="text-xl text-dag-ivory max-w-3xl mx-auto leading-relaxed">
              Reserva tu lugar en los eventos de música clásica más exclusivos y únicos 
              del calendario internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dag-white border-b border-dag-ivory">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 rounded-full bg-dag-golden text-dag-burgundy font-medium">
              Todos los Eventos
            </button>
            <button className="px-6 py-2 rounded-full bg-dag-ivory text-dag-caramel hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300 font-medium">
              Conciertos
            </button>
            <button className="px-6 py-2 rounded-full bg-dag-ivory text-dag-caramel hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300 font-medium">
              Festivales
            </button>
            <button className="px-6 py-2 rounded-full bg-dag-ivory text-dag-caramel hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300 font-medium">
              Recitales
            </button>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container-max section-padding">
          <h2 className="heading-secondary mb-12">Eventos Destacados</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {eventos.filter(evento => evento.destacado).map((evento) => (
              <article key={evento.id} className="card group relative overflow-hidden">
                {!evento.disponible && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Agotado
                  </div>
                )}
                
                <div className="aspect-video bg-gradient-to-br from-dag-burgundy to-dag-caramel rounded-lg mb-6 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Calendar className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{formatDate(evento.fecha)}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-dag-burgundy group-hover:text-dag-golden transition-colors duration-300">
                    {evento.titulo}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-dag-caramel">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{evento.artista}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-dag-caramel">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-dag-golden" />
                      <span>{formatDate(evento.fecha)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-dag-golden" />
                      <span>{formatTime(evento.hora)}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <MapPin className="w-4 h-4 text-dag-golden" />
                      <span>{evento.lugar}</span>
                    </div>
                  </div>
                  
                  <p className="text-body">{evento.descripcion}</p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-lg font-semibold text-dag-burgundy">
                      {evento.precio}
                    </div>
                    <Link
                      href={evento.disponible ? `/eventos/${evento.id}/reservar` : '#'}
                      className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        evento.disponible
                          ? 'btn-primary'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Ticket className="w-4 h-4" />
                      <span>{evento.disponible ? 'Reservar' : 'No disponible'}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-dag-white">
        <div className="container-max section-padding">
          <h2 className="heading-secondary mb-12">Todos los Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento) => (
              <article key={evento.id} className="card group relative">
                <div className="aspect-video bg-dag-ivory rounded-lg mb-4 flex items-center justify-center relative">
                  <Calendar className="w-12 h-12 text-dag-caramel/50" />
                  {!evento.disponible && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Agotado
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-dag-burgundy group-hover:text-dag-golden transition-colors duration-300">
                    {evento.titulo}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-dag-caramel">
                    <Users className="w-4 h-4" />
                    <span>{evento.artista}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 text-xs text-dag-caramel">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-dag-golden" />
                      <span>{formatDate(evento.fecha)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-dag-golden" />
                      <span className="line-clamp-1">{evento.lugar}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3">
                    <div className="text-sm font-semibold text-dag-burgundy">
                      {evento.precio}
                    </div>
                    <Link
                      href={evento.disponible ? `/eventos/${evento.id}` : '#'}
                      className={`text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                        evento.disponible
                          ? 'bg-dag-golden text-dag-burgundy hover:bg-opacity-90'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {evento.disponible ? 'Ver detalles' : 'No disponible'}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-bg">
        <div className="container-max section-padding text-center">
          <h2 className="heading-primary mb-6">No te pierdas ningún evento</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter para recibir notificaciones sobre 
            nuevos eventos y preventas exclusivas.
          </p>
          <Link href="/contacto" className="btn-primary">
            Suscribirse al Newsletter
          </Link>
        </div>
      </section>
    </div>
  )
}