'use client'

import { useState } from 'react'
import { FiZap } from 'react-icons/fi'
import ExpandToggle from '@/components/molecules/ExpandToggle'
import ProjectCard from '@/components/molecules/ProjectCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { useProjectModal } from '@/contexts/ProjectModalContext'
import { projects } from '@/data/projects'

const INITIAL_MAIN_PROJECTS = 5

const subheading = 'text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100'

export default function ProjectsSection() {
  const { openProject } = useProjectModal()
  const [showAll, setShowAll] = useState(false)

  const aiProjects = projects.filter((p) => p.category === 'ai')
  const mainProjects = projects.filter((p) => p.category === 'main')
  const visibleMain = showAll ? mainProjects : mainProjects.slice(0, INITIAL_MAIN_PROJECTS)
  const hiddenCount = mainProjects.length - INITIAL_MAIN_PROJECTS

  return (
    <section id="projetos" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Projetos"
          subtitle="Soluções desenvolvidas com foco em impacto e qualidade técnica"
        />

        {aiProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FiZap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <h3 className={subheading}>Projetos com Inteligência Artificial</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiProjects.map((project) => (
                <ProjectCard key={project.id} project={project} highlightAI onOpen={openProject} />
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className={subheading}>Projetos Principais</h3>
            {hiddenCount > 0 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">{mainProjects.length} projetos</span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {visibleMain.map((project) => (
              <div key={project.id} className="animate-slide-up h-full flex">
                <ProjectCard project={project} onOpen={openProject} />
              </div>
            ))}
          </div>

          {hiddenCount > 0 && (
            <ExpandToggle
              expanded={showAll}
              onToggle={() => setShowAll(!showAll)}
              moreLabel={`Ver Mais Projetos (${hiddenCount} restantes)`}
              lessLabel="Ver Menos Projetos"
            />
          )}
        </div>
      </div>
    </section>
  )
}
