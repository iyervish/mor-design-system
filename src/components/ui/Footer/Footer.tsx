import React from 'react';
import { cn } from '../../../utils/cn';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Organization/site name */
  siteName?: string;
  /** Footer link groups */
  linkGroups?: FooterLinkGroup[];
  /** Social media links */
  socialLinks?: { label: string; href: string; icon: React.ReactNode }[];
  /** Copyright text */
  copyright?: string;
  /** Logo element */
  logo?: React.ReactNode;
  /** Variant */
  variant?: 'default' | 'slim';
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      siteName,
      linkGroups = [],
      socialLinks = [],
      copyright,
      logo,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    const currentYear = new Date().getFullYear();
    const copyrightText = copyright ?? `\u00A9 ${currentYear} ${siteName ?? 'Government of India'}. All rights reserved.`;

    if (variant === 'slim') {
      return (
        <footer
          ref={ref}
          className={cn('w-full border-t', className)}
          style={{
            backgroundColor: 'var(--color-background-subtle)',
            borderColor: 'var(--color-border)',
            fontFamily: 'var(--font-body)',
          }}
          {...props}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              {logo && <span className="shrink-0">{logo}</span>}
              {linkGroups.flatMap((group) => group.links).map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm transition-colors hover:underline"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {copyrightText}
            </p>
          </div>
        </footer>
      );
    }

    return (
      <footer
        ref={ref}
        className={cn('w-full border-t', className)}
        style={{
          backgroundColor: 'var(--color-background-subtle)',
          borderColor: 'var(--color-border)',
          fontFamily: 'var(--font-body)',
        }}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Top section: logo + link groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & site name */}
            {(logo || siteName) && (
              <div className="lg:col-span-1">
                {logo && <div className="mb-3">{logo}</div>}
                {siteName && (
                  <p
                    className="text-lg font-semibold"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {siteName}
                  </p>
                )}
              </div>
            )}

            {/* Link groups */}
            {linkGroups.map((group, idx) => (
              <nav key={idx} aria-label={group.title}>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: 'var(--color-text)' }}
                >
                  {group.title}
                </h3>
                <ul className="list-none p-0 m-0 space-y-2">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:underline"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div
              className="flex items-center gap-3 mt-8 pt-6 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-md transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    color: 'var(--color-text-secondary)',
                    outlineColor: 'var(--color-border-focus)',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          {/* Bottom bar */}
          <div
            className={cn(
              'mt-8 pt-6 border-t',
              socialLinks.length === 0 && 'mt-8',
            )}
            style={{ borderColor: 'var(--color-border)' }}
          >
            <p
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {copyrightText}
            </p>
          </div>
        </div>
      </footer>
    );
  },
);

Footer.displayName = 'Footer';

export { Footer };
export default Footer;
