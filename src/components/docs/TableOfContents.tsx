import { useScrollSpy } from '../../hooks/useScrollSpy';

export interface TocItem {
  id: string;
  label: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const activeId = useScrollSpy(items.map(i => i.id));

  if (items.length === 0) return null;

  return (
    <nav
      className="hidden xl:block fixed right-0 top-0 overflow-y-auto morni-scrollbar"
      style={{
        width: 'var(--toc-width)',
        paddingTop: 'calc(var(--topbar-height) + 2rem)',
        paddingRight: '1.5rem',
        paddingBottom: '2rem',
        height: '100vh',
      }}
      aria-label="Table of contents"
    >
      <p
        className="text-xs font-semibold uppercase tracking-wide mb-3"
        style={{ color: 'var(--color-text-muted)' }}
      >
        On this page
      </p>
      <ul className="space-y-1">
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block text-sm no-underline transition-colors py-1"
              style={{
                paddingLeft: item.level === 3 ? '0.75rem' : '0',
                color: activeId === item.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                fontWeight: activeId === item.id ? 600 : 400,
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
