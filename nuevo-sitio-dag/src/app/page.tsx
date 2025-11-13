import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            DAG <span className="highlight">KLASSICAL</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--dag-white)' }}>
            Donde la tradición clásica encuentra la innovación contemporánea
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/eventos" className="btn btn-secondary">
              Ver Eventos 🎭
            </Link>
            <Link href="/artistas" className="btn" style={{ backgroundColor: 'transparent', color: 'var(--dag-white)', border: '2px solid var(--dag-golden)' }}>
              Conocer Artistas
            </Link>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Nuestra Misión</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#666' }}>
              Elevar la experiencia musical clásica a través de presentaciones excepcionales, 
              artistas de clase mundial y una conexión auténtica entre la música y la audiencia.
            </p>
          </div>

          <div className="cards">
            <div className="card text-center">
              <h3>Artistas Excepcionales</h3>
              <p>
                Colaboramos con músicos de renombre internacional que aportan 
                técnica magistral y sensibilidad artística única.
              </p>
            </div>
            
            <div className="card text-center">
              <h3>Experiencias Memorables</h3>
              <p>
                Cada evento está cuidadosamente diseñado para crear momentos 
                de conexión emocional profunda con la música clásica.
              </p>
            </div>
            
            <div className="card text-center">
              <h3>Innovación Respetuosa</h3>
              <p>
                Adaptamos la música clásica al presente sin perder su esencia, 
                haciendo que cada pieza resuene con audiencias contemporáneas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Últimas Noticias</h2>
            <p style={{ color: '#666' }}>Mantente al día con nuestros últimos eventos y novedades</p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Nueva Colaboración con Virginia Ramírez</h3>
              <p>
                Nos complace anunciar la incorporación de la soprano Virginia Ramírez 
                a nuestro elenco de artistas. Su interpretación única de repertorio 
                clásico y contemporáneo promete cautivar a nuestras audiencias.
              </p>
              <Link href="/artistas/virginia-ramirez" className="btn btn-primary mt-2" style={{ display: 'inline-block' }}>
                Conocer a Virginia
              </Link>
            </div>
            
            <div className="card">
              <h3>Temporada 2025 Confirmada</h3>
              <p>
                Hemos confirmado una temporada excepcional con 12 conciertos exclusivos, 
                masterclasses y eventos especiales que celebrarán lo mejor de la música clásica.
              </p>
              <Link href="/eventos" className="btn btn-secondary mt-2" style={{ display: 'inline-block' }}>
                Ver Programación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>¿Listo para la Experiencia DAG Klassical?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
            Descubre cómo la música clásica puede transformar tu percepción del arte y la belleza
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/eventos" className="btn btn-primary">
              Ver Próximos Eventos
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
