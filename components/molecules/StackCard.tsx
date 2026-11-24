import { FiMonitor, FiServer, FiCpu, FiDatabase, FiGitBranch } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Card from '@/components/atoms/Card'
import IconBadge from '@/components/atoms/IconBadge'
import TechChips from '@/components/molecules/TechChips'
import type { TechStack } from '@/data/stack'

const icons: Record<string, IconType> = {
  Frontend: FiMonitor,
  Backend: FiServer,
  IA: FiCpu,
  Dados: FiDatabase,
  'DevOps e Métodos': FiGitBranch,
}

interface Props {
  category: TechStack
  className?: string
}

export default function StackCard({ category, className = '' }: Props) {
  return (
    <Card
      className={`group transition-all duration-200 hover:-translate-y-1 hover:ring-2 hover:ring-primary-500/60 ${className}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <IconBadge
          icon={icons[category.category] ?? FiMonitor}
          className="transition-colors group-hover:bg-primary-600 group-hover:text-white dark:group-hover:text-white"
        />
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{category.category}</h3>
      </div>
      <TechChips technologies={category.technologies} variant="pill" />
    </Card>
  )
}
