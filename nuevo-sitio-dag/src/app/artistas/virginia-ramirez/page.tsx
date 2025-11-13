import Link from 'next/link'

export default function VirginiaRamirezPage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-orange-50 shadow-sm border-b border-yellow-400">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-red-800 hover:text-amber-800 transition-colors">
              DAG Klassical
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/artistas" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
                Artistas
              </Link>
              <Link href="/eventos" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
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
          <p className="text-2xl text-amber-800 mb-12 font-medium">
            Nueva Artista Destacada • Estreno Exclusivo
          </p>
          
          <div className="card max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-body text-lg leading-relaxed">
                Estamos emocionados de presentar a <strong className="text-red-800">Virginia Ramírez</strong>, 
                una artista excepcional que se une a nuestro roster exclusivo de talentos clásicos 
                contemporáneos.
              </p>
              
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🎼</span>
                </div>
                <h3 className="heading-secondary text-red-800 mb-4">Estreno Especial</h3>
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
