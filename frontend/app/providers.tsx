'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { MedusaProvider } from 'medusa-react'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}
        publishableApiKey={process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY}
      >
        {children}
      </MedusaProvider>
    </QueryClientProvider>
  )
}