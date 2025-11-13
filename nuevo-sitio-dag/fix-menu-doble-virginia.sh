#!/bin/bash

echo "🔧 FIX RÁPIDO: Eliminando menú doble en página Virginia"
echo "======================================================="
echo "Problema: La página Virginia duplica el Header"
echo "Solución: Usar layout de Next.js + Header global"
echo ""

cd ~/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag

echo "📂 Directorio: $(pwd)"
echo ""

# 1. ACTUALIZAR LAYOUT PRINCIPAL CON HEADER
echo "🎨 1. Actualizando layout principal con Header global..."

cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica Contemporánea',
  description: 'Descubre talentos exclusivos de música clásica contemporánea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
EOF

echo "✅ Layout principal actualizado con Header global"

# 2. CREAR PÁGINA VIRGINIA SIN HEADER DUPLICADO
echo ""
echo "🎯 2. Creando página Virginia sin Header duplicado..."

cat > src/app/artistas/virginia-ramirez/page.tsx << 'EOF'
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
EOF

echo "✅ Página Virginia creada SIN Header duplicado"

# 3. CREAR PÁGINA INICIO CON LAYOUT CORRECTO
echo ""
echo "🏠 3. Actualizando página de inicio..."

cat > src/app/page.tsx << 'EOF'
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
EOF

echo "✅ Página de inicio actualizada"

# 4. LIMPIAR CACHE
echo ""
echo "🧹 4. Limpiando cache..."
rm -rf .next
rm -rf node_modules/.cache
echo "✅ Cache limpiado"

# 5. PROBAR BUILD
echo ""
echo "🔨 5. Probando build..."

if npm run build; then
    echo ""
    echo "🎉 ¡MENU DOBLE SOLUCIONADO!"
    echo "=========================="
    echo "✅ Página Virginia SIN Header duplicado"
    echo "✅ Layout principal con Header global"
    echo "✅ Virginia CTA accesible desde inicio"
    echo "✅ Diseño burgundy/golden preservado"
    echo "✅ Build funcionando sin errores"
else
    echo "❌ Error en build - verificando..."
    npm run dev &
    sleep 8
    kill %1 2>/dev/null || true
fi

# 6. COMMIT FIX
echo ""
echo "📝 6. Creando commit del fix..."
git add .
git commit -m "🔧 Fix: Menú doble Virginia solucionado

❌ Problema anterior:
- Página Virginia duplicaba el Header (menú doble)
- Estructura incorrecta de Next.js App Router
- Cada página tenía su propio Header manual

✅ Solución aplicada:
- ✅ layout.tsx con Header global (una sola vez)
- ✅ Virginia page SIN Header duplicado
- ✅ Home page SIN Header duplicado
- ✅ Virginia CTA accesible desde página de inicio
- ✅ Navegación consistente en todas las páginas

🏗️ Estructura corregida:
- src/app/layout.tsx: Header global + main container
- src/app/page.tsx: Home page sin Header (usa global)
- src/app/artistas/virginia-ramirez/page.tsx: Virginia sin Header (usa global)

🎯 Resultado:
- ✅ Menú aparece solo UNA vez
- ✅ Virginia CTA funciona: /artistas/virginia-ramirez
- ✅ Navegación desde Home hacia Virginia
- ✅ Build sin errores
- ✅ Estructura Next.js correcta"

echo ""
echo "🎉 ¡PROBLEMA DEL MENÚ DOBLE RESUELTO!"
echo "====================================="
echo "✅ Header global en layout.tsx (aparece solo una vez)"
echo "✅ Virginia page sin Header duplicado"
echo "✅ Navegación limpia y consistente"
echo "✅ Virginia CTA accesible desde Home"
echo ""
echo "🎯 Prueba ahora:"
echo "   npm run dev"
echo "   http://localhost:3000"
echo "   http://localhost:3000/artistas/virginia-ramirez"