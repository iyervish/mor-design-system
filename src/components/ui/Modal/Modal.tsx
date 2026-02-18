import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../../utils/cn';

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is open */
  open: boolean;
  /** Called when the modal requests closing */
  onClose: () => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Close on Escape key */
  closeOnEscape?: boolean;
  /** Show close button in top-right corner */
  showCloseButton?: boolean;
}

const sizeMap: Record<'sm' | 'md' | 'lg' | 'xl', string> = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      size = 'md',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Focus trap
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose();
          return;
        }

        if (e.key !== 'Tab') return;

        const modal = dialogRef.current;
        if (!modal) return;

        const focusable = modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      },
      [closeOnEscape, onClose],
    );

    // Manage focus and scroll lock
    useEffect(() => {
      if (open) {
        previousFocusRef.current = document.activeElement as HTMLElement;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        // Focus first focusable element
        requestAnimationFrame(() => {
          const modal = dialogRef.current;
          if (!modal) return;
          const firstFocusable = modal.querySelector<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          );
          firstFocusable?.focus();
        });
      }

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
        if (!open && previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }, [open, handleKeyDown]);

    if (!open) return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-opacity"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closeOnBackdropClick ? onClose : undefined}
          aria-hidden="true"
        />

        {/* Dialog */}
        <div
          ref={(node) => {
            (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          role="dialog"
          aria-modal="true"
          className={cn(
            'relative z-10 w-full rounded-lg border overflow-hidden',
            sizeMap[size],
            className,
          )}
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
            boxShadow: 'var(--shadow-xl)',
            fontFamily: 'var(--font-body)',
          }}
          {...props}
        >
          {showCloseButton && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 rounded-md p-1 transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2"
              style={{
                color: 'var(--color-text-muted)',
                outlineColor: 'var(--color-border-focus)',
              }}
              aria-label="Close dialog"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
          {children}
        </div>
      </div>,
      document.body,
    );
  },
);

Modal.displayName = 'Modal';

/* ------------------------------------------------------------------ */
/*  ModalHeader                                                        */
/* ------------------------------------------------------------------ */

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 pt-6 pb-2', className)}
      {...props}
    />
  ),
);

ModalHeader.displayName = 'ModalHeader';

/* ------------------------------------------------------------------ */
/*  ModalTitle                                                         */
/* ------------------------------------------------------------------ */

export interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-tight pr-8', className)}
      style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
      {...props}
    />
  ),
);

ModalTitle.displayName = 'ModalTitle';

/* ------------------------------------------------------------------ */
/*  ModalBody                                                          */
/* ------------------------------------------------------------------ */

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 text-sm', className)}
      style={{ color: 'var(--color-text-secondary)' }}
      {...props}
    />
  ),
);

ModalBody.displayName = 'ModalBody';

/* ------------------------------------------------------------------ */
/*  ModalFooter                                                        */
/* ------------------------------------------------------------------ */

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-end gap-3 px-6 pb-6 pt-2', className)}
      {...props}
    />
  ),
);

ModalFooter.displayName = 'ModalFooter';

export { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter };
export default Modal;
