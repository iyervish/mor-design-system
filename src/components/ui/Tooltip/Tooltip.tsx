import React, { useState, useRef, useCallback, useId } from 'react';
import { cn } from '../../../utils/cn';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  /** Tooltip text content */
  content: string;
  /** Position relative to trigger */
  position?: TooltipPosition;
  /** Delay in ms before showing */
  delayMs?: number;
  /** Trigger element */
  children: React.ReactElement;
  /** Additional className for tooltip bubble */
  className?: string;
}

const positionStyles: Record<TooltipPosition, React.CSSProperties> = {
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '8px',
  },
  left: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: '8px',
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: '8px',
  },
};

const arrowStyles: Record<TooltipPosition, React.CSSProperties> = {
  top: {
    bottom: '-4px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  bottom: {
    top: '-4px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
  },
  left: {
    right: '-4px',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
  },
  right: {
    left: '-4px',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
  },
};

function Tooltip({
  content,
  position = 'top',
  delayMs = 200,
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const tooltipId = useId();

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), delayMs);
  }, [delayMs]);

  const hide = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        hide();
      }
    },
    [hide],
  );

  return (
    <span className="relative inline-flex" onKeyDown={handleKeyDown}>
      {React.cloneElement(children, {
        onMouseEnter: (e: React.MouseEvent) => {
          show();
          children.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: React.MouseEvent) => {
          hide();
          children.props.onMouseLeave?.(e);
        },
        onFocus: (e: React.FocusEvent) => {
          show();
          children.props.onFocus?.(e);
        },
        onBlur: (e: React.FocusEvent) => {
          hide();
          children.props.onBlur?.(e);
        },
        'aria-describedby': visible ? tooltipId : undefined,
      })}

      {visible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={cn(
            'absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap pointer-events-none',
            className,
          )}
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-background)',
            fontFamily: 'var(--font-body)',
            ...positionStyles[position],
          }}
        >
          {content}
          <span
            className="absolute w-2 h-2"
            style={{
              backgroundColor: 'var(--color-text)',
              ...arrowStyles[position],
            }}
          />
        </span>
      )}
    </span>
  );
}

Tooltip.displayName = 'Tooltip';

export { Tooltip };
export default Tooltip;
