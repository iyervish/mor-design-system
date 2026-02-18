import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'language',
    type: "'en' | 'es'",
    default: "'en'",
    description: 'Language variant for the banner content.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes merged via cn().',
  },
];

export const codeSnippets = {
  default: `<GovBanner />`,
  spanish: `<GovBanner language="es" />`,
};
