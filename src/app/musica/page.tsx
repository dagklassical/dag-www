import { Metadata } from 'next'
import Link from 'next/link'
import { Music, Disc, Calendar, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Música - DAG Klassical',
  description: 'Descubre nuestro catálogo musical, lanzamientos exclusivos y preventas de NFTs musicales',
}

export default function MusicaPage() {
  const sections = [
    {
      title: 'Discografía',
      description: 'Explora nuestro catálogo completo de obras clásicas interpretadas por los mejores músicos',
      icon: Disc,
      href: '/musica/discografia',
      gradient: 'from-dag-burgundy to-dag-caramel',
      features: ['Catálogo completo', 'Interpretaciones premium', 'Alta calidad de audio']
    },
    {
      title: 'Lanzamientos',
      description: 'Próximos lanzamientos y novedades musicales que revolucionarán la escena clásica',
      icon: Calendar,
      href: '/musica/lanzamientos',
      gradient: 'from-dag-golden to-dag-caramel',
      features: ['Nuevas obras', 'Artistas exclusivos', 'Fechas de estreno']
    },
    {
      title: 'Preventa NFT',
      description: 'Accede a preventas exclusivas de NFTs musicales con contenido premium y ventajas únicas',
      icon: Zap,
      href: '/musica/preventa',
      gradient: 'from-dag-ivory to-dag-golden',
      features: ['Contenido exclusivo', 'Ventajas únicas', 'Ediciones limitadas']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-buttermilk to-dag-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dag-burgundy/10 via-transparent to-dag-golden/10"></div>
        <div className="container-max section-padding relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-burgundy font-medium mb-6">
              <Music className="w-4 h-4 mr-2" />
              Innovación Musical
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-dag-burgundy mb-6 tracking-wide">
              El Futuro de la
              <span className="block font-medium text-dag-caramel">Música Clásica</span>
            </h1>
            <p className="text-xl text-dag-caramel mb-8 leading-relaxed">
              Revolucionamos la música clásica con tecnología blockchain, NFTs y experiencias digitales únicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/musica/discografia"
                className="inline-flex items-center px-8 py-4 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300 hover:scale-105"
              >
                Explorar Discografía
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/musica/preventa"
                className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300"
              >
                Preventa NFT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Nuestra Propuesta Musical
            </h2>
            <p className="text-xl text-dag-caramel max-w-3xl mx-auto">
              Tres pilares fundamentales que definen nuestra visión de la música clásica en la era digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-dag-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-dag-ivory"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.gradient} text-dag-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-dag-burgundy mb-4 group-hover:text-dag-caramel transition-colors duration-300">
                    {section.title}
                  </h3>
                  
                  <p className="text-dag-caramel mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-dag-caramel">
                        <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="inline-flex items-center text-dag-burgundy font-medium group-hover:text-dag-caramel transition-colors duration-300">
                    Explorar
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-dag-white mb-6">
            Únete a la Revolución Musical
          </h2>
          <p className="text-xl text-dag-ivory/90 mb-8 max-w-2xl mx-auto">
            Sé parte del futuro de la música clásica. Explora, descubre y colecciona obras únicas en formato NFT
          </p>
          <Link
            href="/musica/preventa"
            className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300 hover:scale-105"
          >
            Comenzar Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}