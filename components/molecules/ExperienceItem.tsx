import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import Card from '@/components/atoms/Card'
import Badge from '@/components/atoms/Badge'
import IconBadge from '@/components/atoms/IconBadge'
import TechChips from '@/components/molecules/TechChips'
import type { Experience } from '@/data/experience'

/** Item da linha do tempo: marcador + card da experiência. */
export default function ExperienceItem({ experience: exp }: { experience: Experience }) {
  return (
    <li className="relative pl-16 pb-10 last:pb-0">
      <IconBadge
        icon={FiBriefcase}
        shape="circle"
        tone={exp.current ? 'solid' : 'muted'}
        className="absolute left-0 top-1 ring-4 ring-gray-50 dark:ring-gray-900"
      />

      <Card>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {exp.current ? (
            <Badge variant="success" dot>
              Atual
            </Badge>
          ) : (
            <Badge variant="neutral">Encerrado</Badge>
          )}
          <Badge variant="outline">{exp.mode}</Badge>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
        <p className="mt-1 mb-4 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <FiCalendar className="h-4 w-4" />
          {exp.period}
        </p>

        <ul className="space-y-2 mb-5">
          {exp.description.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 dark:text-gray-300 flex items-start before:content-['▹'] before:text-primary-600 dark:before:text-primary-400 before:mr-2 before:font-bold before:mt-1"
            >
              {item}
            </li>
          ))}
        </ul>

        <TechChips technologies={exp.technologies} variant="pill" />
      </Card>
    </li>
  )
}
