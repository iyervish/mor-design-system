import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'totalPages',
    type: 'number',
    required: true,
    description: 'Total number of pages.',
  },
  {
    name: 'currentPage',
    type: 'number',
    required: true,
    description: 'Current active page (1-indexed).',
  },
  {
    name: 'onPageChange',
    type: '(page: number) => void',
    required: true,
    description: 'Called when a page button is clicked.',
  },
  {
    name: 'siblings',
    type: 'number',
    default: '1',
    description: 'Number of sibling pages shown around the current page.',
  },
  {
    name: 'showFirstLast',
    type: 'boolean',
    default: 'false',
    description: 'Show jump-to-first and jump-to-last page buttons.',
  },
  {
    name: 'size',
    type: "'sm' | 'md'",
    default: "'md'",
    description: 'Button size variant.',
  },
];

export const codeSnippets = {
  default: `const [page, setPage] = useState(1);

<Pagination
  totalPages={10}
  currentPage={page}
  onPageChange={setPage}
/>`,
  withFirstLast: `<Pagination
  totalPages={20}
  currentPage={page}
  onPageChange={setPage}
  showFirstLast
/>`,
};
