export interface Project {
  id: string;
  name: string;
  category: 'main' | 'contribution' | 'ai';
  problem?: string;
  solution?: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
  company?: string;
  role?: string;
  contribution?: string;
  aiFeatures?: {
    service: string;
    agent: string;
    automation: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'FinanceFlow | Plataforma de Gestão Financeira',
    category: 'main',
    problem: 'Usuários tinham dificuldade em controlar receitas, despesas e metas financeiras de forma organizada, segura e com uma visão clara da saúde financeira ao longo do tempo.',
    solution: 'Desenvolvi uma plataforma de gestão financeira pessoal que centraliza o controle de receitas e despesas, oferece dashboards interativos, metas financeiras e relatórios detalhados, garantindo clareza, segurança e boa experiência do usuário.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'NestJS', 'Prisma', 'PostgreSQL', 'JWT', 'Recharts'],
    highlights: [
      'Dashboard financeiro com gráficos mensais e anuais',
      'CRUD de receitas, despesas e categorias personalizadas',
      'Cálculo automático de saldo e progresso de metas',
      'Regras de negócio para integridade dos dados financeiros',
      'API REST segura com autenticação JWT',
      'Exportação de relatórios em CSV/PDF',
      'Deploy do frontend na Vercel e backend no Railway'
    ],
    repoUrl: 'https://github.com/devJPMello/FinanceFlow'
  },
  {
    id: '2',
    name: 'TaskMind | SaaS de Gestão de Projetos',
    category: 'main',
    problem: 'Equipes precisavam de uma ferramenta de gestão de projetos inspirada no Jira, mas com foco em clareza, simplicidade e inteligência artificial como copiloto para otimizar o fluxo de trabalho e reduzir a carga cognitiva na criação e gestão de issues.',
    solution: 'Desenvolvi um SaaS completo de gestão de projetos com arquitetura monorepo, oferecendo Kanban board, backlog, sprints, workflows customizáveis, sistema de comentários, controle de acesso baseado em roles (RBAC), multi-tenant com isolamento completo por organização, audit log para rastreabilidade e IA copiloto para melhorar descrições, sugerir subtarefas e prioridades.',
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Express.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'JWT', 'Zod', 'Docker', 'Monorepo (npm workspaces)'],
    highlights: [
      'Arquitetura monorepo com apps/api (Express) e apps/web (Next.js 14 App Router)',
      'Kanban board interativo com drag-and-drop para gestão visual de issues',
      'Sistema completo de sprints, backlog e workflows customizáveis',
      'IA Copiloto integrada: Enhance Description, Breakdown Tasks e Smart Suggestions',
      'Multi-tenant com isolamento completo por organização',
      'RBAC (Role-Based Access Control) com roles Admin, Member e Viewer',
      'Audit Log completo para rastreabilidade de todas as ações',
      'API REST documentada com Swagger/OpenAPI',
      'Autenticação JWT com access tokens e refresh tokens',
      'Rate limiting e validação de dados com Zod',
      'Deploy automatizado com Docker e Docker Compose'
    ],
    repoUrl: 'https://github.com/devJPMello/TaskMind'
  },
  {
    id: '3',
    name: 'Nexus - Plataforma de Agentes de IA Especializados',
    category: 'ai',
    problem: 'Usuários precisavam de uma solução unificada para interagir com múltiplos agentes de IA especializados, mantendo contexto de conversas anteriores e gerenciando diferentes tipos de interações (chat livre, criação de planos de estudo e geração de resumos) de forma organizada e eficiente.',
    solution: 'Desenvolvi o Nexus, uma plataforma completa com 3 agentes especializados (Chat Livre, Planos de Estudo e Resumos), sistema de threads para conversas contínuas, histórico completo com busca e listagem, e uma API REST minimalista com apenas 4 endpoints essenciais, integrada a um frontend React moderno.',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST API', 'Azure OpenAI', 'OpenAI API'],
    highlights: [
      '3 agentes especializados: Chat Livre, Planos de Estudo e Resumos, cada um otimizado para sua função específica',
      'Sistema de threads robusto que permite conversas contínuas e manutenção de contexto entre interações',
      'Histórico completo com funcionalidades de busca e listagem para fácil acesso a conversas anteriores',
      'Gerenciamento completo de threads: criação, remoção e organização de conversas',
      'API REST limpa e minimalista com apenas 4 endpoints essenciais, garantindo simplicidade e performance',
      'Frontend React integrado com serviços prontos para consumo da API, proporcionando experiência fluida'
    ],
    aiFeatures: {
      service: 'Azure OpenAI / OpenAI API',
      agent: '3 agentes especializados: Chat Livre (conversação geral), Planos de Estudo (criação de planos personalizados) e Resumos (geração de resumos inteligentes)',
      automation: 'Automação completa do fluxo de interação com IA através de sistema de threads, permitindo conversas contextuais e histórico persistente para múltiplos agentes especializados'
    },
    repoUrl: 'https://github.com/BitStudioLabs/nexus/tree/develop'
  },
  {
    id: '4',
    name: 'Iron',
    category: 'contribution',
    company: 'MJV Technology And Innovation Ltd',
    role: 'Desenvolvedor FullStack',
    contribution: 'Participando ativamente da construção de novas funcionalidades, integrações entre front-end e back-end e melhorias contínuas no sistema. Contribuí com decisões técnicas, refatorações e otimizações visando escalabilidade, desempenho e melhor experiência do usuário.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'REST API', 'NestJS', 'JWT', 'Swagger', 'DBeaver'],
    highlights: [
      'Desenvolvimento e implementação de novas funcionalidades no front-end, criando interfaces responsivas e focadas em usabilidade.',
      'Implementação de melhorias na experiência do usuário (UX) com base em feedbacks internos.',
      'Criação e otimização de endpoints REST, melhorando desempenho e organização do código.',
      'Implementação e manutenção de funcionalidades no back-end, incluindo regras de negócio e validações.'
    ]
  },
  {
    id: '5',
    name: 'CNPJ Alphanumérico',
    category: 'contribution',
    company: 'MJV Technology And Innovation Ltd',
    role: 'Desenvolvedor FullStack',
    contribution: 'No projeto de CNPJ alfanumérico, atuei como FullStack, sendo responsável pela criação das telas de login, processamento e relatório, além da integração entre o front-end e o back-end, garantindo fluxo correto de dados e boa experiência do usuário.',
    technologies: ['Node.js', 'Express', 'MySQL', 'JWT', 'Swagger', 'Knex.JS', 'TypeScript', 'Socket.IO'],
    highlights: [
      'Implementação da tela de login, com validação de campos e integração com autenticação do back-end.',
      'Desenvolvimento da tela de processamento, permitindo envio de dados e acompanhamento do status do processamento.',
      'Tratamento de estados da aplicação (loading, sucesso e erro) para melhor experiência do usuário.',
      'Integração do front-end com o back-end via APIs REST, garantindo comunicação eficiente e segura.'
    ]
  }
];
