'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import ProjectModal from '@/components/organisms/ProjectModal'
import { projects, type Project } from '@/data/projects'

interface ProjectModalContextValue {
  openProject: (project: Project) => void
  openProjectById: (id: string) => void
}

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null)

/** Guarda qual projeto está aberto e renderiza o modal; qualquer parte da página pode abri-lo. */
export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Project | null>(null)

  const openProjectById = useCallback((id: string) => {
    const project = projects.find((p) => p.id === id)
    if (project) setSelected(project)
  }, [])

  const close = useCallback(() => setSelected(null), [])

  const value = useMemo(() => ({ openProject: setSelected, openProjectById }), [openProjectById])

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
      {selected && <ProjectModal project={selected} onClose={close} />}
    </ProjectModalContext.Provider>
  )
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext)
  if (!ctx) throw new Error('useProjectModal deve ser usado dentro de ProjectModalProvider')
  return ctx
}
