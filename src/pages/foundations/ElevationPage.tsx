import TableOfContents from '../../components/docs/TableOfContents';
import TokenTable from '../../components/docs/TokenTable';
import { elevationTokens } from '../../tokens/spacing';

const tocItems = [
  { id: 'shadow-levels', label: 'Shadow Levels', level: 2 as const },
  { id: 'live-examples', label: 'Live Examples', level: 2 as const },
  { id: 'token-reference', label: 'Token Reference', level: 2 as const },
];

export default function ElevationPage() {
  return (
    <>
      <TableOfContents items={tocItems} />
      <div className="morni-prose">
        <h1>Elevation</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          A 5-level shadow system that communicates visual hierarchy and interaction states.
          Higher elevation means closer to the user and more prominent.
        </p>

        <h2 id="shadow-levels">Shadow Levels</h2>
        <p>
          Each level has a specific use case. Lower levels for subtle UI elements,
          higher levels for overlays and modals.
        </p>

        <h2 id="live-examples">Live Examples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {elevationTokens.map(token => (
            <div
              key={token.name}
              className="p-6 rounded-lg transition-shadow"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: `var(${token.cssVar})`,
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--surya-100)',
                    color: 'var(--surya-700)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  L{token.level}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: 'var(--color-border)' }}
                />
              </div>
              <h4
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                {token.name}
              </h4>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {token.usage}
              </p>
            </div>
          ))}
        </div>

        <h2 id="token-reference">Token Reference</h2>

        <TokenTable
          headers={['Token', 'Value']}
          rows={elevationTokens.map(token => ({
            token: token.cssVar,
            value: token.value,
          }))}
        />
      </div>
    </>
  );
}
