'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home, Users, FileText, Newspaper, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Música', href: '/musica', icon: Users },
    { name: 'Blockchain', href: '/blockchain', icon: FileText },
    { name: 'Noticias', href: '/noticias', icon: Newspaper },
    { name: 'Nosotros', href: '/nosotros', icon: Users },
    { name: 'Contacto', href: '/contacto', icon: Mail },
  ]

  return (
    <header className="bg-dag-white shadow-lg border-b-4 border-dag-golden sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image src="/images/logo-dagklassical-orig-001.svg" alt="DAG Klassical"
                width={54} height={54} 
                className="group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div>
              <div className="text-2xl font-light text-dag-burgundy tracking-wide">DAG</div>
              <div className="text-sm font-medium text-dag-caramel -mt-1">KLASSICAL</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-dag-golden transition-colors duration-300" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-dag-ivory hover:bg-dag-golden transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-dag-burgundy" />
            ) : (
              <Menu className="w-6 h-6 text-dag-burgundy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-dag-ivory py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-dag-golden" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}