import React from 'react';
import { cn } from '../../../utils/cn';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button. */
  variant?: ButtonVariant;
  /** Size preset. */
  size?: ButtonSize;
  /** Render a loading spinner and disable interaction. */
  isLoading?: boolean;
  /** Accessible label announced while loading. */
  loadingText?: string;
  /** Icon element placed before children. */
  leftIcon?: React.ReactNode;
  /** Icon element placed after children. */
  rightIcon?: React.ReactNode;
  /** Stretch to full width of parent. */
  fullWidth?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Spinner                                                            */
/* ------------------------------------------------------------------ */

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5 gap-1.5 rounded-md',
  md: 'text-sm px-4 py-2 gap-2 rounded-md',
  lg: 'text-base px-6 py-3 gap-2.5 rounded-lg',
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

/**
 * CSS custom-property-based styles for each variant.
 * Keeps theme-awareness without hard-coding hex values.
 */
const variantStyles: Record<
  ButtonVariant,
  {
    base: React.CSSProperties;
    className: string;
  }
> = {
  primary: {
    base: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-primary-foreground)',
      borderColor: 'transparent',
    },
    className: 'shadow-sm hover:brightness-110 active:brightness-95',
  },
  secondary: {
    base: {
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-secondary-foreground)',
      borderColor: 'transparent',
    },
    className: 'shadow-sm hover:brightness-110 active:brightness-95',
  },
  outline: {
    base: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-border-strong)',
    },
    className: 'hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/15',
  },
  ghost: {
    base: {
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
      borderColor: 'transparent',
    },
    className: 'hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/15',
  },
  destructive: {
    base: {
      backgroundColor: 'var(--color-error)',
      color: '#ffffff',
      borderColor: 'transparent',
    },
    className: 'shadow-sm hover:brightness-110 active:brightness-95',
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className,
      children,
      style,
      type = 'button',
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;
    const { base: variantCss, className: variantCls } = variantStyles[variant];

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={isLoading || undefined}
        aria-label={ariaLabel}
        className={cn(
          // Base
          'inline-flex items-center justify-center font-medium',
          'border transition-all',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          // Size
          sizeClasses[size],
          // Variant
          variantCls,
          // States
          fullWidth && 'w-full',
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className,
        )}
        style={{
          fontFamily: 'var(--font-body)',
          // Focus ring color
          // @ts-expect-error CSS custom property for ring color
          '--tw-ring-color': 'var(--color-border-focus)',
          '--tw-ring-offset-color': 'var(--color-background)',
          ...variantCss,
          ...style,
        }}
        {...rest}
      >
        {/* Loading spinner replaces left icon */}
        {isLoading ? (
          <Spinner className={iconSizeClasses[size]} />
        ) : (
          leftIcon && (
            <span className={cn('shrink-0', iconSizeClasses[size])} aria-hidden="true">
              {leftIcon}
            </span>
          )
        )}

        {/* Label */}
        {isLoading && loadingText ? loadingText : children}

        {/* Right icon (hidden while loading) */}
        {!isLoading && rightIcon && (
          <span className={cn('shrink-0', iconSizeClasses[size])} aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
