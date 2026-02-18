export interface SpacingToken {
  name: string;
  value: string;
  px: number;
  cssVar: string;
}

export const spacingTokens: SpacingToken[] = [
  { name: '0', value: '0', px: 0, cssVar: '--space-0' },
  { name: '0.5', value: '0.125rem', px: 2, cssVar: '--space-0-5' },
  { name: '1', value: '0.25rem', px: 4, cssVar: '--space-1' },
  { name: '1.5', value: '0.375rem', px: 6, cssVar: '--space-1-5' },
  { name: '2', value: '0.5rem', px: 8, cssVar: '--space-2' },
  { name: '3', value: '0.75rem', px: 12, cssVar: '--space-3' },
  { name: '4', value: '1rem', px: 16, cssVar: '--space-4' },
  { name: '5', value: '1.25rem', px: 20, cssVar: '--space-5' },
  { name: '6', value: '1.5rem', px: 24, cssVar: '--space-6' },
  { name: '8', value: '2rem', px: 32, cssVar: '--space-8' },
  { name: '10', value: '2.5rem', px: 40, cssVar: '--space-10' },
  { name: '12', value: '3rem', px: 48, cssVar: '--space-12' },
  { name: '16', value: '4rem', px: 64, cssVar: '--space-16' },
  { name: '20', value: '5rem', px: 80, cssVar: '--space-20' },
  { name: '24', value: '6rem', px: 96, cssVar: '--space-24' },
  { name: '32', value: '8rem', px: 128, cssVar: '--space-32' },
];

export interface ElevationToken {
  name: string;
  level: number;
  value: string;
  cssVar: string;
  usage: string;
}

export const elevationTokens: ElevationToken[] = [
  { name: 'Extra Small', level: 1, value: '0 1px 2px rgba(15, 23, 42, 0.04)', cssVar: '--shadow-xs', usage: 'Subtle borders, dividers' },
  { name: 'Small', level: 2, value: '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)', cssVar: '--shadow-sm', usage: 'Cards, buttons' },
  { name: 'Medium', level: 3, value: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)', cssVar: '--shadow-md', usage: 'Dropdowns, popovers' },
  { name: 'Large', level: 4, value: '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.05)', cssVar: '--shadow-lg', usage: 'Dialogs, modals' },
  { name: 'Extra Large', level: 5, value: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)', cssVar: '--shadow-xl', usage: 'Full-screen overlays' },
];

export interface RadiusToken {
  name: string;
  value: string;
  px: number;
  cssVar: string;
}

export const radiusTokens: RadiusToken[] = [
  { name: 'sm', value: '4px', px: 4, cssVar: '--radius-sm' },
  { name: 'md', value: '6px', px: 6, cssVar: '--radius-md' },
  { name: 'lg', value: '8px', px: 8, cssVar: '--radius-lg' },
  { name: 'xl', value: '12px', px: 12, cssVar: '--radius-xl' },
  { name: '2xl', value: '16px', px: 16, cssVar: '--radius-2xl' },
  { name: 'full', value: '9999px', px: 9999, cssVar: '--radius-full' },
];
