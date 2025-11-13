'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Music, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = [
    { name: 'Inicio', href: '/', active: false },
    { name: 'Artistas', href: '/artistas', active: false },
    { name: 'Compositores', href: '/compositores', active: false },
    { name: 'Noticias', href: '/noticias', active: false },
    { name: 'Blockchain', href: '/blockchain', active: false },
    { name: 'Contacto', href: '/contacto', active: false },
  ]

  return (
    <header className="bg-dag-white shadow-lg sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-dag-burgundy rounded-lg flex items-center justify-center group-hover:bg-dag-golden transition-colors duration-300">
              <Music className="w-6 h-6 text-dag-white group-hover:text-dag-burgundy" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-dag-burgundy group-hover:text-dag-golden transition-colors font-playfair">
                DAG
              </span>
              <span className="text-xs text-dag-golden -mt-1">KLASSICAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  item.active
                    ? 'bg-dag-burgundy text-dag-white'
                    : 'text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Virginia CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/virginia-ramirez"
              className="inline-flex items-center bg-dag-golden text-dag-burgundy px-6 py-3 rounded-lg font-semibold hover:bg-dag-burgundy hover:text-dag-white transition-all duration-300 hover:scale-105 pulse-animation"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Virginia Ramírez
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-dag-ivory pt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    item.active
                      ? 'bg-dag-burgundy text-dag-white'
                      : 'text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/virginia-ramirez"
                className="inline-flex items-center bg-dag-golden text-dag-burgundy px-3 py-2 rounded-lg font-semibold hover:bg-dag-burgundy hover:text-dag-white transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Virginia Ramírez
              </Link>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </header>
  )
}
