'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { FiExternalLink, FiGithub, FiZap, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import type { Project } from '@/data/projects'

export default function Projects() {
  const mainProjects = projects.filter((p) => p.category === 'main')
  const aiProjects = projects.filter((p) => p.category === 'ai')
  const contributionProjects = projects.filter((p) => p.category === 'contribution')
  
  const [showAllMainProjects, setShowAllMainProjects] = useState(false)
  const [showAllContributionProjects, setShowAllContributionProjects] = useState(false)
  const INITIAL_MAIN_PROJECTS = 5
  const INITIAL_CONTRIBUTION_PROJECTS = 5
  const visibleMainProjects = showAllMainProjects 
    ? mainProjects 
    : mainProjects.slice(0, INITIAL_MAIN_PROJECTS)
  const visibleContributionProjects = showAllContributionProjects
    ? contributionProjects
    : contributionProjects.slice(0, INITIAL_CONTRIBUTION_PROJECTS)

  return (
    <section id="projetos" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Projetos</h2>
        <p className="section-subtitle text-center">
          Soluções desenvolvidas com foco em impacto e qualidade técnica
        </p>

        {/* Projetos com IA */}
        {aiProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FiZap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Projetos com Inteligência Artificial
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiProjects.map((project) => (
                <ProjectCard key={project.id} project={project} highlightAI />
              ))}
            </div>
          </div>
        )}

        {/* Projetos Principais */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Projetos Principais
            </h3>
            {mainProjects.length > INITIAL_MAIN_PROJECTS && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {mainProjects.length} projetos
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {visibleMainProjects.map((project, index) => (
              <div
                key={project.id}
                className={`animate-slide-up h-full flex ${
                  index >= INITIAL_MAIN_PROJECTS ? 'delay-100' : ''
                }`}
                style={{
                  animationDelay: index >= INITIAL_MAIN_PROJECTS ? `${(index - INITIAL_MAIN_PROJECTS) * 100}ms` : '0ms'
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {mainProjects.length > INITIAL_MAIN_PROJECTS && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  setShowAllMainProjects(!showAllMainProjects)
                  // Scroll suave para o botão após expandir
                  setTimeout(() => {
                    const button = document.getElementById('main-projects-button')
                    if (button && !showAllMainProjects) {
                      button.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                    }
                  }, 100)
                }}
                id="main-projects-button"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {showAllMainProjects ? (
                  <>
                    <FiChevronUp className="h-5 w-5" />
                    Ver Menos Projetos
                  </>
                ) : (
                  <>
                    Ver Mais Projetos ({mainProjects.length - INITIAL_MAIN_PROJECTS} restantes)
                    <FiChevronDown className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Projetos com Contribuição */}
        {contributionProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Projetos com Contribuição
              </h3>
              {contributionProjects.length > INITIAL_CONTRIBUTION_PROJECTS && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {contributionProjects.length} projetos
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {visibleContributionProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-slide-up h-full flex"
                  style={{
                    animationDelay: index >= INITIAL_CONTRIBUTION_PROJECTS ? `${(index - INITIAL_CONTRIBUTION_PROJECTS) * 100}ms` : '0ms'
                  }}
                >
                  <ContributionCard project={project} />
                </div>
              ))}
            </div>
            
            {contributionProjects.length > INITIAL_CONTRIBUTION_PROJECTS && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => {
                    setShowAllContributionProjects(!showAllContributionProjects)
                    setTimeout(() => {
                      const button = document.getElementById('contribution-projects-button')
                      if (button && !showAllContributionProjects) {
                        button.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                      }
                    }, 100)
                  }}
                  id="contribution-projects-button"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {showAllContributionProjects ? (
                    <>
                      <FiChevronUp className="h-5 w-5" />
                      Ver Menos Projetos
                    </>
                  ) : (
                    <>
                      Ver Mais Projetos ({contributionProjects.length - INITIAL_CONTRIBUTION_PROJECTS} restantes)
                      <FiChevronDown className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, highlightAI = false }: { project: Project; highlightAI?: boolean }) {
  return (
    <div className={`card ${highlightAI ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''} h-full flex flex-col`}>
      {highlightAI && project.aiFeatures && (
        <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
          <p className="text-sm font-semibold text-primary-800 dark:text-primary-300 mb-1">
            Projeto com IA
          </p>
          <p className="text-xs text-primary-700 dark:text-primary-400">
            <strong>Serviço:</strong> {project.aiFeatures.service} |{' '}
            <strong>Automação:</strong> {project.aiFeatures.automation}
          </p>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{project.name}</h3>
      
      {project.problem && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Problema:</p>
          <p className="text-gray-600 dark:text-gray-400">{project.problem}</p>
        </div>
      )}
      
      {project.solution && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Solução:</p>
          <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tecnologias:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 flex-grow">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Destaques:</p>
        <ul className="space-y-1">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-start before:content-['▹'] before:text-primary-600 dark:before:text-primary-400 before:mr-2 before:font-bold"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-6">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
          >
            <FiExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
          >
            <FiGithub className="h-4 w-4" />
            Repositório
          </a>
        )}
      </div>
    </div>
  )
}

function ContributionCard({ project }: { project: Project }) {
  return (
    <div className="card border-l-4 border-gray-400 dark:border-gray-600 h-full flex flex-col">
      <div className="mb-3">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          Contribuição em Equipe
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.name}</h3>
      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">{project.company}</p>
      
      {project.role && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Meu Papel:</p>
          <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
        </div>
      )}
      
      {project.contribution && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Contribuição:</p>
          <p className="text-gray-600 dark:text-gray-400">{project.contribution}</p>
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tecnologias:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 flex-grow">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Implementações:</p>
        <ul className="space-y-1">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-start before:content-['▹'] before:text-gray-400 dark:before:text-gray-500 before:mr-2 before:font-bold"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
