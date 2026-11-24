'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import IconButton from '@/components/atoms/IconButton'
import NavMenu from '@/components/molecules/NavMenu'
import ThemeToggle from '@/components/molecules/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { scrollToSection } from '@/lib/scrollToSection'
import { navLinks, navLinkIds } from '@/data/navigation'

export default function Header() {
  const isScrolled = useScrolledPast(20)
  const activeId = useActiveSection(navLinkIds)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const goTo = (id: string) => {
    if (scrollToSection(id)) setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-900/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => goTo('hero')}
            className="flex-shrink-0 text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            João Pedro
          </button>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavMenu links={navLinks} activeId={activeId} onSelect={goTo} />
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <IconButton
              icon={isMobileMenuOpen ? FiX : FiMenu}
              label="Toggle menu"
              variant="plain"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 bg-white dark:bg-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
            <NavMenu links={navLinks} activeId={activeId} onSelect={goTo} orientation="column" />
          </div>
        )}
      </nav>
    </header>
  )
}
