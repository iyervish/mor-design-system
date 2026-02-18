import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'steps',
    type: '{ label: string; description?: string }[]',
    required: true,
    description: 'Array of step definitions.',
  },
  {
    name: 'currentStep',
    type: 'number',
    required: true,
    description: 'Current step index (0-based).',
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: 'Direction of the step indicator.',
  },
];

export const codeSnippets = {
  default: `<StepIndicator
  currentStep={1}
  steps={[
    { label: 'Personal Info' },
    { label: 'Documentation' },
    { label: 'Review' },
    { label: 'Submit' },
  ]}
/>`,
  vertical: `<StepIndicator
  orientation="vertical"
  currentStep={2}
  steps={[
    { label: 'Application Received', description: 'Jan 15, 2025' },
    { label: 'Under Review', description: 'Jan 18, 2025' },
    { label: 'Processing', description: 'In progress' },
    { label: 'Complete' },
  ]}
/>`,
};
