import Checkbox from './Checkbox';
import type { PropDef } from '../../docs/PropsTable';

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

export const variants = [
  {
    title: 'Default',
    component: <Checkbox label="I agree to the terms and conditions" />,
  },
  {
    title: 'With description',
    component: (
      <Checkbox
        label="Email notifications"
        description="Receive email updates about your application status."
      />
    ),
  },
  {
    title: 'Checked',
    component: (
      <Checkbox label="Subscribe to newsletter" defaultChecked />
    ),
  },
  {
    title: 'Error state',
    component: (
      <Checkbox
        label="I agree to the terms"
        error="You must agree to continue."
      />
    ),
  },
  {
    title: 'Disabled',
    component: <Checkbox label="Unavailable option" disabled />,
  },
  {
    title: 'Disabled and checked',
    component: (
      <Checkbox label="Pre-selected option" disabled defaultChecked />
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
    required: true,
    description: 'Label text displayed next to the checkbox.',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Optional description text below the label.',
  },
  {
    name: 'checked',
    type: 'boolean',
    description: 'Controlled checked state.',
  },
  {
    name: 'onChange',
    type: '(e: ChangeEvent) => void',
    description: 'Change handler for controlled usage.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the checkbox.',
  },
  {
    name: 'error',
    type: 'string',
    description:
      'Error message. When provided the checkbox displays an error state.',
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

export const basicUsage = `<Checkbox label="I agree to the terms and conditions" />`;

export const withDescription = `<Checkbox
  label="Email notifications"
  description="Receive email updates about your application status."
/>`;

export const errorState = `<Checkbox
  label="I agree to the terms"
  error="You must agree to continue."
/>`;

export const controlled = `const [checked, setChecked] = useState(false);

<Checkbox
  label="Subscribe"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`;
