#!/bin/bash

echo "🔧 ARREGLANDO ERROR EN /blockchain - Unsupported Server Component type"
echo "=========================================================="

# Verificar si estamos en el directorio correcto
if [ ! -f "src/app/blockchain/page.tsx" ]; then
    echo "❌ Error: No se encuentra src/app/blockchain/page.tsx"
    echo "   Por favor ejecuta este script desde la raíz del proyecto Next.js"
    exit 1
fi

echo "📝 Arreglando src/app/blockchain/page.tsx..."
echo "   ✓ Cambiando font-playfair por title-section (Inter)"
echo "   ✓ Corrigiendo enlaces rotos a páginas inexistentes"

# Crear backup
cp src/app/blockchain/page.tsx src/app/blockchain/page.tsx.backup.$(date +%Y%m%d-%H%M%S)

# Aplicar correcciones
cat > src/app/blockchain/page.tsx << 'EOF'
import Link from 'next/link'
import { ArrowRight, Shield, Award, Music } from 'lucide-react'

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-ivory">
      <div className="container-max section-padding py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="title-elegant text-center text-shadow">
            Blockchain & Tecnología
          </h1>
          <p className="text-xl text-dag-caramel max-w-3xl mx-auto leading-relaxed">
            DAG Klassical integra tecnología blockchain para crear certificados digitales 
            auténticos de nuestras obras musicales y garantizar la autenticidad de cada interpretación.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="blockchain-card text-center">
            <div className="w-16 h-16 bg-dag-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-dag-burgundy" />
            </div>
            <h3 className="title-subsection mb-4">Certificados Digitales</h3>
            <p className="text-body">
              Cada interpretación musical cuenta con un certificado blockchain único 
              que garantiza su autenticidad y procedencia.
            </p>
          </div>

          <div className="blockchain-card text-center">
            <div className="w-16 h-16 bg-dag-golden/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-dag-golden" />
            </div>
            <h3 className="title-subsection mb-4">NFTs Musicales</h3>
            <p className="text-body">
              Colecciona ediciones limitadas y piezas únicas de música clásica 
              como activos digitales exclusivos.
            </p>
          </div>

          <div className="blockchain-card text-center">
            <div className="w-16 h-16 bg-dag-caramel/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-8 h-8 text-dag-caramel" />
            </div>
            <h3 className="title-subsection mb-4">Tecnología Polygon</h3>
            <p className="text-body">
              Utilizamos la red Polygon para transacciones rápidas, 
              seguras y eco-sostenibles.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-dag-burgundy to-dag-caramel rounded-xl p-8 md:p-12 text-center text-dag-white">
          <h2 className="title-section mb-4 text-dag-white">
            Explora el Futuro de la Música Clásica
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Descubre nuestras redes blockchain y colección de NFTs exclusivos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="inline-flex items-center justify-center bg-dag-golden text-dag-burgundy px-8 py-4 rounded-lg font-semibold hover:bg-dag-white transition-colors duration-300"
            >
              Contáctanos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/noticias"
              className="inline-flex items-center justify-center border-2 border-dag-white text-dag-white px-8 py-4 rounded-lg font-semibold hover:bg-dag-white hover:text-dag-burgundy transition-colors duration-300"
            >
              Noticias
              <Music className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

echo ""
echo "✅ CORRECCIONES APLICADAS EXITOSAMENTE"
echo "======================================"
echo ""
echo "🔧 Cambios realizados:"
echo "   • Font-playfair → title-section (Inter)"
echo "   • Enlaces rotos corregidos (/contacto y /noticias)"
echo "   • Backup creado: src/app/blockchain/page.tsx.backup.*"
echo ""
echo "🚀 AHORA PRUEBA:"
echo "   1. Ve a http://localhost:3000/blockchain"
echo "   2. Verifica que ya no hay errores"
echo "   3. Navega por el sitio para confirmar todo funciona"
echo ""
echo "💡 Si persiste el error, ejecuta 'npm run build' para ver errores específicos"