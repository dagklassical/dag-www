"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMusicaOpen, setIsMusicaOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsMusicaOpen(false)
  }

  const toggleMusicaSubmenu = () => {
    setIsMusicaOpen(!isMusicaOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-red-800">
                <span className="text-red-800">D</span> 
                <span className="text-yellow-600">AG</span> 
                <span className="text-red-800"> KLASSICAL</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Inicio
            </Link>
            
            {/* Música con submenú */}
            <div className="relative">
              <button
                onClick={toggleMusicaSubmenu}
                className="text-gray-700 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Música
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isMusicaOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Submenú Música */}
              {isMusicaOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  <Link
                    href="/musica/lanzamientos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-800 transition-colors"
                    onClick={() => setIsMusicaOpen(false)}
                  >
                    Lanzamientos
                  </Link>
                  <Link
                    href="/musica/preventa"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-800 transition-colors"
                    onClick={() => setIsMusicaOpen(false)}
                  >
                    Preventa
                  </Link>
                  <Link
                    href="/artistas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-800 transition-colors"
                    onClick={() => setIsMusicaOpen(false)}
                  >
                    Artistas
                  </Link>
                  <Link
                    href="/musica/discografia"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-800 transition-colors"
                    onClick={() => setIsMusicaOpen(false)}
                  >
                    Discografía
                  </Link>
                </div>
              )}
            </div>
            
            {/* 🔴 Virginia CTA Button (TEMPORAL) */}
            <Link
              href="/artistas/virginia-ramirez"
              className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>Virginia • Estreno</span>
            </Link>
            
            <Link 
              href="/blockchain" 
              className="text-gray-700 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Blockchain
            </Link>
            
            <Link 
              href="/nosotros" 
              className="text-gray-700 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Nosotros
            </Link>
            
            <Link 
              href="/noticias" 
              className="text-gray-700 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Noticias
            </Link>
            
            <Link 
              href="/contacto" 
              className="text-gray-700 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Virginia CTA en móvil */}
            <Link
              href="/artistas/virginia-ramirez"
              className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-600 hover:to-red-800 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1 transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>Nuevo</span>
            </Link>
            
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-800 focus:outline-none focus:text-red-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-red-800 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              
              {/* Música en móvil con submenu expandible */}
              <div>
                <button
                  onClick={toggleMusicaSubmenu}
                  className="text-gray-700 hover:text-red-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Música
                  <svg 
                    className={`h-4 w-4 transition-transform ${isMusicaOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMusicaOpen && (
                  <div className="pl-4">
                    <Link
                      href="/musica/lanzamientos"
                      className="text-gray-600 hover:text-red-800 block px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      • Lanzamientos
                    </Link>
                    <Link
                      href="/musica/preventa"
                      className="text-gray-600 hover:text-red-800 block px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      • Preventa
                    </Link>
                    <Link
                      href="/artistas"
                      className="text-gray-600 hover:text-red-800 block px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      • Artistas
                    </Link>
                    <Link
                      href="/musica/discografia"
                      className="text-gray-600 hover:text-red-800 block px-3 py-2 rounded-md text-sm"
                      onClick={toggleMenu}
                    >
                      • Discografía
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Virginia CTA en móvil */}
              <Link
                href="/artistas/virginia-ramirez"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-600 hover:to-red-800 transition-all duration-300"
                onClick={toggleMenu}
              >
                🔴 Virginia • Estreno
              </Link>
              
              <Link 
                href="/blockchain" 
                className="text-gray-700 hover:text-red-800 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Blockchain
              </Link>
              
              <Link 
                href="/nosotros" 
                className="text-gray-700 hover:text-red-800 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
              
              <Link 
                href="/noticias" 
                className="text-gray-700 hover:text-red-800 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Noticias
              </Link>
              
              <Link 
                href="/contacto" 
                className="text-gray-700 hover:text-red-800 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header