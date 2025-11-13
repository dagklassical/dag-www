import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica de Excelencia',
  description: 'DAG Klassical: Descubre el mundo de la música clásica con artistas excepcionales, eventos exclusivos y una experiencia única.',
  keywords: 'música clásica, conciertos, artistas, DAG Klassical',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
