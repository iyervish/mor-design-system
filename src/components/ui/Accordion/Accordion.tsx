import React, { useState, useId, createContext, useContext, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../utils/cn';

// ─── Accordion Context ─────────────────────────────────
interface AccordionContextValue {
  type: 'single' | 'multiple';
  openItems: Set<string>;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

// ─── Accordion ──────────────────────────────────────────
export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultOpen?: string[];
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ type = 'single', defaultOpen = [], children, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = useCallback((id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (type === 'single') {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  }, [type]);

  return (
    <AccordionContext.Provider value={{ type, openItems, toggle }}>
      <div className={cn('divide-y', className)} style={{ borderColor: 'var(--color-border)' }}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<AccordionItemProps>(child)) {
            return React.cloneElement(child, {
              _index: String(index),
            } as Partial<AccordionItemProps>);
          }
          return child;
        })}
      </div>
    </AccordionContext.Provider>
  );
}

// ─── AccordionItem ──────────────────────────────────────
export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  /** @internal */
  _index?: string;
}

export function AccordionItem({ title, children, defaultOpen, className, _index }: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  const generatedId = useId();
  const itemId = _index ?? generatedId;
  const headingId = `accordion-heading-${itemId}`;
  const panelId = `accordion-panel-${itemId}`;

  // If no context (standalone usage), manage own state
  const [localOpen, setLocalOpen] = useState(defaultOpen ?? false);

  const isOpen = ctx ? ctx.openItems.has(itemId) : localOpen;
  const handleToggle = ctx ? () => ctx.toggle(itemId) : () => setLocalOpen(prev => !prev);

  return (
    <div
      className={cn('border-b last:border-b-0', className)}
      style={{ borderColor: 'var(--color-border)' }}
    >
      <h3 className="m-0" style={{ fontFamily: 'var(--font-body)' }}>
        <button
          id={headingId}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between py-4 px-1 text-left text-base font-medium transition-colors"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
          <ChevronDown
            size={18}
            className="flex-shrink-0 transition-transform duration-200"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'var(--color-text-muted)',
            }}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className="overflow-hidden transition-all duration-200"
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="pb-4 px-1 text-sm leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
