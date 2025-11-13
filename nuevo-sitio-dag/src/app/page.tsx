import { Metadata } from 'next'
import Link from 'next/link'
import { Music, Users, Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica Premium',
  description: 'Plataforma premium de música clásica con NFTs y tecnología blockchain',
}

export default function HomePage() {
  return (
    <div className="bg-dag-ivory min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dag-burgundy via-dag-burgundy/90 to-dag-caramel overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-max section-padding">
          <div className="text-center text-dag-white py-24 lg:py-32">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <Music className="w-4 h-4 mr-2" />
              Música Clásica Premium
            </div>
            <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
              DAG
              <span className="text-dag-golden"> Klassical</span>
            </h1>
            <p className="text-xl lg:text-2xl text-dag-ivory/90 max-w-3xl mx-auto mb-8">
              Redefiniendo la experiencia de la música clásica a través de la tecnología blockchain y NFTs exclusivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/artistas"
                className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300"
              >
                <Music className="mr-2 w-5 h-5" />
                Explorar Artistas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/blockchain"
                className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-white rounded-xl font-medium hover:bg-dag-white hover:text-dag-burgundy transition-all duration-300"
              >
                <Users className="mr-2 w-5 h-5" />
                Blockchain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Revolucionando la Música Clásica
            </h2>
            <p className="text-dag-caramel text-lg max-w-2xl mx-auto">
              Tecnología blockchain al servicio del arte y la cultura musical
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20">
              <Music className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dag-burgundy mb-4">Música Premium</h3>
              <p className="text-dag-caramel">Grabaciones de alta calidad con artistas de élite mundial</p>
            </div>
            
            <div className="text-center p-8 bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20">
              <Users className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dag-burgundy mb-4">Blockchain & NFTs</h3>
              <p className="text-dag-caramel">Colecciones digitales certificadas con tecnología avanzada</p>
            </div>
            
            <div className="text-center p-8 bg-dag-white rounded-2xl shadow-xl border border-dag-golden/20">
              <Calendar className="w-12 h-12 text-dag-burgundy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dag-burgundy mb-4">Experiencias Únicas</h3>
              <p className="text-dag-caramel">Eventos exclusivos y contenido premium para coleccionistas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
