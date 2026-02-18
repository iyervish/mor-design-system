import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'content',
    type: 'string',
    required: true,
    description: 'Text content displayed in the tooltip.',
  },
  {
    name: 'position',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'top'",
    description: 'Position of the tooltip relative to the trigger element.',
  },
  {
    name: 'delayMs',
    type: 'number',
    default: '200',
    description: 'Delay in milliseconds before the tooltip appears.',
  },
  {
    name: 'children',
    type: 'ReactElement',
    required: true,
    description: 'Trigger element that the tooltip wraps.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes for the tooltip bubble.',
  },
];

export const codeSnippets = {
  default: `<Tooltip content="Save your progress">
  <button>Save</button>
</Tooltip>`,
  positions: `<Tooltip content="Top" position="top">
  <button>Top</button>
</Tooltip>
<Tooltip content="Right" position="right">
  <button>Right</button>
</Tooltip>
<Tooltip content="Bottom" position="bottom">
  <button>Bottom</button>
</Tooltip>
<Tooltip content="Left" position="left">
  <button>Left</button>
</Tooltip>`,
};
