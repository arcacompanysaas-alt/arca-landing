import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARCA - Propostas em 3 Minutos',
  description: 'Suas propostas profissionais, com sua marca, em 3 minutos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-text-dark">{children}</body>
    </html>
  )
}
