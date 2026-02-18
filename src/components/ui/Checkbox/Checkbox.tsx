import * as React from 'react';
import { cn } from '../../../utils/cn';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text displayed next to the checkbox */
  label: string;
  /** Optional description text below the label */
  description?: string;
  /** Error message. When truthy the checkbox enters an error state. */
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, disabled = false, className, id: idProp, ...rest }, ref) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;
    const errorId = `${id}-error`;

    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className={cn(
            'group flex items-start gap-3 cursor-pointer select-none',
            disabled && 'cursor-not-allowed opacity-50',
            className,
          )}
        >
          {/* Custom checkbox visual */}
          <span className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              id={id}
              type="checkbox"
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              className="peer sr-only"
              {...rest}
            />
            <span
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded border-2 transition-colors',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2',
              )}
              style={{
                borderColor: error
                  ? 'var(--color-error)'
                  : 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                // ring color handled via outline below
              }}
              aria-hidden="true"
            />
            {/* Checked state overlay */}
            <span
              className={cn(
                'absolute inset-0 flex h-5 w-5 items-center justify-center rounded border-2 transition-colors',
                'opacity-0 peer-checked:opacity-100',
              )}
              style={{
                borderColor: error
                  ? 'var(--color-error)'
                  : 'var(--color-primary)',
                backgroundColor: error
                  ? 'var(--color-error)'
                  : 'var(--color-primary)',
              }}
              aria-hidden="true"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 6L5 8.5L9.5 3.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>

          {/* Text content */}
          <span className="flex flex-col gap-0.5">
            <span
              className="text-sm font-medium leading-tight"
              style={{ color: 'var(--color-text)' }}
            >
              {label}
            </span>
            {description && (
              <span
                className="text-sm leading-snug"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {description}
              </span>
            )}
          </span>
        </label>

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-sm ml-8"
            style={{ color: 'var(--color-error)' }}
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
