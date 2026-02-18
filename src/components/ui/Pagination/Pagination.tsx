import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Total number of pages */
  totalPages: number;
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Called when page changes */
  onPageChange: (page: number) => void;
  /** Number of sibling pages to show around current */
  siblings?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Size variant */
  size?: 'sm' | 'md';
}

type PageItem = number | 'ellipsis';

function getPageRange(current: number, total: number, siblings: number): PageItem[] {
  const totalNumbers = siblings * 2 + 5; // siblings + boundaries + current + 2 ellipsis slots

  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblings, 1);
  const rightSiblingIndex = Math.min(current + siblings, total);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblings;
    const leftRange = Array.from({ length: leftCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis', total];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblings;
    const rightRange = Array.from({ length: rightCount }, (_, i) => total - rightCount + i + 1);
    return [1, 'ellipsis', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i,
  );
  return [1, 'ellipsis', ...middleRange, 'ellipsis', total];
}

const sizeStyles: Record<'sm' | 'md', { button: string; icon: number }> = {
  sm: { button: 'h-8 min-w-8 text-xs px-2', icon: 14 },
  md: { button: 'h-9 min-w-9 text-sm px-3', icon: 16 },
};

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      totalPages,
      currentPage,
      onPageChange,
      siblings = 1,
      showFirstLast = false,
      size = 'md',
      className,
      ...props
    },
    ref,
  ) => {
    const pages = useMemo(
      () => getPageRange(currentPage, totalPages, siblings),
      [currentPage, totalPages, siblings],
    );
    const styles = sizeStyles[size];
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;

    const buttonBase = cn(
      'inline-flex items-center justify-center rounded-md border font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      styles.button,
    );

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={cn('flex items-center gap-1', className)}
        {...props}
      >
        {showFirstLast && (
          <button
            type="button"
            onClick={() => onPageChange(1)}
            disabled={isFirst}
            className={cn(buttonBase, isFirst && 'opacity-50 cursor-not-allowed')}
            style={{
              color: 'var(--color-text-secondary)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              outlineColor: 'var(--color-border-focus)',
            }}
            aria-label="Go to first page"
          >
            <ChevronsLeft size={styles.icon} aria-hidden="true" />
          </button>
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst}
          className={cn(buttonBase, isFirst && 'opacity-50 cursor-not-allowed')}
          style={{
            color: 'var(--color-text-secondary)',
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            outlineColor: 'var(--color-border-focus)',
          }}
          aria-label="Go to previous page"
        >
          <ChevronLeft size={styles.icon} aria-hidden="true" />
        </button>

        {pages.map((page, idx) =>
          page === 'ellipsis' ? (
            <span
              key={`ellipsis-${idx}`}
              className={cn('inline-flex items-center justify-center', styles.button)}
              style={{ color: 'var(--color-text-muted)' }}
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Go to page ${page}`}
              className={cn(buttonBase)}
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor:
                  page === currentPage ? 'var(--color-primary)' : 'var(--color-surface)',
                color:
                  page === currentPage ? 'var(--color-primary-foreground)' : 'var(--color-text)',
                borderColor:
                  page === currentPage ? 'var(--color-primary)' : 'var(--color-border)',
                outlineColor: 'var(--color-border-focus)',
              }}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast}
          className={cn(buttonBase, isLast && 'opacity-50 cursor-not-allowed')}
          style={{
            color: 'var(--color-text-secondary)',
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            outlineColor: 'var(--color-border-focus)',
          }}
          aria-label="Go to next page"
        >
          <ChevronRight size={styles.icon} aria-hidden="true" />
        </button>

        {showFirstLast && (
          <button
            type="button"
            onClick={() => onPageChange(totalPages)}
            disabled={isLast}
            className={cn(buttonBase, isLast && 'opacity-50 cursor-not-allowed')}
            style={{
              color: 'var(--color-text-secondary)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              outlineColor: 'var(--color-border-focus)',
            }}
            aria-label="Go to last page"
          >
            <ChevronsRight size={styles.icon} aria-hidden="true" />
          </button>
        )}
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export { Pagination };
export default Pagination;
