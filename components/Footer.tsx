import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-8 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} João Pedro. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/devJPMello"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 dark:hover:text-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/joao-pedro-mendes-de-mello/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 dark:hover:text-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:joaopedromendesmello@gmail.com"
              className="hover:text-primary-400 dark:hover:text-primary-500 transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
