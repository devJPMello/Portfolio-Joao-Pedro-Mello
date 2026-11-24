import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface Props {
  expanded: boolean
  onToggle: () => void
  moreLabel: string
  lessLabel: string
  tone?: 'primary' | 'neutral'
}

const tones = {
  primary: 'bg-primary-600 hover:bg-primary-700',
  neutral: 'bg-gray-600 hover:bg-gray-700',
}

export default function ExpandToggle({ expanded, onToggle, moreLabel, lessLabel, tone = 'primary' }: Props) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onToggle}
        className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${tones[tone]}`}
      >
        {expanded ? (
          <>
            <FiChevronUp className="h-5 w-5" />
            {lessLabel}
          </>
        ) : (
          <>
            {moreLabel}
            <FiChevronDown className="h-5 w-5" />
          </>
        )}
      </button>
    </div>
  )
}
