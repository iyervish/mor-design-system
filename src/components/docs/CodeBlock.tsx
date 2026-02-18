import { Highlight, themes } from 'prism-react-renderer';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div
      className="rounded-lg overflow-hidden border"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {title && (
        <div
          className="px-4 py-2 text-xs font-medium border-b"
          style={{
            backgroundColor: 'var(--color-background-subtle)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {title}
        </div>
      )}
      <div className="relative">
        <button
          onClick={() => copy(code.trim())}
          className="absolute top-2 right-2 p-1.5 rounded-md transition-colors z-10"
          style={{
            backgroundColor: 'var(--color-surface-raised)',
            color: 'var(--color-text-muted)',
            border: '1px solid var(--color-border)',
          }}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>

        <Highlight
          theme={themes.nightOwl}
          code={code.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} overflow-x-auto p-4 text-sm`}
              style={{
                ...style,
                margin: 0,
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#011627',
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
