import { techStack } from '@/data/stack'

export default function TechStack() {
  return (
    <section id="stack" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Stack Tecnológico</h2>
        <p className="section-subtitle text-center">
          Tecnologias que utilizo para criar soluções modernas e eficientes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category) => (
            <div key={category.category} className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-600">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-gray-700 flex items-center before:content-['▹'] before:text-primary-600 before:mr-2 before:font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
