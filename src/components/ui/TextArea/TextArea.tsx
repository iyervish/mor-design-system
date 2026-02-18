import React, { useId, useState } from 'react';
import { cn } from '../../../utils/cn';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  showCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, helperText, error, showCount, size = 'md', className, maxLength, onChange, rows = 4, id: propId, ...props }, ref) => {
    const generatedId = useId();
    const id = propId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const describedBy = [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(' ') || undefined;

    const [charCount, setCharCount] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          maxLength={maxLength}
          onChange={handleChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full rounded-md border transition-colors resize-y',
            'focus:outline-none focus:ring-2',
            sizeStyles[size],
            className,
          )}
          style={{
            fontFamily: 'var(--font-body)',
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text)',
            borderColor: error ? 'var(--color-error)' : 'var(--color-border)',
            // @ts-expect-error CSS custom property
            '--tw-ring-color': error ? 'var(--color-error)' : 'var(--color-border-focus)',
          }}
          {...props}
        />
        <div className="flex justify-between mt-1">
          <div>
            {error && (
              <p id={errorId} className="text-sm" style={{ color: 'var(--color-error)' }} role="alert">
                {error}
              </p>
            )}
            {!error && helperText && (
              <p id={helperId} className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {helperText}
              </p>
            )}
          </div>
          {showCount && maxLength && (
            <span className="text-xs" style={{ color: charCount >= maxLength ? 'var(--color-error)' : 'var(--color-text-muted)' }}>
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
export default TextArea;
