import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Button from '@/components/atoms/Button'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  /** 'link' = discretos (cards); 'button' = botões (rodapé do modal) */
  variant?: 'link' | 'button'
}

export default function ProjectLinks({ project, variant = 'link' }: Props) {
  const asButton = variant === 'button'

  return (
    <>
      {project.demoUrl && (
        <Button href={project.demoUrl} external variant={asButton ? 'primary' : 'link'}>
          <FiExternalLink className="h-4 w-4" />
          {asButton ? 'Ver demo' : 'Demo'}
        </Button>
      )}
      {project.repoUrl && (
        <Button href={project.repoUrl} external variant={asButton ? 'outline' : 'link'}>
          <FiGithub className="h-4 w-4" />
          Repositório
        </Button>
      )}
      {project.extraLinks?.map((link) => (
        <Button key={link.url} href={link.url} external variant={asButton ? 'outline' : 'link'}>
          <FiExternalLink className="h-4 w-4" />
          {link.label}
        </Button>
      ))}
    </>
  )
}
