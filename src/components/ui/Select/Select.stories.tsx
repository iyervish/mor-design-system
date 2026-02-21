import Select from './Select';
import type { PropDef } from '../../docs/PropsTable';

const stateOptions = [
  { value: 'mh', label: 'Maharashtra' },
  { value: 'tn', label: 'Tamil Nadu' },
  { value: 'ka', label: 'Karnataka' },
  { value: 'up', label: 'Uttar Pradesh' },
  { value: 'dl', label: 'Delhi' },
];

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

export const variants = [
  {
    title: 'Default',
    component: (
      <Select
        label="State"
        options={stateOptions}
        placeholder="Select a state"
        defaultValue=""
      />
    ),
  },
  {
    title: 'With helper text',
    component: (
      <Select
        label="State of residence"
        options={stateOptions}
        placeholder="Select a state"
        defaultValue=""
        helperText="Choose the state where you currently reside."
      />
    ),
  },
  {
    title: 'Error state',
    component: (
      <Select
        label="State"
        options={stateOptions}
        placeholder="Select a state"
        defaultValue=""
        error="Please select a state."
      />
    ),
  },
  {
    title: 'Disabled',
    component: (
      <Select
        label="State"
        options={stateOptions}
        placeholder="Select a state"
        disabled
      />
    ),
  },
  {
    title: 'Small size',
    component: (
      <Select
        label="State"
        options={stateOptions}
        placeholder="Select"
        defaultValue=""
        size="sm"
      />
    ),
  },
  {
    title: 'Large size',
    component: (
      <Select
        label="State"
        options={stateOptions}
        placeholder="Select a state"
        defaultValue=""
        size="lg"
      />
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
    description: 'Visible label rendered above the select.',
  },
  {
    name: 'options',
    type: '{ value: string; label: string }[]',
    required: true,
    description: 'Array of options to render in the dropdown.',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder shown as the first disabled option.',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Assistive text rendered below the select.',
  },
  {
    name: 'error',
    type: 'string',
    description:
      'Error message. When provided the select displays an error state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the select.',
  },
  {
    name: 'size',
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: 'Controls the visual size of the select.',
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

export const basicUsage = `<Select
  label="State"
  options={[
    { value: 'mh', label: 'Maharashtra' },
    { value: 'tn', label: 'Tamil Nadu' },
  ]}
  placeholder="Select a state"
/>`;

export const withHelperText = `<Select
  label="State of residence"
  options={options}
  placeholder="Select a state"
  helperText="Choose the state where you currently reside."
/>`;

export const errorState = `<Select
  label="State"
  options={options}
  placeholder="Select a state"
  error="Please select a state."
/>`;
