import type { ReactNode } from 'react'

type Variant = 'compact' | 'pill'

const styles: Record<Variant, string> = {
  compact:
    'px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium',
  pill: 'px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 transition-colors hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300',
}

export default function Chip({ children, variant = 'compact' }: { children: ReactNode; variant?: Variant }) {
  return <span className={styles[variant]}>{children}</span>
}
