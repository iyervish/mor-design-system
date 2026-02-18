export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Foundations',
    href: '/foundations',
    children: [
      { label: 'Principles', href: '/foundations/principles' },
      { label: 'Color', href: '/foundations/color' },
      { label: 'Typography', href: '/foundations/typography' },
      { label: 'Spacing', href: '/foundations/spacing' },
      { label: 'Elevation', href: '/foundations/elevation' },
      { label: 'Icons', href: '/foundations/icons' },
      { label: 'Motion', href: '/foundations/motion' },
    ],
  },
  {
    label: 'Components',
    href: '/components',
    children: [
      { label: 'Button', href: '/components/button' },
      { label: 'Input', href: '/components/input' },
      { label: 'Select', href: '/components/select' },
      { label: 'Checkbox', href: '/components/checkbox' },
      { label: 'Radio', href: '/components/radio' },
      { label: 'TextArea', href: '/components/textarea' },
      { label: 'Alert', href: '/components/alert' },
      { label: 'Card', href: '/components/card' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Table', href: '/components/table' },
      { label: 'Breadcrumb', href: '/components/breadcrumb' },
      { label: 'Accordion', href: '/components/accordion' },
      { label: 'Banner', href: '/components/banner' },
      { label: 'Footer', href: '/components/footer' },
      { label: 'GovBanner', href: '/components/gov-banner' },
      { label: 'Modal', href: '/components/modal' },
      { label: 'Pagination', href: '/components/pagination' },
      { label: 'Search', href: '/components/search' },
      { label: 'SideNavigation', href: '/components/side-navigation' },
      { label: 'StepIndicator', href: '/components/step-indicator' },
      { label: 'Tabs', href: '/components/tabs' },
      { label: 'Tooltip', href: '/components/tooltip' },
    ],
  },
  {
    label: 'Patterns',
    href: '/patterns',
    children: [
      { label: 'Form Pattern', href: '/patterns/form' },
      { label: 'Search Results', href: '/patterns/search-results' },
      { label: 'Status Tracker', href: '/patterns/status-tracker' },
    ],
  },
  {
    label: 'Templates',
    href: '/templates',
    children: [
      { label: 'Ministry Homepage', href: '/templates/ministry-homepage' },
      { label: 'RTO Portal', href: '/templates/rto-portal' },
      { label: 'Welfare Application', href: '/templates/welfare-application' },
      { label: 'PIB Announcements', href: '/templates/pib-announcements' },
      { label: 'MCA21 Portal', href: '/templates/mca-portal' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
];
