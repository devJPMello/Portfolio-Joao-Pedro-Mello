import { FiArrowUpRight } from 'react-icons/fi'
import IconBadge from '@/components/atoms/IconBadge'
import type { ContactChannelData } from '@/data/contact'

export default function ContactChannel({ icon, label, value, href }: ContactChannelData) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
    >
      <IconBadge icon={icon} />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</p>
        <p className="truncate font-medium text-gray-900 dark:text-gray-100">{value}</p>
      </div>
      <FiArrowUpRight className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-primary-500 transition-colors" />
    </a>
  )
}
