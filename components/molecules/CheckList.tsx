import { FiCheckCircle } from 'react-icons/fi'

export default function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
          <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
