import SectionHeader from '@/components/molecules/SectionHeader'
import StackCard from '@/components/molecules/StackCard'
import { techStack } from '@/data/stack'

export default function TechStack() {
  return (
    <section id="stack" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Stack Tecnológico"
          subtitle="Tecnologias que utilizo para criar soluções modernas e eficientes"
        />

        {/* 3 cards na primeira linha e o restante dividindo a segunda */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {techStack.map((category, index) => (
            <StackCard
              key={category.category}
              category={category}
              className={index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
