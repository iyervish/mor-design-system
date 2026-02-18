import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'variant',
    type: "'info' | 'success' | 'warning' | 'error'",
    default: "'info'",
    description: 'The severity/visual style of the banner.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Optional bold heading text.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Description content displayed below the title.',
  },
  {
    name: 'dismissible',
    type: 'boolean',
    default: 'false',
    description: 'When true, renders a dismiss button.',
  },
  {
    name: 'onDismiss',
    type: '() => void',
    description: 'Callback invoked when the dismiss button is clicked.',
  },
  {
    name: 'icon',
    type: 'ReactNode | null',
    description: 'Custom icon element. Pass null to hide the icon.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes merged via cn().',
  },
];

export const codeSnippets = {
  info: `<Banner variant="info" title="System Update">
  Scheduled maintenance will occur this Saturday from 2-4 AM EST.
</Banner>`,
  success: `<Banner variant="success" title="Application Submitted">
  Your application has been submitted successfully.
</Banner>`,
  warning: `<Banner variant="warning" title="Browser Not Supported">
  Please upgrade to a modern browser for the best experience.
</Banner>`,
  error: `<Banner variant="error" title="Service Unavailable">
  Online services are temporarily unavailable. Please try again later.
</Banner>`,
  dismissible: `<Banner variant="info" title="New Feature" dismissible>
  You can now renew your license online. Try it today!
</Banner>`,
};
