import React, { useState, useCallback } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text (visually hidden by default) */
  label?: string;
  /** Show label visually */
  showLabel?: boolean;
  /** Visual size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Called when search is submitted (Enter key) */
  onSearch?: (value: string) => void;
  /** Called when clear button is clicked */
  onClear?: () => void;
  /** Show clear button when input has value */
  clearable?: boolean;
}

const sizeStyles: Record<'sm' | 'md' | 'lg', { input: string; iconSize: number; iconPadding: string }> = {
  sm: { input: 'pl-8 pr-8 py-1.5 text-sm', iconSize: 14, iconPadding: 'left-2.5' },
  md: { input: 'pl-9 pr-9 py-2 text-sm', iconSize: 16, iconPadding: 'left-3' },
  lg: { input: 'pl-10 pr-10 py-2.5 text-base', iconSize: 18, iconPadding: 'left-3' },
};

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      label = 'Search',
      showLabel = false,
      size = 'md',
      onSearch,
      onClear,
      clearable = true,
      placeholder = 'Search...',
      value: controlledValue,
      defaultValue = '',
      className,
      id: idProp,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;
    const [internalValue, setInternalValue] = useState(String(defaultValue));
    const currentValue = controlledValue !== undefined ? String(controlledValue) : internalValue;
    const styles = sizeStyles[size];

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (controlledValue === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [controlledValue, onChange],
    );

    const handleClear = useCallback(() => {
      if (controlledValue === undefined) {
        setInternalValue('');
      }
      onClear?.();
    }, [controlledValue, onClear]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          onSearch?.(currentValue);
        }
        rest.onKeyDown?.(e);
      },
      [currentValue, onSearch, rest],
    );

    return (
      <div className="flex flex-col gap-1.5 w-full" role="search">
        <label
          htmlFor={id}
          className={cn(
            'text-sm font-medium',
            !showLabel && 'sr-only',
          )}
          style={{ color: 'var(--color-text)' }}
        >
          {label}
        </label>

        <div className="relative">
          <SearchIcon
            size={styles.iconSize}
            className={cn('absolute top-1/2 -translate-y-1/2 pointer-events-none', styles.iconPadding)}
            style={{ color: 'var(--color-text-muted)' }}
            aria-hidden="true"
          />

          <input
            ref={ref}
            id={id}
            type="search"
            role="searchbox"
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={cn(
              'w-full rounded-md border outline-none transition-colors',
              'placeholder:opacity-50',
              styles.input,
              className,
            )}
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-focus)';
              e.currentTarget.style.boxShadow =
                '0 0 0 3px color-mix(in srgb, var(--color-border-focus) 25%, transparent)';
              rest.onFocus?.(e);
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
              rest.onBlur?.(e);
            }}
            {...rest}
          />

          {clearable && currentValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute top-1/2 -translate-y-1/2 right-2.5 rounded-sm p-0.5 transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2"
              style={{
                color: 'var(--color-text-muted)',
                outlineColor: 'var(--color-border-focus)',
              }}
              aria-label="Clear search"
            >
              <X size={styles.iconSize - 2} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  },
);

Search.displayName = 'Search';

export { Search };
export default Search;
