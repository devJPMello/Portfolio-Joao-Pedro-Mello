export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  mode: string;
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'MJV Technology & Innovation',
    role: 'Desenvolvedor Full Stack',
    period: 'jul. 2025 - Presente',
    mode: 'Tempo integral · Remoto',
    current: true,
    description: [
      'Desenvolvimento de agentes de IA com Azure OpenAI que automatizam fluxos de trabalho internos, estruturando e otimizando system prompts para respostas mais precisas e consistentes.',
      'Construção de interfaces responsivas e acessíveis com React e Next.js, com foco em performance.',
      'Projeto e manutenção de APIs REST com NestJS e TypeScript, organizando regras de negócio, validações e camadas de serviço.',
      'Atuação em squads multidisciplinares com Scrum e Kanban, usando Git/GitLab para versionamento e revisão de código.'
    ],
    technologies: ['React', 'Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Azure OpenAI']
  },
  {
    id: '2',
    company: 'Monkeys Studio',
    role: 'Desenvolvedor Full Stack',
    period: 'fev. 2025 - Presente',
    mode: 'Atuação paralela · Remoto',
    current: true,
    description: [
      'Desenvolvimento de aplicações web completas e landing pages com React, Next.js e Tailwind CSS no frontend e Node.js, NestJS e TypeScript no backend.',
      'Criação de APIs REST e integrações com serviços externos, modelando bancos PostgreSQL com Prisma e TypeORM.',
      'Configuração de CI/CD, escrita de testes e publicação de aplicações em Vercel, Netlify, Render e ambientes serverless.'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'NestJS', 'Prisma', 'TypeORM', 'PostgreSQL']
  },
  {
    id: '3',
    company: 'NewCode Soluções Tecnológicas',
    role: 'Desenvolvedor Full Stack',
    period: 'abr. 2026 - nov. 2026',
    mode: 'Contrato temporário · Remoto',
    current: false,
    description: [
      'Desenvolvimento de funcionalidades full stack para uma plataforma SaaS do setor público, com React no frontend e NestJS, TypeScript e PostgreSQL no backend.',
      'Implementação de módulos com controle de acesso por papéis (RBAC), processamento assíncrono de arquivos e trilhas de auditoria sobre operações críticas.',
      'Versionamento de documentos e integração com object storage, mantendo rastreabilidade e integridade dos dados.',
      'Elaboração de documentação técnica e planos de implementação antes de cada entrega, reduzindo retrabalho no squad.'
    ],
    technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'RBAC', 'Object Storage']
  }
];
