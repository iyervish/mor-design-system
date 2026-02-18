import * as React from 'react';
import { cn } from '../../../utils/cn';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label rendered above the input */
  label?: string;
  /** Placeholder text inside the input */
  placeholder?: string;
  /** Assistive text rendered below the input */
  helperText?: string;
  /** Error message. When truthy the input enters an error state. */
  error?: string;
  /** Visual size variant */
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      helperText,
      error,
      disabled = false,
      size = 'md',
      type = 'text',
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

        <input
          ref={ref}
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={
            [error ? errorId : undefined, helperText ? helperId : undefined]
              .filter(Boolean)
              .join(' ') || undefined
          }
          className={cn(
            'w-full rounded-md border outline-none transition-colors',
            'placeholder:opacity-50',
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
            ...(
              !disabled
                ? {
                    // focus styles are handled via CSS below
                  }
                : {}
            ),
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
        />

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

Input.displayName = 'Input';

export default Input;
