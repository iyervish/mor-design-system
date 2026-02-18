export interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDef[];
}

export default function PropsTable({ props }: PropsTableProps) {
  return (
    <div
      className="overflow-x-auto rounded-lg border"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: 'var(--neelkanth-950)' }}>
            {['Prop', 'Type', 'Default', 'Description'].map(header => (
              <th
                key={header}
                className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider border-b"
                style={{
                  color: 'var(--surya-300)',
                  borderColor: 'var(--neelkanth-800)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map(prop => (
            <tr
              key={prop.name}
              className="border-b last:border-b-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <td className="px-4 py-3">
                <code
                  className="text-sm px-1.5 py-0.5 rounded"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-primary-light)',
                  }}
                >
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1 text-xs" style={{ color: 'var(--color-error)' }}>*</span>
                )}
              </td>
              <td className="px-4 py-3">
                <code
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                >
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {prop.default ? (
                  <code
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
                  >
                    {prop.default}
                  </code>
                ) : (
                  <span style={{ color: 'var(--color-text-muted)' }}>—</span>
                )}
              </td>
              <td className="px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
