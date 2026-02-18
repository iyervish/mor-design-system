import { Link } from 'react-router-dom';
import { patterns } from '../../data/patterns';

export default function PatternsOverview() {
  return (
    <div className="morni-prose">
      <h1>Patterns</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Multi-component compositions that solve common government service design problems.
        Patterns combine components into ready-to-use page sections.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {patterns.map(pattern => {
          const Icon = pattern.icon;
          const isImplemented = pattern.status !== 'planned';

          const card = (
            <div
              className="p-5 rounded-lg border transition-colors"
              style={{
                borderColor: isImplemented ? 'var(--color-border)' : 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                opacity: isImplemented ? 1 : 0.6,
                cursor: isImplemented ? 'pointer' : 'default',
              }}
              onMouseEnter={e => {
                if (isImplemented) {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary)';
                }
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
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
                    {pattern.title}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {pattern.description}
                  </p>
                  {!isImplemented && (
                    <span
                      className="inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
                      style={{ backgroundColor: 'var(--surya-100)', color: 'var(--surya-700)' }}
                    >
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          );

          if (isImplemented) {
            return (
              <Link key={pattern.slug} to={`/patterns/${pattern.slug}`} className="no-underline">
                {card}
              </Link>
            );
          }

          return <div key={pattern.slug}>{card}</div>;
        })}
      </div>
    </div>
  );
}
