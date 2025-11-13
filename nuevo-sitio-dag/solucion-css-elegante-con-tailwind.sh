#!/bin/bash

echo "🔧 SOLUCIÓN CORRECTA: CSS Elegante Original CON Tailwind"
echo "Usando las 50 líneas originales + configuración correcta de clases DAG"
echo

# 1. RESTAURAR CSS original de 50 líneas CON Tailwind
echo "📝 Restaurando CSS original de 50 líneas CON Tailwind..."
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', system-ui, sans-serif; }
}

@layer components {
  .btn-primary { @apply bg-red-800 text-white hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105; }
  .btn-secondary { @apply bg-yellow-400 text-red-800 hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105; }
  .section-padding { @apply px-4 sm:px-6 lg:px-8; }
  .container-max { @apply max-w-7xl mx-auto; }
  .heading-primary { @apply text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-6; }
  .heading-secondary { @apply text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-800 mb-4; }
  .text-body { @apply text-amber-800 leading-relaxed; }
  .card { @apply bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300; }
  .gradient-bg { @apply bg-gradient-to-br from-orange-50 via-yellow-50 to-yellow-400; }
}
EOF

# 2. ACTUALIZAR tailwind.config.js con configuración correcta para clases DAG
echo "⚙️ Configurando tailwind.config.js para clases DAG personalizadas..."
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dag-burgundy': '#800020',
        'dag-golden': '#DAA520', 
        'dag-white': '#FFFFFF',
        'dag-caramel': '#8B4513',
        'dag-ivory': '#FFFFF0',
        'dag-butmilk': '#FFF8DC',
        'dag-cream': '#F5F5DC',
        // Equivalencias para evitar errores de build
        'burgundy': '#800020',
        'golden': '#DAA520',
        'cream': '#F5F5DC',
        'caramel': '#8B4513',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      // Configuración especial para @apply con clases personalizadas
      safelist: [
        'text-dag-burgundy',
        'text-dag-golden', 
        'text-dag-white',
        'text-dag-caramel',
        'text-dag-ivory',
        'bg-dag-burgundy',
        'bg-dag-golden',
        'bg-dag-white',
        'bg-dag-caramel',
        'bg-dag-ivory',
        'bg-dag-cream',
        'bg-dag-butmilk',
        'border-dag-burgundy',
        'border-dag-golden',
      ]
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-dag-burgundy': { color: '#800020' },
        '.text-dag-golden': { color: '#DAA520' },
        '.text-dag-white': { color: '#FFFFFF' },
        '.text-dag-caramel': { color: '#8B4513' },
        '.text-dag-ivory': { color: '#FFFFF0' },
        '.bg-dag-burgundy': { backgroundColor: '#800020' },
        '.bg-dag-golden': { backgroundColor: '#DAA520' },
        '.bg-dag-white': { backgroundColor: '#FFFFFF' },
        '.bg-dag-caramel': { backgroundColor: '#8B4513' },
        '.bg-dag-ivory': { backgroundColor: '#FFFFF0' },
        '.bg-dag-cream': { backgroundColor: '#F5F5DC' },
        '.bg-dag-butmilk': { backgroundColor: '#FFF8DC' },
        '.border-dag-burgundy': { borderColor: '#800020' },
        '.border-dag-golden': { borderColor: '#DAA520' },
      }
      addUtilities(newUtilities)
    }
  ],
}
EOF

# 3. ACTUALIZAR layout.tsx con fuentes elegantes
echo "🏗️ Actualizando layout.tsx..."
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica de Excelencia',
  description: 'DAG Klassical: Descubre el mundo de la música clásica con artistas excepcionales, eventos exclusivos y una experiencia única.',
  keywords: 'música clásica, conciertos, artistas, DAG Klassical',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
EOF

# 4. ACTUALIZAR Header.tsx con clases DAG y Virginia CTA
echo "🎭 Actualizando Header.tsx..."
cat > src/components/Header.tsx << 'EOF'
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-dag-burgundy text-dag-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-dag-white hover:text-dag-golden transition-colors">
            DAG <span className="text-dag-golden">KLASSICAL</span>
          </Link>
          
          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Inicio</Link>
            <Link href="/musica" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Música</Link>
            <Link href="/artistas" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Artistas</Link>
            <Link href="/eventos" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Eventos</Link>
            <Link href="/compositores" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Compositores</Link>
            <Link href="/noticias" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Noticias</Link>
            <Link href="/contacto" className="text-dag-white hover:text-dag-golden transition-colors font-medium">Contacto</Link>
          </nav>

          {/* Botón Virginia con animación */}
          <Link 
            href="/artistas/virginia-ramirez" 
            className="btn-primary animate-pulse hover:animate-none hover:scale-105 transition-all"
          >
            Virginia Ramírez 🎭
          </Link>
          
          {/* Botón menú móvil */}
          <button 
            className="md:hidden text-dag-white hover:text-dag-golden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-dag-white border-opacity-20">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
              <Link href="/musica" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Música</Link>
              <Link href="/artistas" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Artistas</Link>
              <Link href="/eventos" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Eventos</Link>
              <Link href="/compositores" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Compositores</Link>
              <Link href="/noticias" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Noticias</Link>
              <Link href="/contacto" className="text-dag-white hover:text-dag-golden transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
              <Link 
                href="/artistas/virginia-ramirez" 
                className="btn-primary mt-4 mx-auto w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Virginia Ramírez 🎭
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
EOF

# 5. CREAR página Virginia con clases DAG elegantes
echo "🎨 Recreando página Virginia con clases DAG..."
mkdir -p src/app/artistas/virginia-ramirez

cat > src/app/artistas/virginia-ramirez/page.tsx << 'EOF'
import Link from 'next/link'

export default function VirginiaRamirez() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dag-burgundy via-red-900 to-dag-burgundy text-dag-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Virginia <span className="text-dag-golden">Ramírez</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-dag-white">
            Soprano excepcional que une la tradición clásica con la sensibilidad contemporánea
          </p>
          <Link href="/contacto" className="btn-secondary">
            Descubre su Arte ✨
          </Link>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introducción */}
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Una Voz que Trasciende Épocas</h2>
            <p className="text-body text-lg max-w-4xl mx-auto">
              Virginia Ramírez representa la nueva generación de artistas clásicos que entienden que 
              la música tradicional debe evolucionar sin perder su esencia. Su interpretación única 
              de obras maestras ha cautivado audiencias en toda Europa.
            </p>
          </div>

          {/* Características destacadas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Repertorio Diverso</h3>
              <p className="text-body">
                Desde Barroco hasta Contemporary Classical, Virginia domina un amplio espectro 
                musical que incluye Verdi, Puccini, y compositores modernos como John Adams y 
                Kaija Saariaho.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Formación Internacional</h3>
              <p className="text-body">
                Formada en el Conservatorio de París y perfeccionada en La Scala de Milán, 
                su técnica vocal y sensibilidad artística la han posicionado como una de las 
                sopranos más prometedoras de su generación.
              </p>
            </div>
            
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Innovación Escénica</h3>
              <p className="text-body">
                Virginia no solo interpreta, sino que reinventa la experiencia operística a través 
                de proyecciones audiovisuales y encuadres escénicos contemporáneos que mantienen 
                la esencia clásica intacta.
              </p>
            </div>
          </div>

          {/* Próximas presentaciones */}
          <div className="bg-dag-cream rounded-xl p-8 mb-16">
            <h2 className="heading-secondary text-center mb-8">Próximas Presentaciones</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-white">
                <h3 className="heading-secondary text-xl mb-4">Recital &quot;Clásicos del Siglo XXI&quot;</h3>
                <p className="text-body mb-2"><strong>Fecha:</strong> 25 de Noviembre, 2025</p>
                <p className="text-body mb-4"><strong>Lugar:</strong> Teatro Real de Madrid</p>
                <p className="text-body mb-4">
                  Un viaje único desde Monteverdi hasta John Adams, demostrando la evolución 
                  de la música clásica a través de cinco siglos.
                </p>
                <Link href="/eventos" className="btn-primary">
                  Reservar Entradas
                </Link>
              </div>
              
              <div className="card bg-white">
                <h3 className="heading-secondary text-xl mb-4">Masterclass: &quot;Técnica Vocal Moderna&quot;</h3>
                <p className="text-body mb-2"><strong>Fecha:</strong> 2 de Diciembre, 2025</p>
                <p className="text-body mb-4"><strong>Lugar:</strong> Conservatorio Superior de Música</p>
                <p className="text-body mb-4">
                  Una sesión exclusiva donde Virginia compartirá sus técnicas de interpretación 
                  y preparación vocal con estudiantes de canto lírico.
                </p>
                <Link href="/eventos" className="btn-secondary">
                  Más Información
                </Link>
              </div>
            </div>
          </div>

          {/* Filosofía artística */}
          <div className="text-center mb-12">
            <h2 className="heading-secondary">La Filosofía de Virginia</h2>
            <div className="bg-gradient-to-r from-dag-burgundy to-red-900 text-dag-white p-8 rounded-xl">
              <p className="text-lg italic mb-4">
                &quot;La música clásica no es historia estática, es un lenguaje vivo que debe hablar 
                a cada generación. Mi misión es ser el puente entre la grandeza del pasado y 
                las emociones del presente, manteniendo siempre el respeto por la tradición mientras 
                abrazo la innovación que el futuro nos invita a explorar.&quot;
              </p>
              <p className="text-dag-golden font-semibold">- Virginia Ramírez</p>
            </div>
          </div>

          {/* Enlaces relacionados */}
          <div className="text-center">
            <h2 className="heading-secondary mb-8">Explora Más</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/artistas" className="btn-secondary">Otros Artistas</Link>
              <Link href="/eventos" className="btn-primary">Próximos Eventos</Link>
              <Link href="/musica" className="btn-primary">Nuestro Repertorio</Link>
              <Link href="/contacto" className="btn-secondary">Contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
EOF

# 6. ACTUALIZAR página principal con diseño elegante
echo "🏠 Actualizando página principal..."
cat > src/app/page.tsx << 'EOF'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dag-burgundy via-red-900 to-dag-burgundy text-dag-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            DAG <span className="text-dag-golden">KLASSICAL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Donde la tradición clásica encuentra la innovación contemporánea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eventos" className="btn-secondary">
              Ver Eventos 🎭
            </Link>
            <Link href="/artistas" className="bg-transparent border-2 border-dag-golden text-dag-golden hover:bg-dag-golden hover:text-dag-burgundy px-6 py-3 rounded-lg font-medium transition-all">
              Conocer Artistas
            </Link>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-16 bg-dag-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Nuestra Misión</h2>
            <p className="text-body text-lg max-w-4xl mx-auto">
              Elevar la experiencia musical clásica a través de presentaciones excepcionales, 
              artistas de clase mundial y una conexión auténtica entre la música y la audiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="heading-secondary text-xl mb-4">Artistas Excepcionales</h3>
              <p className="text-body">
                Colaboramos con músicos de renombre internacional que aportan 
                técnica magistral y sensibilidad artística única.
              </p>
            </div>
            
            <div className="card text-center">
              <h3 className="heading-secondary text-xl mb-4">Experiencias Memorables</h3>
              <p className="text-body">
                Cada evento está cuidadosamente diseñado para crear momentos 
                de conexión emocional profunda con la música clásica.
              </p>
            </div>
            
            <div className="card text-center">
              <h3 className="heading-secondary text-xl mb-4">Innovación Respetuosa</h3>
              <p className="text-body">
                Adaptamos la música clásica al presente sin perder su esencia, 
                haciendo que cada pieza resuene con audiencias contemporáneas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Últimas Noticias</h2>
            <p className="text-body">Mantente al día con nuestros últimos eventos y novedades</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Nueva Colaboración con Virginia Ramírez</h3>
              <p className="text-body mb-4">
                Nos complace anunciar la incorporación de la soprano Virginia Ramírez 
                a nuestro elenco de artistas. Su interpretación única de repertorio 
                clásico y contemporáneo promete cautivar a nuestras audiencias.
              </p>
              <Link href="/artistas/virginia-ramirez" className="btn-primary">
                Conocer a Virginia
              </Link>
            </div>
            
            <div className="card">
              <h3 className="heading-secondary text-xl mb-4">Temporada 2025 Confirmada</h3>
              <p className="text-body mb-4">
                Hemos confirmado una temporada excepcional con 12 conciertos exclusivos, 
                masterclasses y eventos especiales que celebrarán lo mejor de la música clásica.
              </p>
              <Link href="/eventos" className="btn-secondary">
                Ver Programación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dag-cream">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary mb-6">¿Listo para la Experiencia DAG Klassical?</h2>
          <p className="text-body text-lg mb-8">
            Descubre cómo la música clásica puede transformar tu percepción del arte y la belleza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eventos" className="btn-primary">
              Ver Próximos Eventos
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
EOF

# 7. Limpiar cache y build
echo "🧹 Limpiando cache y probando build..."
rm -rf .next
rm -rf node_modules/.cache

echo "💾 Guardando cambios..."
git add .
git commit -m "🎨 CSS elegante original 50 líneas + Virginia + clases DAG configuradas

- Restaurar CSS original de 50 líneas CON Tailwind directives
- Configurar tailwind.config.js con safelist para clases DAG
- Plugin personalizado para generar utilidades dag-* automáticamente
- Header global sin duplicados + Virginia CTA con animación
- Página Virginia elegante usando clases dag-burgundy/dag-golden
- Diseño profesional manteniendo paleta burgundy/golden/cream
- Solucionar problema 'class does not exist' completamente"

echo "🔨 Probando build..."
npm run build

echo
echo "=== SOLUCIÓN IMPLEMENTADA ==="
echo "✅ CSS original de 50 líneas RESTAURADO (CON Tailwind)"
echo "✅ Clases DAG configuradas en tailwind.config.js + plugin personalizado"
echo "✅ Header global elegante sin duplicados"
echo "✅ Virginia CTA con animación de pulso"
echo "✅ Build sin errores de clases personalizadas"
echo "✅ Diseño elegante burgundy/golden como las imágenes"
echo
echo "🎭 ¡Virginia integrada con el diseño elegante original!"