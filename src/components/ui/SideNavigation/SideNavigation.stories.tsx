import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'items',
    type: 'SideNavItem[]',
    required: true,
    description: 'Array of navigation items. Each can have nested children.',
  },
  {
    name: 'onItemClick',
    type: '(href: string) => void',
    description: 'Called when a navigation item with an href is clicked.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes merged via cn().',
  },
];

export const codeSnippets = {
  default: `<SideNavigation
  items={[
    { label: 'Dashboard', href: '/dashboard', active: true },
    { label: 'Applications', href: '/applications' },
    {
      label: 'Services',
      children: [
        { label: 'License Renewal', href: '/services/license' },
        { label: 'Vehicle Registration', href: '/services/vehicle' },
        { label: 'ID Cards', href: '/services/id-cards' },
      ],
    },
    { label: 'Settings', href: '/settings' },
  ]}
  onItemClick={(href) => navigate(href)}
/>`,
};
