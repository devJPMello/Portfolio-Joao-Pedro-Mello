import { FiArrowRight } from 'react-icons/fi'
import type { Highlight } from '@/data/highlights'

interface Props {
  highlight: Highlight
  onSelect: (highlight: Highlight) => void
}

export default function HighlightCard({ highlight, onSelect }: Props) {
  const Icon = highlight.icon

  return (
    <button
      onClick={() => onSelect(highlight)}
      className="card h-full text-left flex flex-col group cursor-pointer hover:-translate-y-1 hover:ring-2 hover:ring-primary-500 transition-all duration-200"
    >
      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{highlight.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{highlight.text}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400">
        {highlight.projectId ? 'Ver detalhes' : 'Ver experiência'}
        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  )
}
