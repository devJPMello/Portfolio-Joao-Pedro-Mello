import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

/** Superfície base (classe global .card). */
export default function Card({ children, className = '' }: Props) {
  return <div className={`card ${className}`.trim()}>{children}</div>
}
