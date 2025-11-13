#!/bin/bash

# CAMBIOS DANILO - Script simple
cd /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag

# 1. Backup
cp src/components/Header.tsx src/components/Header.tsx.backup

# 2. Header sin iconos + logo real
cat > src/components/Header.tsx << 'EOF'
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Música', href: '/musica' },
    { name: 'Virginia Ramírez', href: '/virginia-ramirez' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="bg-dag-white shadow-lg border-b-4 border-dag-golden sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-auto group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo-dag-klassical-003.png" 
                alt="DAG Klassical" 
                width={160} 
                height={48} 
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory transition-all duration-300 font-medium"
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-dag-ivory hover:bg-dag-golden transition-colors duration-300"
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
          <div className="lg:hidden border-t border-dag-ivory py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-dag-caramel hover:text-dag-burgundy hover:bg-dag-ivory transition-all duration-300 font-medium"
                  >
                    {item.name}
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
EOF

# 3. Logo (busca en varias ubicaciones)
for dir in "." ".." "../user_input_files"; do
    if [ -f "$dir/logo-dag-klassical-003.png" ]; then
        cp "$dir/logo-dag-klassical-003.png" public/
        echo "Logo copiado desde: $dir"
        break
    fi
done

# 4. Border radius más sutil
sed -i 's/rounded-lg/rounded-xl/g' src/app/globals.css
sed -i 's/rounded-lg/rounded-xl/g' src/app/page.tsx

echo "✅ Cambios aplicados - npm run dev"