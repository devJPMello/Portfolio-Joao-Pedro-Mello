import SocialLinks from '@/components/molecules/SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-8 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} João Pedro. Todos os direitos reservados.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
