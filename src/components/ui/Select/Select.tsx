import * as React from 'react';
import { cn } from '../../../utils/cn';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Visible label rendered above the select */
  label?: string;
  /** Array of options to render */
  options: SelectOption[];
  /** Placeholder text shown as the first disabled option */
  placeholder?: string;
  /** Assistive text rendered below the select */
  helperText?: string;
  /** Error message. When truthy the select enters an error state. */
  error?: string;
  /** Visual size variant */
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-2.5 py-1.5 text-sm pr-8',
  md: 'px-3 py-2 text-sm pr-9',
  lg: 'px-3.5 py-2.5 text-base pr-10',
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      helperText,
      error,
      disabled = false,
      size = 'md',
      className,
      id: idProp,
      ...rest
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium"
            style={{ color: 'var(--color-text)' }}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : undefined, helperText ? helperId : undefined]
                .filter(Boolean)
                .join(' ') || undefined
            }
            className={cn(
              'w-full rounded-md border outline-none appearance-none transition-colors',
              sizeStyles[size],
              disabled && 'cursor-not-allowed opacity-50',
              className,
            )}
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text)',
              backgroundColor: disabled
                ? 'var(--color-background-subtle)'
                : 'var(--color-surface)',
              borderColor: error
                ? 'var(--color-error)'
                : 'var(--color-border)',
              boxShadow: 'none',
            }}
            onFocus={(e) => {
              if (!error) {
                e.currentTarget.style.borderColor = 'var(--color-border-focus)';
                e.currentTarget.style.boxShadow =
                  '0 0 0 3px color-mix(in srgb, var(--color-border-focus) 25%, transparent)';
              }
              rest.onFocus?.(e);
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error
                ? 'var(--color-error)'
                : 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
              rest.onBlur?.(e);
            }}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Chevron icon */}
          <svg
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-sm"
            style={{ color: 'var(--color-error)' }}
          >
            {error}
          </p>
        )}

        {helperText && !error && (
          <p
            id={helperId}
            className="text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
