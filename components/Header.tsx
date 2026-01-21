'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              João Pedro
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('stack')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Tecnologias
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('stack')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
            >
              Tecnologias
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
