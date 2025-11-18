// src/app/admin/page.tsx
'use client'

import { TinaAdmin } from 'tinacms'
import TinaCMSProviderWrapper from '@/components/TinaCMSProviderWrapper'

export default function AdminPage() {
  return (
    <TinaCMSProviderWrapper>
      <TinaAdmin />
    </TinaCMSProviderWrapper>
  )
}