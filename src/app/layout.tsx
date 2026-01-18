import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CommitLabs - Liquidity as a Commitment',
  description: 'Transform passive liquidity into enforceable, attestable, and composable on-chain commitments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

