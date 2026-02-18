import { Link } from 'react-router-dom';
import { ArrowRight, Github, Moon, Sun, Shield, Eye, Users, MapPin, Smartphone, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { colorFamilies } from '../tokens/colors';
import MorniLogo from '../components/MorniLogo';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// India outline SVG path (simplified peninsula shape)
const IndiaOutline = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 600 700" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M150 80 L200 70 L260 65 L320 60 L380 65 L440 75 L490 90 L520 120 L530 160 L520 200 L500 240 L480 270 L460 300 L440 330 L420 360 L400 390 L380 420 L360 450 L340 480 L320 510 L300 540 L290 560 L300 580 L310 600 L300 620 L290 600 L280 580 L270 560 L260 540 L240 510 L220 480 L200 450 L180 420 L160 390 L140 360 L120 330 L100 300 L90 270 L80 240 L75 200 L80 160 L100 120 L130 95 Z"
      fill="currentColor"
      opacity="0.05"
    />
  </svg>
);

// Derive display swatches from actual token data
const colorStrip = colorFamilies.map(family => ({
  name: family.name,
  colors: [
    family.scale[50],
    family.scale[200],
    family.scale[400],
    family.scale[500],
    family.scale[700],
    family.scale[950],
  ],
}));

const stats = [
  { value: '30', label: 'Components', sublabel: 'Production-ready' },
  { value: '7', label: 'Patterns', sublabel: 'Multi-component' },
  { value: '5', label: 'Templates', sublabel: 'Full-page demos' },
  { value: 'AA', label: 'WCAG 2.1', sublabel: 'Accessibility' },
];

const principles = [
  { icon: Eye, title: 'High-Quality by Default', desc: 'Government teams shouldn\'t have to start from scratch. Morni provides production-ready components, patterns, and templates so every team begins with a solid, well-crafted foundation.' },
  { icon: Users, title: 'Citizen-Centered', desc: 'Every design decision starts with the citizen. Clear language, obvious actions, minimal cognitive load. Government services should be as easy as the best consumer products.' },
  { icon: MapPin, title: 'Bharat-First Identity', desc: 'Not a generic system — an Indian system. Colors named after Indian nature and culture, typography chosen for civic trust, patterns designed for Indian government services.' },
  { icon: Smartphone, title: 'Mobile-Ready', desc: 'Most Indians access government services on their phones. Every component is responsive by default and optimized for touch interactions, including low-end devices.' },
  { icon: Zap, title: 'Performance-Minded', desc: 'Fast load times aren\'t a nice-to-have — they\'re equity. Citizens on slow connections deserve the same experience as everyone else. Performance is a digital inclusion issue.' },
  { icon: Shield, title: 'Accessible First', desc: 'WCAG 2.1 AA is the floor, not the ceiling. Every component is keyboard navigable, screen-reader compatible, and meets contrast requirements. Government services must work for every citizen.' },
];

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="morni min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* ═══ Navigation ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="flex items-center justify-between px-6 lg:px-10 py-4"
          style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(2,41,38,0.88)' }}
        >
          <div className="flex items-center gap-2.5">
            <MorniLogo size={30} />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-sm tracking-tight" style={{ color: '#c8f0ea', fontFamily: 'var(--font-heading)' }}>
                Morni
              </span>
              <span className="text-[10px] tracking-wide" style={{ color: '#4ecaba' }}>
                India's Design System
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              to="/foundations"
              className="hidden md:inline-block px-3 py-1.5 text-sm no-underline transition-colors hover:text-white"
              style={{ color: '#4ecaba' }}
            >
              Foundations
            </Link>
            <Link
              to="/components"
              className="hidden md:inline-block px-3 py-1.5 text-sm no-underline transition-colors hover:text-white"
              style={{ color: '#4ecaba' }}
            >
              Components
            </Link>
            <div className="w-px h-5 mx-2 hidden md:block" style={{ backgroundColor: '#08615a' }} />
            <button onClick={toggleTheme} className="p-2 rounded-md transition-colors" style={{ color: '#4ecaba' }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <a href="https://github.com/iyervish/morni-design-system" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md transition-colors" style={{ color: '#4ecaba' }} aria-label="GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* ═══ HERO — Deep Neelkanth, Peacock at Dusk ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--neelkanth-950)' }}>
        {/* Paisley contour background */}
        <div className="absolute inset-0" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-100">
            <defs>
              <pattern id="paisley-hero" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M100 160 C70 140 65 110 80 90 C95 70 120 75 125 95 C130 115 115 138 100 160Z" fill="none" stroke="#043a36" strokeWidth="1" />
                <circle cx="100" cy="88" r="5" fill="none" stroke="#043a36" strokeWidth="0.8" />
                <path d="M30 80 C15 65 18 42 30 34 C42 26 54 36 50 52 C46 68 36 78 30 80Z" fill="none" stroke="#064b46" strokeWidth="0.6" />
                <path d="M160 130 C148 118 150 100 162 93 C174 86 184 96 180 110 C176 124 166 128 160 130Z" fill="none" stroke="#064b46" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#paisley-hero)" />
          </svg>
        </div>

        {/* India outline watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none" aria-hidden="true">
          <IndiaOutline className="w-[500px] h-auto text-white opacity-[0.04]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-36 pb-28 lg:pt-44 lg:pb-36">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Kicker */}
            <motion.div custom={0} variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{ backgroundColor: 'rgba(246,168,0,0.15)', color: '#fcc94a', border: '1px solid rgba(246,168,0,0.25)' }}>
                <Shield size={13} />
                Open Source &middot; MIT Licensed
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl"
              style={{ fontFamily: 'var(--font-heading)', color: '#c8f0ea', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              A design system for{' '}
              <span className="relative inline-block">
                <span style={{ color: '#fcc94a' }}>Bharat</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #f6a800, transparent)' }} />
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl max-w-2xl mb-10"
              style={{ color: '#4ecaba', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}
            >
              India's civic digital services. Accessible, well-crafted, and production-ready
              for 900+ government services. Inspired by USWDS and NIC. Rooted in India.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                to="/components"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-base font-semibold no-underline transition-all"
                style={{ backgroundColor: 'var(--surya-400)', color: 'var(--neelkanth-950)', fontFamily: 'var(--font-body)' }}
              >
                Explore Components
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/foundations/color"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold no-underline transition-all"
                style={{ border: '1px solid #08615a', color: '#4ecaba', fontFamily: 'var(--font-body)' }}
              >
                View Foundations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Color Strip — Peacock Palette ═══ */}
      <section className="py-20 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
            style={{ color: 'var(--color-text-muted)' }}>
            Peacock-Inspired Color System
          </p>

          <div className="space-y-3">
            {colorStrip.map((family) => (
              <div key={family.name} className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-right flex-shrink-0"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                  {family.name}
                </span>
                <div className="flex-1 flex gap-1 h-10 rounded-lg overflow-hidden">
                  {family.colors.map((color, j) => (
                    <div
                      key={j}
                      className="flex-1 transition-all hover:flex-[2] cursor-pointer"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ Problem Statement ═══ */}
      <section className="py-20 px-6 lg:px-10 relative" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--surya-500)' }}>
            The Problem
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            900+ services.<br />Most starting from zero.
          </h2>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
          >
            Every government team deserves a solid starting point — accessible, well-crafted,
            and production-ready. Morni gives them that foundation so they can focus on
            serving citizens, not reinventing buttons.
          </p>
        </motion.div>
      </section>

      {/* ═══ Live Component Preview ═══ */}
      <section className="py-24 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)' }}>
            Component Library
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            Built to compose
          </h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Every component is accessible, dark-mode ready, and designed to work together.
            Here's a taste.
          </p>

          {/* Live component gallery */}
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Tab bar */}
            <div className="flex items-center gap-4 px-6 py-3 border-b" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-subtle)' }}>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--sindoor-400)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--surya-400)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--vana-400)' }} />
              </div>
              <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>
                preview.tsx
              </span>
            </div>

            {/* Component showcase */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Row 1: Buttons + Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <Button>Submit Application</Button>
                <Button variant="secondary">Save Draft</Button>
                <Button variant="outline">Cancel</Button>
                <div className="ml-2 flex gap-2">
                  <Badge variant="success">Approved</Badge>
                  <Badge variant="warning">Under Review</Badge>
                  <Badge variant="error">Action Required</Badge>
                </div>
              </div>

              {/* Row 2: Form + Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input label="Full Legal Name" placeholder="As per Aadhaar card" />
                  <Input label="Email Address" type="email" placeholder="citizen@gov.in" helperText="We'll send your confirmation here" />
                </div>
                <Card variant="outline">
                  <CardHeader>
                    <CardTitle>Aadhaar Card Download</CardTitle>
                    <CardDescription>Download your e-Aadhaar from UIDAI portal</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Enter your Aadhaar number and OTP to download your e-Aadhaar PDF.
                    </p>
                    <div className="mt-4">
                      <Button size="sm">Download e-Aadhaar</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Row 3: Alert */}
              <Alert variant="info" title="Application Received">
                Your application #IN-2024-38291 has been submitted. You'll receive a confirmation on your registered mobile number within 24 hours.
              </Alert>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors"
              style={{ color: 'var(--color-primary)' }}
            >
              View all 30 components
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══ Principles ═══ */}
      <section className="py-20 px-6 lg:px-10 relative" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)' }}>
            Design Principles
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            What guides us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-6 rounded-xl border"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--surya-100)', color: 'var(--surya-700)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--color-text)' }}>
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Token Architecture Diagram ═══ */}
      <section className="py-20 px-6 lg:px-10" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)' }}>
            Architecture
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            Three layers of intention
          </h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            From Indian nature and mythology to semantic meaning to component-ready values.
          </p>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {[
              {
                label: 'System',
                sublabel: 'Indian Nature & Culture',
                items: [
                  { name: 'neelkanth-600', color: 'var(--neelkanth-600)' },
                  { name: 'surya-500', color: 'var(--surya-500)' },
                  { name: 'sindoor-500', color: 'var(--sindoor-500)' },
                ],
              },
              {
                label: 'Theme',
                sublabel: 'Semantic Roles',
                items: [
                  { name: '--color-primary', color: 'var(--color-primary)' },
                  { name: '--color-accent', color: 'var(--color-accent)' },
                  { name: '--color-error', color: 'var(--color-error)' },
                ],
              },
              {
                label: 'Component',
                sublabel: 'Ready to Use',
                items: [
                  { name: 'Button.bg', color: 'var(--color-primary)' },
                  { name: 'Badge.bg', color: 'var(--color-accent)' },
                  { name: 'Alert.border', color: 'var(--color-error)' },
                ],
              },
            ].map((layer, i) => (
              <div key={i} className="flex-1 flex flex-col">
                <div
                  className="rounded-xl border p-6 flex-1"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--surya-500)' }}>
                      {layer.label}
                    </span>
                  </div>
                  <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
                    {layer.sublabel}
                  </p>
                  <div className="space-y-3">
                    {layer.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md flex-shrink-0 border" style={{ backgroundColor: item.color, borderColor: 'var(--color-border)' }} />
                        <code className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                          {item.name}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
                {i < 2 && (
                  <div className="flex items-center justify-center py-2 md:hidden">
                    <ArrowRight size={16} style={{ color: 'var(--color-text-muted)', transform: 'rotate(90deg)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 lg:px-10 relative overflow-hidden"
        style={{ backgroundColor: 'var(--neelkanth-950)' }}>
        {/* Subtle paisley texture */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="paisley-cta" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                <path d="M80 130 C58 115 54 90 66 72 C78 54 100 58 104 78 C108 98 94 118 80 130Z" fill="none" stroke="#043a36" strokeWidth="0.8" />
                <circle cx="80" cy="70" r="5" fill="none" stroke="#064b46" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#paisley-cta)" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#c8f0ea', letterSpacing: '-0.02em' }}>
            Start building with Morni
          </h2>
          <p className="text-lg mb-8" style={{ color: '#4ecaba', lineHeight: 1.7 }}>
            Explore the component library, review the token architecture,
            or dive into the foundations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/components"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold no-underline"
              style={{ backgroundColor: 'var(--surya-400)', color: 'var(--neelkanth-950)' }}
            >
              Browse Components
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/iyervish/morni-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold no-underline"
              style={{ border: '1px solid #08615a', color: '#4ecaba' }}
            >
              <Github size={18} />
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="py-12 px-6 lg:px-10 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MorniLogo size={22} />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-heading)' }}>
                Morni
              </span>
              <span className="text-[9px]" style={{ color: 'var(--color-text-muted)' }}>
                India's Design System
              </span>
            </div>
          </div>
          <p className="text-xs text-center md:text-right" style={{ color: 'var(--color-text-muted)' }}>
            Built by{' '}
            <a href="https://studiopimmit.com" target="_blank" rel="noopener noreferrer"
              className="no-underline font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              Studio Pimmit
            </a>
            {' '}&middot; MIT Licensed &middot; Not affiliated with the Government of India
          </p>
        </div>
      </footer>
    </div>
  );
}
