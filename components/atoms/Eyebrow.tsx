import type { ReactNode } from 'react'

/** Rótulo pequeno em caixa alta, usado como título de bloco. */
export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
      {children}
    </h4>
  )
}
