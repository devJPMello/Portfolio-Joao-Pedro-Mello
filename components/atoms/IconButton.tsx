import type { IconType } from 'react-icons'

type Variant = 'ghost' | 'solid' | 'toggle' | 'plain'

const variants: Record<Variant, string> = {
  ghost:
    'shrink-0 rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors',
  solid: 'rounded-full bg-primary-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-primary-700',
  toggle:
    'p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
  plain: 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors',
}

interface Props {
  icon: IconType
  label: string
  onClick?: () => void
  variant?: Variant
  disabled?: boolean
  className?: string
  iconClassName?: string
}

export default function IconButton({
  icon: Icon,
  label,
  onClick,
  variant = 'ghost',
  disabled,
  className = '',
  iconClassName = 'h-6 w-6',
}: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      className={`${variants[variant]} ${className}`}
    >
      <Icon className={iconClassName} />
    </button>
  )
}
