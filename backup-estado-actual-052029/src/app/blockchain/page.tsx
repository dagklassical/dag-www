import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Zap, Network, ArrowRight, Coins, ShoppingCart, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blockchain - DAG Klassical',
  description: 'Explora nuestra plataforma blockchain con NFTs musicales, tickets digitales y tecnología Polygon',
}

export default function BlockchainPage() {
  const sections = [
    {
      title: 'Tienda NFT',
      description: 'Marketplace exclusivo de NFTs musicales con obras coleccionables y contenido premium',
      icon: ShoppingCart,
      href: '/blockchain/tienda-nft',
      gradient: 'from-dag-golden to-dag-caramel',
      features: ['Obras coleccionables', 'Contenido premium', 'Marketplace seguro'],
      stats: { label: 'NFTs disponibles', value: '1,000+' }
    },
    {
      title: 'Polygon Networks',
      description: 'Tecnología blockchain Polygon para transacciones rápidas y seguras',
      icon: Cpu,
      href: '/blockchain/polygon-networks',
      gradient: 'from-dag-burgundy to-dag-caramel',
      features: ['Polygon zkEVM', 'Transacciones rápidas', 'Bajas comisiones'],
      stats: { label: 'Gas fees', value: '< $0.01' }
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Seguridad Total',
      description: 'Contratos inteligentes auditados y verificados'
    },
    {
      icon: Zap,
      title: 'Velocidad Polygon',
      description: 'Transacciones en segundos, no minutos'
    },
    {
      icon: Coins,
      title: 'Eficiencia de Costos',
      description: 'Las comisiones más bajas del mercado'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-white via-dag-ivory to-dag-buttermilk">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dag-golden/10 via-transparent to-dag-burgundy/10"></div>
        <div className="container-max section-padding relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-dag-burgundy/10 rounded-full text-dag-burgundy font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              Tecnología Polygon
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-dag-burgundy mb-6 tracking-wide">
              Blockchain para
              <span className="block font-medium text-dag-caramel">Música Clásica</span>
            </h1>
            <p className="text-xl text-dag-caramel mb-8 leading-relaxed">
              Revolucionamos la industria musical con tecnología blockchain Polygon, NFTs y experiencias digitales únicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blockchain/tienda-nft"
                className="inline-flex items-center px-8 py-4 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300 hover:scale-105"
              >
                Explorar Tienda NFT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/blockchain/polygon-networks"
                className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300"
              >
                Conocer Polygon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Ventajas de Polygon
            </h2>
            <p className="text-xl text-dag-caramel max-w-3xl mx-auto">
              Tecnología de vanguardia que ofrece la mejor experiencia para usuarios y artistas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="text-center bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory"
                >
                  <div className="inline-flex p-4 bg-dag-golden/20 rounded-xl text-dag-burgundy mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-dag-caramel leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-dag-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-dag-ivory"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${section.gradient} text-dag-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
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
                  
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dag-burgundy">{section.stats.value}</div>
                      <div className="text-sm text-dag-caramel">{section.stats.label}</div>
                    </div>
                    <div className="inline-flex items-center text-dag-burgundy font-medium group-hover:text-dag-caramel transition-colors duration-300">
                      Explorar
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
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
            El Futuro es Blockchain
          </h2>
          <p className="text-xl text-dag-ivory/90 mb-8 max-w-2xl mx-auto">
            Únete a la revolución blockchain y descubre una nueva forma de coleccionar y disfrutar música clásica
          </p>
          <Link
            href="/blockchain/tienda-nft"
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