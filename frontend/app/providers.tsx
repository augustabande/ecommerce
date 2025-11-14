'use client'

import { QueryClient } from 'react-query'
import { MedusaProvider } from 'medusa-react'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
 const queryClient = new QueryClient()

  return (
    <MedusaProvider
    queryClientProviderProps={{ client: queryClient }}
    baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}
    publishableApiKey={process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY}
  >
    {children}
  </MedusaProvider>
  )
}