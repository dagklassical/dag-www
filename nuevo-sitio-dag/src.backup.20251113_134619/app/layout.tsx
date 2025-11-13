import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Configuración Inter en todos sus pesos
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
    <html lang="es" className={`${inter.variable}`}>
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
