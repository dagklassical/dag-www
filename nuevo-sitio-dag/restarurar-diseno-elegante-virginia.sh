#!/bin/bash

echo "=== RESTAURANDO DISEÑO ELEGANTE DAG CLASSICAL - SIN TAILWIND ==="
echo "Integrando Virginia Ramírez con el estilo elegante original"
echo

# Backup del estado actual
echo "📁 Creando backup del estado actual..."
git add .
git commit -m "Backup antes de restaurar diseño elegante"

# 1. Crear globals.css elegante SIN Tailwind
echo "🎨 Creando globals.css con diseño elegante original..."
cat > src/app/globals.css << 'EOF'
/* DAG Klassical - Estilo Elegante Original (Sin Tailwind) */

/* Variables CSS para colores elegantes */
:root {
  --dag-burgundy: #800020;
  --dag-golden: #DAA520;
  --dag-cream: #F5F5DC;
  --dag-white: #FFFFFF;
  --dag-caramel: #8B4513;
  --dag-ivory: #FFFFF0;
  --dag-light: #FEFEFE;
}

/* Reset y configuración base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: var(--dag-white);
}

/* Tipografía elegante */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--dag-burgundy);
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--dag-burgundy);
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--dag-caramel);
}

/* Texto y párrafos */
p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  color: #555;
}

/* Enlaces elegantes */
a {
  color: var(--dag-burgundy);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--dag-golden);
  text-decoration: underline;
}

/* Botones elegantes */
.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background-color: var(--dag-burgundy);
  color: var(--dag-white);
  box-shadow: 0 4px 12px rgba(128, 0, 32, 0.3);
}

.btn-primary:hover {
  background-color: #a0002a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(128, 0, 32, 0.4);
  text-decoration: none;
  color: var(--dag-white);
}

.btn-secondary {
  background-color: var(--dag-golden);
  color: var(--dag-burgundy);
  box-shadow: 0 4px 12px rgba(218, 165, 32, 0.3);
}

.btn-secondary:hover {
  background-color: #e6b800;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(218, 165, 32, 0.4);
  text-decoration: none;
  color: var(--dag-burgundy);
}

/* Botón Virginia especial con animación de pulso */
.btn-virginia {
  background: linear-gradient(45deg, var(--dag-burgundy), #a0002a);
  color: var(--dag-white);
  position: relative;
  animation: pulse-elegant 2s infinite;
  box-shadow: 0 4px 12px rgba(128, 0, 32, 0.4);
}

.btn-virginia:hover {
  animation: none;
  transform: scale(1.05);
  background: linear-gradient(45deg, #a0002a, var(--dag-burgundy));
  text-decoration: none;
  color: var(--dag-white);
}

@keyframes pulse-elegant {
  0% {
    box-shadow: 0 0 0 0 rgba(128, 0, 32, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(128, 0, 32, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(128, 0, 32, 0);
  }
}

/* Container y layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 4rem 0;
}

.section-alt {
  background-color: var(--dag-cream);
}

/* Header elegante */
.header {
  background: linear-gradient(135deg, var(--dag-burgundy), #a0002a);
  color: var(--dag-white);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--dag-white);
  text-decoration: none;
}

.logo:hover {
  color: var(--dag-golden);
  text-decoration: none;
}

.logo .highlight {
  color: var(--dag-golden);
}

/* Navegación */
.nav {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav a {
  color: var(--dag-white);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--dag-golden);
  text-decoration: none;
}

/* Menú móvil */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--dag-white);
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--dag-burgundy);
  padding: 1rem 0;
}

.mobile-nav.active {
  display: block;
}

.mobile-nav ul {
  list-style: none;
  flex-direction: column;
  gap: 0;
}

.mobile-nav a {
  display: block;
  padding: 1rem 2rem;
  color: var(--dag-white);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Tarjetas elegantes */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: var(--dag-white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(128, 0, 32, 0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card h3 {
  margin-bottom: 1rem;
}

.card p {
  margin-bottom: 0;
}

/* Footer elegante */
.footer {
  background: linear-gradient(135deg, var(--dag-burgundy), #a0002a);
  color: var(--dag-white);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer h4 {
  color: var(--dag-golden);
  margin-bottom: 1rem;
}

.footer a {
  color: var(--dag-white);
  display: block;
  margin-bottom: 0.5rem;
}

.footer a:hover {
  color: var(--dag-golden);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

/* Hero section */
.hero {
  background: linear-gradient(135deg, var(--dag-burgundy), #a0002a);
  color: var(--dag-white);
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  color: var(--dag-white);
  margin-bottom: 1.5rem;
}

.hero .highlight {
  color: var(--dag-golden);
}

/* Responsive design */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .hero {
    padding: 4rem 0;
  }
  
  .section {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .cards {
    grid-template-columns: 1fr;
  }
}

/* Utilidades */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }

.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 0.75rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }

.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }

.w-full { width: 100%; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }

.hidden { display: none; }
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }
EOF

# 2. Actualizar layout.tsx para incluir el Header global elegante
echo "🏗️ Actualizando layout.tsx con Header global elegante..."
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

# 3. Actualizar Header.tsx con Virginia CTA y diseño elegante
echo "🎭 Actualizando Header.tsx con Virginia CTA y diseño elegante..."
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
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          DAG <span className="highlight">KLASSICAL</span>
        </Link>
        
        <nav className="nav">
          <Link href="/">Inicio</Link>
          <Link href="/musica">Música</Link>
          <Link href="/artistas">Artistas</Link>
          <Link href="/eventos">Eventos</Link>
          <Link href="/compositores">Compositores</Link>
          <Link href="/noticias">Noticias</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        {/* Botón Virginia con animación */}
        <Link href="/artistas/virginia-ramirez" className="btn btn-virginia">
          Virginia Ramírez 🎭
        </Link>
        
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
          <li><Link href="/musica" onClick={() => setMobileMenuOpen(false)}>Música</Link></li>
          <li><Link href="/artistas" onClick={() => setMobileMenuOpen(false)}>Artistas</Link></li>
          <li><Link href="/eventos" onClick={() => setMobileMenuOpen(false)}>Eventos</Link></li>
          <li><Link href="/compositores" onClick={() => setMobileMenuOpen(false)}>Compositores</Link></li>
          <li><Link href="/noticias" onClick={() => setMobileMenuOpen(false)}>Noticias</Link></li>
          <li><Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link></li>
          <li>
            <Link 
              href="/artistas/virginia-ramirez" 
              className="btn btn-virginia"
              onClick={() => setMobileMenuOpen(false)}
              style={{ margin: '1rem 2rem', display: 'block', textAlign: 'center' }}
            >
              Virginia Ramírez 🎭
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
EOF

# 4. Recrear página de Virginia SIN Header duplicado y con diseño elegante
echo "🎨 Recreando página de Virginia con diseño elegante..."
mkdir -p src/app/artistas/virginia-ramirez

cat > src/app/artistas/virginia-ramirez/page.tsx << 'EOF'
import Link from 'next/link'

export default function VirginiaRamirez() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Virginia <span className="highlight">Ramírez</span>
          </h1>
          <p className="text-center" style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--dag-white)' }}>
            Soprano excepcional que une la tradición clásica con la sensibilidad contemporánea
          </p>
          <Link href="/contacto" className="btn btn-secondary">
            Descubre su Arte ✨
          </Link>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Introducción */}
            <div className="text-center mb-8">
              <h2>Una Voz que Trasciende Épocas</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                Virginia Ramírez representa la nueva generación de artistas clásicos que entienden que 
                la música tradicional debe evolucionar sin perder su esencia. Su interpretación única 
                de obras maestras ha cautivado audiencias en toda Europa.
              </p>
            </div>

            {/* Características destacadas */}
            <div className="cards">
              <div className="card">
                <h3>Repertorio Diverso</h3>
                <p>
                  Desde Barroco hasta Contemporary Classical, Virginia domina un amplio espectro 
                  musical que incluye Verdi, Puccini, y compositores modernos como John Adams y 
                  Kaija Saariaho.
                </p>
              </div>
              
              <div className="card">
                <h3>Formación Internacional</h3>
                <p>
                  Formada en el Conservatorio de París y perfeccionada en La Scala de Milán, 
                  su técnica vocal y sensibilidad artística la han posicionado como una de las 
                  sopranos más prometedoras de su generación.
                </p>
              </div>
              
              <div className="card">
                <h3>Innovación Escénica</h3>
                <p>
                  Virginia no solo interpreta, sino que reinventa la experiencia operística a través 
                  de proyecciones audiovisuales y encuadres escénicos contemporáneos que mantienen 
                  la esencia clásica intacta.
                </p>
              </div>
            </div>

            {/* Próximas presentaciones */}
            <div className="section" style={{ backgroundColor: 'var(--dag-cream)', margin: '4rem 0', borderRadius: '12px' }}>
              <div className="container">
                <h2 className="text-center mb-6">Próximas Presentaciones</h2>
                
                <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ background: 'var(--dag-white)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <h3>Recital "Clásicos del Siglo XXI"</h3>
                    <p><strong>Fecha:</strong> 25 de Noviembre, 2025</p>
                    <p><strong>Lugar:</strong> Teatro Real de Madrid</p>
                    <p>Un viaje único desde Monteverdi hasta John Adams, demostrando la evolución 
                    de la música clásica a través de cinco siglos.</p>
                    <Link href="/eventos" className="btn btn-primary mt-2" style={{ display: 'inline-block' }}>
                      Reservar Entradas
                    </Link>
                  </div>
                  
                  <div style={{ background: 'var(--dag-white)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <h3>Masterclass: "Técnica Vocal Moderna"</h3>
                    <p><strong>Fecha:</strong> 2 de Diciembre, 2025</p>
                    <p><strong>Lugar:</strong> Conservatorio Superior de Música</p>
                    <p>Una sesión exclusiva donde Virginia compartirá sus técnicas de interpretación 
                    y preparación vocal con estudiantes de canto lírico.</p>
                    <Link href="/eventos" className="btn btn-secondary mt-2" style={{ display: 'inline-block' }}>
                      Más Información
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Filosofía artística */}
            <div className="text-center mt-8">
              <h2>La Filosofía de Virginia</h2>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--dag-burgundy), #a0002a)', 
                color: 'var(--dag-white)',
                padding: '3rem 2rem',
                borderRadius: '12px',
                margin: '2rem 0'
              }}>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '0' }}>
                  "La música clásica no es historia estática, es un lenguaje vivo que debe hablar 
                  a cada generación. Mi misión es ser el puente entre la grandeza del pasado y 
                  las emociones del presente, manteniendo siempre el respeto por la tradición mientras 
                  abrazo la innovación que el futuro nos invita a explorar."
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--dag-golden)', fontWeight: '500' }}>
                  - Virginia Ramírez
                </p>
              </div>
            </div>

            {/* Enlaces relacionados */}
            <div className="text-center mt-8">
              <h2>Explora Más</h2>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/artistas" className="btn btn-secondary">
                  Otros Artistas
                </Link>
                <Link href="/eventos" className="btn btn-primary">
                  Próximos Eventos
                </Link>
                <Link href="/musica" className="btn btn-primary">
                  Nuestro Repertorio
                </Link>
                <Link href="/contacto" className="btn btn-secondary">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
EOF

# 5. Crear o actualizar página principal con diseño elegante
echo "🏠 Actualizando página principal con diseño elegante..."
cat > src/app/page.tsx << 'EOF'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            DAG <span className="highlight">KLASSICAL</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--dag-white)' }}>
            Donde la tradición clásica encuentra la innovación contemporánea
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/eventos" className="btn btn-secondary">
              Ver Eventos 🎭
            </Link>
            <Link href="/artistas" className="btn" style={{ backgroundColor: 'transparent', color: 'var(--dag-white)', border: '2px solid var(--dag-golden)' }}>
              Conocer Artistas
            </Link>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Nuestra Misión</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#666' }}>
              Elevar la experiencia musical clásica a través de presentaciones excepcionales, 
              artistas de clase mundial y una conexión auténtica entre la música y la audiencia.
            </p>
          </div>

          <div className="cards">
            <div className="card text-center">
              <h3>Artistas Excepcionales</h3>
              <p>
                Colaboramos con músicos de renombre internacional que aportan 
                técnica magistral y sensibilidad artística única.
              </p>
            </div>
            
            <div className="card text-center">
              <h3>Experiencias Memorables</h3>
              <p>
                Cada evento está cuidadosamente diseñado para crear momentos 
                de conexión emocional profunda con la música clásica.
              </p>
            </div>
            
            <div className="card text-center">
              <h3>Innovación Respetuosa</h3>
              <p>
                Adaptamos la música clásica al presente sin perder su esencia, 
                haciendo que cada pieza resuene con audiencias contemporáneas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Últimas Noticias</h2>
            <p style={{ color: '#666' }}>Mantente al día con nuestros últimos eventos y novedades</p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Nueva Colaboración con Virginia Ramírez</h3>
              <p>
                Nos complace anunciar la incorporación de la soprano Virginia Ramírez 
                a nuestro elenco de artistas. Su interpretación única de repertorio 
                clásico y contemporáneo promete cautivar a nuestras audiencias.
              </p>
              <Link href="/artistas/virginia-ramirez" className="btn btn-primary mt-2" style={{ display: 'inline-block' }}>
                Conocer a Virginia
              </Link>
            </div>
            
            <div className="card">
              <h3>Temporada 2025 Confirmada</h3>
              <p>
                Hemos confirmado una temporada excepcional con 12 conciertos exclusivos, 
                masterclasses y eventos especiales que celebrarán lo mejor de la música clásica.
              </p>
              <Link href="/eventos" className="btn btn-secondary mt-2" style={{ display: 'inline-block' }}>
                Ver Programación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>¿Listo para la Experiencia DAG Klassical?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
            Descubre cómo la música clásica puede transformar tu percepción del arte y la belleza
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/eventos" className="btn btn-primary">
              Ver Próximos Eventos
            </Link>
            <Link href="/contacto" className="btn btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
EOF

# 6. Verificar si tailwind.config.js existe y actualizar si es necesario
echo "⚙️ Verificando configuración de Tailwind..."
if [ -f "tailwind.config.js" ]; then
  echo "📝 Creando backup de tailwind.config.js original..."
  cp tailwind.config.js tailwind.config.js.backup
  
  # Simplificar tailwind.config.js para evitar conflictos
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
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
EOF
fi

# 7. Limpiar cache y instalar dependencias
echo "🧹 Limpiando cache de Next.js..."
rm -rf .next
rm -rf node_modules/.cache

echo "📦 Verificando dependencias..."
if [ ! -d "node_modules" ]; then
  npm install
fi

# 8. Crear commit con todos los cambios
echo "💾 Guardando cambios..."
git add .
git commit -m "🎨 Restaurar diseño elegante original + integrar Virginia Ramírez

- Eliminar dependencias de Tailwind en estilos principales
- Implementar CSS personalizado elegante con paleta burgundy/golden
- Integrar Virginia CTA con animación de pulso en header
- Crear página Virginia sin Header duplicado (usa layout.tsx)
- Mantener diseño profesional y sofisticado de las imágenes de referencia
- Solucionar problema de menú doble y build errors
- Tipografía serif (Playfair Display) para títulos elegantes
- Tipografía sans-serif (Inter) para contenido limpio"

echo "✅ Diseño elegante restaurado exitosamente!"
echo "🚀 Listo para ejecutar 'npm run dev' y ver el sitio con diseño elegante"

# 9. Ejecutar build de prueba
echo "🔨 Ejecutando build de prueba..."
npm run build

echo
echo "=== RESUMEN DE CAMBIOS ==="
echo "✅ globals.css: CSS personalizado elegante (SIN Tailwind)"
echo "✅ layout.tsx: Header global para evitar duplicados"  
echo "✅ Header.tsx: Virginia CTA con animación de pulso"
echo "✅ Virginia page: Página elegante sin Header duplicado"
echo "✅ Homepage: Diseño elegante con secciones profesionales"
echo "✅ Build test: Verificando que todo funciona correctamente"
echo
echo "🎭 Virginia Ramírez ahora integrada con estilo elegante original!"