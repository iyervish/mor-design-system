import TableOfContents from '../../components/docs/TableOfContents';
import TokenTable from '../../components/docs/TokenTable';
import CodeBlock from '../../components/docs/CodeBlock';
import { typeScale, fonts } from '../../tokens/typography';

const tocItems = [
  { id: 'font-families', label: 'Font Families', level: 2 as const },
  { id: 'type-scale', label: 'Type Scale', level: 2 as const },
  { id: 'usage', label: 'Usage', level: 2 as const },
];

export default function TypographyPage() {
  const fontMap = {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
    mono: 'var(--font-mono)',
  };

  return (
    <>
      <TableOfContents items={tocItems} />
      <div className="mor-prose">
        <h1>Typography</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          A purposeful type system built for government readability.
          Merriweather for authority, Source Sans 3 for clarity, JetBrains Mono for code.
        </p>

        <h2 id="font-families">Font Families</h2>

        {Object.entries(fonts).map(([key, font]) => (
          <div
            key={key}
            className="mb-8 rounded-lg border overflow-hidden"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
          >
            {/* Card header with peacock gold accent bar */}
            <div
              className="px-6 py-4 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--font-heading)', marginTop: 0 }}>
                  {font.name}
                </h3>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: 'var(--sona-100)',
                    color: 'var(--sona-700)',
                  }}
                >
                  {font.category}
                </span>
              </div>
              <p className="text-sm mb-0" style={{ color: 'var(--color-text-secondary)' }}>
                {font.why}
              </p>
            </div>

            {/* Specimen */}
            <div className="px-6 py-5" style={{ fontFamily: fontMap[key as keyof typeof fontMap] }}>
              <p className="text-3xl mb-2" style={{ color: 'var(--color-text)' }}>
                Republic of India
              </p>
              <p className="text-base mb-0" style={{ color: 'var(--color-text-secondary)' }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
            </div>

            {/* Footer with weights and usage */}
            <div
              className="px-6 py-3 flex items-center justify-between border-t"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-subtle)' }}
            >
              <div className="flex gap-1.5 flex-wrap">
                {font.weights.map(w => (
                  <span
                    key={w}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: 'var(--firoza-100)',
                      color: 'var(--firoza-700)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                {font.usage}
              </span>
            </div>
          </div>
        ))}

        <h2 id="type-scale">Type Scale</h2>

        <div className="space-y-4">
          {typeScale.map(item => (
            <div
              key={item.name}
              className="flex items-baseline gap-4 pb-4 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <span
                className="w-28 flex-shrink-0 text-xs font-medium"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                {item.name}
              </span>
              <span
                style={{
                  fontSize: item.size,
                  lineHeight: item.lineHeight,
                  fontWeight: item.weight,
                  fontFamily: fontMap[item.font],
                  color: 'var(--color-text)',
                }}
              >
                Republic of India
              </span>
              <span
                className="ml-auto text-xs flex-shrink-0"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                {item.size} / {item.lineHeight}
              </span>
            </div>
          ))}
        </div>

        <h2 id="usage">Usage</h2>

        <TokenTable
          headers={['Token', 'Value']}
          rows={[
            { token: '--font-heading', value: "Merriweather, Georgia, serif" },
            { token: '--font-body', value: "Source Sans 3, system-ui, sans-serif" },
            { token: '--font-mono', value: "JetBrains Mono, Fira Code, monospace" },
          ]}
        />

        <div className="mt-6">
          <CodeBlock
            title="Usage in CSS"
            language="css"
            code={`/* Headings */
h1, h2, h3 {
  font-family: var(--font-heading);
}

/* Body text */
body, p, label {
  font-family: var(--font-body);
}

/* Code */
code, pre {
  font-family: var(--font-mono);
}`}
          />
        </div>
      </div>
    </>
  );
}
