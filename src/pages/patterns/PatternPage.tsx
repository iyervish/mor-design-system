import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { patterns } from '../../data/patterns';
import { patternRegistry } from '../../data/patternRegistry';
import LivePreview from '../../components/docs/LivePreview';
import CodeBlock from '../../components/docs/CodeBlock';
import DosDonts from '../../components/docs/DosDonts';
import TableOfContents from '../../components/docs/TableOfContents';
import { Badge } from '../../components/ui/Badge';

const tocItems = [
  { id: 'preview', label: 'Preview', level: 2 as const },
  { id: 'variants', label: 'Variants', level: 2 as const },
  { id: 'components-used', label: 'Components Used', level: 2 as const },
  { id: 'code', label: 'Code', level: 2 as const },
  { id: 'accessibility', label: 'Accessibility', level: 2 as const },
  { id: 'guidelines', label: 'Guidelines', level: 2 as const },
];

export default function PatternPage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = patterns.find(p => p.slug === slug);
  const registry = slug ? patternRegistry[slug] : undefined;

  if (!meta || !registry) {
    return (
      <div className="morni-prose">
        <h1>Pattern Not Found</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The pattern "{slug}" doesn't exist yet or hasn't been documented.
        </p>
        <Link
          to="/patterns"
          className="inline-flex items-center gap-2 text-sm no-underline"
          style={{ color: 'var(--color-primary)' }}
        >
          <ArrowLeft size={16} />
          Back to patterns
        </Link>
      </div>
    );
  }

  return (
    <>
      <TableOfContents items={tocItems} />
      <div className="morni-prose">
        {/* Header */}
        <div className="mb-2">
          <Link
            to="/patterns"
            className="inline-flex items-center gap-1 text-xs no-underline mb-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <ArrowLeft size={12} />
            Patterns
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <h1 className="mb-0">{meta.title}</h1>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
            style={{
              backgroundColor: 'var(--vana-100)',
              color: 'var(--vana-600)',
            }}
          >
            {meta.status}
          </span>
        </div>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          {meta.description}
        </p>

        {/* Preview */}
        <h2 id="preview">Preview</h2>
        <LivePreview code={registry.defaultCode} title={`${meta.title} — Default`}>
          {registry.defaultPreview}
        </LivePreview>

        {/* Variants */}
        {registry.variants && registry.variants.length > 0 && (
          <>
            <h2 id="variants">Variants</h2>
            <div className="space-y-4">
              {registry.variants.map((variant, i) => (
                <LivePreview key={i} code={variant.code} title={variant.title}>
                  {variant.preview}
                </LivePreview>
              ))}
            </div>
          </>
        )}

        {/* Components Used */}
        <h2 id="components-used">Components Used</h2>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          This pattern combines the following Morni components:
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {meta.componentsUsed.map(slug => (
            <Link key={slug} to={`/components/${slug}`} className="no-underline">
              <Badge variant="secondary" className="cursor-pointer">
                {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Code */}
        <h2 id="code">Code</h2>
        <CodeBlock title="Full Example" code={registry.defaultCode} />

        {/* Accessibility */}
        <h2 id="accessibility">Accessibility</h2>
        <div
          className="p-5 rounded-lg border"
          style={{ borderColor: 'var(--vana-200)', backgroundColor: 'var(--vana-50)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'var(--vana-200)', color: 'var(--vana-700)' }}
            >
              WCAG 2.1 AA
            </span>
          </div>
          <ul className="space-y-2.5 list-none p-0 m-0">
            {registry.accessibility.map((note, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: 'var(--vana-200)', color: 'var(--vana-700)' }}
                >
                  &#10003;
                </span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Guidelines */}
        {registry.dos && registry.donts && (
          <>
            <h2 id="guidelines">Guidelines</h2>
            <DosDonts dos={registry.dos} donts={registry.donts} />
          </>
        )}
      </div>
    </>
  );
}
