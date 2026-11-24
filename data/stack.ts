export interface TechStack {
  category: string;
  technologies: string[];
}

export const techStack: TechStack[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Native (Expo)']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'NestJS', 'Express', 'APIs REST', 'JWT', 'Swagger', 'Socket.IO', 'Redis', 'BullMQ']
  },
  {
    category: 'IA',
    technologies: ['Azure OpenAI', 'OpenAI API', 'Google Gemini', 'Prompt Engineering', 'Agentes de IA']
  },
  {
    category: 'Dados',
    technologies: ['PostgreSQL', 'PostGIS', 'MySQL', 'Prisma', 'TypeORM', 'Python', 'ETL']
  },
  {
    category: 'DevOps e Métodos',
    technologies: ['Docker', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Jest', 'Scrum', 'Kanban']
  }
];
