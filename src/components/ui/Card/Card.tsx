import React from 'react';
import { cn } from '../../../utils/cn';

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

export type CardVariant = 'default' | 'outline' | 'elevated';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant;
  /** Inner padding size */
  padding?: CardPadding;
  /** Adds hover state styles */
  clickable?: boolean;
}

const variantMap: Record<CardVariant, React.CSSProperties> = {
  default: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)',
  },
  outline: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border-strong)',
  },
  elevated: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-md)',
  },
};

const paddingMap: Record<CardPadding, string> = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', clickable = false, className, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg transition-shadow',
        paddingMap[padding],
        clickable && 'cursor-pointer hover:shadow-lg',
        className,
      )}
      style={{
        ...variantMap[variant],
        ...(clickable ? { transition: 'box-shadow var(--duration-normal) var(--ease-default)' } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ),
);

Card.displayName = 'Card';

/* ------------------------------------------------------------------ */
/*  CardHeader                                                         */
/* ------------------------------------------------------------------ */

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-1.5 pb-4', className)}
      {...props}
    />
  ),
);

CardHeader.displayName = 'CardHeader';

/* ------------------------------------------------------------------ */
/*  CardTitle                                                          */
/* ------------------------------------------------------------------ */

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-tight', className)}
      style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
      {...props}
    />
  ),
);

CardTitle.displayName = 'CardTitle';

/* ------------------------------------------------------------------ */
/*  CardDescription                                                    */
/* ------------------------------------------------------------------ */

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm leading-relaxed', className)}
      style={{ color: 'var(--color-text-secondary)' }}
      {...props}
    />
  ),
);

CardDescription.displayName = 'CardDescription';

/* ------------------------------------------------------------------ */
/*  CardContent                                                        */
/* ------------------------------------------------------------------ */

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm', className)} style={{ color: 'var(--color-text)' }} {...props} />
  ),
);

CardContent.displayName = 'CardContent';

/* ------------------------------------------------------------------ */
/*  CardFooter                                                         */
/* ------------------------------------------------------------------ */

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-3 pt-4 border-t', className)}
      style={{ borderColor: 'var(--color-border)' }}
      {...props}
    />
  ),
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export default Card;
