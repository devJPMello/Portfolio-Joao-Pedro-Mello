import { FiGithub, FiLinkedin } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export const EMAIL = 'joaopedromendesmello@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/joao-pedro-mendes-de-mello/';
export const GITHUB_URL = 'https://github.com/devJPMello';
export const RESUME_URL = '/curriculo/Curriculo-Joao-Pedro-Mendes-de-Mello.pdf';
export const RESUME_FILENAME = 'Curriculo-Joao-Pedro-Mendes-de-Mello.pdf';
export const LOCATION = 'Palmas, TO · Trabalho remoto';

export interface ContactChannelData {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

export const channels: ContactChannelData[] = [
  { icon: FiLinkedin, label: 'LinkedIn', value: 'joao-pedro-mendes-de-mello', href: LINKEDIN_URL },
  { icon: FiGithub, label: 'GitHub', value: 'devJPMello', href: GITHUB_URL },
];
