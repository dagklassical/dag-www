// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google' // Asumiendo ya hiciste este cambio
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// Quitamos la importación de TinaCMSWrapper por ahora
// import TinaCMSWrapper from '@/components/TinaCMSWrapper'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'DAG Klassical - Música Clásica Premium',
  description: 'DAG Klassical - Descubre la mejor música clásica contemporánea y tradicional',
  keywords: 'música clásica, DAG, artistas, compositores, conciertos, eventos musicales',
  authors: [{ name: 'DAG Klassical' }],
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <div className="min-h-screen flex flex-col bg-dag-ivory">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        {/* TinaCMS se manejará de otra manera, no aquí */}
      </body>
    </html>
  )
}