import React, { useState, useId } from 'react';
import { ChevronDown, Lock, Building2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface GovBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Language variant */
  language?: 'en' | 'hi';
}

const content = {
  en: {
    banner: 'An official website of the Government of India',
    toggle: "Here's how you know",
    officialTitle: 'Official websites use .gov.in',
    officialDesc:
      'A .gov.in website belongs to an official government organization of the Republic of India.',
    secureTitle: 'Secure .gov.in websites use HTTPS',
    secureDesc:
      'A lock icon or https:// means you\'ve safely connected to an official website. Share sensitive information only on official, secure websites.',
  },
  hi: {
    banner: 'भारत सरकार की एक आधिकारिक वेबसाइट',
    toggle: 'यहाँ जानें',
    officialTitle: 'आधिकारिक वेबसाइटें .gov.in का उपयोग करती हैं',
    officialDesc:
      '.gov.in वेबसाइट भारत गणराज्य की आधिकारिक सरकारी संस्था से संबंधित है।',
    secureTitle: 'सुरक्षित .gov.in वेबसाइटें HTTPS का उपयोग करती हैं',
    secureDesc:
      'लॉक आइकन या https:// का अर्थ है कि आप सुरक्षित रूप से एक आधिकारिक वेबसाइट से जुड़े हैं। संवेदनशील जानकारी केवल आधिकारिक, सुरक्षित वेबसाइटों पर साझा करें।',
  },
};

const GovBanner = React.forwardRef<HTMLDivElement, GovBannerProps>(
  ({ language = 'en', className, ...props }, ref) => {
    const [expanded, setExpanded] = useState(false);
    const panelId = useId();
    const t = content[language];

    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        style={{
          backgroundColor: 'var(--color-background-subtle)',
          fontFamily: 'var(--font-body)',
        }}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 py-1.5 text-xs">
            <Building2
              size={14}
              aria-hidden="true"
              style={{ color: 'var(--color-text-muted)' }}
            />
            <span style={{ color: 'var(--color-text-secondary)' }}>
              {t.banner}
            </span>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="inline-flex items-center gap-1 underline transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 rounded-sm"
              style={{
                color: 'var(--color-primary)',
                outlineColor: 'var(--color-border-focus)',
              }}
            >
              {t.toggle}
              <ChevronDown
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200"
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
          </div>

          <div
            id={panelId}
            role="region"
            aria-label={language === 'en' ? 'Official government website information' : 'आधिकारिक सरकारी वेबसाइट की जानकारी'}
            className="overflow-hidden transition-all duration-200"
            style={{
              maxHeight: expanded ? '400px' : '0',
              opacity: expanded ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 pb-6 text-sm">
              <div className="flex gap-3">
                <Building2
                  size={40}
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                  style={{ color: 'var(--color-primary)' }}
                />
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t.officialTitle}
                  </p>
                  <p
                    className="mt-1 leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {t.officialDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Lock
                  size={40}
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                  style={{ color: 'var(--color-primary)' }}
                />
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t.secureTitle}
                  </p>
                  <p
                    className="mt-1 leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {t.secureDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

GovBanner.displayName = 'GovBanner';

export { GovBanner };
export default GovBanner;
