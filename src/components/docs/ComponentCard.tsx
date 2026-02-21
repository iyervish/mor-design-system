import { Link } from 'react-router-dom';
import type { ComponentMeta } from '../../data/components';

interface ComponentCardProps {
  component: ComponentMeta;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const statusColors: Record<string, { bg: string; text: string }> = {
    stable: { bg: 'var(--color-success-light)', text: 'var(--color-success)' },
    beta: { bg: 'var(--color-warning-light)', text: 'var(--color-warning)' },
    planned: { bg: 'var(--color-background-subtle)', text: 'var(--color-text-muted)' },
  };
  const status = statusColors[component.status];

  return (
    <Link
      to={`/components/${component.slug}`}
      className="group block rounded-lg border p-5 transition-all no-underline"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--sona-300)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(212,168,50,0.08)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3
          className="text-base font-semibold transition-colors"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
        >
          {component.name}
        </h3>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            backgroundColor: status.bg,
            color: status.text,
          }}
        >
          {component.status}
        </span>
      </div>
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {component.description}
      </p>
      <div className="mt-3">
        <span
          className="text-xs font-medium px-2 py-0.5 rounded"
          style={{
            backgroundColor: 'var(--color-background-subtle)',
            color: 'var(--color-text-muted)',
          }}
        >
          {component.category}
        </span>
      </div>
    </Link>
  );
}
