import { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Clock, Star, ArrowRight, Wallet, Gift, Shield, Crown, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preventa NFT - DAG Klassical',
  description: 'Accede a preventas exclusivas de NFTs musicales con contenido premium y ventajas únicas',
}

export default function PreventaPage() {
  const nftCollections = [
    {
      id: 1,
      title: 'Mozart: Sinfonía No. 40 - NFT Premium',
      artist: 'Orquesta Sinfónica DAG',
      releaseDate: '2025-11-15',
      daysRemaining: 3,
      totalSupply: 1000,
      remainingSupply: 127,
      price: '0.05 ETH',
      currencyPrice: '$125',
      category: 'Clasicismo',
      rarity: 'Legendary',
      features: [
        'Grabación exclusiva en alta resolución',
        'Partitura digital original firmada',
        'Contenido detrás de cámaras',
        'Acceso VIP a conciertos',
        'NFT coleccionable único'
      ],
      image: '/nft/mozart-40-nft.jpg',
      tier: 'legendary'
    },
    {
      id: 2,
      title: 'Beethoven: Claro de Luna - NFT Premium',
      artist: 'Virginia Ramírez',
      releaseDate: '2025-11-20',
      daysRemaining: 8,
      totalSupply: 500,
      remainingSupply: 89,
      price: '0.03 ETH',
      currencyPrice: '$75',
      category: 'Romanticismo',
      rarity: 'Epic',
      features: [
        'Interpretación exclusiva por Virginia Ramírez',
        'Video documental del proceso creativo',
        'Acceso a masterclass privada',
        'Certificado de autenticidad blockchain',
        'Merchandising físico exclusivo'
      ],
      image: '/nft/beethoven-moonlight-nft.jpg',
      tier: 'epic'
    },
    {
      id: 3,
      title: 'Tchaikovsky: Lago de los Cisnes - NFT Estándar',
      artist: 'Orquesta Sinfónica DAG',
      releaseDate: '2025-11-25',
      daysRemaining: 13,
      totalSupply: 2000,
      remainingSupply: 234,
      price: '0.01 ETH',
      currencyPrice: '$25',
      category: 'Romanticismo',
      rarity: 'Rare',
      features: [
        'Grabación en vivo del concierto',
        'Galería de fotos exclusivas',
        'Programa digital firmado',
        'Acceso básico a comunidad',
        'NFT coleccionable'
      ],
      image: '/nft/tchaikovsky-swan-nft.jpg',
      tier: 'rare'
    },
    {
      id: 4,
      title: 'Vivaldi: Cuatro Estaciones - NFT Premium',
      artist: 'Ensemble Barroco DAG',
      releaseDate: '2025-12-01',
      daysRemaining: 19,
      totalSupply: 750,
      remainingSupply: 145,
      price: '0.04 ETH',
      currencyPrice: '$100',
      category: 'Barroco',
      rarity: 'Legendary',
      features: [
        'Interpretación con instrumentos históricos',
        'Documental sobre música barroca',
        'Notas de programa personalizadas',
        'Evento de presentación exclusivo',
        'Acceso VIP a futuras interpretaciones'
      ],
      image: '/nft/vivaldi-seasons-nft.jpg',
      tier: 'legendary'
    },
    {
      id: 5,
      title: 'Debussy: Claro de Luna - NFT Estándar',
      artist: 'Virginia Ramírez',
      releaseDate: '2025-12-05',
      daysRemaining: 23,
      totalSupply: 1500,
      remainingSupply: 98,
      price: '0.015 ETH',
      currencyPrice: '$40',
      category: 'Impresionismo',
      rarity: 'Uncommon',
      features: [
        'Recital íntimo grabado',
        'Notas del programático musical',
        'Acceso a comunidad de coleccionistas',
        'Contenido multimedia adicional',
        'NFT coleccionable verificable'
      ],
      image: '/nft/debussy-moonlight-nft.jpg',
      tier: 'uncommon'
    }
  ]

  const tiers = [
    {
      name: 'Estándar',
      icon: Shield,
      color: 'text-blue-600 bg-blue-100',
      benefits: ['NFT coleccionable', 'Contenido digital', 'Acceso básico']
    },
    {
      name: 'Premium',
      icon: Star,
      color: 'text-purple-600 bg-purple-100',
      benefits: ['NFT exclusivo', 'Merchandising', 'Eventos especiales']
    },
    {
      name: 'Legendario',
      icon: Crown,
      color: 'text-amber-600 bg-amber-100',
      benefits: ['NFT único', 'Royalties', 'VIP completo']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-white">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Preventa NFT Exclusiva
            </div>
            <h1 className="text-4xl lg:text-5xl font-light mb-4">
              NFTs de Música Clásica
            </h1>
            <p className="text-xl text-dag-ivory/90 max-w-3xl mx-auto mb-8">
              Colecciona piezas únicas de música clásica en formato NFT con contenido exclusivo y beneficios únicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300">
                <Wallet className="mr-2 w-5 h-5" />
                Conectar Wallet
              </button>
              <Link
                href="/blockchain/polygon-networks"
                className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-white rounded-xl font-medium hover:bg-dag-white hover:text-dag-burgundy transition-all duration-300"
              >
                Ver Plataformas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-12 bg-dag-cream">
        <div className="container-max section-padding">
          <div className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Días', value: '3', icon: Clock },
                { label: 'Horas', value: '12', icon: Zap },
                { label: 'Minutos', value: '45', icon: Star },
                { label: 'Segundos', value: '30', icon: Gift }
              ].map((time, index) => (
                <div key={index} className="bg-dag-burgundy/5 rounded-xl p-6">
                  <time.icon className="w-8 h-8 text-dag-burgundy mx-auto mb-3" />
                  <div className="text-3xl font-bold text-dag-burgundy mb-1">{time.value}</div>
                  <div className="text-dag-caramel font-medium">{time.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NFT Collections */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Colecciones Disponibles
            </h2>
            <p className="text-dag-caramel text-lg max-w-2xl mx-auto">
              Piezas maestras seleccionadas con contenido exclusivo y beneficios únicos
            </p>
          </div>

          <div className="grid gap-8">
            {nftCollections.map((collection) => (
              <div key={collection.id} className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-dag-burgundy/10 to-dag-caramel/20 flex items-center justify-center">
                      <div className="text-dag-burgundy/30">
                        <Music className="w-20 h-20" />
                        <p className="text-sm mt-2">NFT Preview</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold text-dag-burgundy mb-2">
                          {collection.title}
                        </h3>
                        <p className="text-dag-caramel font-medium">{collection.artist}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <span className="inline-flex items-center px-3 py-1 bg-dag-golden/10 text-dag-burgundy rounded-full text-sm font-medium">
                            {collection.category}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-dag-burgundy/10 text-dag-burgundy rounded-full text-sm font-medium">
                            {collection.rarity}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-3xl font-bold text-dag-burgundy mb-1">
                          {collection.price}
                        </div>
                        <div className="text-dag-caramel">
                          {collection.currencyPrice}
                        </div>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-dag-burgundy mb-3">Beneficios Incluidos</h4>
                        <ul className="space-y-2">
                          {collection.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-dag-caramel">
                              <Star className="w-4 h-4 text-dag-golden mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-dag-burgundy mb-3">Disponibilidad</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-dag-caramel">Tiempo restante:</span>
                            <span className="font-medium text-dag-burgundy">
                              {collection.daysRemaining} días
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-dag-caramel">Disponibles:</span>
                            <span className="font-medium text-dag-burgundy">
                              {collection.remainingSupply} / {collection.totalSupply}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-dag-burgundy text-dag-white px-6 py-3 rounded-xl font-semibold hover:bg-dag-burgundy/90 transition-all duration-300">
                        Comprar Ahora
                      </button>
                      <button className="flex-1 border border-dag-burgundy text-dag-burgundy px-6 py-3 rounded-xl font-medium hover:bg-dag-burgundy hover:text-dag-white transition-all duration-300">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 bg-dag-cream">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Tipos de Tier
            </h2>
            <p className="text-dag-caramel text-lg max-w-2xl mx-auto">
              Diferentes niveles de exclusividad y beneficios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className="bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20 p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${tier.color} mb-6`}>
                  <tier.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dag-burgundy mb-4">{tier.name}</h3>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center text-dag-caramel">
                      <Star className="w-4 h-4 text-dag-golden mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-white">
            <h2 className="text-3xl lg:text-4xl font-light mb-6">
              Únete a la Revolución Musical
            </h2>
            <p className="text-xl text-dag-ivory/90 max-w-2xl mx-auto mb-8">
              Sé parte de una nueva era donde la música clásica se encuentra con la tecnología blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300">
                <Wallet className="mr-2 w-5 h-5" />
                Comenzar Ahora
              </button>
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-white rounded-xl font-medium hover:bg-dag-white hover:text-dag-burgundy transition-all duration-300"
              >
                Más Información
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
