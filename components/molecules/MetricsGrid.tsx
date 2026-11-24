import MetricBox from '@/components/atoms/MetricBox'

interface Props {
  metrics: { value: string; label: string }[]
  size?: 'sm' | 'lg'
  className?: string
}

export default function MetricsGrid({ metrics, size = 'sm', className = '' }: Props) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`.trim()}>
      {metrics.map((m) => (
        <MetricBox key={m.label} value={m.value} label={m.label} size={size} />
      ))}
    </div>
  )
}
