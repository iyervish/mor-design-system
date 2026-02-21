import { Shield, Eye, Users, MapPin, Smartphone, Zap } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'High-Quality by Default',
    description: 'Government teams shouldn\'t have to start from scratch. Mor provides production-ready components, patterns, and templates so every team begins with a solid, well-crafted foundation.',
  },
  {
    icon: Users,
    title: 'Citizen-Centered',
    description: 'Every design decision starts with the citizen. Clear language, obvious actions, minimal cognitive load. Government services should be as easy as the best consumer products.',
  },
  {
    icon: MapPin,
    title: 'Bharat-First Identity',
    description: 'Not a generic system — an Indian system. Colors named after Indian nature and culture, typography chosen for civic trust, patterns designed for India\'s government services.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Ready',
    description: 'Most Indians access government services on their phones. Every component is responsive by default and optimized for touch interactions, including low-end devices.',
  },
  {
    icon: Zap,
    title: 'Performance-Minded',
    description: 'Fast load times aren\'t a nice-to-have — they\'re equity. Citizens on slow connections deserve the same experience as everyone else. Performance is a digital inclusion issue.',
  },
  {
    icon: Shield,
    title: 'Accessible First',
    description: 'WCAG 2.1 AA is the floor, not the ceiling. Every component is keyboard navigable, screen-reader compatible, and meets contrast requirements. Government services must work for every citizen.',
  },
];

export default function PrinciplesPage() {
  return (
    <div className="mor-prose">
      <h1>Design Principles</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        These principles guide every decision in the Mor design system — from color choices
        to component behavior to documentation style.
      </p>

      <div className="space-y-5 mt-8">
        {principles.map((principle, i) => {
          const Icon = principle.icon;
          return (
            <div
              key={i}
              className="flex gap-5 p-6 rounded-lg border transition-all"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <span
                  className="text-xs font-bold"
                  style={{
                    color: 'var(--sona-500)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--sona-100)',
                    color: 'var(--sona-700)',
                  }}
                >
                  <Icon size={22} />
                </div>
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)', marginTop: 0 }}
                >
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {principle.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
