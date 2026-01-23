'use client'

import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 md:pt-24"
    >
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Desenvolvedor{' '}
            <span className="text-primary-600 dark:text-primary-400">Full Stack</span>
            <br />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            React, Node.js & IA
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Desenvolvo soluções modernas e performáticas, combinando tecnologias de ponta 
            com inteligência artificial para resolver problemas complexos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 px-4 sm:px-0">
            <button
              onClick={() => scrollToSection('projetos')}
              className="btn-primary w-full sm:w-auto max-w-[280px] sm:max-w-none text-base sm:text-base px-6 py-3 sm:px-6 sm:py-3 mx-auto sm:mx-0 text-center"
            >
              Ver Projetos
            </button>
            <a
              href="https://linkedin.com/in/joao-pedro-mendes-de-mello/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto max-w-[280px] sm:max-w-none flex items-center justify-center gap-2 text-base sm:text-base px-6 py-3 sm:px-6 sm:py-3"
            >
              <FiLinkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/devJPMello"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto max-w-[280px] sm:max-w-none flex items-center justify-center gap-2 text-base sm:text-base px-6 py-3 sm:px-6 sm:py-3"
            >
              <FiGithub className="h-5 w-5" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => scrollToSection('sobre')}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
