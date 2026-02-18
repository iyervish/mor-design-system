import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'siteName',
    type: 'string',
    description: 'Organization or site name displayed in the footer.',
  },
  {
    name: 'linkGroups',
    type: 'FooterLinkGroup[]',
    description: 'Groups of links with titles. Each group has a title and links array.',
  },
  {
    name: 'socialLinks',
    type: '{ label: string; href: string; icon: ReactNode }[]',
    description: 'Social media icon links.',
  },
  {
    name: 'copyright',
    type: 'string',
    description: 'Custom copyright text. Defaults to auto-generated with current year.',
  },
  {
    name: 'logo',
    type: 'ReactNode',
    description: 'Logo element displayed in the footer.',
  },
  {
    name: 'variant',
    type: "'default' | 'slim'",
    default: "'default'",
    description: 'Footer layout variant. Slim shows a single-row layout.',
  },
];

export const codeSnippets = {
  default: `<Footer
  siteName="Virginia DMV"
  linkGroups={[
    {
      title: 'Services',
      links: [
        { label: 'License Renewal', href: '/services/license' },
        { label: 'Vehicle Registration', href: '/services/vehicle' },
        { label: 'ID Cards', href: '/services/id' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]}
/>`,
  slim: `<Footer
  variant="slim"
  siteName="Virginia.gov"
  linkGroups={[{
    title: 'Links',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Contact', href: '/contact' },
    ],
  }]}
/>`,
};
