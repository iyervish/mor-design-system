import * as React from 'react';
import { cn } from '../../../utils/cn';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  /** The name attribute shared by all radio inputs in the group */
  name: string;
  /** Array of radio options */
  options: RadioOption[];
  /** Currently selected value (controlled) */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Change handler receiving the selected value */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Disables all radio inputs in the group */
  disabled?: boolean;
  /** Error message displayed below the group */
  error?: string;
  /** Visible legend / group label */
  label?: string;
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text for this radio option */
  label: string;
  /** Optional description below the label */
  description?: string;
  /** Error styling (typically set by RadioGroup) */
  hasError?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Radio (single item)                                               */
/* ------------------------------------------------------------------ */

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, hasError = false, disabled = false, className, id: idProp, ...rest }, ref) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;

    return (
      <label
        htmlFor={id}
        className={cn(
          'group flex items-start gap-3 cursor-pointer select-none',
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
      >
        {/* Custom radio visual */}
        <span className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            id={id}
            type="radio"
            disabled={disabled}
            className="peer sr-only"
            {...rest}
          />
          {/* Outer circle */}
          <span
            className={cn(
              'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2',
            )}
            style={{
              borderColor: hasError
                ? 'var(--color-error)'
                : 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
            }}
            aria-hidden="true"
          />
          {/* Checked inner dot */}
          <span
            className={cn(
              'absolute inset-0 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors',
              'opacity-0 peer-checked:opacity-100',
            )}
            style={{
              borderColor: hasError
                ? 'var(--color-error)'
                : 'var(--color-primary)',
            }}
            aria-hidden="true"
          >
            <span
              className="block h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: hasError
                  ? 'var(--color-error)'
                  : 'var(--color-primary)',
              }}
            />
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
    );
  },
);

Radio.displayName = 'Radio';

/* ------------------------------------------------------------------ */
/*  RadioGroup                                                        */
/* ------------------------------------------------------------------ */

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      name,
      options,
      value,
      defaultValue,
      onChange,
      disabled = false,
      error,
      label,
      className,
      ...rest
    },
    ref,
  ) => {
    const errorId = `${name}-error`;

    return (
      <fieldset
        ref={ref}
        className={cn('flex flex-col gap-3', className)}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        disabled={disabled}
        {...rest}
      >
        {label && (
          <legend
            className="text-sm font-medium mb-1"
            style={{ color: 'var(--color-text)' }}
          >
            {label}
          </legend>
        )}

        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            description={option.description}
            hasError={!!error}
            disabled={disabled}
            checked={value !== undefined ? value === option.value : undefined}
            defaultChecked={
              defaultValue !== undefined
                ? defaultValue === option.value
                : undefined
            }
            onChange={onChange}
          />
        ))}

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
      </fieldset>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup };
export default RadioGroup;
