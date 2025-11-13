import Link from 'next/link'

export default function VirginiaRamirezPage() {
  return (
    <div className="min-h-screen gradient-bg py-12">
      {/* Solo el contenido - Header ya está en layout.tsx */}
      <div className="container-max section-padding">
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
      </div>
    </div>
  )
}
