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
