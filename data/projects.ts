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
    name: 'FinanceFlow | Plataforma de gestão financeira',
    category: 'main',
    problem:
      'Muitas pessoas têm dificuldade em organizar receitas, despesas e metas, perceber a evolução no tempo e, em paralelo, separar o que é "dia a dia" do que é contexto fiscal (IRS, deduções, documentação), sem ferramentas que unam simplicidade, segurança e visão clara.',
    solution:
      'Desenvolvi uma plataforma full stack de gestão financeira pessoal com frontend (React + Vite) e backend (NestJS) bem separados: autenticação gerida com Clerk (sessão no cliente, validação de JWT no servidor e utilizador interno na base de dados), CRUD de transações e categorias (com tipos receita/despesa), dashboard com gráficos e resumo mensal (orçamentos, pendências, fechamento mensal), metas com progresso, TaxVision como módulo dedicado à organização fiscal (marcadores de potencial dedução, checklist, timeline de documentos, sugestões e relatórios assistidos por IA), importação de extratos (CSV, PDF, imagem) com Google Gemini e confirmação em lote, anexos por lançamento, duplicatas e exportações (CSV/PDF e pacote para contador), com isolamento de dados por utilizador, validação de DTOs e preocupação com produção (health checks, rate limiting, observabilidade opcional, jobs assíncronos). O fluxo atual é Clerk + Bearer token na API, não autenticação JWT "própria" com bcrypt como eixo principal.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Recharts',
      'Axios',
      'React Hook Form',
      'Zod',
      'React Hot Toast',
      '@clerk/clerk-react',
      'Vitest',
      'Playwright',
      'NestJS',
      'Prisma',
      'PostgreSQL (Neon)',
      'Clerk (backend)',
      'class-validator',
      'Swagger',
      'Throttler',
      'Google Gemini',
      'Sentry (opcional)'
    ],
    highlights: [
      'Arquitetura cliente/servidor clara: SPA React e API NestJS com prefixo /api',
      'Clerk para sign-in/sign-up, tokens e bridge para o Axios',
      'Dashboard com gráficos (ex.: receitas/despesas por mês, distribuição por categoria), métricas do mês, orçamento por categoria e painel de pendências',
      'Transações: filtros, densidade de lista, sticky header, importação IA, OFX, anexos, operações em lote',
      'Categorias com orçamentos e previsão de despesas; metas com acompanhamento',
      'TaxVision: fluxo fiscal (checklist, classificação sugerida, OCR de anexos, relatórios, quotas de IA)',
      'Prisma + migrações; isolamento por userId nas queries; validação e guards nas rotas',
      'Testes (Vitest no front, Jest/e2e no back), CI e deploy com Render (API + PostgreSQL + static site), blueprint render.yaml'
    ],
    demoUrl: 'https://financeflow-zocs.onrender.com/',
    repoUrl: 'https://github.com/devJPMello/FinanceFlow'
  },
  {
    id: '2',
    name: 'TaskMind | SaaS de Gestão de Projetos',
    category: 'main',
    problem: 'Equipes precisavam de uma ferramenta de gestão de projetos inspirada no Jira, mas com foco em clareza, simplicidade e inteligência artificial como copiloto para otimizar o fluxo de trabalho e reduzir a carga cognitiva na criação e gestão de issues.',
    solution: 'Desenvolvi um SaaS completo de gestão de projetos com arquitetura monorepo, oferecendo Kanban board, backlog, sprints, workflows customizáveis, sistema de comentários, controle de acesso baseado em roles (RBAC), multi-tenant com isolamento completo por organização, audit log para rastreabilidade e IA copiloto para melhorar descrições, sugerir subtarefas e prioridades.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Express.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'JWT', 'Zod', 'Docker', 'Monorepo (npm workspaces)'],
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
    demoUrl: 'https://nexus-1-yc96.onrender.com/',
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
