import Input from './Input';
import type { PropDef } from '../../docs/PropsTable';

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

export const variants = [
  {
    title: 'Default',
    component: <Input label="Full name" placeholder="Priya Sharma" />,
  },
  {
    title: 'With helper text',
    component: (
      <Input
        label="Email address"
        placeholder="priya@example.gov.in"
        type="email"
        helperText="We will never share your email."
      />
    ),
  },
  {
    title: 'Error state',
    component: (
      <Input
        label="Username"
        placeholder="Choose a username"
        error="Username is already taken."
        defaultValue="admin"
      />
    ),
  },
  {
    title: 'Disabled',
    component: (
      <Input label="Aadhaar Number" placeholder="XXXX XXXX XXXX" disabled />
    ),
  },
  {
    title: 'Small size',
    component: <Input label="PIN Code" placeholder="110001" size="sm" />,
  },
  {
    title: 'Large size',
    component: (
      <Input label="Address" placeholder="Flat 12, Sector 5, New Delhi" size="lg" />
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Prop definitions                                                  */
/* ------------------------------------------------------------------ */

export const propDefinitions: PropDef[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Visible label rendered above the input.',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder text shown inside the input.',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Assistive text rendered below the input.',
  },
  {
    name: 'error',
    type: 'string',
    description:
      'Error message. When provided the input displays an error state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the input.',
  },
  {
    name: 'type',
    type: 'string',
    default: '"text"',
    description: 'Native HTML input type attribute.',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: 'Controls the visual size of the input.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes merged via cn().',
  },
];

/* ------------------------------------------------------------------ */
/*  Code snippets                                                     */
/* ------------------------------------------------------------------ */

export const basicUsage = `<Input label="Full name" placeholder="Priya Sharma" />`;

export const withHelperText = `<Input
  label="Email address"
  placeholder="priya@example.gov.in"
  type="email"
  helperText="We will never share your email."
/>`;

export const errorState = `<Input
  label="Username"
  placeholder="Choose a username"
  error="Username is already taken."
/>`;

export const sizes = `<>
  <Input label="Small" placeholder="sm" size="sm" />
  <Input label="Medium" placeholder="md" size="md" />
  <Input label="Large" placeholder="lg" size="lg" />
</>`;
