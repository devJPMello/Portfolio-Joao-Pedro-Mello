import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://devjpmello.vercel.app'),
  title: 'João Pedro Mendes de Mello | Desenvolvedor Full Stack, React, Next.js, NestJS e IA',
  description: 'Desenvolvedor Full Stack com quase 2 anos de experiência em React, Next.js, TypeScript, NestJS e PostgreSQL, com agentes de IA em Azure OpenAI.',
  keywords: 'Desenvolvedor Full Stack, React, Next.js, NestJS, TypeScript, PostgreSQL, Azure OpenAI, IA Generativa',
  authors: [{ name: 'João Pedro Mendes de Mello' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'João Pedro Mendes de Mello | Desenvolvedor Full Stack',
    description: 'React, Next.js, NestJS e IA Generativa. Projetos, experiência e currículo.',
    type: 'website',
    locale: 'pt_BR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Pedro Mendes de Mello | Desenvolvedor Full Stack',
    description: 'React, Next.js, NestJS e IA Generativa.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
