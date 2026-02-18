import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Check } from 'lucide-react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  step: string;
  large?: boolean;
}

export default function ColorSwatch({ name, hex, step, large = false }: ColorSwatchProps) {
  const { copied, copy } = useCopyToClipboard();
  const isLight = parseInt(step) < 300;

  return (
    <button
      onClick={() => copy(hex)}
      className={`group relative rounded-lg overflow-hidden transition-transform hover:scale-105 text-left ${
        large ? 'h-24' : 'h-16'
      } w-full`}
      style={{ backgroundColor: hex }}
      title={`${name}-${step}: ${hex}`}
      aria-label={`Copy ${name}-${step} color: ${hex}`}
    >
      <div
        className={`absolute inset-0 flex items-end justify-between p-2 ${
          isLight ? 'text-slate-800' : 'text-white'
        }`}
      >
        <div>
          <div className="text-xs font-medium opacity-80">{step}</div>
          <div className="text-xs font-mono opacity-60">{hex}</div>
        </div>
        {copied && (
          <span className="text-xs flex items-center gap-1">
            <Check size={12} /> Copied
          </span>
        )}
      </div>
    </button>
  );
}
