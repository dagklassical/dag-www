import Link from 'next/link'

export default function VirginiaRamirez() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dag-burgundy via-red-900 to-dag-burgundy text-dag-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Virginia <span className="text-dag-golden">Ramírez</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-dag-white">
            Soprano excepcional que une la tradición clásica con la sensibilidad contemporánea
          </p>
          <Link href="/contacto" className="btn-secondary">
            Descubre su Arte ✨
          </Link>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introducción */}
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Una Voz que Trasciende Épocas</h2>
            <p className="text-body text-lg max-w-4xl mx-auto">
              Virginia Ramírez representa la nueva generación de artistas clásicos que entienden que 
              la música tradicional debe evolucionar sin perder su esencia. Su interpretación única 
              de obras maestras ha cautivado audiencias en toda Europa.
            </p>
          </div>

          {/* Características destacadas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Repertorio Diverso</h3>
              <p className="text-body">
                Desde Barroco hasta Contemporary Classical, Virginia domina un amplio espectro 
                musical que incluye Verdi, Puccini, y compositores modernos como John Adams y 
                Kaija Saariaho.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Formación Internacional</h3>
              <p className="text-body">
                Formada en el Conservatorio de París y perfeccionada en La Scala de Milán, 
                su técnica vocal y sensibilidad artística la han posicionado como una de las 
                sopranos más prometedoras de su generación.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Innovación Escénica</h3>
              <p className="text-body">
                Virginia no solo interpreta, sino que reinventa la experiencia operística a través 
                de proyecciones audiovisuales y encuadres escénicos contemporáneos que mantienen 
                la esencia clásica intacta.
              </p>
            </div>
          </div>

          {/* Próximas presentaciones */}
          <div className="bg-dag-cream rounded-xl p-8 mb-16">
            <h2 className="heading-secondary text-center mb-8">Próximas Presentaciones</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-white">
                <h3 className="heading-secondary text-xl mb-4">Recital &quot;Clásicos del Siglo XXI&quot;</h3>
                <p className="text-body mb-2"><strong>Fecha:</strong> 25 de Noviembre, 2025</p>
                <p className="text-body mb-4"><strong>Lugar:</strong> Teatro Real de Madrid</p>
                <p className="text-body mb-4">
                  Un viaje único desde Monteverdi hasta John Adams, demostrando la evolución 
                  de la música clásica a través de cinco siglos.
                </p>
                <Link href="/eventos" className="btn-primary">
                  Reservar Entradas
                </Link>
              </div>
              
              <div className="card bg-white">
                <h3 className="heading-secondary text-xl mb-4">Masterclass: &quot;Técnica Vocal Moderna&quot;</h3>
                <p className="text-body mb-2"><strong>Fecha:</strong> 2 de Diciembre, 2025</p>
                <p className="text-body mb-4"><strong>Lugar:</strong> Conservatorio Superior de Música</p>
                <p className="text-body mb-4">
                  Una sesión exclusiva donde Virginia compartirá sus técnicas de interpretación 
                  y preparación vocal con estudiantes de canto lírico.
                </p>
                <Link href="/eventos" className="btn-secondary">
                  Más Información
                </Link>
              </div>
            </div>
          </div>

          {/* Filosofía artística */}
          <div className="text-center mb-12">
            <h2 className="heading-secondary">La Filosofía de Virginia</h2>
            <div className="bg-gradient-to-r from-dag-burgundy to-red-900 text-dag-white p-8 rounded-xl">
              <p className="text-lg italic mb-4">
                &quot;La música clásica no es historia estática, es un lenguaje vivo que debe hablar 
                a cada generación. Mi misión es ser el puente entre la grandeza del pasado y 
                las emociones del presente, manteniendo siempre el respeto por la tradición mientras 
                abrazo la innovación que el futuro nos invita a explorar.&quot;
              </p>
              <p className="text-dag-golden font-semibold">- Virginia Ramírez</p>
            </div>
          </div>

          {/* Enlaces relacionados */}
          <div className="text-center">
            <h2 className="heading-secondary mb-8">Explora Más</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/artistas" className="btn-secondary">Otros Artistas</Link>
              <Link href="/eventos" className="btn-primary">Próximos Eventos</Link>
              <Link href="/musica" className="btn-primary">Nuestro Repertorio</Link>
              <Link href="/contacto" className="btn-secondary">Contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
