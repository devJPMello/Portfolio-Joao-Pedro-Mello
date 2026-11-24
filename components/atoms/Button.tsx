import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'outlinePrimary' | 'link' | 'brand' | 'brandOutline'
type Size = 'sm' | 'lg'

const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors'

const variants: Record<Variant, string> = {
  primary: `${base} bg-primary-600 text-white hover:bg-primary-700`,
  outline: `${base} border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800`,
  outlinePrimary: `${base} border-2 border-primary-500 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20`,
  link: 'flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors',
  // usam as classes globais .btn-primary / .btn-secondary (hero)
  brand: 'btn-primary gap-2',
  brandOutline: 'btn-secondary justify-center gap-2',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

interface Props {
  children: ReactNode
  variant?: Variant
  size?: Size
  /** com href vira <a>; sem href vira <button> */
  href?: string
  external?: boolean
  download?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'sm',
  href,
  external = false,
  download,
  onClick,
  className = '',
}: Props) {
  const sized = variant === 'link' || variant === 'brand' || variant === 'brandOutline' ? '' : sizes[size]
  const classes = `${variants[variant]} ${sized} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
