import { FiCpu, FiShield, FiMap, FiPlay } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export interface Highlight {
  icon: IconType;
  title: string;
  text: string;
  /** abre o modal de um projeto */
  projectId?: string;
  /** ou rola até uma seção */
  sectionId?: string;
}

export const highlights: Highlight[] = [
  {
    icon: FiCpu,
    title: 'Agentes de IA em produção',
    text: 'Agentes com Azure OpenAI na MJV que automatizam fluxos internos, com system prompts otimizados.',
    sectionId: 'experiencia',
  },
  {
    icon: FiShield,
    title: 'SGD-Municípios (GovTech)',
    text: 'Plataforma multi-tenant de processo eletrônico para prefeituras do Tocantins: RBAC, auditoria, OCR e portal do cidadão.',
    projectId: '7',
  },
  {
    icon: FiMap,
    title: 'ClimaAgro (TCC)',
    text: 'ETL com IBGE e Open-Meteo, PostGIS, mapas com Leaflet e chatbot com Google Gemini.',
    projectId: '0',
  },
  {
    icon: FiPlay,
    title: 'Monkeys Games',
    text: 'Site do estúdio e jogos indie em equipe de 6 desenvolvedores.',
    projectId: '6',
  },
];
