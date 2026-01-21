export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'MJV Technology And Innovation Ltd',
    role: 'Desenvolvedor Full Stack',
    period: '2025 - Presente',
    description: [
      'Desenvolvimento de aplicações web completas utilizando React, Tailwind CSS e TypeScript.',
      'Criação e integração de APIs REST com NestJS, garantindo escalabilidade e segurança.',
      'Desenvolvimento de agentes de IA com Azure OpenAI, aplicados à automação de processos e melhoria da experiência do usuário.',
      'Criação e otimização de prompts e system prompts para maior precisão dos modelos.',
      'Construção de agentes locais, integrados a sistemas internos.',
      'Atuação em ambiente ágil (Scrum/Kanban) e versionamento com Git/GitLab.'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Azure OpenAI']
  },
  {
    id: '2',
    company: 'Autônomo',
    role: 'Desenvolvedor Frontend',
    period: '2025 - Presente',
    description: [
      'Desenvolvimento de interfaces responsivas e acessíveis',
      'Integração frontend e backend via APIs REST.',
      'Implementação de testes automatizados',
      'Contribuição em projetos open source da empresa',
      'Deploy e manutenção de aplicações em ambientes cloud (Vercel, Netlify, Render).'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Git']
  },
  {
    id: '3',
    company: 'PreviPalmas',
    role: 'Suporte Técnico',
    period: '2024 - 2024',
    description: [
      'Atendimento a usuários internos, resolvendo problemas em sistemas',
      'Acompanhamento de chamados via ferramenta de ticketing',
      'Comunicação empática e eficaz, garantindo alto índice de resolução'
    ],
    technologies: ['Sistemas Internos', 'Ticketing', 'Suporte Técnico']
  },
  {
    id: '4',
    company: 'SiM Internet',
    role: 'Analista Suporte Técnico',
    period: '2023 - 2023',
    description: [
      'Resolução de incidentes técnicos envolvendo software, redes e conectividade',
      'Atendimento direto ao cliente, garantindo alto nível de satisfação'
    ],
    technologies: ['Suporte Técnico', 'Redes', 'Conectividade', 'Atendimento ao Cliente']
  }
];
