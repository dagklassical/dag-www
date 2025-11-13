import Link from 'next/link';
import { Music } from 'lucide-react';

export default function CompositoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-cream to-dag-burgundy/10">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="title-elegant">Compositores Clásicos</h1>
          <p className="text-xl text-dag-burgundy/80 max-w-3xl mx-auto">
            Los gigantes de la música clásica que han definido la historia musical.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Beethoven', 'Bach', 'Mozart'].map((comp) => (
            <div key={comp} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Music className="w-16 h-16 text-dag-burgundy mx-auto mb-4" />
              <h3 className="title-section text-dag-burgundy mb-2">{comp}</h3>
              <p className="text-gray-700">Compositor Clásico</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="btn-dag-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
