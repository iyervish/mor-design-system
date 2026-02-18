import { RadioGroup } from './Radio';
import type { PropDef } from '../../docs/PropsTable';

const contactOptions = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'mail', label: 'US Mail' },
];

const notificationOptions = [
  {
    value: 'all',
    label: 'All notifications',
    description: 'Receive every update via email and SMS.',
  },
  {
    value: 'important',
    label: 'Important only',
    description: 'Only status changes and deadlines.',
  },
  {
    value: 'none',
    label: 'None',
    description: 'You can still check updates in your dashboard.',
  },
];

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

export const variants = [
  {
    title: 'Default',
    component: (
      <RadioGroup
        name="contact-default"
        label="Preferred contact method"
        options={contactOptions}
        defaultValue="email"
      />
    ),
  },
  {
    title: 'With descriptions',
    component: (
      <RadioGroup
        name="notifications"
        label="Notification preferences"
        options={notificationOptions}
        defaultValue="important"
      />
    ),
  },
  {
    title: 'Error state',
    component: (
      <RadioGroup
        name="contact-error"
        label="Preferred contact method"
        options={contactOptions}
        error="Please select a contact method."
      />
    ),
  },
  {
    title: 'Disabled',
    component: (
      <RadioGroup
        name="contact-disabled"
        label="Preferred contact method"
        options={contactOptions}
        defaultValue="email"
        disabled
      />
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Prop definitions                                                  */
/* ------------------------------------------------------------------ */

export const propDefinitions: PropDef[] = [
  {
    name: 'name',
    type: 'string',
    required: true,
    description: 'The name attribute shared by all radio inputs in the group.',
  },
  {
    name: 'options',
    type: '{ value: string; label: string; description?: string }[]',
    required: true,
    description: 'Array of radio options to render.',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Currently selected value for controlled usage.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    description: 'Default selected value for uncontrolled usage.',
  },
  {
    name: 'onChange',
    type: '(e: ChangeEvent) => void',
    description: 'Change handler receiving the native change event.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables all radio inputs in the group.',
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message displayed below the group.',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Visible legend / group label rendered as a fieldset legend.',
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

export const basicUsage = `<RadioGroup
  name="contact"
  label="Preferred contact method"
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'mail', label: 'US Mail' },
  ]}
  defaultValue="email"
/>`;

export const withDescriptions = `<RadioGroup
  name="notifications"
  label="Notification preferences"
  options={[
    { value: 'all', label: 'All notifications', description: 'Receive every update.' },
    { value: 'important', label: 'Important only', description: 'Only status changes.' },
    { value: 'none', label: 'None', description: 'Check your dashboard.' },
  ]}
/>`;

export const controlled = `const [value, setValue] = useState('email');

<RadioGroup
  name="contact"
  label="Contact method"
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`;

export const errorState = `<RadioGroup
  name="contact"
  label="Contact method"
  options={options}
  error="Please select a contact method."
/>`;
