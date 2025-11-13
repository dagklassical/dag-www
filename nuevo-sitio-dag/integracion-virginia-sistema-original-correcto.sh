#!/bin/bash

echo "🎯 INTEGRACIÓN VIRGINIA CON SISTEMA BURGUNDY/GOLDEN ORIGINAL"
echo "=========================================================="
echo "Usando globals.css de 50 líneas con sistema de colores DAG profesional"
echo ""

cd ~/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag

echo "📂 Directorio actual: $(pwd)"
echo ""

# 1. COMMIT INICIAL
echo "📝 1. Creando commit inicial..."
git add .
git commit -m "🛠️ Estado antes de integrar Virginia con sistema burgundy/golden original

- Backup del estado actual
- Usando globals.css de 50 líneas (sistema DAG profesional)
- Hash referencia: 242d143 (pero usaremos el de 50 líneas real)
- Preparando Virginia CTA con sistema burgundy/golden elegante" || echo "ℹ️ No hay cambios para commit inicial"

# 2. USAR EL GLOBALS.CSS CORRECTO DE 50 LÍNEAS
echo ""
echo "🎨 2. Configurando globals.css con sistema burgundy/golden..."

# Crear el globals.css correcto de 50 líneas
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', system-ui, sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply bg-dag-burgundy text-dag-white hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105;
  }
  
  .btn-secondary {
    @apply bg-dag-golden text-dag-burgundy hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105;
  }
  
  .section-padding {
    @apply px-4 sm:px-6 lg:px-8;
  }
  
  .container-max {
    @apply max-w-7xl mx-auto;
  }
  
  .heading-primary {
    @apply text-4xl md:text-5xl lg:text-6xl font-bold text-dag-burgundy mb-6;
  }
  
  .heading-secondary {
    @apply text-2xl md:text-3xl lg:text-4xl font-semibold text-dag-caramel mb-4;
  }
  
  .text-body {
    @apply text-dag-caramel leading-relaxed;
  }
  
  .card {
    @apply bg-dag-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300;
  }
  
  .gradient-bg {
    @apply bg-gradient-to-br from-dag-ivory via-dag-butmilk to-dag-golden;
  }

  /* Animación pulse para Virginia */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Virginia CTA Button - Usando sistema burgundy/golden */
  .btn-virginia {
    @apply bg-dag-burgundy text-dag-white hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 animate-pulse;
    @apply border border-dag-golden hover:shadow-lg;
  }
}
EOF

echo "✅ globals.css configurado con sistema burgundy/golden + Virginia pulse"

# 3. VERIFICAR COLORES EN TAILWIND CONFIG
echo ""
echo "🎨 3. Verificando/Configurando colores en tailwind.config.js..."

if [ -f "tailwind.config.js" ]; then
    # Verificar si ya existen los colores DAG
    if grep -q "dag-burgundy" tailwind.config.js; then
        echo "✅ Colores DAG ya configurados en tailwind.config.js"
    else
        echo "🔧 Agregando colores DAG al tailwind.config.js..."
        
        # Crear backup
        cp tailwind.config.js tailwind.config.js.backup.$(date +%Y%m%d_%H%M%S)
        
        # Actualizar tailwind.config.js con colores DAG
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
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
EOF
        echo "✅ Colores DAG agregados a tailwind.config.js"
    fi
else
    echo "⚠️ tailwind.config.js no encontrado - creando uno básico..."
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
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
EOF
    echo "✅ tailwind.config.js creado con colores DAG"
fi

# 4. CREAR HEADER CON VIRGINIA CTA - SISTEMA BURGUNDY/GOLDEN
echo ""
echo "🎯 4. Creando Header con Virginia CTA usando sistema burgundy/golden..."

cat > src/components/Header.tsx << 'EOF'
"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMusicSubmenuOpen, setIsMusicSubmenuOpen] = useState(false)

  return (
    <header className="bg-dag-ivory shadow-sm border-b border-dag-golden sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-dag-burgundy hover:text-dag-caramel transition-colors">
              DAG Klassical
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </Link>
            
            {/* Música Submenu */}
            <div className="relative">
              <button
                onClick={() => setIsMusicSubmenuOpen(!isMusicSubmenuOpen)}
                className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Música
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMusicSubmenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-dag-ivory rounded-lg shadow-lg border border-dag-golden">
                  <Link href="/artistas" className="block px-4 py-2 text-sm text-dag-caramel hover:bg-dag-butmilk hover:text-dag-burgundy transition-colors">
                    Artistas
                  </Link>
                  <Link href="/generos" className="block px-4 py-2 text-sm text-dag-caramel hover:bg-dag-butmilk hover:text-dag-burgundy transition-colors">
                    Géneros
                  </Link>
                  <Link href="/playlist" className="block px-4 py-2 text-sm text-dag-caramel hover:bg-dag-butmilk hover:text-dag-burgundy transition-colors">
                    Playlist
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/eventos" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
              Eventos
            </Link>
            <Link href="/sobre-nosotros" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Virginia CTA Button - Sistema Burgundy/Golden */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/artistas/virginia-ramirez"
              className="btn-virginia"
            >
              Virginia • Estreno
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dag-burgundy hover:text-dag-caramel p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dag-golden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-dag-caramel hover:text-dag-burgundy hover:bg-dag-butmilk rounded-md transition-colors">
                Inicio
              </Link>
              <Link href="/artistas" className="block px-3 py-2 text-base font-medium text-dag-caramel hover:text-dag-burgundy hover:bg-dag-butmilk rounded-md transition-colors">
                Artistas
              </Link>
              <Link href="/generos" className="block px-3 py-2 text-base font-medium text-dag-caramel hover:text-dag-burgundy hover:bg-dag-butmilk rounded-md transition-colors">
                Géneros
              </Link>
              <Link href="/eventos" className="block px-3 py-2 text-base font-medium text-dag-caramel hover:text-dag-burgundy hover:bg-dag-butmilk rounded-md transition-colors">
                Eventos
              </Link>
              <Link href="/sobre-nosotros" className="block px-3 py-2 text-base font-medium text-dag-caramel hover:text-dag-burgundy hover:bg-dag-butmilk rounded-md transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="block px-3 py-2 text-base font-medium text-dag-caramel hover:text-dag-burgundy hover:bg-dag-butmilk rounded-md transition-colors">
                Contacto
              </Link>
              
              {/* Virginia CTA en Mobile */}
              <div className="pt-2 px-3">
                <Link
                  href="/artistas/virginia-ramirez"
                  className="btn-virginia w-full text-center"
                >
                  Virginia • Estreno
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
EOF

echo "✅ Header creado usando sistema burgundy/golden profesional"

# 5. CREAR PÁGINA DE VIRGINIA
echo ""
echo "🎯 5. Creando página de Virginia con sistema burgundy/golden..."

mkdir -p src/app/artistas/virginia-ramirez

cat > src/app/artistas/virginia-ramirez/page.tsx << 'EOF'
import Link from 'next/link'

export default function VirginiaRamirezPage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-dag-ivory shadow-sm border-b border-dag-golden">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-dag-burgundy hover:text-dag-caramel transition-colors">
              DAG Klassical
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/artistas" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
                Artistas
              </Link>
              <Link href="/eventos" className="text-dag-caramel hover:text-dag-burgundy px-3 py-2 text-sm font-medium transition-colors">
                Eventos
              </Link>
              <Link
                href="/artistas/virginia-ramirez"
                className="btn-virginia"
              >
                Virginia • Estreno
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-max section-padding py-12">
        <div className="text-center">
          <h1 className="heading-primary">
            Virginia Ramírez
          </h1>
          <p className="text-2xl text-dag-caramel mb-12 font-medium">
            Nueva Artista Destacada • Estreno Exclusivo
          </p>
          
          <div className="card max-w-4xl mx-auto">
            <div className="space-y-8">
              <p className="text-body text-lg leading-relaxed">
                Estamos emocionados de presentar a <strong className="text-dag-burgundy">Virginia Ramírez</strong>, 
                una artista excepcional que se une a nuestro roster exclusivo de talentos clásicos 
                contemporáneos.
              </p>
              
              <div className="bg-dag-butmilk border-2 border-dag-golden rounded-xl p-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🎼</span>
                </div>
                <h3 className="heading-secondary text-dag-burgundy mb-4">Estreno Especial</h3>
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
      </main>
    </div>
  )
}
EOF

echo "✅ Página de Virginia creada con diseño burgundy/golden elegante"

# 6. LIMPIAR CACHE
echo ""
echo "🧹 6. Limpiando cache de Next.js..."
rm -rf .next
rm -rf node_modules/.cache
echo "✅ Cache limpiado"

# 7. INSTALAR DEPENDENCIAS SI ES NECESARIO
echo ""
echo "📦 7. Verificando dependencias..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencias ya instaladas"
else
    echo "📦 Instalando dependencias..."
    npm install
fi

# 8. BUILD TEST
echo ""
echo "🔨 8. Probando build..."
if npm run build; then
    echo "✅ Build exitoso - Todo funcionando correctamente"
else
    echo "❌ Error en build - Revisa los errores arriba"
    exit 1
fi

# 9. COMMIT FINAL
echo ""
echo "📝 9. Creando commit final..."
git add .
git commit -m "🎯 Virginia CTA integrado con sistema burgundy/golden elegante

✨ Características:
- ✅ globals.css de 50 líneas con sistema DAG profesional  
- ✅ Colores burgundy/golden (no red gradients)
- ✅ Virginia CTA usando btn-virginia class del sistema
- ✅ Inter font y componentes elegantes
- ✅ Diseño 2025 profesional para blockchain expertise
- ✅ Sin evocación al año 2003
- ✅ Responsive completo: Desktop + Mobile
- ✅ Ruta correcta: /artistas/virginia-ramirez
- ✅ Link import correcto (sin errores runtime)

🎨 Sistema de Colores DAG:
- dag-burgundy (#800020) - Color principal elegante
- dag-golden (#DAA520) - Acentos dorados
- dag-white, dag-caramel, dag-ivory, dag-butmilk - Paleta complementaria
- Inter font para modernidad profesional

🔗 Funcionalidad:
- Desktop: Virginia CTA en navegación (burgundy con pulse + golden border)
- Mobile: Virginia CTA en menú hamburguesa
- Página dedicada: Diseño elegante con gradient-bg
- Uso de componentes: btn-secondary, btn-primary, card, heading-*
- Fácil remoción futura si es necesario

🎯 Resultado: Integración minimalista que respeta 100% el diseño 
original elegante, agregando solo la funcionalidad Virginia sin 
comprometer la estética profesional burgundy/golden."

# 10. STATUS FINAL
echo ""
echo "🎉 ¡INTEGRACIÓN COMPLETADA!"
echo "=================================================="
echo "✅ Sistema burgundy/golden profesional restaurado"
echo "✅ Virginia CTA integrado minimalísticamente"  
echo "✅ Estilo elegante 2025 preservado completamente"
echo "✅ Sin evocación al año 2003"
echo "✅ Componentes DAG: btn-primary, btn-secondary, card, etc."
echo "✅ Responsive: Desktop + Mobile con CTA"
echo "✅ Ruta correcta: /artistas/virginia-ramirez"
echo "✅ Build funcionando sin errores"
echo ""
echo "🎯 Para probar:"
echo "   npm run dev"
echo "   http://localhost:3000"
echo ""
echo "📱 Virginia CTA aparecerá:"
echo "   • Desktop: En navegación principal (burgundy con pulse + golden border)"  
echo "   • Mobile: En menú hamburguesa"
echo ""
echo "🗑️ Para remover Virginia (si es necesario):"
echo "   • Eliminar Virginia CTA del Header"
echo "   • O usar git revert del commit actual"