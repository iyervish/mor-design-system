import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'label',
    type: 'string',
    default: "'Search'",
    description: 'Label text (visually hidden by default).',
  },
  {
    name: 'showLabel',
    type: 'boolean',
    default: 'false',
    description: 'Show the label visually above the input.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Visual size variant.',
  },
  {
    name: 'onSearch',
    type: '(value: string) => void',
    description: 'Called when Enter is pressed.',
  },
  {
    name: 'onClear',
    type: '() => void',
    description: 'Called when the clear button is clicked.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'true',
    description: 'Show clear button when input has a value.',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'Search...'",
    description: 'Placeholder text inside the input.',
  },
];

export const codeSnippets = {
  default: `<Search placeholder="Search services..." onSearch={handleSearch} />`,
  withLabel: `<Search label="Search RTO Services" showLabel placeholder="Licence, registration..." />`,
  sizes: `<Search size="sm" placeholder="Small" />
<Search size="md" placeholder="Medium" />
<Search size="lg" placeholder="Large" />`,
};
