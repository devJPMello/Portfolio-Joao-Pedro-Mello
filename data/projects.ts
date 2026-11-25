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
  image?: { src: string; alt: string; width?: number; height?: number };
  metrics?: { value: string; label: string }[];
  extraLinks?: { label: string; url: string }[];
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
    id: '0',
    name: 'ClimaAgro | Monitoramento climático e agrícola (TCC)',
    category: 'main',
    problem:
      'Produtores rurais e analistas têm dificuldade em cruzar clima e produtividade por região, acompanhar alertas oficiais e tirar dúvidas técnicas rapidamente, com dados espalhados em várias fontes públicas.',
    solution:
      'Desenvolvi, como TCC, uma plataforma full stack que consolida dados do IBGE (LSPA/SIDRA), Open-Meteo, CPTEC/INPE e INMET em PostgreSQL com PostGIS. Construí pipelines ETL em Python, dashboards geoespaciais com React e Leaflet (mapas coropléticos por UF), séries temporais e comparativo clima × produtividade, além do IAgro, um assistente com Google Gemini que responde com base nos dados da plataforma e analisa fotos. Autenticação com Clerk e sincronização climática agendada (06h e 18h) com GitHub Actions.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet', 'Recharts', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL + PostGIS', 'Python (ETL)', 'Google Gemini', 'Clerk', 'GitHub Actions', 'Render'],
    highlights: [
      'Pipelines ETL com dados do IBGE (LSPA/SIDRA) e da Open-Meteo, armazenados em PostgreSQL com PostGIS',
      'Dashboards geoespaciais: mapa climático e mapa de produtividade por UF',
      'Alertas oficiais do INMET atualizados automaticamente',
      'IAgro: chatbot com Google Gemini que responde com base nos dados da plataforma',
      'Exportação de relatórios, inclusive gerados por IA',
      'Deploy no Render com sincronização agendada via GitHub Actions'
    ],
    image: { src: '/projects/climaagro.png', alt: 'Dashboard do ClimaAgro com indicadores climáticos e resumo por estado', width: 1915, height: 941 },
    metrics: [
      { value: '4', label: 'fontes de dados integradas' },
      { value: '2x/dia', label: 'sincronização automática' },
      { value: 'TCC', label: 'projeto de conclusão de curso' }
    ],
    demoUrl: 'https://climaagro.onrender.com',
    repoUrl: 'https://github.com/devJPMello/ClimaAgro'
  },
  {
    id: '8',
    name: 'FinanceFlow | Organização de finanças pessoais',
    category: 'main',
    problem:
      'Extratos bancários são uma bagunça: cada banco exporta em um formato, as transações não vêm categorizadas e fica difícil saber para onde o dinheiro vai e se o orçamento do mês está sob controle.',
    solution:
      'Desenvolvi do zero, do banco de dados ao deploy, uma aplicação full stack que importa extratos em CSV, XLSX, XLS e OFX (com detecção automática de colunas, revisão antes de confirmar, detecção de duplicadas e opção de desfazer), categoriza automaticamente por regras de texto ou regex, lança transações recorrentes, controla orçamentos mensais com alertas em 80% e 100% do limite e mostra tudo em dashboards e relatórios com exportação em CSV. Cada usuário enxerga só os próprios dados.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Storybook',
      'NestJS',
      'Prisma',
      'PostgreSQL (Neon)',
      'Zod',
      'JWT',
      'Docker',
      'Playwright',
      'GitHub Actions',
      'Render'
    ],
    highlights: [
      'Importação de extratos em CSV, XLSX, XLS e OFX, com mapeamento de colunas, revisão, detecção de duplicadas e desfazer',
      'Gestão completa: contas, categorias, transações (Pix, débito e crédito), parcelamento, tags e anexo de comprovantes',
      'Automação: regras de categorização por texto ou regex e transações recorrentes lançadas automaticamente',
      'Orçamentos mensais por categoria com alertas ao chegar em 80% e 100% do limite',
      'Dashboard com saldo, comparação com o mês anterior, gráficos por categoria e fluxo mensal, e relatórios em CSV',
      'Contas de usuário com JWT e refresh token rotativo, recuperação de senha por e-mail e exclusão de conta',
      'Segurança: senhas com hash, rate limiting, Helmet, CORS restrito e isolamento de dados por usuário',
      'Front em Atomic Design com Storybook; validação Zod compartilhada entre front e back em um monorepo',
      'Testes unitários, e2e da API com banco real e fluxos no navegador com Playwright; CI no GitHub Actions',
      'Docker e docker compose, deploy na Render (Blueprint) e PostgreSQL serverless no Neon'
    ],
    image: { src: '/projects/financeflow.png', alt: 'Dashboard do FinanceFlow com saldo, receitas, despesas e gastos por categoria', width: 1900, height: 939 },
    metrics: [
      { value: '4', label: 'formatos de extrato importados' },
      { value: '80% / 100%', label: 'alertas de orçamento' }
    ],
    demoUrl: 'https://financeflow-web-udqr.onrender.com',
    repoUrl: 'https://github.com/devJPMello/FinanceFlow'
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
    metrics: [
      { value: '3', label: 'agentes especializados' }
    ],
    repoUrl: 'https://github.com/BitStudioLabs/nexus/tree/develop'
  },
  {
    id: '7',
    name: 'SGD-Municípios | Plataforma GovTech de Processo Eletrônico',
    category: 'contribution',
    company: 'New Code',
    role: 'Desenvolvedor Full Stack (abr. 2026 – nov. 2026)',
    contribution: 'Plataforma multi-tenant de gestão eletrônica de documentos e processos para prefeituras do Tocantins, cobrindo autuação, tramitação, assinatura, busca por OCR e portal do cidadão com login gov.br. Atuei no desenvolvimento full stack, com React no frontend e NestJS, TypeScript e PostgreSQL no backend, elaborando documentação técnica e plano de implementação antes de cada entrega.',
    technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Multi-tenant', 'IA / Embeddings', 'Acessibilidade', 'GovTech', 'Prisma', 'Playwright', 'Object Storage'],
    highlights: [
      'Módulos com controle de acesso por papéis (RBAC)',
      'Processamento assíncrono de arquivos',
      'Trilhas de auditoria sobre operações críticas',
      'Versionamento de documentos e integração com object storage, mantendo rastreabilidade e integridade dos dados',
      'Documentação técnica e planos de implementação que reduziram retrabalho no squad'
    ]
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
  },
  {
    id: '6',
    name: 'Monkeys Games | Site do estúdio e jogos indie',
    category: 'contribution',
    company: 'Monkeys Games',
    role: 'Desenvolvedor Full Stack',
    contribution: 'Desenvolvo, junto com a equipe do estúdio, a landing page (React + Vite, na Vercel) e participo da criação dos jogos indie para Roblox em Luau.',
    problem:
      'O estúdio independente precisava de presença online para divulgar seus jogos e comunidade, e de jogos prontos para publicar e monetizar no Roblox.',
    solution:
      'Desenvolvi a landing page do estúdio (React + Vite, publicada na Vercel) com catálogo de jogos, equipe e links para comunidade, e participo da criação de jogos para Roblox em Luau com Rojo: Quebre a Montanha (simulador de mineração), Monkey Island / Banana Empire (tycoon) e Wall Rush, com salvamento de dados, economia e monetização (gamepasses e produtos).',
    technologies: ['React', 'Vite', 'JavaScript', 'Vercel', 'Luau', 'Rojo', 'Roblox Studio', 'DataStore', 'GitHub'],
    highlights: [
      'Landing page responsiva do estúdio com jogos, equipe, redes sociais e Discord',
      'Jogos Roblox com código versionado em Git e sincronizado com o Studio via Rojo',
      'Sistemas de economia, progressão, salvamento e monetização nos jogos',
      'Trabalho em equipe com repositórios na organização Monkeys-Games no GitHub'
    ],
    demoUrl: 'https://monkeys-games-lp.vercel.app',
    repoUrl: 'https://github.com/Monkeys-Games/Monkeys_Games_LP',
    extraLinks: [{ label: 'Comunidade Roblox', url: 'https://www.roblox.com/pt/communities/221696572/Monkeys-Games' }]
  }
];
