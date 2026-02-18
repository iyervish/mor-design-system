import type { PropDef } from '../../docs/PropsTable';

export const textAreaPropDefs: PropDef[] = [
  { name: 'label', type: 'string', description: 'TextArea label text' },
  { name: 'helperText', type: 'string', description: 'Helper text below the textarea' },
  { name: 'error', type: 'string', description: 'Error message (sets error styling)' },
  { name: 'rows', type: 'number', default: '4', description: 'Number of visible text rows' },
  { name: 'maxLength', type: 'number', description: 'Maximum character count' },
  { name: 'showCount', type: 'boolean', default: 'false', description: 'Show character counter' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea' },
  { name: 'className', type: 'string', description: 'Additional CSS classes' },
];
