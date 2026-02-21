import { Car, ChevronRight, AlertCircle, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Alert } from '../../components/ui/Alert';
import { Select } from '../../components/ui/Select';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const sidebarCategories = [
  { label: 'Driving Licence', active: true, count: 8 },
  { label: 'Vehicle Registration', active: false, count: 6 },
  { label: 'Transport Permits', active: false, count: 5 },
  { label: 'Pollution (PUC)', active: false, count: 3 },
  { label: 'VAHAN Services', active: false, count: 4 },
  { label: 'Fancy Numbers', active: false, count: 2 },
];

const dlServices = [
  {
    title: 'New DL Application',
    description: 'Apply for a learner\'s licence and then a driving licence for motorcycle, car, or heavy vehicle.',
    time: '30–45 days',
    fee: '₹200 – ₹1,000',
    badge: 'Online',
  },
  {
    title: 'DL Renewal',
    description: 'Renew your driving licence up to 1 year before or after the expiry date. Online and in-person available.',
    time: '7–15 days',
    fee: '₹200',
    badge: 'Online',
  },
  {
    title: 'DL Status Check',
    description: 'Track your application status using your application number or Aadhaar number.',
    time: 'Instant',
    fee: 'Free',
    badge: 'Instant',
  },
  {
    title: 'International DL',
    description: 'Apply for an International Driving Permit valid in 180+ countries. Must hold valid Indian DL.',
    time: '7 days',
    fee: '₹1,000',
    badge: 'In-person',
  },
];

const docChecklist = [
  { doc: 'Aadhaar Card', type: 'Identity & Address', required: true },
  { doc: 'PAN Card', type: 'Identity', required: true },
  { doc: 'Passport-size photographs (2)', type: 'Photo', required: true },
  { doc: 'Form 1 (Medical Certificate)', type: 'Medical', required: true },
  { doc: 'Address Proof (if Aadhaar address differs)', type: 'Address', required: false },
  { doc: 'Old DL (for renewal)', type: 'Existing Licence', required: false },
];

export default function RTOPortal() {
  return (
    <div className="morni min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header style={{ backgroundColor: 'var(--firoza-950)', borderBottom: '3px solid var(--sona-400)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--firoza-800)' }}>
              <Car size={24} style={{ color: 'var(--sona-400)' }} />
            </div>
            <div>
              <div className="text-xs font-medium tracking-wide" style={{ color: 'var(--firoza-300)' }}>
                Ministry of Road Transport & Highways
              </div>
              <h1 className="text-xl font-bold" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                Parivahan Sewa
              </h1>
              <div className="text-xs" style={{ color: 'var(--firoza-300)' }}>
                parivahan.gov.in — Vahan 4.0
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumb
          className="mb-6"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Transport Services', href: '#' },
            { label: 'Driving Licence' },
          ]}
        />

        <Alert variant="warning" title="Required: Visit RTO for Driving Test">
          After submitting your application online, you must visit your nearest RTO for the driving test. Carry original documents.
        </Alert>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card variant="outline">
              <CardHeader>
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav>
                  {sidebarCategories.map((cat) => (
                    <div
                      key={cat.label}
                      className="flex items-center justify-between px-4 py-3 border-b cursor-pointer transition-colors"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: cat.active ? 'var(--firoza-50)' : 'transparent',
                        borderLeft: cat.active ? '3px solid var(--firoza-600)' : '3px solid transparent',
                      }}
                    >
                      <span className="text-sm font-medium"
                        style={{ color: cat.active ? 'var(--firoza-700)' : 'var(--color-text)' }}>
                        {cat.label}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs px-1.5 py-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--dhumra-100)', color: 'var(--dhumra-600)' }}>
                          {cat.count}
                        </span>
                        <ChevronRight size={13} style={{ color: 'var(--color-text-muted)' }} />
                      </div>
                    </div>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* State / RTO Selector */}
            <Card variant="outline" className="mt-4">
              <CardHeader>
                <CardTitle>Select Your RTO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Select
                  label="State / UT"
                  options={[
                    { value: 'MH', label: 'Maharashtra' },
                    { value: 'DL', label: 'Delhi' },
                    { value: 'KA', label: 'Karnataka' },
                    { value: 'TN', label: 'Tamil Nadu' },
                    { value: 'UP', label: 'Uttar Pradesh' },
                  ]}
                />
                <Select
                  label="RTO Office"
                  options={[
                    { value: 'MH01', label: 'MH-01 Mumbai Central' },
                    { value: 'MH02', label: 'MH-02 Mumbai East' },
                    { value: 'MH03', label: 'MH-03 Thane' },
                    { value: 'MH04', label: 'MH-04 Pune' },
                  ]}
                />
                <Button size="sm" className="w-full">Find Services</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Driving Licence Services
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                All driving licence related services available online and at your nearest RTO
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {dlServices.map((service) => (
                <Card key={service.title} variant="outline" className="cursor-pointer transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">{service.title}</CardTitle>
                      <Badge variant={service.badge === 'Online' ? 'success' : service.badge === 'Instant' ? 'info' : 'warning'}>
                        {service.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-3 flex items-center gap-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {service.time}
                      </span>
                      <span>Fee: {service.fee}</span>
                    </div>
                    <div className="mt-3">
                      <Button size="sm" variant="outline">
                        Apply Now <ArrowRight size={13} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Document Checklist */}
            <Card variant="outline">
              <CardHeader>
                <CardTitle>Document Checklist</CardTitle>
                <CardDescription>Carry originals + self-attested photocopies to your RTO appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {docChecklist.map((item) => (
                    <div key={item.doc} className="flex items-start gap-3 py-2 border-b last:border-0"
                      style={{ borderColor: 'var(--color-border)' }}>
                      {item.required
                        ? <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--vana-600)' }} />
                        : <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--sona-500)' }} />
                      }
                      <div className="flex-1">
                        <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.doc}</div>
                        <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item.type}</div>
                      </div>
                      <Badge variant={item.required ? 'error' : 'warning'} className="text-[10px]">
                        {item.required ? 'Required' : 'If applicable'}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-lg text-xs" style={{ backgroundColor: 'var(--firoza-50)', color: 'var(--firoza-700)' }}>
                  <strong>Note:</strong> Aadhaar-linked applications are processed faster. Link your Aadhaar to your VAHAN profile for instant verification.
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t text-center text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
        <p>© 2026 Ministry of Road Transport & Highways, Government of India · parivahan.gov.in</p>
        <p className="mt-1">For queries: <a href="#" style={{ color: 'var(--color-primary)' }}>helpdesk@parivahan.gov.in</a> · Toll Free: 1800-180-6763</p>
      </footer>
    </div>
  );
}
