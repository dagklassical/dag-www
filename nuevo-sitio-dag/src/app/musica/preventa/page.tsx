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
      benefits: [
        'Royalties perpetuos',
        'Acceso a preventa de futuros lanzamientos',
        'Comunidad exclusiva de coleccionistas'
      ],
      image: '/nft/mozart-40-nft.jpg',
      tier: 'exclusive'
    },
    {
      id: 2,
      title: 'Bach: Preludio y Fuga BWV 846',
      artist: 'Pianista Residente DAG',
      releaseDate: '2025-11-20',
      daysRemaining: 8,
      totalSupply: 500,
      remainingSupply: 89,
      price: '0.025 ETH',
      currencyPrice: '$62',
      category: 'Barroco',
      rarity: 'Epic',
      features: [
        'Interpretación única de 3 minutos',
        'Partitura manuscrita digital',
        'Video del proceso de grabación',
        'Análisis musical interactivo',
        'NFT con animación 3D'
      ],
      benefits: [
        'Dividendos por reproducciones',
        'Descuentos en conciertos',
        'Merchandising exclusivo'
      ],
      image: '/nft/bach-bwv846-nft.jpg',
      tier: 'premium'
    },
    {
      id: 3,
      title: 'Beethoven: Sonata Claro de Luna',
      artist: 'Ensemble DAG',
      releaseDate: '2025-11-25',
      daysRemaining: 13,
      totalSupply: 2000,
      remainingSupply: 234,
      price: '0.015 ETH',
      currencyPrice: '$38',
      category: 'Romanticismo',
      rarity: 'Rare',
      features: [
        'Grabación en vivo restringida',
        'Comentario del director de orquesta',
        'Notas del programa digital',
        'Postales de coleccionista',
        'Acceso temprano a próxima obra'
      ],
      benefits: [
        'Merchandising limitado',
        'Eventos de meet & greet',
        'Contenido exclusivo mensual'
      ],
      image: '/nft/beethoven-luna-nft.jpg',
      tier: 'standard'
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-yellow-100">
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
                Conocer Polygon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Tiers */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Niveles de NFT
            </h2>
            <p className="text-xl text-dag-caramel">
              Cada nivel ofrece beneficios únicos y contenido exclusivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier) => {
              const Icon = tier.icon
              return (
                <div
                  key={tier.name}
                  className="bg-dag-white rounded-xl p-6 shadow-lg border border-dag-ivory text-center"
                >
                  <div className={`inline-flex p-4 rounded-xl ${tier.color} mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-4">
                    {tier.name}
                  </h3>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-dag-caramel">
                        <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active Presales */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Preventas Activas
            </h2>
            <p className="text-xl text-dag-caramel">
              Tiempo limitado para adquirir las piezas más exclusivas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nftCollections.map((collection) => (
              <div
                key={collection.id}
                className={`bg-dag-white rounded-2xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-500 ${
                  collection.tier === 'exclusive' ? 'border-dag-golden' : 
                  collection.tier === 'premium' ? 'border-dag-caramel' : 'border-dag-ivory'
                }`}
              >
                {/* Tier Badge */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-dag-ivory to-dag-buttermilk flex items-center justify-center">
                    <Music className="w-24 h-24 text-dag-caramel" />
                  </div>
                  <div className="absolute top-4 left-4 bg-dag-burgundy text-dag-white px-3 py-1 rounded-full text-sm font-medium">
                    {collection.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-dag-golden text-dag-burgundy px-3 py-1 rounded-full text-sm font-bold">
                    {collection.rarity}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-dag-caramel mb-4">{collection.artist}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-dag-burgundy">{collection.daysRemaining}</div>
                      <div className="text-sm text-dag-caramel">días</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-dag-burgundy">{collection.remainingSupply}</div>
                      <div className="text-sm text-dag-caramel">disponibles</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-dag-caramel mb-2">
                      <span>Vendidos</span>
                      <span>{collection.totalSupply - collection.remainingSupply}/{collection.totalSupply}</span>
                    </div>
                    <div className="w-full bg-dag-ivory rounded-full h-2">
                      <div 
                        className="bg-dag-golden h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((collection.totalSupply - collection.remainingSupply) / collection.totalSupply) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-dag-burgundy">{collection.price}</div>
                    <div className="text-sm text-dag-caramel">≈ {collection.currencyPrice}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dag-burgundy mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {collection.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-dag-caramel">
                          <div className="w-1.5 h-1.5 bg-dag-golden rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dag-burgundy mb-2">Beneficios:</h4>
                    <ul className="space-y-1">
                      {collection.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-dag-caramel">
                          <Gift className="w-3 h-3 text-dag-golden mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-dag-burgundy text-dag-white py-3 rounded-xl font-medium hover:bg-dag-burgundy/90 transition-colors duration-300">
                      Comprar Ahora
                    </button>
                    <button className="px-4 py-3 border border-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300">
                      Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Info */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-6">
              Tecnología Polygon
            </h2>
            <p className="text-xl text-dag-caramel mb-8">
              Todos nuestros NFTs están respaldados por la red Polygon, garantizando transacciones rápidas y comisiones ultra bajas
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-dag-burgundy mb-2">< 0.01</div>
                <div className="text-dag-caramel">Comisión promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dag-burgundy mb-2">< 2s</div>
                <div className="text-dag-caramel">Tiempo de transacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dag-burgundy mb-2">100%</div>
                <div className="text-dag-caramel">Seguro y verificado</div>
              </div>
            </div>
            <Link
              href="/blockchain/polygon-networks"
              className="inline-flex items-center px-8 py-4 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300"
            >
              Conocer Polygon
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">12,450</div>
              <div className="text-dag-caramel">NFTs Vendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">3,890</div>
              <div className="text-dag-caramel">Coleccionistas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">2.3 ETH</div>
              <div className="text-dag-caramel">Volumen Total</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-dag-burgundy mb-2">98.5%</div>
              <div className="text-dag-caramel">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}