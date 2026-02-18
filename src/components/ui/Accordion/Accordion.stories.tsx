import type { PropDef } from '../../docs/PropsTable';

export const accordionPropDefs: PropDef[] = [
  { name: 'type', type: "'single' | 'multiple'", default: "'single'", description: 'Allow one or multiple open sections' },
  { name: 'defaultOpen', type: 'string[]', description: 'Initially open section indices' },
  { name: 'title', type: 'string', required: true, description: 'AccordionItem header text' },
  { name: 'children', type: 'ReactNode', required: true, description: 'AccordionItem content' },
  { name: 'className', type: 'string', description: 'Additional CSS classes' },
];
