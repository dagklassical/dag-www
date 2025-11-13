import { Metadata } from 'next'
import Link from 'next/link'
import { Music, Award, Users, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Danilo Álvarez - DAG Klassical',
  description: 'Perfil de Danilo Álvarez, fundador y CEO de DAG Klassical',
}

export default function DaniloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Navigation */}
      <section className="py-8 bg-dag-burgundy">
        <div className="container-max section-padding">
          <Link
            href="/nosotros"
            className="inline-flex items-center text-dag-white hover:text-dag-golden transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Equipo
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light text-dag-burgundy mb-6">
                Danilo Álvarez
              </h1>
              <p className="text-xl text-dag-caramel mb-8">
                Fundador y CEO de DAG Klassical
              </p>
              <div className="prose prose-lg text-dag-caramel">
                <p>
                  Visionario y líder en la intersección de la música clásica y la tecnología blockchain.
                  Con más de una década de experiencia en la industria musical, Danilo ha transformado 
                  la forma en que concebimos y experimentamos la música clásica.
                </p>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <Music className="w-8 h-8 text-dag-burgundy mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dag-burgundy">10+</div>
                    <div className="text-sm text-dag-caramel">Años Experiencia</div>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-dag-burgundy mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dag-burgundy">500+</div>
                    <div className="text-sm text-dag-caramel">Artistas</div>
                  </div>
                  <div>
                    <Award className="w-8 h-8 text-dag-burgundy mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dag-burgundy">50+</div>
                    <div className="text-sm text-dag-caramel">Premios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
