import type { IconType } from 'react-icons'

type Tone = 'soft' | 'solid' | 'muted'
type Shape = 'square' | 'circle'

const tones: Record<Tone, string> = {
  soft: 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400',
  solid: 'bg-primary-600 text-white shadow-lg shadow-primary-600/30',
  muted: 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
}

interface Props {
  icon: IconType
  tone?: Tone
  shape?: Shape
  /** classes extras no contêiner (posição, hover de grupo etc.) */
  className?: string
}

export default function IconBadge({ icon: Icon, tone = 'soft', shape = 'square', className = '' }: Props) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center ${
        shape === 'circle' ? 'rounded-full' : 'rounded-xl'
      } ${tones[tone]} ${className}`}
    >
      <Icon className="h-5 w-5" />
    </span>
  )
}
