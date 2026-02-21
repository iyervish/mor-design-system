import type { PropDef } from '../../docs/PropsTable';
import Button from './Button';
import type { ButtonVariant, ButtonSize } from './Button';

/* ------------------------------------------------------------------ */
/*  Sample icon (inline SVG so stories have zero extra dependencies)   */
/* ------------------------------------------------------------------ */

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-3.67a.75.75 0 011.02-1.1l5.25 4.87a.75.75 0 010 1.1l-5.25 4.87a.75.75 0 11-1.02-1.1l3.96-3.67H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Variant arrays (consumed by LivePreview)                           */
/* ------------------------------------------------------------------ */

const allVariants: ButtonVariant[] = [
  'primary',
  'secondary',
  'outline',
  'ghost',
  'destructive',
];

const allSizes: ButtonSize[] = ['sm', 'md', 'lg'];

/** Every variant at the default (md) size. */
export const variantButtons = allVariants.map((variant) => (
  <Button key={variant} variant={variant}>
    {variant.charAt(0).toUpperCase() + variant.slice(1)}
  </Button>
));

/** Primary variant in every size. */
export const sizeButtons = allSizes.map((size) => (
  <Button key={size} size={size}>
    {size.toUpperCase()}
  </Button>
));

/** Buttons with left/right icons. */
export const iconButtons = [
  <Button key="left" leftIcon={<PlusIcon />}>
    Add Item
  </Button>,
  <Button key="right" variant="outline" rightIcon={<ArrowRightIcon />}>
    Continue
  </Button>,
  <Button key="both" variant="secondary" leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>
    Create & Next
  </Button>,
];

/** Loading states. */
export const loadingButtons = [
  <Button key="loading-default" isLoading>
    Submit
  </Button>,
  <Button key="loading-text" isLoading loadingText="Saving...">
    Save
  </Button>,
  <Button key="loading-outline" variant="outline" isLoading loadingText="Loading...">
    Refresh
  </Button>,
];

/** Disabled states. */
export const disabledButtons = allVariants.map((variant) => (
  <Button key={variant} variant={variant} disabled>
    {variant.charAt(0).toUpperCase() + variant.slice(1)}
  </Button>
));

/** Full-width button. */
export const fullWidthButtons = [
  <Button key="fw-primary" fullWidth>
    Full Width Primary
  </Button>,
  <Button key="fw-outline" variant="outline" fullWidth>
    Full Width Outline
  </Button>,
];

/* ------------------------------------------------------------------ */
/*  Props definition (consumed by PropsTable)                          */
/* ------------------------------------------------------------------ */

export const buttonPropDefs: PropDef[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'",
    default: "'primary'",
    description: 'Visual style variant of the button.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Size preset controlling padding, font size, and border radius.',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    default: 'false',
    description: 'Displays a spinner and disables interaction.',
  },
  {
    name: 'loadingText',
    type: 'string',
    default: '—',
    description: 'Label shown in place of children while loading.',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    description: 'Icon element rendered before the label.',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    description: 'Icon element rendered after the label.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Stretches the button to fill its parent container.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the button and applies reduced-opacity styling.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional Tailwind or custom classes merged via cn().',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'Button label content.',
  },
];

/* ------------------------------------------------------------------ */
/*  Code snippets (consumed by LivePreview / CodeBlock)                */
/* ------------------------------------------------------------------ */

export const basicUsageCode = `import { Button } from '@/mor/components/ui/Button';

<Button variant="primary">Click Me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>`;

export const sizesCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

export const iconsCode = `import { PlusIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

<Button leftIcon={<PlusIcon />}>Add Item</Button>
<Button variant="outline" rightIcon={<ArrowRightIcon />}>Continue</Button>`;

export const loadingCode = `<Button isLoading>Submit</Button>
<Button isLoading loadingText="Saving...">Save</Button>`;

export const fullWidthCode = `<Button fullWidth>Full Width Primary</Button>
<Button variant="outline" fullWidth>Full Width Outline</Button>`;
