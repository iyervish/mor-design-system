import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface Step {
  /** Step label */
  label: string;
  /** Optional description */
  description?: string;
}

export interface StepIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of step definitions */
  steps: Step[];
  /** Current step index (0-based) */
  currentStep: number;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
}

const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ steps, currentStep, orientation = 'horizontal', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-label="Progress"
        className={cn(
          'w-full',
          className,
        )}
        style={{ fontFamily: 'var(--font-body)' }}
        {...props}
      >
        <ol
          className={cn(
            'flex',
            orientation === 'horizontal'
              ? 'flex-row items-start'
              : 'flex-col',
          )}
        >
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isUpcoming = index > currentStep;
            const isLast = index === steps.length - 1;

            return (
              <li
                key={index}
                className={cn(
                  'flex',
                  orientation === 'horizontal'
                    ? 'flex-1 flex-col items-center'
                    : 'flex-row items-start',
                )}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <div
                  className={cn(
                    'flex',
                    orientation === 'horizontal'
                      ? 'flex-row items-center w-full'
                      : 'flex-col items-center',
                  )}
                >
                  {/* Connector before */}
                  {index > 0 && orientation === 'horizontal' && (
                    <div
                      className="flex-1 h-0.5"
                      style={{
                        backgroundColor: isCompleted || isCurrent
                          ? 'var(--color-success)'
                          : 'var(--color-border)',
                      }}
                    />
                  )}
                  {index > 0 && orientation === 'vertical' && (
                    <div
                      className="w-0.5 h-6"
                      style={{
                        backgroundColor: isCompleted || isCurrent
                          ? 'var(--color-success)'
                          : 'var(--color-border)',
                      }}
                    />
                  )}

                  {/* Circle */}
                  <div
                    className={cn(
                      'flex items-center justify-center w-8 h-8 rounded-full border-2 shrink-0 text-sm font-medium transition-colors',
                    )}
                    style={{
                      backgroundColor: isCompleted
                        ? 'var(--color-success)'
                        : isCurrent
                          ? 'var(--color-primary)'
                          : 'var(--color-surface)',
                      borderColor: isCompleted
                        ? 'var(--color-success)'
                        : isCurrent
                          ? 'var(--color-primary)'
                          : 'var(--color-border)',
                      color: isCompleted || isCurrent
                        ? 'white'
                        : 'var(--color-text-muted)',
                    }}
                  >
                    {isCompleted ? (
                      <Check size={16} aria-hidden="true" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>

                  {/* Connector after */}
                  {!isLast && orientation === 'horizontal' && (
                    <div
                      className="flex-1 h-0.5"
                      style={{
                        backgroundColor: isCompleted
                          ? 'var(--color-success)'
                          : 'var(--color-border)',
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <div
                  className={cn(
                    orientation === 'horizontal'
                      ? 'mt-2 text-center'
                      : 'ml-3 pb-8',
                    isLast && orientation === 'vertical' && 'pb-0',
                  )}
                >
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: isUpcoming
                        ? 'var(--color-text-muted)'
                        : 'var(--color-text)',
                    }}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {step.description}
                    </p>
                  )}
                  <span className="sr-only">
                    {isCompleted ? '(completed)' : isCurrent ? '(current)' : '(upcoming)'}
                  </span>
                </div>

                {/* Vertical connector after label */}
                {!isLast && orientation === 'vertical' && (
                  <div
                    className="w-0.5 flex-1 ml-4"
                    style={{
                      backgroundColor: isCompleted
                        ? 'var(--color-success)'
                        : 'var(--color-border)',
                      minHeight: '24px',
                    }}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  },
);

StepIndicator.displayName = 'StepIndicator';

export { StepIndicator };
export default StepIndicator;
