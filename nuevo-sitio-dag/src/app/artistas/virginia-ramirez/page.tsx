import Link from 'next/link'

export default function VirginiaRamirez() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Virginia <span className="highlight">Ramírez</span>
          </h1>
          <p className="text-center" style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--dag-white)' }}>
            Soprano excepcional que une la tradición clásica con la sensibilidad contemporánea
          </p>
          <Link href="/contacto" className="btn btn-secondary">
            Descubre su Arte ✨
          </Link>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Introducción */}
            <div className="text-center mb-8">
              <h2>Una Voz que Trasciende Épocas</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                Virginia Ramírez representa la nueva generación de artistas clásicos que entienden que 
                la música tradicional debe evolucionar sin perder su esencia. Su interpretación única 
                de obras maestras ha cautivado audiencias en toda Europa.
              </p>
            </div>

            {/* Características destacadas */}
            <div className="cards">
              <div className="card">
                <h3>Repertorio Diverso</h3>
                <p>
                  Desde Barroco hasta Contemporary Classical, Virginia domina un amplio espectro 
                  musical que incluye Verdi, Puccini, y compositores modernos como John Adams y 
                  Kaija Saariaho.
                </p>
              </div>
              
              <div className="card">
                <h3>Formación Internacional</h3>
                <p>
                  Formada en el Conservatorio de París y perfeccionada en La Scala de Milán, 
                  su técnica vocal y sensibilidad artística la han posicionado como una de las 
                  sopranos más prometedoras de su generación.
                </p>
              </div>
              
              <div className="card">
                <h3>Innovación Escénica</h3>
                <p>
                  Virginia no solo interpreta, sino que reinventa la experiencia operística a través 
                  de proyecciones audiovisuales y encuadres escénicos contemporáneos que mantienen 
                  la esencia clásica intacta.
                </p>
              </div>
            </div>

            {/* Próximas presentaciones */}
            <div className="section" style={{ backgroundColor: 'var(--dag-cream)', margin: '4rem 0', borderRadius: '12px' }}>
              <div className="container">
                <h2 className="text-center mb-6">Próximas Presentaciones</h2>
                
                <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ background: 'var(--dag-white)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <h3>Recital "Clásicos del Siglo XXI"</h3>
                    <p><strong>Fecha:</strong> 25 de Noviembre, 2025</p>
                    <p><strong>Lugar:</strong> Teatro Real de Madrid</p>
                    <p>Un viaje único desde Monteverdi hasta John Adams, demostrando la evolución 
                    de la música clásica a través de cinco siglos.</p>
                    <Link href="/eventos" className="btn btn-primary mt-2" style={{ display: 'inline-block' }}>
                      Reservar Entradas
                    </Link>
                  </div>
                  
                  <div style={{ background: 'var(--dag-white)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <h3>Masterclass: "Técnica Vocal Moderna"</h3>
                    <p><strong>Fecha:</strong> 2 de Diciembre, 2025</p>
                    <p><strong>Lugar:</strong> Conservatorio Superior de Música</p>
                    <p>Una sesión exclusiva donde Virginia compartirá sus técnicas de interpretación 
                    y preparación vocal con estudiantes de canto lírico.</p>
                    <Link href="/eventos" className="btn btn-secondary mt-2" style={{ display: 'inline-block' }}>
                      Más Información
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Filosofía artística */}
            <div className="text-center mt-8">
              <h2>La Filosofía de Virginia</h2>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--dag-burgundy), #a0002a)', 
                color: 'var(--dag-white)',
                padding: '3rem 2rem',
                borderRadius: '12px',
                margin: '2rem 0'
              }}>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '0' }}>
                  "La música clásica no es historia estática, es un lenguaje vivo que debe hablar 
                  a cada generación. Mi misión es ser el puente entre la grandeza del pasado y 
                  las emociones del presente, manteniendo siempre el respeto por la tradición mientras 
                  abrazo la innovación que el futuro nos invita a explorar."
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--dag-golden)', fontWeight: '500' }}>
                  - Virginia Ramírez
                </p>
              </div>
            </div>

            {/* Enlaces relacionados */}
            <div className="text-center mt-8">
              <h2>Explora Más</h2>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/artistas" className="btn btn-secondary">
                  Otros Artistas
                </Link>
                <Link href="/eventos" className="btn btn-primary">
                  Próximos Eventos
                </Link>
                <Link href="/musica" className="btn btn-primary">
                  Nuestro Repertorio
                </Link>
                <Link href="/contacto" className="btn btn-secondary">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
