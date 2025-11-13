import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-cream to-dag-burgundy/10">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="title-elegant">Contacto</h1>
          <p className="text-xl text-dag-burgundy/80 max-w-3xl mx-auto">
            Ponte en contacto con nosotros para colaboraciones y consultas.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-dag-burgundy mr-4" />
              <div>
                <h3 className="font-semibold text-dag-burgundy">Email</h3>
                <p className="text-gray-700">contacto@dagklassical.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-dag-burgundy mr-4" />
              <div>
                <h3 className="font-semibold text-dag-burgundy">Teléfono</h3>
                <p className="text-gray-700">+58 (0212) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-dag-burgundy mr-4" />
              <div>
                <h3 className="font-semibold text-dag-burgundy">Ubicación</h3>
                <p className="text-gray-700">Caracas, Venezuela</p>
              </div>
            </div>
          </div>
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
