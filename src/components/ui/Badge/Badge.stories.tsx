import Badge from './Badge';
import type { PropDef } from '../../docs/PropsTable';

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

function AllVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  );
}

function StatusBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Expired</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  );
}

export const variants = [
  { title: 'All Variants', component: <AllVariants /> },
  { title: 'Sizes', component: <Sizes /> },
  { title: 'Status Badges', component: <StatusBadges /> },
];

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */

export const propDefinitions: PropDef[] = [
  {
    name: 'variant',
    type: "'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'",
    default: "'default'",
    description: 'Color variant of the badge.',
  },
  {
    name: 'size',
    type: "'sm' | 'md'",
    default: "'sm'",
    description: 'Controls padding and font size.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'Badge label content.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes merged via cn().',
  },
];

/* ------------------------------------------------------------------ */
/*  Code Snippets                                                     */
/* ------------------------------------------------------------------ */

export const codeSnippets = {
  basic: `<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="error">Expired</Badge>`,
  sizes: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`,
  outline: `<Badge variant="outline">Draft</Badge>`,
};
