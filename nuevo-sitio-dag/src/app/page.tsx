import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dag-burgundy via-red-900 to-dag-burgundy text-dag-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            DAG <span className="text-dag-golden">KLASSICAL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Donde la tradición clásica encuentra la innovación contemporánea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eventos" className="btn-secondary">
              Ver Eventos 🎭
            </Link>
            <Link href="/artistas" className="bg-transparent border-2 border-dag-golden text-dag-golden hover:bg-dag-golden hover:text-dag-burgundy px-6 py-3 rounded-lg font-medium transition-all">
              Conocer Artistas
            </Link>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-16 bg-dag-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Nuestra Misión</h2>
            <p className="text-body text-lg max-w-4xl mx-auto">
              Elevar la experiencia musical clásica a través de presentaciones excepcionales, 
              artistas de clase mundial y una conexión auténtica entre la música y la audiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="heading-secondary text-xl mb-4">Artistas Excepcionales</h3>
              <p className="text-body">
                Colaboramos con músicos de renombre internacional que aportan 
                técnica magistral y sensibilidad artística única.
              </p>
            </div>
            
            <div className="card text-center">
              <h3 className="heading-secondary text-xl mb-4">Experiencias Memorables</h3>
              <p className="text-body">
                Cada evento está cuidadosamente diseñado para crear momentos 
                de conexión emocional profunda con la música clásica.
              </p>
            </div>
            
            <div className="card text-center">
              <h3 className="heading-secondary text-xl mb-4">Innovación Respetuosa</h3>
              <p className="text-body">
                Adaptamos la música clásica al presente sin perder su esencia, 
                haciendo que cada pieza resuene con audiencias contemporáneas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Últimas Noticias</h2>
            <p className="text-body">Mantente al día con nuestros últimos eventos y novedades</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Nueva Colaboración con Virginia Ramírez</h3>
              <p className="text-body mb-4">
                Nos complace anunciar la incorporación de la soprano Virginia Ramírez 
                a nuestro elenco de artistas. Su interpretación única de repertorio 
                clásico y contemporáneo promete cautivar a nuestras audiencias.
              </p>
              <Link href="/artistas/virginia-ramirez" className="btn-primary">
                Conocer a Virginia
              </Link>
            </div>
            
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Temporada 2025 Confirmada</h3>
              <p className="text-body mb-4">
                Hemos confirmado una temporada excepcional con 12 conciertos exclusivos, 
                masterclasses y eventos especiales que celebrarán lo mejor de la música clásica.
              </p>
              <Link href="/eventos" className="btn-secondary">
                Ver Programación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dag-cream">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary mb-6">¿Listo para la Experiencia DAG Klassical?</h2>
          <p className="text-body text-lg mb-8">
            Descubre cómo la música clásica puede transformar tu percepción del arte y la belleza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eventos" className="btn-primary">
              Ver Próximos Eventos
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
