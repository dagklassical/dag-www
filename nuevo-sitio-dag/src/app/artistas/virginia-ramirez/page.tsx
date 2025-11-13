import Link from 'next/link'

export default function VirginiaRamirezPage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-dag-ivory shadow-sm border-b border-dag-golden">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-dag-burgundy hover:text-dag-caramel transition-colors">
              DAG Klassical
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/artistas" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
                Artistas
              </Link>
              <Link href="/eventos" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
                Eventos
              </Link>
              <Link
                href="/artistas/virginia-ramirez"
                className="btn-virginia"
              >
                Virginia • Estreno
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-max section-padding py-12">
        <div className="text-center">
          <h1 className="heading-primary">
            Virginia Ramírez
          </h1>
          <p className="text-2xl text-dag-caramel mb-12 font-medium">
            Nueva Artista Destacada • Estreno Exclusivo
          </p>
          
          <div className="card max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-body text-lg leading-relaxed">
                Estamos emocionados de presentar a <strong className="text-dag-burgundy">Virginia Ramírez</strong>, 
                una artista excepcional que se une a nuestro roster exclusivo de talentos clásicos 
                contemporáneos.
              </p>
              
              <div className="bg-dag-butmilk border-2 border-dag-golden rounded-xl p-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🎼</span>
                </div>
                <h3 className="heading-secondary text-dag-burgundy mb-4">Estreno Especial</h3>
                <p className="text-body text-lg">
                  Pronto encontrarás aquí el trabajo exclusivo y las interpretaciones únicas 
                  de Virginia Ramírez en nuestro catálogo de música clásica contemporánea.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/artistas"
                  className="btn-secondary"
                >
                  Ver Todos los Artistas
                </Link>
                <Link
                  href="/eventos"
                  className="btn-primary"
                >
                  Próximos Eventos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
