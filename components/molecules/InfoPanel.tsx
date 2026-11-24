import type { ReactNode } from 'react'
import Eyebrow from '@/components/atoms/Eyebrow'

interface Props {
  title: string
  children: ReactNode
  className?: string
  /** 'subtle' = fundo cinza; 'accent' = borda e fundo na cor primária */
  tone?: 'subtle' | 'accent'
}

const tones = {
  subtle: 'bg-gray-50 dark:bg-gray-800/60',
  accent: 'border border-primary-200 dark:border-primary-800 bg-primary-50/60 dark:bg-primary-900/10',
}

export default function InfoPanel({ title, children, className = '', tone = 'subtle' }: Props) {
  return (
    <section className={`rounded-xl p-5 ${tones[tone]} ${className}`.trim()}>
      <Eyebrow>{title}</Eyebrow>
      {children}
    </section>
  )
}
