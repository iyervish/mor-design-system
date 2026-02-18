import React, { useState } from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

export type BannerVariant = 'info' | 'success' | 'warning' | 'error';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual severity variant */
  variant?: BannerVariant;
  /** Banner heading text */
  title?: string;
  /** Banner content */
  children?: React.ReactNode;
  /** Show dismiss button */
  dismissible?: boolean;
  /** Called when dismiss button is clicked */
  onDismiss?: () => void;
  /** Custom icon override; pass `null` to hide icon */
  icon?: React.ReactNode | null;
}

const variantStyles: Record<BannerVariant, { bg: string; border: string; icon: string; text: string }> = {
  info: {
    bg: 'var(--color-primary-light)',
    border: 'var(--color-primary)',
    icon: 'var(--color-primary)',
    text: 'var(--color-text)',
  },
  success: {
    bg: 'var(--color-success-light)',
    border: 'var(--color-success)',
    icon: 'var(--color-success)',
    text: 'var(--color-text)',
  },
  warning: {
    bg: 'var(--color-warning-light)',
    border: 'var(--color-warning)',
    icon: 'var(--color-warning)',
    text: 'var(--color-text)',
  },
  error: {
    bg: 'var(--color-error-light)',
    border: 'var(--color-error)',
    icon: 'var(--color-error)',
    text: 'var(--color-text)',
  },
};

const defaultIcons: Record<BannerVariant, React.ReactNode> = {
  info: <Info size={20} aria-hidden="true" />,
  success: <CheckCircle size={20} aria-hidden="true" />,
  warning: <AlertTriangle size={20} aria-hidden="true" />,
  error: <XCircle size={20} aria-hidden="true" />,
};

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      variant = 'info',
      title,
      children,
      dismissible = false,
      onDismiss,
      icon,
      className,
      ...props
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = useState(false);
    const styles = variantStyles[variant];
    const resolvedIcon = icon === null ? null : (icon ?? defaultIcons[variant]);
    const roleAttr = variant === 'error' || variant === 'warning' ? 'alert' : 'status';

    if (dismissed) return null;

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        role={roleAttr}
        className={cn(
          'relative w-full flex items-start gap-3 px-4 py-3 border-l-4',
          className,
        )}
        style={{
          backgroundColor: styles.bg,
          borderLeftColor: styles.border,
          color: styles.text,
          fontFamily: 'var(--font-body)',
        }}
        {...props}
      >
        {resolvedIcon && (
          <span className="mt-0.5 shrink-0" style={{ color: styles.icon }}>
            {resolvedIcon}
          </span>
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-semibold text-sm leading-snug">
              {title}
            </p>
          )}
          {children && (
            <div
              className={cn('text-sm leading-relaxed', title && 'mt-1')}
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {children}
            </div>
          )}
        </div>

        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className="shrink-0 rounded-md p-0.5 transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2"
            style={{
              color: styles.icon,
              outlineColor: styles.border,
            }}
            aria-label="Dismiss banner"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);

Banner.displayName = 'Banner';

export { Banner };
export default Banner;
