import { FiMail, FiDownload, FiMapPin } from 'react-icons/fi'
import Button from '@/components/atoms/Button'
import ContactChannel from '@/components/molecules/ContactChannel'
import EmailChannel from '@/components/molecules/EmailChannel'
import { EMAIL, LOCATION, RESUME_FILENAME, RESUME_URL, channels } from '@/data/contact'

export default function Contact() {
  return (
    <section id="contato" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-900/60 bg-white dark:bg-gray-800 grid lg:grid-cols-5">
          {/* Chamada */}
          <div className="lg:col-span-2 p-8 md:p-10 bg-gradient-to-br from-primary-700 to-primary-900 text-white flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
              <p className="text-primary-100 leading-relaxed">
                Desenvolvedor Full Stack com React, Next.js, NestJS e IA generativa. Se tem um projeto, uma vaga
                ou só quer trocar uma ideia, é só chamar.
              </p>
            </div>
            <p className="flex items-center gap-2 text-sm text-primary-100">
              <FiMapPin className="h-4 w-4 shrink-0" />
              {LOCATION}
            </p>
          </div>

          {/* Canais */}
          <div className="lg:col-span-3 p-8 md:p-10 space-y-4">
            <EmailChannel />
            {channels.map((channel) => (
              <ContactChannel key={channel.label} {...channel} />
            ))}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button href={`mailto:${EMAIL}`} size="lg" className="flex-1 shadow-md">
                <FiMail className="h-5 w-5" />
                Enviar e-mail
              </Button>
              <Button
                href={RESUME_URL}
                download={RESUME_FILENAME}
                variant="outlinePrimary"
                size="lg"
                className="flex-1"
              >
                <FiDownload className="h-5 w-5" />
                Baixar currículo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
