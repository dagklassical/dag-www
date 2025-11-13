import Link from 'next/link'

export default function VirginiaPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            Virginia Ramírez
          </h1>
          <div className="bg-red-50 p-4 rounded-lg inline-block">
            <p className="text-red-800 text-lg">
              🎵 Nueva artista protagonista de DAG Klassical
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <p className="text-gray-700 text-lg mb-4">
            Página en construcción - Artista en estreno
          </p>
          <p className="text-gray-600">
            Esta página se actualizará pronto con información completa sobre Virginia Ramírez.
          </p>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/" 
            className="text-red-800 hover:text-red-600 underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
