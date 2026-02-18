import { Link } from 'react-router-dom';
import { Building2, Car, FileCheck, Newspaper, HeartHandshake, Scale, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Template {
  title: string;
  icon: LucideIcon;
  description: string;
  category: string;
  slug?: string;
}

const templates: Template[] = [
  { title: 'Ministry Homepage', icon: Building2, description: 'MeitY-style ministry portal with DigiLocker, Aadhaar, BharatNet quick services and news.', category: 'Government Portals', slug: 'ministry-homepage' },
  { title: 'RTO Portal', icon: Car, description: 'Parivahan Sewa portal for driving licence, RC transfer, VAHAN services, and document checklist.', category: 'Citizen Services', slug: 'rto-portal' },
  { title: 'Welfare Application', icon: HeartHandshake, description: 'PM-KISAN-style multi-step application with Aadhaar, IFSC, khasra fields and OTP verification.', category: 'Citizen Services', slug: 'welfare-application' },
  { title: 'PIB Announcements', icon: Newspaper, description: 'Press Information Bureau releases with ministry filter, date filter, and featured story layout.', category: 'Government Portals', slug: 'pib-announcements' },
  { title: 'MCA21 Portal', icon: Scale, description: 'Company incorporation via SPICe+, DIN application, name availability, entity type selection.', category: 'Real-World Reimagined', slug: 'mca-portal' },
  { title: 'e-District Services', icon: FileCheck, description: 'District-level service portal for certificates, income proof, caste certificate, and land records.', category: 'Citizen Services' },
];

export default function TemplatesOverview() {
  const categories = [...new Set(templates.map(t => t.category))];

  return (
    <div className="morni-prose">
      <h1>Templates</h1>
      <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Full-page demos showing the design system in action. Each template is a
        complete, production-ready layout composed from Morni components and patterns.
      </p>

      {categories.map(category => (
        <div key={category} className="mt-10">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-heading)', borderBottom: 'none', marginTop: '2rem' }}
          >
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {templates
              .filter(t => t.category === category)
              .map(template => {
                const Icon = template.icon;
                const isBuilt = !!template.slug;

                const content = (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: isBuilt ? 'var(--neelkanth-100)' : 'var(--surya-100)',
                        color: isBuilt ? 'var(--neelkanth-600)' : 'var(--surya-600)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold mb-1"
                          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>
                          {template.title}
                        </h3>
                        {isBuilt && (
                          <ExternalLink size={12} style={{ color: 'var(--color-text-muted)' }} />
                        )}
                      </div>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {template.description}
                      </p>
                      <span
                        className="inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full font-medium uppercase tracking-wider"
                        style={
                          isBuilt
                            ? { backgroundColor: 'var(--vana-100)', color: 'var(--vana-700)' }
                            : { backgroundColor: 'var(--surya-100)', color: 'var(--surya-700)' }
                        }
                      >
                        {isBuilt ? 'Live demo' : 'Coming soon'}
                      </span>
                    </div>
                  </div>
                );

                if (isBuilt) {
                  return (
                    <Link
                      key={template.title}
                      to={`/templates/${template.slug}`}
                      className="block p-5 rounded-lg border no-underline transition-all hover:shadow-md"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                      }}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div
                    key={template.title}
                    className="p-5 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      opacity: 0.6,
                    }}
                  >
                    {content}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
