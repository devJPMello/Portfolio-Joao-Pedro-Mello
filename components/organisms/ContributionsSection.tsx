'use client'

import { useState } from 'react'
import ContributionCard from '@/components/molecules/ContributionCard'
import ExpandToggle from '@/components/molecules/ExpandToggle'
import SectionHeader from '@/components/molecules/SectionHeader'
import { useProjectModal } from '@/contexts/ProjectModalContext'
import { projects } from '@/data/projects'

const INITIAL_CONTRIBUTIONS = 5

export default function ContributionsSection() {
  const { openProject } = useProjectModal()
  const [showAll, setShowAll] = useState(false)

  const contributions = projects.filter((p) => p.category === 'contribution')
  if (contributions.length === 0) return null

  const visible = showAll ? contributions : contributions.slice(0, INITIAL_CONTRIBUTIONS)
  const hiddenCount = contributions.length - INITIAL_CONTRIBUTIONS

  return (
    <section id="contribuicoes" className="section-container">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contribuições"
          subtitle="Projetos desenvolvidos em equipe, em empresas e squads"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {visible.map((project) => (
            <div key={project.id} className="animate-slide-up h-full flex">
              <ContributionCard project={project} onOpen={openProject} />
            </div>
          ))}
        </div>

        {hiddenCount > 0 && (
          <ExpandToggle
            expanded={showAll}
            onToggle={() => setShowAll(!showAll)}
            moreLabel={`Ver Mais (${hiddenCount} restantes)`}
            lessLabel="Ver Menos"
            tone="neutral"
          />
        )}
      </div>
    </section>
  )
}
