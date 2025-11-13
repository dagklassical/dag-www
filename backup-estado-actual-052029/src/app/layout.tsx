import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Configuración de fuentes elegantes
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica Premium',
  description: 'DAG Klassical - Descubre la mejor música clásica contemporánea y tradicional',
  keywords: 'música clásica, DAG, artistas, compositores, conciertos, eventos musicales',
  authors: [{ name: 'DAG Klassical' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased font-inter`}>
        <div className="min-h-screen flex flex-col bg-dag-ivory">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
