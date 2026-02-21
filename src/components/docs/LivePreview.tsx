import { useState } from 'react';
import { Code2, Eye } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface LivePreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
}

export default function LivePreview({ children, code, title }: LivePreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {title && (
        <div
          className="px-4 py-2.5 text-xs font-medium border-b flex items-center justify-between"
          style={{
            backgroundColor: 'var(--color-background-subtle)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
          }}
        >
          <span>{title}</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--vana-400)' }} />
            <span className="text-[10px]" style={{ color: 'var(--vana-500)' }}>Live</span>
          </div>
        </div>
      )}

      {/* Preview Area */}
      <div
        className="p-6 flex flex-wrap items-center gap-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          backgroundImage: 'radial-gradient(circle, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        {children}
      </div>

      {/* Toggle */}
      <div
        className="border-t px-4 py-2 flex items-center gap-2"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-background-subtle)',
        }}
      >
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1.5 transition-all"
          style={{
            color: showCode ? 'var(--sona-700)' : 'var(--color-text-muted)',
            backgroundColor: showCode ? 'var(--sona-100)' : 'transparent',
          }}
        >
          {showCode ? <Eye size={12} /> : <Code2 size={12} />}
          {showCode ? 'Preview' : 'Code'}
        </button>
      </div>

      {/* Code */}
      {showCode && <CodeBlock code={code} />}
    </div>
  );
}
