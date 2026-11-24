import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/data/contact'

const links = [
  { icon: FiGithub, label: 'GitHub', href: GITHUB_URL, external: true },
  { icon: FiLinkedin, label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { icon: FiMail, label: 'Email', href: `mailto:${EMAIL}`, external: false },
]

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {links.map(({ icon: Icon, label, href, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="hover:text-primary-400 dark:hover:text-primary-500 transition-colors"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
