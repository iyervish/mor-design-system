import { Building2, ChevronRight, ArrowRight, ExternalLink, Shield, Wifi, Database, Smartphone, Globe, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Alert } from '../../components/ui/Alert';
import { Search as SearchComponent } from '../../components/ui/Search';

const quickServices = [
  { icon: Database, title: 'DigiLocker', description: 'Access and share your digital documents. Aadhaar, PAN, driving licence — all in one secure wallet.', badge: '5 Cr+ Users' },
  { icon: Shield, title: 'Aadhaar Services', description: 'Update address, download e-Aadhaar, check enrolment status, and biometric lock/unlock.', badge: 'UIDAI' },
  { icon: Wifi, title: 'PM-WANI', description: 'Public Wi-Fi Access Network Interface — affordable broadband through local entrepreneurs.', badge: 'New' },
  { icon: Globe, title: 'BharatNet', description: 'High-speed broadband connectivity to all 2.5 lakh gram panchayats across India.', badge: 'Phase III' },
  { icon: Smartphone, title: 'Digital India', description: 'Flagship programme for transforming India into a digitally empowered society and knowledge economy.', badge: 'Flagship' },
  { icon: Zap, title: 'Startup India', description: 'Register your startup, access funding, mentorship, and government incentives for entrepreneurs.', badge: 'MeitY' },
];

const news = [
  {
    category: 'Digital India',
    title: 'India Becomes 3rd Largest AI Talent Pool Globally — MeitY Report 2026',
    description: 'The Ministry releases its annual Digital India Progress Report, highlighting rapid AI adoption across government services and private sector.',
    date: 'Feb 15, 2026',
    featured: true,
  },
  {
    category: 'BharatNet',
    title: 'BharatNet Phase III: 50,000 New Villages to Get Fiber Connectivity',
    description: 'Cabinet approves ₹1.39 lakh crore for extending high-speed broadband to 6.4 lakh villages by FY2027.',
    date: 'Feb 12, 2026',
    featured: false,
  },
  {
    category: 'Cybersecurity',
    title: 'CERT-In Issues Advisory on Safe Digital Payments for Festive Season',
    description: 'The Indian Computer Emergency Response Team urges citizens to use only official payment apps and verify merchant details before transacting.',
    date: 'Feb 10, 2026',
    featured: false,
  },
];

const citizenLinks = [
  { title: 'National Portal of India', url: '#', desc: 'india.gov.in' },
  { title: 'MyGov Portal', url: '#', desc: 'Citizen engagement platform' },
  { title: 'Unified Mobile Application', url: '#', desc: 'UMANG App — 1900+ services' },
  { title: 'e-Governance Services', url: '#', desc: 'NeGP services directory' },
  { title: 'DPDP Act 2023', url: '#', desc: 'Digital Personal Data Protection' },
  { title: 'IT Grievances', url: '#', desc: 'CPGRAMS portal' },
];

export default function MinistryHomepage() {
  return (
    <div className="morni min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header style={{ backgroundColor: 'var(--neelkanth-950)', borderBottom: '3px solid var(--surya-400)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--neelkanth-800)' }}>
                <Building2 size={28} style={{ color: 'var(--surya-400)' }} />
              </div>
              <div>
                <div className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--neelkanth-300)' }}>
                  Government of India
                </div>
                <h1 className="text-xl font-bold" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Ministry of Electronics & Information Technology
                </h1>
                <div className="text-xs mt-0.5" style={{ color: 'var(--neelkanth-300)' }}>
                  MeitY — meity.gov.in
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              {['About', 'Divisions', 'Schemes', 'Press', 'Contact'].map(item => (
                <a key={item} href="#" className="text-sm no-underline transition-colors hover:text-white"
                  style={{ color: 'var(--neelkanth-300)' }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero / Search */}
      <section style={{ backgroundColor: 'var(--neelkanth-900)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Badge variant="info" className="mb-4">Digital India Initiative</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Transforming India through Technology
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--neelkanth-200)' }}>
            Access government digital services, schemes, and citizen resources from the Ministry of Electronics & IT.
          </p>
          <div className="max-w-xl mx-auto">
            <SearchComponent placeholder="Search schemes, circulars, and services..." />
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Alert variant="info" title="Digital Personal Data Protection Act 2023">
          The DPDP Act is now in effect. All digital service providers must comply with data localisation and consent requirements.{' '}
          <a href="#" className="font-semibold underline">Read the guidelines</a>
        </Alert>
      </div>

      {/* Quick Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Quick Services
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                Frequently accessed Digital India services
              </p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold no-underline"
              style={{ color: 'var(--color-primary)' }}>
              All services <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} variant="outline" className="group cursor-pointer transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: 'var(--neelkanth-100)', color: 'var(--neelkanth-700)' }}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <CardTitle>{service.title}</CardTitle>
                        </div>
                      </div>
                      <Badge variant="info" className="text-[10px] flex-shrink-0">{service.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold"
                      style={{ color: 'var(--color-primary)' }}>
                      Access Service <ChevronRight size={13} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              News & Updates
            </h2>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline"
              style={{ color: 'var(--color-primary)' }}>
              All press releases <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <Card key={i} variant={item.featured ? 'filled' : 'outline'} className="cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={item.featured ? 'warning' : 'default'}>{item.category}</Badge>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item.date}</span>
                  </div>
                  <CardTitle className="text-base leading-snug">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: 'var(--color-primary)' }}>
                    Read more <ExternalLink size={11} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Citizen Portal Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Citizen Resources
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {citizenLinks.map((link) => (
              <a key={link.title} href={link.url}
                className="p-4 rounded-lg border text-center no-underline transition-all hover:shadow-sm group"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                <div className="text-sm font-semibold mb-1 group-hover:underline"
                  style={{ color: 'var(--color-text)' }}>
                  {link.title}
                </div>
                <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{link.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--neelkanth-950)', borderTop: '1px solid var(--neelkanth-800)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--neelkanth-200)', fontFamily: 'var(--font-heading)' }}>
                Ministry of Electronics & IT
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--neelkanth-400)' }}>
                Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi — 110003
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--neelkanth-200)' }}>Contact</h3>
              <div className="space-y-1">
                {[
                  { icon: Phone, text: '1800-111-555 (Toll Free)' },
                  { icon: Mail, text: 'helpdesk@meity.gov.in' },
                  { icon: MapPin, text: 'New Delhi — 110003' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs" style={{ color: 'var(--neelkanth-400)' }}>
                    <Icon size={12} />{text}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--neelkanth-200)' }}>Quick Links</h3>
              <div className="grid grid-cols-2 gap-1">
                {['RTI', 'Tenders', 'Policies', 'Careers', 'Sitemap', 'Disclaimer'].map(item => (
                  <a key={item} href="#" className="text-xs no-underline hover:underline" style={{ color: 'var(--neelkanth-400)' }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-xs text-center" style={{ borderColor: 'var(--neelkanth-800)', color: 'var(--neelkanth-500)' }}>
            © 2026 Ministry of Electronics and Information Technology, Government of India. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
