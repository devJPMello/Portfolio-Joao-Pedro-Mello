import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Pedro - Desenvolvedor Full Stack | React, Node.js & IA',
  description: 'Desenvolvedor Full Stack Pleno especializado em React, Next.js, Node.js e integração com IA. Criando soluções modernas e performáticas.',
  keywords: 'Desenvolvedor Full Stack, React, Next.js, Node.js, Azure OpenAI, Desenvolvedor Frontend, Desenvolvedor Backend',
  authors: [{ name: 'João Pedro' }],
  openGraph: {
    title: 'João Pedro - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack Pleno especializado em React, Next.js, Node.js e integração com IA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
