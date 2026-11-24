import SectionTitle from '@/components/atoms/SectionTitle'

const offerings = [
  'Aplicações web modernas e responsivas',
  'APIs RESTful escaláveis e bem documentadas',
  'Agentes de IA e integrações com Azure OpenAI e Google Gemini',
  'Pipelines de dados (ETL) e dashboards geoespaciais',
  'Soluções que priorizam performance e experiência do usuário',
]

export default function About() {
  return (
    <section id="sobre" className="section-container">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Sobre Mim</SectionTitle>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
          <p className="text-lg leading-relaxed">
            Sou <strong className="text-gray-900 dark:text-gray-100">Desenvolvedor Full Stack</strong> com
            quase 2 anos de experiência em aplicações web corporativas, APIs REST e IA generativa.
            Trabalho com React, Next.js, TypeScript, NestJS e PostgreSQL, do frontend ao backend.
          </p>

          <p className="text-lg leading-relaxed">
            Desenvolvo agentes de IA com Azure OpenAI para automatizar fluxos de trabalho e já atuei em
            plataformas SaaS do setor público, com controle de acesso por papéis, processamento
            assíncrono de arquivos e trilhas de auditoria. Fora do trabalho, crio projetos próprios,
            como o ClimaAgro (meu TCC) e jogos para Roblox com a Monkeys Games.
          </p>

          <p className="text-lg leading-relaxed">
            Atuo em squads multidisciplinares com Scrum e Kanban e sou graduando em Engenharia de
            Software pelo CEULP/ULBRA (último semestre), em Palmas, TO. Acredito que a melhor solução
            técnica é aquela que resolve o problema do cliente de forma eficiente e sustentável.
          </p>

          <div className="mt-8 p-6 bg-primary-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary-600 dark:border-primary-500">
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">O que desenvolvo:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
