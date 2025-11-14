'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { MedusaProvider } from 'medusa-react'
import { useState } from 'react'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <MedusaProvider
        queryClientProviderProps={{ client }}
        baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}
        publishableApiKey={process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY}
      >
        {children}
      </MedusaProvider>
    </QueryClientProvider>
  )
}