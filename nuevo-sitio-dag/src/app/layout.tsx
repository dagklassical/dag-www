import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header-backup-$(date +%Y%m%d-%H%M%S)'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica Premium',
  description: 'DAG Klassical - Descubre la mejor música clásica contemporánea y tradicional',
  keywords: 'música clásica, DAG, artistas, compositores, conciertos, eventos musicales',
  authors: [{ name: 'DAG Klassical' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
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
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
