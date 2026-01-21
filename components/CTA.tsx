import { FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

export default function CTA() {
  return (
    <section id="contato" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Desenvolvedor Full Stack especializado em React, Node.js e integração com IA. 
          Pronto para entregar soluções escaláveis e de alta qualidade.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 max-w-2xl mx-auto">
          <p className="text-base text-gray-700 mb-6">
            Se você está procurando um desenvolvedor que entende tanto de código quanto de negócio, 
            e que pode contribuir imediatamente com seu time, entre em contato.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/joao-pedro-mendes-de-mello/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <FiLinkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="mailto:joaopedromendesmello@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <FiMail className="h-5 w-5" />
              Email
            </a>
            <a
              href="/curriculo/Curriculo João Pedro.pdf"
              download="Curriculo-Joao-Pedro.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 border-2 border-primary-400"
            >
              <FiDownload className="h-5 w-5" />
              Currículo PDF
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Resposta rápida garantida
        </p>
      </div>
    </section>
  )
}
