import Link from 'next/link'
import { Music, Award, Users, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-ivory">
      {/* Hero Section */}
      <section className="container-max section-padding py-20">
        <div className="text-center">
          <h1 className="title-elegant text-center text-shadow">
            Música Clásica Premium
          </h1>
          <p className="text-xl text-dag-caramel max-w-4xl mx-auto mb-12 leading-relaxed">
            DAG Klassical presenta las mejores interpretaciones de música clásica contemporánea y tradicional, 
            conectando artistas de clase mundial con audiencias globales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/artistas" 
              className="btn-primary inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Conoce a Nuestros Artistas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/blockchain" 
              className="btn-secondary inline-flex items-center"
            >
              <Award className="w-5 h-5 mr-2" />
              Tecnología Blockchain
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dag-white py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="title-section text-center mb-6">¿Por qué DAG Klassical?</h2>
            <p className="text-xl text-dag-caramel max-w-3xl mx-auto leading-relaxed">
              Combinamos la tradición de la música clásica con tecnología de vanguardia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-dag-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8 text-dag-burgundy" />
              </div>
              <h3 className="title-subsection mb-4">Calidad Premium</h3>
              <p className="text-body">
                Grabaciones de alta fidelidad realizadas por artistas de renombre mundial 
                en estudios profesionales.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-dag-golden/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-dag-golden" />
              </div>
              <h3 className="title-subsection mb-4">Autenticidad Certificada</h3>
              <p className="text-body">
                Cada interpretación cuenta con certificación blockchain que garantiza 
                su autenticidad e integridad.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-dag-caramel/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-dag-caramel" />
              </div>
              <h3 className="title-subsection mb-4">Comunidad Global</h3>
              <p className="text-body">
                Únete a una comunidad internacional de amantes de la música clásica 
                y coleccionistas de arte digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virginia CTA Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="bg-gradient-to-r from-dag-burgundy to-dag-caramel rounded-2xl p-8 md:p-12 text-center text-dag-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Destacada del Mes
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Descubre la interpretación única de Virginia Ramírez
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/virginia-ramirez"
                className="inline-flex items-center bg-dag-golden text-dag-burgundy px-8 py-4 rounded-lg font-semibold hover:bg-dag-white transition-colors duration-300"
              >
                <Music className="mr-2 w-5 h-5" />
                Virginia Ramírez
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
