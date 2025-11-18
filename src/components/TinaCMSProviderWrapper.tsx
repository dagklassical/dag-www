// src/components/TinaCMSProviderWrapper.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { TinaCMS, TinaProvider } from 'tinacms'

export default function TinaCMSProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [cms, setCms] = useState<TinaCMS | null>(null)

  useEffect(() => {
    // Obtenemos los tokens desde las variables de entorno del cliente
    const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
    const token = process.env.TINA_TOKEN

    // Verificamos que los tokens estén presentes
    if (!clientId || !token) {
      console.error('TinaCMS: NEXT_PUBLIC_TINA_CLIENT_ID o TINA_TOKEN no están definidos en .env.local')
      return
    }

    // Creamos la instancia de TinaCMS
    const tinaCms = new TinaCMS({
      // Configuramos el backend para que use Tina Cloud
      // Esto debería permitir que TinaAdmin se conecte y obtenga el esquema
      backend: {
        // El nombre del repo y owner se obtienen de Tina Cloud usando el clientId
        // El token permite la autenticación
        name: 'git', // Aunque usemos Tina Cloud, el backend puede ser 'git' si está configurado así
        // Opcional: Si Tina Cloud usa una URL específica para la API, puede ser necesaria aquí
        // endpoint: 'https://content.tinajs.io', // No suele ser necesario si se usan los tokens
      },
      // Aseguramos que el clientId y token estén disponibles para el CMS
      // TinaCMS los debería leer automáticamente de las variables de entorno
      // pero si no, podemos pasarlos explícitamente en alguna configuración de plugin
    })

    // Opcional: Añadir un plugin de autenticación si es necesario
    // tinaCms.plugins.add(new TinaAuth())

    setCms(tinaCms)
  }, [])

  if (!cms) {
    return <div>Cargando TinaCMS...</div>
  }

  return <TinaProvider cms={cms}>{children}</TinaProvider>
}