import type { ReactNode } from 'react'

export default function SectionSubtitle({ children }: { children: ReactNode }) {
  return <p className="section-subtitle text-center">{children}</p>
}
