import type { ReactNode } from 'react'

type Variant = 'primary' | 'success' | 'neutral' | 'outline'

const styles: Record<Variant, string> = {
  primary: 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300',
  success: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  neutral: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
  outline: 'border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium',
}

interface Props {
  children: ReactNode
  variant?: Variant
  /** bolinha pulsando antes do texto (estado "ao vivo") */
  dot?: boolean
}

export default function Badge({ children, variant = 'primary', dot = false }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[variant]}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />}
      {children}
    </span>
  )
}
