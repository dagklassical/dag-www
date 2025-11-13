import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Music, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros - DAG Klassical',
  description: 'Conoce al equipo detrás de la revolución de la música clásica digital',
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dag-burgundy/10 via-transparent to-dag-golden/10"></div>
        <div className="relative container-max section-padding">
          <div className="text-center text-dag-burgundy">
            <h1 className="text-4xl lg:text-5xl font-light mb-6">Nuestro Equipo</h1>
            <p className="text-xl text-dag-caramel max-w-3xl mx-auto">
              Profesionales apasionados comprometidos con la excelencia musical y la innovación tecnológica
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-dag-burgundy mb-4">Liderazgo</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20">
              <Users className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dag-burgundy mb-4">Danilo Álvarez</h3>
              <p className="text-dag-caramel">Fundador y CEO</p>
              <p className="text-sm text-dag-caramel/70 mt-2">Visión y liderazgo estratégico</p>
            </div>
            
            <div className="text-center p-8 bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20">
              <Music className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dag-burgundy mb-4">Virginia Ramírez</h3>
              <p className="text-dag-caramel">Artista Principal</p>
              <p className="text-sm text-dag-caramel/70 mt-2">Excelencia artística</p>
            </div>
            
            <div className="text-center p-8 bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20">
              <Award className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dag-burgundy mb-4">Equipo Técnico</h3>
              <p className="text-dag-caramel">Desarrollo Blockchain</p>
              <p className="text-sm text-dag-caramel/70 mt-2">Innovación tecnológica</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
