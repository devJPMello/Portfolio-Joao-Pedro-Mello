import Chip from '@/components/atoms/Chip'

interface Props {
  technologies: string[]
  /** mostra só as primeiras N e um "+N" com o restante */
  limit?: number
  variant?: 'compact' | 'pill'
}

export default function TechChips({ technologies, limit, variant = 'compact' }: Props) {
  const shown = limit ? technologies.slice(0, limit) : technologies
  const rest = technologies.length - shown.length

  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((tech) => (
        <Chip key={tech} variant={variant}>
          {tech}
        </Chip>
      ))}
      {rest > 0 && <Chip variant={variant}>+{rest}</Chip>}
    </div>
  )
}
