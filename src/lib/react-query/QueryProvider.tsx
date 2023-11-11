import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export const QueryProvider = ({ children }: {children:ReactNode}) => {
  return (
    <QueryClientProvider client={QueryClient}>


    </QueryClientProvider>
  )
}