'use client'

import { FiX } from 'react-icons/fi'
import Badge from '@/components/atoms/Badge'
import Eyebrow from '@/components/atoms/Eyebrow'
import IconButton from '@/components/atoms/IconButton'
import CheckList from '@/components/molecules/CheckList'
import InfoPanel from '@/components/molecules/InfoPanel'
import MetricsGrid from '@/components/molecules/MetricsGrid'
import ProjectImage from '@/components/molecules/ProjectImage'
import ProjectLinks from '@/components/molecules/ProjectLinks'
import TechChips from '@/components/molecules/TechChips'
import { useModalBehavior } from '@/hooks/useModalBehavior'
import type { Project } from '@/data/projects'

const categoryLabel: Record<Project['category'], string> = {
  main: 'Projeto',
  ai: 'Projeto com IA',
  contribution: 'Contribuição em equipe',
}

const bodyText = 'text-sm text-gray-700 dark:text-gray-300 leading-relaxed'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useModalBehavior(onClose)

  const subtitle = [project.company, project.role].filter(Boolean).join(' · ')
  const hasLinks = project.demoUrl || project.repoUrl || (project.extraLinks && project.extraLinks.length > 0)

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-4 px-6 py-5 border-b border-gray-200 dark:border-gray-800">
          <div className="min-w-0">
            <div className="mb-2">
              <Badge>{categoryLabel[project.category]}</Badge>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">{project.name}</h3>
            {subtitle && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
          </div>
          <IconButton icon={FiX} label="Fechar" onClick={onClose} />
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {project.metrics && <MetricsGrid metrics={project.metrics} size="lg" />}

          {project.image && <ProjectImage image={project.image} className="mx-auto max-w-2xl rounded-xl" />}

          {(project.problem || project.solution || project.contribution) && (
            <div className="grid gap-6 md:grid-cols-2">
              {project.problem && (
                <InfoPanel title="Problema">
                  <p className={bodyText}>{project.problem}</p>
                </InfoPanel>
              )}
              {project.solution && (
                <InfoPanel title="Solução">
                  <p className={bodyText}>{project.solution}</p>
                </InfoPanel>
              )}
              {project.contribution && (
                <InfoPanel title="Minha contribuição" className="md:col-span-2">
                  <p className={bodyText}>{project.contribution}</p>
                </InfoPanel>
              )}
            </div>
          )}

          {project.aiFeatures && (
            <InfoPanel title="Inteligência Artificial" tone="accent">
              <dl className="space-y-2 text-sm">
                {[
                  ['Serviço', project.aiFeatures.service],
                  ['Agentes', project.aiFeatures.agent],
                  ['Automação', project.aiFeatures.automation],
                ].map(([term, description]) => (
                  <div key={term}>
                    <dt className="font-semibold text-gray-900 dark:text-gray-100">{term}</dt>
                    <dd className={bodyText}>{description}</dd>
                  </div>
                ))}
              </dl>
            </InfoPanel>
          )}

          <section>
            <Eyebrow>Destaques</Eyebrow>
            <CheckList items={project.highlights} />
          </section>

          <section>
            <Eyebrow>Tecnologias</Eyebrow>
            <TechChips technologies={project.technologies} />
          </section>
        </div>

        {hasLinks && (
          <footer className="flex flex-wrap gap-3 px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <ProjectLinks project={project} variant="button" />
          </footer>
        )}
      </div>
    </div>
  )
}
