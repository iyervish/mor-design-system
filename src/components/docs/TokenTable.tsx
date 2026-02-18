interface TokenRow {
  token: string;
  value: string;
  preview?: React.ReactNode;
}

interface TokenTableProps {
  headers: string[];
  rows: TokenRow[];
}

export default function TokenTable({ headers, rows }: TokenTableProps) {
  return (
    <div
      className="overflow-x-auto rounded-lg border"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: 'var(--neelkanth-950)' }}>
            {headers.map(header => (
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
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b last:border-b-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <td
                className="px-4 py-3"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}
              >
                {row.token}
              </td>
              <td
                className="px-4 py-3"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
              >
                {row.value}
              </td>
              {row.preview !== undefined && (
                <td className="px-4 py-3">
                  {row.preview}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
