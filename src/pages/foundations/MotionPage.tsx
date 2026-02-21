import { Move, RotateCcw, TrendingUp, Zap } from 'lucide-react';

const motionPrinciples = [
  { title: 'Transitions', icon: Move, description: 'Smooth state changes for buttons, modals, and interactive elements.' },
  { title: 'Animations', icon: Zap, description: 'Purposeful motion that guides attention and provides feedback.' },
  { title: 'Micro-interactions', icon: RotateCcw, description: 'Subtle animations that enhance usability and delight users.' },
  { title: 'Performance', icon: TrendingUp, description: 'Guidelines for maintaining smooth 60fps animations across devices.' },
];

export default function MotionPage() {
  return (
    <div className="morni-prose">
      <h1>Motion</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Motion design principles and patterns that bring interfaces to life while maintaining
        accessibility and performance. Motion should enhance usability, not distract from it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {motionPrinciples.map(principle => {
          const Icon = principle.icon;
          return (
            <div
              key={principle.title}
              className="p-5 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                opacity: 0.6,
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--mayura-100)', color: 'var(--mayura-600)' }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {principle.title}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {principle.description}
                  </p>
                  <span
                    className="inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
                    style={{ backgroundColor: 'var(--sona-100)', color: 'var(--sona-700)' }}
                  >
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
