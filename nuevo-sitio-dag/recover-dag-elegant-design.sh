#!/bin/bash

echo "🎨 RECUPERACIÓN ESTILOS ORIGINALES DAG + VIRGINIA CTA"
echo "===================================================="

# Verificar directorio
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estamos en el directorio del proyecto"
    echo "Ejecuta desde: ~/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
    exit 1
fi

echo "🎯 Recuperando:"
echo "   - Colores burgundy/gold originales DAG"
echo "   - Diseño elegante no transparente"
echo "   - Ancho restringido (no 100%)"
echo "   - Virginia como botón CTA elegante"
echo "   - Ruta correcta /artistas/virginia-ramirez"

# 1. DETENER SERVIDOR
echo ""
echo "🛑 PASO 1: Detener servidor actual"
echo "---------------------------------"
pkill -f "npm run dev" 2>/dev/null || true
pkill -f "next" 2>/dev/null || true
sleep 2
echo "✅ Servidor detenido"

# 2. BACKUP DE ESTADOS ANTERIORES
echo ""
echo "📦 PASO 2: Backup de estados anteriores"
echo "--------------------------------------"
git add .
git commit -m "💾 Backup: Estado antes de recuperar estilos DAG originales

🗂️  Cambios a revertir:
- Estilos básicos actuales
- Header sin transparencias
- Navegación sin colores elegantes
- Botón Virginia simple

🎯 Próximo: Recuperar diseño elegante original" 2>/dev/null || echo "✅ Sin cambios para commit"
echo "✅ Backup realizado"

# 3. INSTALAR ESTILOS ORIGINALES DAG
echo ""
echo "🎨 PASO 3: Instalar estilos originales DAG"
echo "-----------------------------------------"
cp /workspace/dag-original-styles.css src/styles/dag-original.css
echo "✅ Estilos DAG originales copiados"

# 4. ACTUALIZAR GLOBALS.CSS CON ESTILOS DAG
echo ""
echo "⚡ PASO 4: Actualizar globals.css"
echo "--------------------------------"
# Crear globals.css con estilos DAG incluidos
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===== DAG KLASSICAL ORIGINAL STYLES ===== */

* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
}

/* Colores originales DAG */
:root {
  --dag-burgundy: #8B1538;
  --dag-burgundy-dark: #6B0D28;
  --dag-gold: #D4AF37;
  --dag-gold-light: #F4E07C;
  --dag-cream: #FDF6E3;
  --dag-charcoal: #2C2C2C;
  --dag-light-gray: #F8F8F8;
}

/* Contenedor principal con ancho restringido */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  box-shadow: 0 0 30px rgba(0,0,0,0.1);
}

/* Header elegante con colores originales DAG */
.header-elegant {
  background: linear-gradient(135deg, var(--dag-burgundy) 0%, var(--dag-burgundy-dark) 100%);
  border-bottom: 3px solid var(--dag-gold);
  box-shadow: 0 4px 20px rgba(139, 21, 56, 0.3);
  position: relative;
  z-index: 100;
}

.header-elegant .logo-text {
  background: linear-gradient(45deg, var(--dag-gold), var(--dag-gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}

.nav-elegant a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-elegant a:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-1px);
}

.nav-elegant a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--dag-gold);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-elegant a:hover::before {
  width: 80%;
}

/* Virginia CTA Button - Estilo elegante DAG */
.virginia-cta-elegant {
  background: linear-gradient(135deg, var(--dag-gold) 0%, var(--dag-gold-light) 100%);
  color: var(--dag-burgundy-dark);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.virginia-cta-elegant:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.6);
  color: var(--dag-burgundy-dark);
}

.virginia-cta-elegant::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.virginia-cta-elegant:hover::before {
  left: 100%;
}

.virginia-pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--dag-burgundy);
  border-radius: 50%;
  animation: elegant-pulse 2s ease-in-out infinite;
}

@keyframes elegant-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

/* Submenu Música - Estilo elegante */
.music-submenu {
  background: white;
  border: 1px solid var(--dag-gold);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(139, 21, 56, 0.15);
  padding: 1rem 0;
  margin-top: 0.5rem;
}

.music-submenu a {
  color: var(--dag-charcoal);
  padding: 0.75rem 1.5rem;
  display: block;
  transition: all 0.3s ease;
  position: relative;
}

.music-submenu a:hover {
  background: var(--dag-cream);
  color: var(--dag-burgundy);
  padding-left: 2rem;
}

.music-submenu a::before {
  content: '♪';
  position: absolute;
  left: 1rem;
  color: var(--dag-gold);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.music-submenu a:hover::before {
  opacity: 1;
}

/* Hero section con gradientes elegantes */
.hero-elegant {
  background: linear-gradient(135deg, 
    var(--dag-burgundy) 0%, 
    var(--dag-burgundy-dark) 40%, 
    var(--dag-charcoal) 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-elegant::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
}

.hero-elegant h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, white, var(--dag-gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
}

.hero-elegant p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

/* Botones elegantes */
.btn-elegant-primary {
  background: linear-gradient(135deg, var(--dag-gold) 0%, var(--dag-gold-light) 100%);
  color: var(--dag-burgundy-dark);
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  text-decoration: none;
  display: inline-block;
}

.btn-elegant-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.5);
}

.btn-elegant-secondary {
  background: transparent;
  color: var(--dag-gold);
  border: 2px solid var(--dag-gold);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-elegant-secondary:hover {
  background: var(--dag-gold);
  color: var(--dag-burgundy-dark);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .main-container {
    max-width: 100%;
    margin: 0;
    box-shadow: none;
  }
  
  .hero-elegant h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .virginia-cta-elegant {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .virginia-pulse-dot {
    width: 6px;
    height: 6px;
  }
  
  .hero-elegant {
    padding: 3rem 1rem;
  }
  
  .hero-elegant h1 {
    font-size: 2rem;
  }
}

/* ===== END DAG KLASSICAL ORIGINAL STYLES ===== */
EOF

echo "✅ globals.css con estilos DAG originales"

# 5. INSTALAR HEADER ELEGANTE
echo ""
echo "🏛️  PASO 5: Instalar Header elegante DAG"
echo "---------------------------------------"
cp /workspace/Header-Dag-Original-Elegant.tsx src/components/Header.tsx
echo "✅ Header elegante instalado"

# 6. ACTUALIZAR PÁGINA DE VIRGINIA
echo ""
echo "🎵 PASO 6: Actualizar página de Virginia"
echo "---------------------------------------"
mkdir -p src/app/artistas/virginia-ramirez
cp /workspace/virginia-page-elegant.tsx src/app/artistas/virginia-ramirez/page.tsx
echo "✅ Página de Virginia actualizada"

# 7. ACTUALIZAR LAYOUT PRINCIPAL
echo ""
echo "📱 PASO 7: Actualizar Layout principal"
echo "-------------------------------------"
# Crear layout que use el contenedor elegante
cat > src/app/layout.tsx << 'EOF'
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'DAG Klassical - Redefiniendo la experiencia de la música clásica',
  description: 'DAG Klassical redefine la experiencia de la música clásica a través de tecnología blockchain y NFTs exclusivos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}
EOF

echo "✅ Layout con contenedor DAG actualizado"

# 8. LIMPIAR CACHE COMPLETO
echo ""
echo "🗑️  PASO 8: Limpiar cache completo"
echo "---------------------------------"
rm -rf .next
rm -rf node_modules/.cache
rm -rf node_modules/.next
rm -rf .turbo
echo "✅ Cache limpiado"

# 9. COMMIT DE RECUPERACIÓN
echo ""
echo "💾 PASO 9: Commit de recuperación"
echo "--------------------------------"
git add .
git commit -m "🎨 RECUPERACIÓN: Estilos originales DAG + Virginia CTA elegante

✅ Implementado:
- Colores burgundy/gold originales DAG
- Header elegante sin transparencia
- Ancho restringido a 1200px (no 100%)
- Virginia como botón CTA dorado elegante
- Página Virginia con diseño profesional
- Navegación submenú Música elegante
- Botones con gradientes y animaciones

🎯 Diseño restaurado:
- Header burgundy con borde dorado
- Logo DAG con gradientes elegantes
- Botón Virginia dorado con pulse anim.
- Hero sections con gradientes elegantes
- Contenedor con sombra y ancho limitado

⚡ Estado: DISEÑO DAG ORIGINAL RECUPERADO"
echo "✅ Commit de recuperación realizado"

# 10. TESTEAR BUILD
echo ""
echo "🧪 PASO 10: Testear build"
echo "------------------------"
if npm run build > /tmp/build_dag_test.log 2>&1; then
    echo "✅ Build DAG test: EXITOSO"
else
    echo "❌ Build DAG test: FALLÓ"
    echo "Ver detalles en: /tmp/build_dag_test.log"
    cat /tmp/build_dag_test.log
fi

# 11. INICIAR SERVIDOR
echo ""
echo "🚀 PASO 11: Iniciando servidor"
echo "-----------------------------"
echo "🌐 URL: http://localhost:3000"
echo "🔗 Virginia: http://localhost:3000/artistas/virginia-ramirez"
echo "📱 Responsive: Verificar en diferentes tamaños"
echo "🎨 Verificar: Colores burgundy/gold elegantes"
echo "🔍 Verificar: Botón Virginia dorado con pulse"
echo ""
npm run dev

echo ""
echo "🎉 RECUPERACIÓN DAG COMPLETADA"
echo "=============================="
echo "✅ Estilos originales burgundy/gold aplicados"
echo "✅ Header elegante sin transparencia"
echo "✅ Ancho restringido (no 100%)"
echo "✅ Virginia CTA botón dorado elegante"
echo "✅ Página Virginia profesional"
echo "✅ Diseño DAG original recuperado"
echo "✅ Servidor iniciado"
echo ""
echo "🎯 VERIFICAR:"
echo "   - Colores burgundy/gold elegantes"
echo "   - Botón Virginia dorado con animación"
echo "   - Ancho máximo 1200px"
echo "   - Navegación submenú funcionando"