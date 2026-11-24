'use client'

import SectionTitle from '@/components/atoms/SectionTitle'
import HighlightCard from '@/components/molecules/HighlightCard'
import { useProjectModal } from '@/contexts/ProjectModalContext'
import { scrollToSection } from '@/lib/scrollToSection'
import { highlights, type Highlight } from '@/data/highlights'

export default function Highlights() {
  const { openProjectById } = useProjectModal()

  const select = ({ projectId, sectionId }: Highlight) => {
    if (projectId) openProjectById(projectId)
    else if (sectionId) scrollToSection(sectionId)
  }

  return (
    <section id="destaques" className="section-container">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Destaques</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <HighlightCard key={h.title} highlight={h} onSelect={select} />
          ))}
        </div>
      </div>
    </section>
  )
}
