export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 'destaques', label: 'Destaques' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contribuicoes', label: 'Contribuições' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
];

export const navLinkIds = navLinks.map((l) => l.id);
