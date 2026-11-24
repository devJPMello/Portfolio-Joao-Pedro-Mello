import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectImage({
  image,
  className = '',
}: {
  image: NonNullable<Project['image']>
  className?: string
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width ?? 1440}
      height={image.height ?? 900}
      className={`w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700 ${className}`.trim()}
    />
  )
}
