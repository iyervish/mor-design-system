import React from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual severity variant */
  variant?: AlertVariant;
  /** Bold heading text */
  title?: string;
  /** Description content */
  children?: React.ReactNode;
  /** Show close button */
  dismissible?: boolean;
  /** Called when close button is clicked */
  onDismiss?: () => void;
  /** Custom icon override; pass `null` to hide icon */
  icon?: React.ReactNode | null;
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; icon: string; text: string }> = {
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

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: <Info size={20} aria-hidden="true" />,
  success: <CheckCircle size={20} aria-hidden="true" />,
  warning: <AlertTriangle size={20} aria-hidden="true" />,
  error: <XCircle size={20} aria-hidden="true" />,
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
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
    const styles = variantStyles[variant];
    const resolvedIcon = icon === null ? null : (icon ?? defaultIcons[variant]);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative flex gap-3 rounded-lg border px-4 py-3',
          dismissible && 'pr-10',
          className,
        )}
        style={{
          backgroundColor: styles.bg,
          borderColor: styles.border,
          color: styles.text,
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
            <p
              className="font-semibold text-sm leading-snug"
              style={{ fontFamily: 'var(--font-body)' }}
            >
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
            onClick={onDismiss}
            className="absolute top-3 right-3 rounded-md p-0.5 transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2"
            style={{
              color: styles.icon,
              outlineColor: styles.border,
            }}
            aria-label="Dismiss alert"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export { Alert };
export default Alert;
