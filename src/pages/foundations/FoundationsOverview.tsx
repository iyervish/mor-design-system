import { Link } from 'react-router-dom';
import { Palette, Type, Ruler, Layers, Sparkles, Move } from 'lucide-react';

const foundations = [
  {
    title: 'Principles',
    description: 'The core design principles that guide every decision in the Morni design system.',
    icon: Sparkles,
    href: '/foundations/principles',
    accent: 'var(--surya-100)',
    accentIcon: 'var(--surya-600)',
  },
  {
    title: 'Color',
    description: 'Peacock-inspired color system with a 3-layer token architecture.',
    icon: Palette,
    href: '/foundations/color',
    accent: 'var(--neelkanth-100)',
    accentIcon: 'var(--neelkanth-600)',
  },
  {
    title: 'Typography',
    description: 'Type scale, font specimens, and usage guidelines.',
    icon: Type,
    href: '/foundations/typography',
    accent: 'var(--mayura-100)',
    accentIcon: 'var(--mayura-600)',
  },
  {
    title: 'Spacing',
    description: '8px base grid system with consistent spacing tokens.',
    icon: Ruler,
    href: '/foundations/spacing',
    accent: 'var(--vana-100)',
    accentIcon: 'var(--vana-600)',
  },
  {
    title: 'Elevation',
    description: '5-level shadow system with live examples.',
    icon: Layers,
    href: '/foundations/elevation',
    accent: 'var(--sindoor-100)',
    accentIcon: 'var(--sindoor-500)',
  },
  {
    title: 'Motion',
    description: 'Animation tokens and principles for consistent interactions.',
    icon: Move,
    href: '/foundations/motion',
    accent: 'var(--mitti-100)',
    accentIcon: 'var(--mitti-500)',
  },
];

export default function FoundationsOverview() {
  return (
    <div className="morni-prose">
      <h1>Foundations</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        The building blocks of the Morni design system. These tokens and principles
        ensure consistency across every component and pattern.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {foundations.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className="group flex gap-4 p-5 rounded-lg border no-underline transition-all"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--surya-300)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(212,168,50,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: item.accent,
                  color: item.accentIcon,
                }}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-1 transition-colors"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
