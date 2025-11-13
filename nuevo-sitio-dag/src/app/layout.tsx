import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'DAG Klassical - Redefiniendo la experiencia de la música clásica',
  description: 'DAG Klassical redefine la experiencia de la música clásica a través de tecnología blockchain y NFTs exclusivos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}
