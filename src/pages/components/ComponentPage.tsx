import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { components } from '../../data/components';
import { componentRegistry } from '../../data/componentRegistry';
import LivePreview from '../../components/docs/LivePreview';
import PropsTable from '../../components/docs/PropsTable';
import CodeBlock from '../../components/docs/CodeBlock';
import DosDonts from '../../components/docs/DosDonts';
import TableOfContents from '../../components/docs/TableOfContents';

const tocItems = [
  { id: 'preview', label: 'Preview', level: 2 as const },
  { id: 'variants', label: 'Variants', level: 2 as const },
  { id: 'props', label: 'Props', level: 2 as const },
  { id: 'usage', label: 'Usage', level: 2 as const },
  { id: 'accessibility', label: 'Accessibility', level: 2 as const },
  { id: 'guidelines', label: 'Guidelines', level: 2 as const },
];

export default function ComponentPage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = components.find(c => c.slug === slug);
  const registry = slug ? componentRegistry[slug] : undefined;

  if (!meta || !registry) {
    return (
      <div className="morni-prose">
        <h1>Component Not Found</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The component "{slug}" doesn't exist yet or hasn't been documented.
        </p>
        <Link
          to="/components"
          className="inline-flex items-center gap-2 text-sm no-underline"
          style={{ color: 'var(--color-primary)' }}
        >
          <ArrowLeft size={16} />
          Back to components
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
            to="/components"
            className="inline-flex items-center gap-1 text-xs no-underline mb-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <ArrowLeft size={12} />
            Components
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <h1 className="mb-0">{meta.name}</h1>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
            style={{
              backgroundColor: meta.status === 'stable' ? 'var(--vana-100)' : 'var(--surya-100)',
              color: meta.status === 'stable' ? 'var(--vana-600)' : 'var(--surya-700)',
            }}
          >
            {meta.status}
          </span>
        </div>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          {meta.description}
        </p>

        {/* Live Preview */}
        <h2 id="preview">Preview</h2>
        <LivePreview code={registry.defaultCode} title={`${meta.name} — Default`}>
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

        {/* Props Table */}
        <h2 id="props">Props</h2>
        <PropsTable props={registry.propDefinitions} />

        {/* Usage */}
        <h2 id="usage">Usage</h2>
        <CodeBlock
          title={`Import ${meta.name}`}
          code={`import { ${meta.name} } from '@morni/components/${meta.name}';`}
        />
        {registry.usageCode && (
          <div className="mt-4">
            <CodeBlock title="Example" code={registry.usageCode} />
          </div>
        )}

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

        {/* Do/Don't Guidelines */}
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
