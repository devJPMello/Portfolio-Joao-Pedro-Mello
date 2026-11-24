import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import TechChips from '@/components/molecules/TechChips'
import type { Project } from '@/data/projects'

const MAX_CHIPS = 6

interface Props {
  project: Project
  onOpen: (project: Project) => void
}

export default function ContributionCard({ project, onOpen }: Props) {
  return (
    <Card className="border-l-4 border-gray-400 dark:border-gray-600 h-full flex flex-col">
      <div className="mb-3">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          Contribuição em Equipe
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.name}</h3>
      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">{project.company}</p>

      {project.contribution && (
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">{project.contribution}</p>
      )}

      <div className="mb-4 flex-grow">
        <TechChips technologies={project.technologies} limit={MAX_CHIPS} />
      </div>

      <div className="mt-2">
        <Button onClick={() => onOpen(project)}>Ver detalhes</Button>
      </div>
    </Card>
  )
}
