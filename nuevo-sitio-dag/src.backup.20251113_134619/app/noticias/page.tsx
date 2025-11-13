import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-cream to-dag-burgundy/10">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="title-elegant">Noticias Clásicas</h1>
          <p className="text-xl text-dag-burgundy/80 max-w-3xl mx-auto">
            Mantente al día con las últimas noticias del mundo de la música clásica.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <FileText className="w-20 h-20 text-dag-burgundy mx-auto mb-4" />
          <h2 className="title-section text-dag-burgundy mb-4">Próximamente</h2>
          <p className="text-gray-700">Sección de noticias en construcción</p>
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
