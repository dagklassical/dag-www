import { Metadata } from 'next'
import Link from 'next/link'
import { Music, Users, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Artistas - DAG Klassical',
  description: 'Descubre los artistas exclusivos de DAG Klassical',
}

export default function ArtistasPage() {
  const artists = [
    {
      id: 'virginia-ramirez',
      name: 'Virginia Ramírez',
      role: 'Pianista y Compositora Contemporánea',
      description: 'Fusiona elementos clásicos con sonoridades modernas, creando paisajes sonoros únicos.',
      image: '/profile-virginia-ramirez.svg',
      featured: true,
      specialty: 'Contemporáneo Instrumental',
      albums: 1
    },
    {
      id: 'danilo-alvarez',
      name: 'Danilo Álvarez',
      role: 'Director Musical',
      description: 'Líder visionario en la intersección de música clásica y tecnología blockchain.',
      image: '/logo-dag-klassical.svg',
      featured: false,
      specialty: 'Dirección y Producción',
      albums: 0
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dag-burgundy to-dag-caramel text-dag-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <Music className="w-4 h-4 mr-2" />
              Artistas Exclusivos
            </div>
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Nuestros Artistas
            </h1>
            <p className="text-xl lg:text-2xl text-dag-ivory/90 max-w-3xl mx-auto">
              Músicos de élite comprometidos con la excelencia y la innovación en música clásica
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Artista Destacada
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {artists.filter(artist => artist.featured).map((artist) => (
              <div key={artist.id} className="bg-dag-white rounded-2xl shadow-2xl border border-dag-golden/20 overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-dag-burgundy/10 to-dag-caramel/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-dag-golden rounded-xl mx-auto flex items-center justify-center mb-4">
                          <Music className="w-12 h-12 text-dag-burgundy" />
                        </div>
                        <p className="text-dag-burgundy/60 font-medium">{artist.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-dag-golden" />
                      <span className="text-dag-golden font-medium">Artista Exclusiva</span>
                    </div>
                    
                    <h3 className="text-3xl font-light text-dag-burgundy mb-2">
                      {artist.name}
                    </h3>
                    <p className="text-xl text-dag-caramel mb-6">{artist.role}</p>
                    
                    <p className="text-dag-caramel text-lg mb-8 leading-relaxed">
                      {artist.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-dag-burgundy/5 rounded-xl p-6">
                        <h4 className="font-semibold text-dag-burgundy mb-2">Especialidad</h4>
                        <p className="text-dag-caramel">{artist.specialty}</p>
                      </div>
                      <div className="bg-dag-burgundy/5 rounded-xl p-6">
                        <h4 className="font-semibold text-dag-burgundy mb-2">Colecciones</h4>
                        <p className="text-dag-caramel">{artist.albums} álbum certificado</p>
                      </div>
                    </div>
                    
                    <Link
                      href={`/artistas/${artist.id}`}
                      className="inline-flex items-center bg-dag-burgundy text-dag-white px-8 py-4 rounded-xl font-semibold hover:bg-dag-burgundy/90 transition-all duration-300 shadow-xl"
                    >
                      Ver Perfil Completo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-16 bg-dag-cream">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Equipo Artístico
            </h2>
            <p className="text-dag-caramel text-lg max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia musical
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-dag-golden/10 rounded-xl mx-auto flex items-center justify-center mb-4">
                    <Music className="w-10 h-10 text-dag-burgundy" />
                  </div>
                  <h3 className="text-xl font-bold text-dag-burgundy mb-2">{artist.name}</h3>
                  <p className="text-dag-caramel font-medium">{artist.role}</p>
                  {artist.featured && (
                    <div className="mt-3 inline-flex items-center px-3 py-1 bg-dag-golden/20 text-dag-burgundy rounded-full text-sm font-medium">
                      <Award className="w-4 h-4 mr-1" />
                      Destacada
                    </div>
                  )}
                </div>
                
                <p className="text-dag-caramel text-center mb-6">{artist.description}</p>
                
                <Link
                  href={`/artistas/${artist.id}`}
                  className="block w-full text-center bg-dag-burgundy text-dag-white py-3 px-6 rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300"
                >
                  Ver Perfil
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-6">
              ¿Interesado en Colaborar?
            </h2>
            <p className="text-dag-caramel text-lg max-w-2xl mx-auto mb-8">
              DAG Klassical está siempre buscando talento excepcional para formar parte de nuestra plataforma exclusiva
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center bg-dag-golden text-dag-burgundy px-8 py-4 rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300 shadow-xl"
            >
              <Users className="mr-2 w-5 h-5" />
              Contactar para Colaboraciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}