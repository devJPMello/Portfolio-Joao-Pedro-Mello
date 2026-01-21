export default function About() {
  return (
    <section id="sobre" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Sobre Mim</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            Sou um <strong>Desenvolvedor Full Stack</strong> com foco em criar soluções 
            que fazem diferença. Trabalho com tecnologias modernas como React, Next.js e Node.js, 
            sempre buscando entregar código limpo, performático e escalável.
          </p>
          
          <p className="text-lg leading-relaxed">
            Minha experiência abrange desde o desenvolvimento de interfaces responsivas e intuitivas 
            até a construção de APIs robustas e integração com serviços de inteligência artificial. 
            Tenho especial interesse em projetos que utilizam Azure OpenAI para automação e 
            otimização de processos.
          </p>
          
          <p className="text-lg leading-relaxed">
            Atuo em ambientes ágeis, colaborando ativamente em equipes multidisciplinares para 
            entregar produtos de alta qualidade. Acredito que a melhor solução técnica é aquela 
            que resolve o problema do cliente de forma eficiente e sustentável.
          </p>
          
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600">
            <p className="text-gray-800 font-medium mb-2">
              O que desenvolvo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Aplicações web modernas e responsivas</li>
              <li>APIs RESTful escaláveis e bem documentadas</li>
              <li>Sistemas com integração de IA para automação</li>
              <li>Soluções que priorizam performance e experiência do usuário</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
