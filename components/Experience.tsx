import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experiencia" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Experiência Profissional</h2>
        <p className="section-subtitle text-center">
          Trajetória profissional e principais realizações
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="card relative pl-8 border-l-4 border-primary-600 dark:border-primary-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full"></div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 dark:text-gray-300 flex items-start before:content-['▹'] before:text-primary-600 dark:before:text-primary-400 before:mr-2 before:font-bold before:mt-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
