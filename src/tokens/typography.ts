export interface TypeScale {
  name: string;
  size: string;
  lineHeight: string;
  weight: number;
  font: 'heading' | 'body' | 'mono';
  cssVar: string;
}

export const typeScale: TypeScale[] = [
  { name: 'Display', size: '3rem', lineHeight: '1.1', weight: 700, font: 'heading', cssVar: '--text-5xl' },
  { name: 'H1', size: '2.25rem', lineHeight: '1.2', weight: 700, font: 'heading', cssVar: '--text-4xl' },
  { name: 'H2', size: '1.875rem', lineHeight: '1.25', weight: 700, font: 'heading', cssVar: '--text-3xl' },
  { name: 'H3', size: '1.5rem', lineHeight: '1.3', weight: 600, font: 'heading', cssVar: '--text-2xl' },
  { name: 'H4', size: '1.25rem', lineHeight: '1.4', weight: 600, font: 'heading', cssVar: '--text-xl' },
  { name: 'H5', size: '1.125rem', lineHeight: '1.4', weight: 600, font: 'heading', cssVar: '--text-lg' },
  { name: 'Body Large', size: '1.125rem', lineHeight: '1.625', weight: 400, font: 'body', cssVar: '--text-lg' },
  { name: 'Body', size: '1rem', lineHeight: '1.5', weight: 400, font: 'body', cssVar: '--text-base' },
  { name: 'Body Small', size: '0.875rem', lineHeight: '1.5', weight: 400, font: 'body', cssVar: '--text-sm' },
  { name: 'Caption', size: '0.75rem', lineHeight: '1.5', weight: 400, font: 'body', cssVar: '--text-xs' },
  { name: 'Code', size: '0.875rem', lineHeight: '1.6', weight: 400, font: 'mono', cssVar: '--text-sm' },
];

export const fonts = {
  heading: {
    name: 'Merriweather',
    category: 'serif',
    weights: [400, 700],
    usage: 'Headings, display text, page titles',
    why: 'Authoritative, great readability, open source. Conveys trust and permanence.',
  },
  body: {
    name: 'Source Sans 3',
    category: 'sans-serif',
    weights: [300, 400, 600, 700],
    usage: 'Body text, UI labels, form fields',
    why: 'Built for readability, used by USWDS, open source. Excellent at small sizes.',
  },
  mono: {
    name: 'JetBrains Mono',
    category: 'monospace',
    weights: [400, 700],
    usage: 'Code snippets, technical content',
    why: 'Designed for code readability with ligatures and clear character distinction.',
  },
};
