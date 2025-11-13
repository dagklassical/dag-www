import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          <h1 className="heading-primary">
            DAG Klassical
          </h1>
          <p className="text-2xl text-amber-800 mb-12 font-medium">
            Música Clásica Contemporánea • Talentos Exclusivos
          </p>
          
          <div className="card max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-body text-lg leading-relaxed">
                Bienvenido al mundo de <strong className="text-red-800">DAG Klassical</strong>, 
                donde la tradición y la innovación se encuentran para crear experiencias 
                musicales extraordinarias.
              </p>
              
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🎵</span>
                </div>
                <h3 className="heading-secondary text-red-800 mb-4">Novedades</h3>
                <p className="text-body text-lg">
                  Descubre a nuestros artistas exclusivos y los próximos eventos 
                  de música clásica contemporánea.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/artistas"
                  className="btn-primary"
                >
                  Ver Artistas
                </Link>
                <Link
                  href="/eventos"
                  className="btn-secondary"
                >
                  Próximos Eventos
                </Link>
                <Link
                  href="/artistas/virginia-ramirez"
                  className="btn-virginia"
                >
                  Virginia • Estreno
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
