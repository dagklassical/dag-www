import Link from 'next/link'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/dagklassical' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/dagklassical' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/dagklassical' },
  ]

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Artistas', href: '/artistas' },
    { name: 'Compositores', href: '/compositores' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const blockchainLinks = [
    { name: 'Redes Polygon', href: '/blockchain/polygon-networks' },
    { name: 'Tienda NFT', href: '/blockchain/tienda-nft' },
    { name: 'Certificados', href: '/blockchain/certificados' },
  ]

  return (
    <footer className="bg-dag-burgundy text-dag-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-dag-golden rounded-xl flex items-center justify-center">
                <span className="text-dag-burgundy font-bold text-xl font-playfair">D</span>
              </div>
              <div>
                <div className="text-2xl font-light text-dag-white tracking-wide font-playfair">DAG</div>
                <div className="text-sm font-medium text-dag-golden -mt-1">KLASSICAL</div>
              </div>
            </div>
            <p className="text-dag-ivory mb-6 leading-relaxed max-w-md text-elegant">
              Descubre la belleza y sofisticación de la música clásica contemporánea y tradicional. 
              Conectando artistas y amantes de la música en todo el mundo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dag-golden rounded-xl flex items-center justify-center text-dag-burgundy hover:bg-dag-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-dag-golden mb-4 font-playfair">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dag-ivory hover:text-dag-golden transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blockchain Links */}
          <div>
            <h3 className="text-lg font-semibold text-dag-golden mb-4 font-playfair">Blockchain</h3>
            <ul className="space-y-2">
              {blockchainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dag-ivory hover:text-dag-golden transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-dag-ivory/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-dag-golden mb-4 font-playfair">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-dag-golden" />
                  <span className="text-dag-ivory text-sm">contact@dagklassical.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-dag-golden" />
                  <span className="text-dag-ivory text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-dag-golden" />
                  <span className="text-dag-ivory text-sm">Mundo</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-dag-golden mb-4 font-playfair">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/privacidad" className="text-dag-ivory text-sm hover:text-dag-golden transition-colors duration-300">
                  Política de Privacidad
                </Link>
                <Link href="/terminos" className="text-dag-ivory text-sm hover:text-dag-golden transition-colors duration-300">
                  Términos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dag-ivory/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dag-ivory text-sm">
              © {currentYear} DAGKLASSICAL.COM - Todos los derechos reservados
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-dag-golden text-sm font-playfair">Música Clásica Premium</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
