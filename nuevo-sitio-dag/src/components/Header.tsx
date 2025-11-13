"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMusicSubmenuOpen, setIsMusicSubmenuOpen] = useState(false)

  return (
    <header className="bg-orange-50 shadow-sm border-b border-yellow-400 sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-red-800 hover:text-amber-800 transition-colors">
              DAG Klassical
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </Link>
            
            {/* Música Submenu */}
            <div className="relative">
              <button
                onClick={() => setIsMusicSubmenuOpen(!isMusicSubmenuOpen)}
                className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Música
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMusicSubmenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-orange-50 rounded-lg shadow-lg border border-yellow-400">
                  <Link href="/artistas" className="block px-4 py-2 text-sm text-amber-800 hover:bg-yellow-50 hover:text-red-800 transition-colors">
                    Artistas
                  </Link>
                  <Link href="/generos" className="block px-4 py-2 text-sm text-amber-800 hover:bg-yellow-50 hover:text-red-800 transition-colors">
                    Géneros
                  </Link>
                  <Link href="/playlist" className="block px-4 py-2 text-sm text-amber-800 hover:bg-yellow-50 hover:text-red-800 transition-colors">
                    Playlist
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/eventos" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
              Eventos
            </Link>
            <Link href="/sobre-nosotros" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-amber-800 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Virginia CTA Button - Clases Tailwind estándar */}
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
              className="text-red-800 hover:text-amber-800 p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-yellow-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-amber-800 hover:text-red-800 hover:bg-yellow-50 rounded-md transition-colors">
                Inicio
              </Link>
              <Link href="/artistas" className="block px-3 py-2 text-base font-medium text-amber-800 hover:text-red-800 hover:bg-yellow-50 rounded-md transition-colors">
                Artistas
              </Link>
              <Link href="/generos" className="block px-3 py-2 text-base font-medium text-amber-800 hover:text-red-800 hover:bg-yellow-50 rounded-md transition-colors">
                Géneros
              </Link>
              <Link href="/eventos" className="block px-3 py-2 text-base font-medium text-amber-800 hover:text-red-800 hover:bg-yellow-50 rounded-md transition-colors">
                Eventos
              </Link>
              <Link href="/sobre-nosotros" className="block px-3 py-2 text-base font-medium text-amber-800 hover:text-red-800 hover:bg-yellow-50 rounded-md transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="block px-3 py-2 text-base font-medium text-amber-800 hover:text-red-800 hover:bg-yellow-50 rounded-md transition-colors">
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
