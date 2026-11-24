import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ProjectImage from '@/components/molecules/ProjectImage'
import MetricsGrid from '@/components/molecules/MetricsGrid'
import TechChips from '@/components/molecules/TechChips'
import ProjectLinks from '@/components/molecules/ProjectLinks'
import type { Project } from '@/data/projects'

const MAX_CHIPS = 6

interface Props {
  project: Project
  highlightAI?: boolean
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, highlightAI = false, onOpen }: Props) {
  const summary = project.problem ?? project.solution

  return (
    <Card
      className={`${highlightAI ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''} h-full flex flex-col`}
    >
      {project.image && <ProjectImage image={project.image} className="mb-4" />}

      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{project.name}</h3>

      {project.metrics && <MetricsGrid metrics={project.metrics} className="mb-4" />}

      {summary && <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">{summary}</p>}

      <div className="mb-4 flex-grow">
        <TechChips technologies={project.technologies} limit={MAX_CHIPS} />
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-2">
        <Button onClick={() => onOpen(project)}>Ver detalhes</Button>
        <ProjectLinks project={project} />
      </div>
    </Card>
  )
}
