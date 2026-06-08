import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jakarta',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'ARCA - Alta Costura Digital para Agências de Viagens',
  description: 'Roteiros de luxo white-label gerados por IA em minutos. Adeus, Word.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
