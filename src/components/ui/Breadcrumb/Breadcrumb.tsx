import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator = '/', className }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('', className)}>
        <ol className="flex items-center gap-1.5 flex-wrap list-none p-0 m-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {separator}
                  </span>
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text)' }}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm no-underline hover:underline transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
export default Breadcrumb;
