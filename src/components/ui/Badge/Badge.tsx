import React from 'react';
import { cn } from '../../../utils/cn';

export type BadgeVariant = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  /** Badge label */
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-primary-foreground)',
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-secondary-foreground)',
  },
  success: {
    backgroundColor: 'var(--color-success-light)',
    color: 'var(--color-success)',
  },
  warning: {
    backgroundColor: 'var(--color-warning-light)',
    color: 'var(--color-warning)',
  },
  error: {
    backgroundColor: 'var(--color-error-light)',
    color: 'var(--color-error)',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border-strong)',
  },
};

const sizeMap: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-sm',
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'sm', className, children, style, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full font-medium leading-snug whitespace-nowrap',
        sizeMap[size],
        className,
      )}
      style={{
        ...variantStyles[variant],
        fontFamily: 'var(--font-body)',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  ),
);

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
