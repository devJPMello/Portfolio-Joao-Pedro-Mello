import SectionTitle from '@/components/atoms/SectionTitle'
import SectionSubtitle from '@/components/atoms/SectionSubtitle'

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    </>
  )
}
