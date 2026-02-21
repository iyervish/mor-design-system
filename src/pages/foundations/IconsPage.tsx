import { Palette, Zap, Layers, Shapes } from 'lucide-react';

const iconCategories = [
  { title: 'System Icons', icon: Zap, description: 'Core icon set for common UI actions and states.' },
  { title: 'Brand Icons', icon: Shapes, description: 'Virginia state symbols and agency-specific icons.' },
  { title: 'Interface Icons', icon: Layers, description: 'Navigation, status, and content type indicators.' },
  { title: 'Custom Icons', icon: Palette, description: 'Guidelines for creating and integrating custom icons.' },
];

export default function IconsPage() {
  return (
    <div className="morni-prose">
      <h1>Icons</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        A comprehensive icon system for consistent visual communication across Virginia government services.
        Icons help users quickly understand actions, status, and content types.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {iconCategories.map(category => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="p-5 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                opacity: 0.6,
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--mayura-100)', color: 'var(--mayura-600)' }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {category.description}
                  </p>
                  <span
                    className="inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
                    style={{ backgroundColor: 'var(--sona-100)', color: 'var(--sona-700)' }}
                  >
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
