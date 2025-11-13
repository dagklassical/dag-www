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
