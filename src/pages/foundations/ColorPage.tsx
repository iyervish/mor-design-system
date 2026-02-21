import ColorSwatch from '../../components/docs/ColorSwatch';
import TokenTable from '../../components/docs/TokenTable';
import TableOfContents from '../../components/docs/TableOfContents';
import { colorFamilies } from '../../tokens/colors';

const tocItems = [
  { id: 'color-roles', label: 'Color Roles', level: 2 as const },
  { id: 'system-tokens', label: 'System Tokens', level: 2 as const },
  { id: 'theme-tokens', label: 'Theme Tokens', level: 2 as const },
  { id: 'usage', label: 'Usage Guidelines', level: 2 as const },
];

const themeTokenRows = [
  { token: '--color-primary', value: 'firoza-600 / firoza-300' },
  { token: '--color-info (alias: --color-secondary)', value: 'mayura-600 / mayura-300' },
  { token: '--color-accent', value: 'sona-500 / sona-400' },
  { token: '--color-warning', value: 'sona-600 / sona-400' },
  { token: '--color-success', value: 'vana-500 / vana-400' },
  { token: '--color-error', value: 'laal-500 / laal-400' },
  { token: '--color-warm', value: 'mitti-500 / mitti-400' },
  { token: '--color-surface', value: '#ffffff / dhumra-800' },
  { token: '--color-text', value: 'dhumra-900 / dhumra-50' },
  { token: '--color-border', value: 'dhumra-200 / dhumra-700' },
];

export default function ColorPage() {
  return (
    <>
      <TableOfContents items={tocItems} />
      <div className="morni-prose">
        <h1>Color System</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          A 3-layer token architecture inspired by Indian nature and mythology. System tokens provide
          the palette, theme tokens map them to semantic roles, and component tokens handle specifics.
        </p>

        <h2 id="color-roles">Color Roles</h2>
        <p>
          Each Morni color family has a clear, non-overlapping role. Use this guide to choose the right color for any context.
        </p>

        <div
          className="overflow-x-auto rounded-lg border mt-4 mb-8"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <table className="w-full text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-surface-raised)' }}>
                <th className="text-left px-4 py-2.5 font-semibold" style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}>Family</th>
                <th className="text-left px-4 py-2.5 font-semibold" style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}>Role</th>
                <th className="text-left px-4 py-2.5 font-semibold" style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}>When to use</th>
              </tr>
            </thead>
            <tbody>
              {[
                { swatch: 'var(--firoza-600)', family: 'Firoza (teal)', role: 'Primary', usage: 'Brand identity, primary buttons, links, focus rings, navigation.' },
                { swatch: 'var(--sona-500)', family: 'Sona (gold)', role: 'Accent & Warning', usage: 'Highlights, active states, hover accents, badges, decorative warmth. Also warning alerts and caution states.' },
                { swatch: 'var(--mayura-600)', family: 'Mayura (cobalt)', role: 'Info / Interactive', usage: 'Informational alerts, secondary actions, data visualization, links in dark contexts.' },
                { swatch: 'var(--vana-500)', family: 'Vana (green)', role: 'Success', usage: 'Success states, confirmations, positive indicators, checkmarks.' },
                { swatch: 'var(--laal-500)', family: 'Laal (red)', role: 'Error / Destructive', usage: 'Error states, validation, destructive actions, required markers.' },
                { swatch: 'var(--mitti-500)', family: 'Mitti (terracotta)', role: 'Warm Neutral', usage: 'Earthy backgrounds, warm cards, blockquotes, sidebar accents, category tags.' },
                { swatch: 'var(--dhumra-500)', family: 'Dhumra (warm gray)', role: 'Neutral', usage: 'Text, borders, surfaces, backgrounds. The structural foundation.' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td className="px-4 py-2.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm inline-block flex-shrink-0" style={{ backgroundColor: row.swatch }} />
                      <span style={{ color: 'var(--color-text)' }}>{row.family}</span>
                    </span>
                  </td>
                  <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>{row.role}</td>
                  <td className="px-4 py-2.5" style={{ color: 'var(--color-text-secondary)' }}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="system-tokens">System Tokens</h2>
        <p>
          Named after Indian nature, culture, and mythology. Each family provides a full 50–950 scale
          for flexible application across light and dark modes.
        </p>

        {colorFamilies.map(family => (
          <div key={family.name} className="mb-10">
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-5 h-5 rounded"
                style={{ backgroundColor: family.scale[500] }}
              />
              <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)', marginTop: '1.5rem' }}>
                {family.name}
              </h3>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'var(--sona-100)',
                  color: 'var(--sona-700)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {family.inspiration}
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              {family.description}
            </p>
            <div className="grid grid-cols-11 gap-1">
              {(Object.entries(family.scale) as [string, string][]).map(([step, hex]) => (
                <ColorSwatch
                  key={step}
                  name={family.name.toLowerCase().replace(' ', '-')}
                  step={step}
                  hex={hex}
                />
              ))}
            </div>
          </div>
        ))}

        <h2 id="theme-tokens">Theme Tokens</h2>
        <p>
          Theme tokens map system colors to semantic roles. They automatically adjust
          between light and dark modes via CSS custom properties.
        </p>

        <TokenTable
          headers={['Token', 'Light / Dark Value']}
          rows={themeTokenRows}
        />

        <h2 id="usage">Usage Guidelines</h2>
        <div className="space-y-4">
          <div
            className="p-4 rounded-lg border"
            style={{
              borderColor: 'var(--color-success)',
              backgroundColor: 'var(--color-success-light)',
            }}
          >
            <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-success)', fontFamily: 'var(--font-body)' }}>
              Always use theme tokens in components
            </h4>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Use <code style={{ fontFamily: 'var(--font-mono)' }}>var(--color-primary)</code> instead
              of raw hex values. This ensures dark mode compatibility and allows system-wide updates.
            </p>
          </div>
          <div
            className="p-4 rounded-lg border"
            style={{
              borderColor: 'var(--color-error)',
              backgroundColor: 'var(--color-error-light)',
            }}
          >
            <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-error)', fontFamily: 'var(--font-body)' }}>
              Avoid raw system tokens in component styles
            </h4>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Don't use <code style={{ fontFamily: 'var(--font-mono)' }}>var(--firoza-600)</code> directly
              in components. System tokens are for building themes, not for direct use.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
