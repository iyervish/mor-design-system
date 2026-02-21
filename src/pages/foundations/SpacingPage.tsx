import TableOfContents from '../../components/docs/TableOfContents';
import TokenTable from '../../components/docs/TokenTable';
import { spacingTokens, radiusTokens } from '../../tokens/spacing';

const tocItems = [
  { id: 'spacing-scale', label: 'Spacing Scale', level: 2 as const },
  { id: 'visual-reference', label: 'Visual Reference', level: 2 as const },
  { id: 'border-radius', label: 'Border Radius', level: 2 as const },
];

export default function SpacingPage() {
  return (
    <>
      <TableOfContents items={tocItems} />
      <div className="mor-prose">
        <h1>Spacing</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          An 8px base grid system ensures consistent rhythm and alignment across all components.
          Every spacing value is a multiple of the base unit.
        </p>

        <h2 id="spacing-scale">Spacing Scale</h2>

        <TokenTable
          headers={['Token', 'Value', 'Preview']}
          rows={spacingTokens.map(token => ({
            token: token.cssVar,
            value: `${token.value} (${token.px}px)`,
            preview: (
              <div className="flex items-center gap-2">
                <div
                  className="h-4 rounded-sm"
                  style={{
                    width: `${Math.min(token.px, 200)}px`,
                    backgroundColor: 'var(--color-primary)',
                    opacity: 0.7,
                  }}
                />
              </div>
            ),
          }))}
        />

        <h2 id="visual-reference">Visual Reference</h2>
        <p>
          The spacing scale visualized. Use these tokens for margins, paddings, and gaps
          to maintain consistent spacing throughout your layout.
        </p>

        <div
          className="p-6 rounded-lg border space-y-2"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          {spacingTokens.filter(t => t.px > 0 && t.px <= 96).map(token => (
            <div key={token.name} className="flex items-center gap-3">
              <span
                className="w-16 text-right text-[11px] flex-shrink-0"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                {token.px}px
              </span>
              <div
                className="h-5 rounded-sm"
                style={{
                  width: `${token.px * 2}px`,
                  background: `linear-gradient(90deg, var(--firoza-600), var(--sona-500))`,
                  opacity: 0.2 + (token.px / 96) * 0.8,
                }}
              />
              <span
                className="text-[10px] flex-shrink-0"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                {token.cssVar}
              </span>
            </div>
          ))}
        </div>

        <h2 id="border-radius">Border Radius</h2>
        <p>
          Consistent border radius tokens for rounded corners throughout the system.
        </p>

        <div className="flex flex-wrap gap-6 mt-4">
          {radiusTokens.map(token => (
            <div key={token.name} className="text-center">
              <div
                className="w-16 h-16 mb-2 border-2"
                style={{
                  borderRadius: token.value,
                  borderColor: 'var(--sona-400)',
                  backgroundColor: 'var(--sona-50)',
                }}
              />
              <div className="text-xs font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                {token.name}
              </div>
              <div
                className="text-[10px]"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                {token.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
