import SectionHeader from '@/components/molecules/SectionHeader'
import ExperienceItem from '@/components/molecules/ExperienceItem'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experiencia" className="section-container">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Experiência Profissional" subtitle="Trajetória profissional e principais realizações" />

        <ol className="relative">
          {/* Linha do tempo contínua */}
          <span
            aria-hidden="true"
            className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-primary-100 dark:from-primary-400 dark:via-primary-700 dark:to-primary-900/30"
          />
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </ol>
      </div>
    </section>
  )
}
