import { Check, X } from 'lucide-react';

interface DosDontsProps {
  dos: string[];
  donts: string[];
}

export default function DosDonts({ dos, donts }: DosDontsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        className="rounded-lg border p-4"
        style={{
          borderColor: 'var(--color-success)',
          backgroundColor: 'var(--color-success-light)',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--vana-600)' }}
          >
            <Check size={14} color="white" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--vana-700)' }}>
            Do
          </span>
        </div>
        <ul className="space-y-2">
          {dos.map((item, i) => (
            <li
              key={i}
              className="text-sm flex items-start gap-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-success)' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="rounded-lg border p-4"
        style={{
          borderColor: 'var(--color-error)',
          backgroundColor: 'var(--color-error-light)',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--sindoor-500)' }}
          >
            <X size={14} color="white" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--sindoor-600)' }}>
            Don't
          </span>
        </div>
        <ul className="space-y-2">
          {donts.map((item, i) => (
            <li
              key={i}
              className="text-sm flex items-start gap-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <X size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-error)' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
