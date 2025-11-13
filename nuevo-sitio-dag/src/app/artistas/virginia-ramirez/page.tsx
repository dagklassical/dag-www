import { Metadata } from 'next'
import Link from 'next/link'
import { Music, Award, Users, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virginia Ramírez - Artista DAG Klassical',
  description: 'Perfil de Virginia Ramírez, pianista y compositora exclusiva de DAG Klassical',
}

export default function VirginiaRamirezPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Back Navigation */}
      <section className="py-4 bg-dag-white border-b border-dag-golden/20">
        <div className="container-max section-padding">
          <Link
            href="/artistas"
            className="inline-flex items-center gap-2 text-dag-burgundy hover:text-dag-caramel transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Artistas</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dag-burgundy to-dag-caramel text-dag-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container-max section-padding">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-dag-golden rounded-full mx-auto flex items-center justify-center border-4 border-dag-ivory shadow-2xl">
                <Music className="w-16 h-16 text-dag-burgundy" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-light mb-4">Virginia Ramírez</h1>
            <p className="text-xl lg:text-2xl text-dag-ivory/90 mb-6">Pianista y Compositora Contemporánea</p>
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium">
              <Award className="w-4 h-4 mr-2" />
              Artista Exclusiva DAG Klassical
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-8 text-center">
              Trayectoria Artística
            </h2>
            <div className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 p-8 lg:p-12">
              <div className="prose prose-lg text-dag-caramel">
                <p className="text-lg leading-relaxed mb-6">
                  Virginia Ramírez es una pianista y compositora contemporánea reconocida por su capacidad única 
                  de fusionar elementos clásicos con sonoridades modernas. Su música trasciende géneros tradicionales, 
                  creando paisajes sonoros que conectan con audiencias globales.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Con una trayectoria que abarca más de una década, Virginia ha desarrollado un lenguaje musical 
                  distintivo que combina técnica clásica virtuosa con experimentación contemporánea, estableciéndose 
                  como una voz innovadora en la música instrumental actual.
                </p>
                <p className="text-lg leading-relaxed">
                  Su colaboración exclusiva con DAG Klassical marca un hito en la digitalización de la música clásica, 
                  donde la tecnología blockchain certifica la autenticidad y proporciona experiencias únicas a los coleccionistas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Card - Reflejos */}
      <section className="py-16 bg-dag-cream">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-12 text-center">
              Álbum Digital Certificado
            </h2>
            
            <div className="bg-dag-white rounded-2xl shadow-2xl overflow-hidden border border-dag-golden/20">
              <div className="bg-gradient-to-r from-dag-burgundy to-dag-caramel text-dag-white p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-light mb-2">Reflejos Contemporáneos</h3>
                    <p className="text-dag-ivory/90 text-lg">Colección NFT Exclusiva</p>
                  </div>
                  <Award className="w-12 h-12 text-dag-golden" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-xl text-dag-burgundy mb-6">Detalles de la Colección</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-dag-golden/20">
                        <span className="text-dag-caramel">Artista:</span>
                        <span className="font-medium text-dag-burgundy">Virginia Ramírez</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-dag-golden/20">
                        <span className="text-dag-caramel">Género:</span>
                        <span className="font-medium text-dag-burgundy">Contemporáneo Instrumental</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-dag-golden/20">
                        <span className="text-dag-caramel">Tracks:</span>
                        <span className="font-medium text-dag-burgundy">8 composiciones</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-dag-golden/20">
                        <span className="text-dag-caramel">Formato:</span>
                        <span className="font-medium text-dag-burgundy">FLAC Alta Calidad</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-dag-caramel">Duración:</span>
                        <span className="font-medium text-dag-burgundy">45 minutos</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl text-dag-burgundy mb-6">Certificación Blockchain</h4>
                    <div className="bg-dag-burgundy/5 rounded-xl p-6">
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 bg-dag-golden rounded-xl mx-auto flex items-center justify-center mb-4">
                          <Award className="w-12 h-12 text-dag-burgundy" />
                        </div>
                        <div className="text-2xl font-bold text-dag-burgundy mb-1">#VR2024RFC001</div>
                        <div className="text-dag-caramel">Certificado Original</div>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-dag-caramel">Verificado:</span>
                          <span className="font-medium text-dag-burgundy">13 Nov 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dag-caramel">Red:</span>
                          <span className="font-medium text-dag-burgundy">Polygon</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dag-caramel">Tipo:</span>
                          <span className="font-medium text-dag-burgundy">NFT Exclusivo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-dag-golden/20">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                      href="/musica/preventa"
                      className="flex-1 bg-dag-burgundy text-dag-white py-4 px-6 rounded-xl font-semibold hover:bg-dag-burgundy/90 transition-all duration-300 text-center"
                    >
                      Adquirir Colección
                    </Link>
                    <Link
                      href="/musica/discografia"
                      className="flex-1 border-2 border-dag-burgundy text-dag-burgundy py-4 px-6 rounded-xl font-semibold hover:bg-dag-burgundy hover:text-dag-white transition-all duration-300 text-center"
                    >
                      Ver Discografía
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracklist */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-12 text-center">
              Lista de Composiciones
            </h2>
            <div className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 overflow-hidden">
              {[
                { number: 1, title: "Alba Contemporánea", duration: "4:32", isNew: true },
                { number: 2, title: "Reflejos del Alba", duration: "5:18", isNew: false },
                { number: 3, title: "Paisajes Urbanos", duration: "6:45", isNew: true },
                { number: 4, title: "Silencios Profundos", duration: "4:22", isNew: false },
                { number: 5, title: "Conexiones", duration: "7:12", isNew: true },
                { number: 6, title: "Ecos del Tiempo", duration: "5:56", isNew: false },
                { number: 7, title: "Innovación Clásica", duration: "6:18", isNew: true },
                { number: 8, title: "Reflejos Finales", duration: "4:37", isNew: false }
              ].map((track) => (
                <div key={track.number} className="flex items-center justify-between p-6 border-b border-dag-golden/20 last:border-b-0 hover:bg-dag-cream/50 transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <span className="w-10 h-10 bg-dag-burgundy/10 text-dag-burgundy rounded-full flex items-center justify-center font-semibold">
                        {track.number}
                      </span>
                      {track.isNew && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-dag-golden rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <span className="font-medium text-dag-burgundy text-lg">{track.title}</span>
                      {track.isNew && (
                        <span className="ml-3 inline-flex items-center px-2 py-1 bg-dag-golden/20 text-dag-burgundy rounded-full text-xs font-medium">
                          Nuevo
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-dag-caramel font-medium">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media / Contact */}
      <section className="py-16 bg-dag-cream">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-8">
              Conecta con Virginia
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/contacto"
                className="bg-dag-white p-8 rounded-2xl shadow-xl border border-dag-golden/20 hover:shadow-2xl transition-all duration-300"
              >
                <Music className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
                <h3 className="font-semibold text-dag-burgundy mb-2">Colaboraciones</h3>
                <p className="text-dag-caramel text-sm">Para proyectos musicales exclusivos</p>
              </Link>
              
              <Link
                href="/eventos"
                className="bg-dag-white p-8 rounded-2xl shadow-xl border border-dag-golden/20 hover:shadow-2xl transition-all duration-300"
              >
                <Users className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
                <h3 className="font-semibold text-dag-burgundy mb-2">Conciertos</h3>
                <p className="text-dag-caramel text-sm">Eventos y presentaciones exclusivas</p>
              </Link>
              
              <Link
                href="/noticias"
                className="bg-dag-white p-8 rounded-2xl shadow-xl border border-dag-golden/20 hover:shadow-2xl transition-all duration-300"
              >
                <Award className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
                <h3 className="font-semibold text-dag-burgundy mb-2">Noticias</h3>
                <p className="text-dag-caramel text-sm">Últimas novedades y lanzamientos</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Artists */}
      <section className="py-16 text-center">
        <Link
          href="/artistas"
          className="inline-flex items-center gap-3 bg-dag-burgundy text-dag-white px-8 py-4 rounded-xl font-semibold hover:bg-dag-burgundy/90 transition-all duration-300 shadow-xl"
        >
          <Users className="w-5 h-5" />
          Explorar Todos los Artistas
        </Link>
      </section>
    </div>
  )
}