import Link from 'next/link';
import { Palette, Award, MapPin } from 'lucide-react';

export default function ArtistasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-cream to-dag-burgundy/10">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="title-elegant">Artistas & Compositores</h1>
          <p className="text-xl text-dag-burgundy/80 max-w-3xl mx-auto">
            Conoce a los artistas visionarios que han definido el panorama de la música clásica y las artes.
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <Palette className="w-20 h-20 text-dag-burgundy mx-auto mb-4" />
            <h2 className="title-section text-dag-burgundy mb-4">Virginia Ramírez</h2>
            <p className="text-gray-700 mb-6">Artista Visual Contemporánea</p>
            <Link href="/blockchain/tienda-nft" className="btn-dag-primary">
              Ver Colección NFT
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="btn-dag-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
