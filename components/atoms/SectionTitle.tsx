import type { ReactNode } from 'react'

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="section-title text-center">{children}</h2>
}
