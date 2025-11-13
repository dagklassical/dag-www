import { Metadata } from 'next'
import Link from 'next/link'
import { Network, Zap, Shield, DollarSign, Globe, ArrowRight, CheckCircle, Cpu, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Polygon Networks - DAG Klassical',
  description: 'Tecnología blockchain Polygon para transacciones rápidas, seguras y con comisiones ultra bajas',
}

export default function PolygonNetworksPage() {
  const polygonFeatures = [
    {
      icon: Zap,
      title: 'Transacciones Ultra Rápidas',
      description: 'Confirmaciones en menos de 2 segundos',
      stats: '< 2s',
      statsLabel: 'Tiempo de confirmación'
    },
    {
      icon: DollarSign,
      title: 'Comisiones Mínimas',
      description: 'Gas fees de menos de 1 centavo de dólar',
      stats: '< $0.01',
      statsLabel: 'Comisión promedio'
    },
    {
      icon: Shield,
      title: 'Máxima Seguridad',
      description: 'Seguridad Ethereum con escalabilidad mejorada',
      stats: '100%',
      statsLabel: 'Seguro y verificado'
    },
    {
      icon: Globe,
      title: 'Escalabilidad Global',
      description: 'Soporta millones de transacciones por segundo',
      stats: '100K+',
      statsLabel: 'TPS máximo'
    }
  ]

  const useCases = [
    {
      title: 'NFTs Musicales',
      description: 'Minting y trading de NFTs de música clásica con costos ultra bajos',
      benefits: ['Minting instantáneo', 'Comisiones mínimas', 'Interoperabilidad total']
    },
    {
      title: 'Tickets Digitales',
      description: 'Tickets de conciertos y eventos como NFTs verificables',
      benefits: ['Anti-falsificación', 'Transferibilidad', 'Historial verificable']
    },
    {
      title: 'Royalties Automáticos',
      description: 'Distribución automática de royalties a artistas por reproducciones',
      benefits: ['Pagos automáticos', 'Transparencia total', 'Sin intermediarios']
    },
    {
      title: 'Preventa NFT',
      description: 'Sistemas de preventa y lanzamiento exclusivo para coleccionistas',
      benefits: ['Acceso garantizado', 'Distribución justa', 'Precios transparentes']
    }
  ]

  const technicalSpecs = [
    { label: 'Consenso', value: 'Proof of Stake (PoS)' },
    { label: 'EVM Compatible', value: '100% compatible' },
    { label: 'Latencia', value: '1.5-2.5 segundos' },
    { label: 'Throughput', value: '65,000+ TPS' },
    { label: 'Finalidad', value: 'Bloques finales en 2-3 segundos' },
    { label: 'Gas Fee', value: '0.000001-0.01 MATIC' },
    { label: 'Bloque Time', value: '2 segundos' },
    { label: 'Compatibilidad', value: 'Herramientas Ethereum' }
  ]

  const integrations = [
    { name: 'MetaMask', status: 'Conectado', type: 'Wallet' },
    { name: 'OpenSea', status: 'Disponible', type: 'Marketplace' },
    { name: 'QuickSwap', status: 'Activo', type: 'DEX' },
    { name: 'PolygonScan', status: 'Funcional', type: 'Blockchain Explorer' },
    { name: 'Remix', status: 'Compatible', type: 'IDE' },
    { name: 'Alchemy', status: 'API Activa', type: 'Infraestructura' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-white">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              Tecnología Polygon
            </div>
            <h1 className="text-4xl lg:text-5xl font-light mb-4">
              Polygon Networks
            </h1>
            <p className="text-xl text-dag-ivory/90 max-w-3xl mx-auto">
              La red blockchain de layer 2 que potencia todas nuestras soluciones musicales con velocidad y eficiencia sin precedentes
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Por Qué Polygon
            </h2>
            <p className="text-xl text-dag-caramel max-w-3xl mx-auto">
              Ventajas técnicas que revolucionan la experiencia de usuarios en el ecosistema musical blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {polygonFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex p-4 bg-dag-golden/20 rounded-xl text-dag-burgundy mb-6">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-dag-caramel mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="border-t border-dag-ivory pt-4">
                    <div className="text-3xl font-bold text-dag-burgundy mb-1">{feature.stats}</div>
                    <div className="text-sm text-dag-caramel">{feature.statsLabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Casos de Uso Musical
            </h2>
            <p className="text-xl text-dag-caramel">
              Aplicaciones específicas de Polygon en el ecosistema musical DAG Klassical
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory"
              >
                <h3 className="text-2xl font-semibold text-dag-burgundy mb-4">
                  {useCase.title}
                </h3>
                <p className="text-dag-caramel mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-dag-caramel">
                      <CheckCircle className="w-5 h-5 text-dag-golden mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Especificaciones Técnicas
            </h2>
            <p className="text-xl text-dag-caramel">
              Detalles técnicos completos de la implementación de Polygon en DAG Klassical
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec) => (
              <div
                key={spec.label}
                className="bg-dag-white rounded-lg p-6 shadow-lg border border-dag-ivory text-center"
              >
                <div className="text-lg font-semibold text-dag-burgundy mb-2">{spec.label}</div>
                <div className="text-dag-caramel font-mono text-sm">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://polygon.technology/"
              className="inline-flex items-center px-8 py-4 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300"
            >
              Documentación Completa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Integraciones Activas
            </h2>
            <p className="text-xl text-dag-caramel">
              Ecosistema completo de herramientas y servicios integrados con Polygon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-dag-white rounded-lg p-6 shadow-lg border border-dag-ivory flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-dag-burgundy mb-1">{integration.name}</h3>
                  <div className="text-sm text-dag-caramel">{integration.type}</div>
                </div>
                <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  integration.status === 'Conectado' || integration.status === 'Activo' || integration.status === 'Funcional' || integration.status === 'Compatible' || integration.status === 'API Activa'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  <div className="w-2 h-2 bg-current rounded-full mr-2"></div>
                  {integration.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Métricas de Rendimiento
            </h2>
            <p className="text-xl text-dag-caramel">
              Estadísticas reales del rendimiento de nuestras implementaciones en Polygon
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory">
              <Cpu className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <div className="text-3xl font-bold text-dag-burgundy mb-2">98.7%</div>
              <div className="text-dag-caramel">Uptime de Red</div>
            </div>
            <div className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory">
              <Clock className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <div className="text-3xl font-bold text-dag-burgundy mb-2">1.8s</div>
              <div className="text-dag-caramel">Tiempo Promedio</div>
            </div>
            <div className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory">
              <DollarSign className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <div className="text-3xl font-bold text-dag-burgundy mb-2">$0.003</div>
              <div className="text-dag-caramel">Costo Promedio</div>
            </div>
            <div className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory">
              <Network className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <div className="text-3xl font-bold text-dag-burgundy mb-2">12,450</div>
              <div className="text-dag-caramel">Transacciones Totales</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-dag-white mb-6">
            Comienza con Polygon Hoy
          </h2>
          <p className="text-xl text-dag-ivory/90 mb-8 max-w-2xl mx-auto">
            Únete a la revolución blockchain con la tecnología más avanzada para NFTs musicales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blockchain/tienda-nft"
              className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300 hover:scale-105"
            >
              Explorar NFTs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-white rounded-xl font-medium hover:bg-dag-white hover:text-dag-burgundy transition-all duration-300"
            >
              Consultoría Técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}