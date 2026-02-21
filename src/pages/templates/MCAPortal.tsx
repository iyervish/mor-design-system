import { Scale, Search as SearchIcon, ChevronRight, CheckCircle2, ArrowRight, Building2, FileText, Users, ClipboardList } from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Alert } from '../../components/ui/Alert';
import { Input } from '../../components/ui/Input';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const sidebarServices = [
  { label: 'Company Registration', active: true, count: 12, icon: Building2 },
  { label: 'DIN Services', active: false, count: 5, icon: Users },
  { label: 'Annual Filings', active: false, count: 8, icon: FileText },
  { label: 'Charge Management', active: false, count: 4, icon: ClipboardList },
  { label: 'LLP Services', active: false, count: 7, icon: Scale },
  { label: 'Compliance Check', active: false, count: 3, icon: CheckCircle2 },
];

const entityTypes = [
  { value: 'pvt', label: 'Private Limited Company (Pvt Ltd)' },
  { value: 'llp', label: 'Limited Liability Partnership (LLP)' },
  { value: 'opc', label: 'One Person Company (OPC)' },
  { value: 'pub', label: 'Public Limited Company' },
  { value: 's8', label: 'Section 8 Company (Non-Profit)' },
  { value: 'nidhi', label: 'Nidhi Company' },
];

const incorporationSteps = [
  {
    number: '01',
    title: 'Name Reservation (RUN)',
    description: 'Reserve your company name using the RUN (Reserve Unique Name) service. Approval within 1–3 business days.',
    status: 'complete',
    form: 'Form RUN',
    time: '1–3 days',
  },
  {
    number: '02',
    title: 'Director Identification Number (DIN)',
    description: 'All proposed directors must have a valid DIN. Apply through DIR-3 KYC form. Instant for existing DIN holders.',
    status: 'complete',
    form: 'Form DIR-3',
    time: 'Instant / 2 days',
  },
  {
    number: '03',
    title: 'SPICe+ Incorporation Form',
    description: 'File the Simplified Proforma for Incorporating Company Electronically Plus (SPICe+) with MOA, AOA, and linked forms.',
    status: 'current',
    form: 'SPICe+ (INC-32)',
    time: '2–5 days',
  },
  {
    number: '04',
    title: 'Certificate of Incorporation',
    description: 'Receive your Certificate of Incorporation (COI), CIN, PAN, TAN, and EPFO/ESIC registration automatically.',
    status: 'upcoming',
    form: 'Auto-generated',
    time: 'Issued on approval',
  },
];

const stats = [
  { value: '12 Lakh+', label: 'Active Companies', sub: 'Registered with MCA' },
  { value: '48 Hrs', label: 'Average Processing', sub: 'For SPICe+ applications' },
  { value: '100%', label: 'Online Process', sub: 'No physical visit needed' },
  { value: '₹0', label: 'Govt Fee (OPC)', sub: 'Zero fee for small companies' },
];

export default function MCAPortal() {
  return (
    <div className="mor min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header style={{ backgroundColor: 'var(--firoza-950)', borderBottom: '3px solid var(--sona-400)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--firoza-800)' }}>
              <Scale size={24} style={{ color: 'var(--sona-400)' }} />
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: 'var(--firoza-300)' }}>
                Ministry of Corporate Affairs — Government of India
              </div>
              <h1 className="text-xl font-bold" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                MCA21 Portal
              </h1>
              <div className="text-xs" style={{ color: 'var(--firoza-300)' }}>
                mca.gov.in — V3 Portal · Company and LLP Filings
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div style={{ backgroundColor: 'var(--sona-50)', borderBottom: '1px solid var(--sona-200)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg font-bold" style={{ color: 'var(--sona-800)', fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold" style={{ color: 'var(--sona-700)' }}>{stat.label}</div>
                <div className="text-[10px]" style={{ color: 'var(--sona-500)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumb
          className="mb-6"
          items={[
            { label: 'MCA21 Home', href: '#' },
            { label: 'Company Services', href: '#' },
            { label: 'Company Incorporation' },
          ]}
        />

        <Alert variant="info" title="New: SPICe+ Integrated Form Available">
          File all incorporation documents — INC-32, INC-33, INC-34, AGILE-PRO, and linked forms — in a single integrated form.{' '}
          <a href="#" className="font-semibold underline">Watch tutorial</a>
        </Alert>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card variant="outline">
              <CardHeader>
                <CardTitle>Company Services</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav>
                  {sidebarServices.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.label}
                        className="flex items-center justify-between px-4 py-3 border-b last:border-0 cursor-pointer transition-colors"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: cat.active ? 'var(--firoza-50)' : 'transparent',
                          borderLeft: cat.active ? '3px solid var(--firoza-600)' : '3px solid transparent',
                        }}
                      >
                        <span className="flex items-center gap-2 text-sm font-medium"
                          style={{ color: cat.active ? 'var(--firoza-700)' : 'var(--color-text)' }}>
                          <Icon size={14} />
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
                    );
                  })}
                </nav>
              </CardContent>
            </Card>

            {/* Name Availability Check */}
            <Card variant="outline" className="mt-4">
              <CardHeader>
                <CardTitle>Check Name Availability</CardTitle>
                <CardDescription>Search if your proposed company name is available</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input label="" placeholder="e.g. Mor Technologies" />
                <Button size="sm" className="w-full">
                  <SearchIcon size={14} className="mr-1.5" />
                  Check Availability
                </Button>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  Name search is free and instant. Reservation costs ₹1,000.
                </p>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Company Incorporation
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                Register your company online through MCA21. Select entity type to see applicable forms and fees.
              </p>
            </div>

            {/* Entity Type Selector */}
            <Card variant="outline" className="mb-6">
              <CardHeader>
                <CardTitle>Select Entity Type</CardTitle>
                <CardDescription>Choose the legal structure that best suits your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {entityTypes.map((entity, i) => (
                    <label key={entity.value}
                      className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all"
                      style={{
                        borderColor: i === 0 ? 'var(--firoza-400)' : 'var(--color-border)',
                        backgroundColor: i === 0 ? 'var(--firoza-50)' : 'transparent',
                      }}>
                      <input type="radio" name="entityType" value={entity.value} defaultChecked={i === 0}
                        className="flex-shrink-0" style={{ accentColor: 'var(--firoza-600)' }} />
                      <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        {entity.label}
                      </span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Incorporation Steps */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Incorporation Process — Private Limited Company
              </h3>
              <div className="space-y-4">
                {incorporationSteps.map((step) => (
                  <div key={step.number}
                    className="flex gap-4 p-5 rounded-xl border transition-all"
                    style={{
                      borderColor: step.status === 'current' ? 'var(--firoza-400)' : 'var(--color-border)',
                      backgroundColor: step.status === 'current' ? 'var(--firoza-50)' : 'var(--color-surface)',
                    }}>
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                      <span className="text-xs font-bold" style={{ color: 'var(--sona-500)', fontFamily: 'var(--font-mono)' }}>
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: step.status === 'complete' ? 'var(--vana-100)' :
                            step.status === 'current' ? 'var(--firoza-100)' : 'var(--dhumra-100)',
                          color: step.status === 'complete' ? 'var(--vana-600)' :
                            step.status === 'current' ? 'var(--firoza-600)' : 'var(--dhumra-400)',
                        }}>
                        {step.status === 'complete' ? <CheckCircle2 size={16} /> : <FileText size={16} />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>
                          {step.title}
                        </h4>
                        <Badge variant={step.status === 'complete' ? 'success' : step.status === 'current' ? 'info' : 'default'}>
                          {step.status === 'complete' ? 'Completed' : step.status === 'current' ? 'In Progress' : 'Pending'}
                        </Badge>
                      </div>
                      <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                        {step.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        <span><strong style={{ color: 'var(--color-text)' }}>Form:</strong> {step.form}</span>
                        <span><strong style={{ color: 'var(--color-text)' }}>Timeline:</strong> {step.time}</span>
                      </div>
                      {step.status === 'current' && (
                        <div className="mt-3">
                          <Button size="sm">
                            Fill SPICe+ Form <ArrowRight size={13} className="ml-1.5" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Help CTA */}
            <Card variant="filled">
              <CardContent className="py-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-base" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
                      Need expert assistance?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Connect with a practising CA, CS, or CMA to help you file and comply.
                    </p>
                  </div>
                  <Button variant="secondary">Find a Professional</Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t text-center text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
        <p>© 2026 Ministry of Corporate Affairs, Government of India · mca.gov.in</p>
        <p className="mt-1">MCA Helpdesk: <a href="#" style={{ color: 'var(--color-primary)' }}>0120-4832500</a> · <a href="#" style={{ color: 'var(--color-primary)' }}>efiling@mca.gov.in</a></p>
      </footer>
    </div>
  );
}
