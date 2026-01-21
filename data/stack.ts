export interface TechStack {
  category: string;
  technologies: string[];
}

export const techStack: TechStack[] = [
  {
    category: 'Frontend',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'IA & Automação',
    technologies: ['Azure OpenAI', 'Prompt Engineering', 'Agentes de IA', 'Automação de Processos']
  },
  {
    category: 'Ferramentas',
    technologies: ['Git', 'GitHub', 'GitLab', 'Vercel', 'Netlify', 'Render', 'Docker']
  }
];
