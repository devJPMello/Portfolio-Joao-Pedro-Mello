interface Props {
  value: string
  label: string
  size?: 'sm' | 'lg'
}

export default function MetricBox({ value, label, size = 'sm' }: Props) {
  const isLarge = size === 'lg'
  return (
    <div
      className={`rounded-lg bg-primary-50 dark:bg-primary-900/20 text-center ${
        isLarge ? 'rounded-xl px-4 py-3' : 'px-3 py-2'
      }`}
    >
      <p className={`font-bold text-primary-700 dark:text-primary-300 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
        {value}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  )
}
