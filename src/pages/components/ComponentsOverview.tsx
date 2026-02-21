import ComponentCard from '../../components/docs/ComponentCard';
import { components } from '../../data/components';

export default function ComponentsOverview() {
  const categories = [...new Set(components.map(c => c.category))];

  return (
    <div className="morni-prose">
      <h1>Components</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        {components.length} production-ready components built for Virginia government services.
        Every component is accessible, responsive, and supports dark mode.
      </p>

      {/* Stats strip */}
      <div
        className="flex items-center gap-6 mt-6 mb-8 px-5 py-3 rounded-lg"
        style={{ backgroundColor: 'var(--sona-50)', border: '1px solid var(--sona-200)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold" style={{ color: 'var(--sona-600)', fontFamily: 'var(--font-heading)' }}>
            {components.length}
          </span>
          <span className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--sona-700)' }}>
            Components
          </span>
        </div>
        <div className="w-px h-6" style={{ backgroundColor: 'var(--sona-200)' }} />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold" style={{ color: 'var(--vana-600)', fontFamily: 'var(--font-heading)' }}>
            {components.filter(c => c.status === 'stable').length}
          </span>
          <span className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--vana-700)' }}>
            Stable
          </span>
        </div>
        <div className="w-px h-6" style={{ backgroundColor: 'var(--sona-200)' }} />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold" style={{ color: 'var(--firoza-600)', fontFamily: 'var(--font-heading)' }}>
            {categories.length}
          </span>
          <span className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--firoza-600)' }}>
            Categories
          </span>
        </div>
      </div>

      {categories.map((category, idx) => {
        const categoryComponents = components.filter(c => c.category === category);
        return (
          <div key={category} className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: 'var(--sona-100)',
                  color: 'var(--sona-700)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h2
                className="text-xl font-semibold"
                style={{ fontFamily: 'var(--font-heading)', borderBottom: 'none', marginTop: 0, marginBottom: 0, paddingBottom: 0 }}
              >
                {category}
              </h2>
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {categoryComponents.length} component{categoryComponents.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categoryComponents.map(comp => (
                <ComponentCard key={comp.slug} component={comp} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
