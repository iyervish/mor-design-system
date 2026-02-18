import type { PropDef } from '../../docs/PropsTable';

export const breadcrumbPropDefs: PropDef[] = [
  { name: 'items', type: '{ label: string, href?: string }[]', required: true, description: 'Breadcrumb items (last is current page)' },
  { name: 'separator', type: 'string', default: "'/'", description: 'Separator character' },
  { name: 'className', type: 'string', description: 'Additional CSS classes' },
];
