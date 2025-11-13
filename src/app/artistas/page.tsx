import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'

export default function ArtistasPage() {
  const artistas = [
    {
      id: 1,
      nombre: 'María Elena Fernández',
      instrumento: 'Pianista',
      especialidad: 'Romanticismo tardío',
      ubicacion: 'Madrid, España',
      descripcion: 'Reconocida intérprete de obras de Brahms y Schumann con más de 15 años de carrera internacional.',
      imagen: '/api/placeholder/300/300',
      destacado: true
    },
    {
      id: 2,
      nombre: 'Carlos Mendoza',
      instrumento: 'Violinista',
      especialidad: 'Música barroca',
      ubicacion: 'Buenos Aires, Argentina',
      descripcion: 'Especialista en música barroca con énfasis en Bach y Vivaldi, ganador de múltiples premios internacionales.',
      imagen: '/api/placeholder/300/300',
      destacado: true
    },
    {
      id: 3,
      nombre: 'Sofia Andersen',
      instrumento: 'Soprano',
      especialidad: 'Ópera clásica',
      ubicacion: 'Copenhagen, Dinamarca',
      descripcion: 'Debutó en la Ópera Real de Dinamarca y ha actuado en los principales teatros europeos.',
      imagen: '/api/placeholder/300/300',
      destacado: false
    },
    {
      id: 4,
      nombre: 'Hiroshi Yamamoto',
      instrumento: 'Pianista',
      especialidad: 'Compositores asiáticos',
      ubicacion: 'Tokio, Japón',
      descripcion: 'Pionero en la difusión de música clásica asiática contemporánea con más de 20 álbumes editados.',
      imagen: '/api/placeholder/300/300',
      destacado: false
    },
    {
      id: 5,
      nombre: 'Elena Volkov',
      instrumento: 'Violonchelista',
      especialidad: 'Música rusa',
      ubicacion: 'Moscú, Rusia',
      descripcion: 'Intérprete de obras de Rachmaninoff y Shostakovich, ganadora del Concurso Tchaikovsky.',
      imagen: '/api/placeholder/300/300',
      destacado: false
    },
    {
      id: 6,
      nombre: 'James Morrison',
      instrumento: 'Director de Orquesta',
      especialidad: 'Música contemporánea',
      ubicacion: 'Nueva York, Estados Unidos',
      descripcion: 'Director de la Sinfónica de Nueva York, especializado en composiciones contemporáneas.',
      imagen: '/api/placeholder/300/300',
      destacado: true
    }
  ]

  const instrumentos = ['Todos', 'Pianista', 'Violinista', 'Soprano', 'Violonchelista', 'Director de Orquesta']

  return (
    <div className="bg-dag-ivory min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-dag-burgundy to-dag-caramel text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              Nuestros Artistas
            </h1>
            <p className="text-xl text-dag-ivory max-w-3xl mx-auto leading-relaxed">
              Conoce a los excepcionales músicos que están preservando y evolucionando 
              la tradición de la música clásica a través de su arte incomparable.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dag-white border-b border-dag-ivory">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {instrumentos.map((instrumento) => (
              <button
                key={instrumento}
                className="px-6 py-2 rounded-full bg-dag-ivory text-dag-caramel hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300 font-medium"
              >
                {instrumento}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistas.map((artista) => (
              <article
                key={artista.id}
                className={`card relative overflow-hidden group ${
                  artista.destacado ? 'ring-2 ring-dag-golden' : ''
                }`}
              >
                {artista.destacado && (
                  <div className="absolute top-4 right-4 bg-dag-golden text-dag-burgundy px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Destacado
                  </div>
                )}
                
                <div className="aspect-square bg-dag-ivory rounded-xl mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dag-burgundy to-dag-caramel flex items-center justify-center">
                    <span className="text-dag-white text-6xl font-light">{artista.nombre[0]}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-dag-burgundy">{artista.nombre}</h3>
                  <p className="text-dag-caramel font-medium">{artista.instrumento}</p>
                  <p className="text-sm text-dag-caramel/80">{artista.especialidad}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-dag-caramel">
                    <MapPin className="w-4 h-4" />
                    <span>{artista.ubicacion}</span>
                  </div>

                  <p className="text-body text-sm">{artista.descripcion}</p>

                  <div className="pt-4">
                    <Link
                      href={`/artistas/${artista.id}`}
                      className="inline-flex items-center space-x-2 text-dag-golden hover:text-dag-burgundy transition-colors duration-300 font-medium"
                    >
                      <span>Ver Perfil</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dag-white">
        <div className="container-max section-padding text-center">
          <h2 className="heading-secondary mb-6">¿Eres un Artista Clásico?</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra plataforma y conecta con amantes de la música clásica de todo el mundo.
          </p>
          <Link href="/contacto" className="btn-primary">
            Contactar para Colaborar
          </Link>
        </div>
      </section>
    </div>
  )
}