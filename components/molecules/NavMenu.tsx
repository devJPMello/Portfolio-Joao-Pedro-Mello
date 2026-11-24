import type { NavLink } from '@/data/navigation'

interface Props {
  links: NavLink[]
  activeId: string | null
  onSelect: (id: string) => void
  orientation?: 'row' | 'column'
}

export default function NavMenu({ links, activeId, onSelect, orientation = 'row' }: Props) {
  const isRow = orientation === 'row'

  return (
    <>
      {links.map(({ id, label }) => {
        const active = activeId === id
        const classes = isRow
          ? `transition-colors ${
              active
                ? 'font-bold text-gray-900 dark:text-white'
                : 'font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
            }`
          : `block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 ${
              active ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-700 dark:text-gray-300'
            }`

        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            aria-current={active ? 'true' : undefined}
            className={classes}
          >
            {label}
          </button>
        )
      })}
    </>
  )
}
