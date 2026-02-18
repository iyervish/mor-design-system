import React, { useState, useId, createContext, useContext, useCallback, useRef, useEffect } from 'react';
import { cn } from '../../../utils/cn';

// ─── Tabs Context ─────────────────────────────────────
interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
  baseId: string;
  orientation: 'horizontal' | 'vertical';
  registerTab: (value: string) => void;
  tabs: React.MutableRefObject<string[]>;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs compound components must be used within <Tabs>');
  return ctx;
}

// ─── Tabs ──────────────────────────────────────────────
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default active tab value (uncontrolled) */
  defaultValue?: string;
  /** Active tab value (controlled) */
  value?: string;
  /** Called when active tab changes */
  onChange?: (value: string) => void;
  /** Tab orientation */
  orientation?: 'horizontal' | 'vertical';
}

export function Tabs({
  defaultValue,
  value: controlledValue,
  onChange,
  orientation = 'horizontal',
  className,
  children,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const activeValue = controlledValue ?? internalValue;
  const baseId = useId();
  const tabsRef = useRef<string[]>([]);

  const setActiveValue = useCallback(
    (val: string) => {
      if (controlledValue === undefined) {
        setInternalValue(val);
      }
      onChange?.(val);
    },
    [controlledValue, onChange],
  );

  const registerTab = useCallback((val: string) => {
    if (!tabsRef.current.includes(val)) {
      tabsRef.current.push(val);
    }
  }, []);

  return (
    <TabsContext.Provider
      value={{ activeValue, setActiveValue, baseId, orientation, registerTab, tabs: tabsRef }}
    >
      <div
        className={cn(
          orientation === 'vertical' && 'flex gap-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// ─── TabList ───────────────────────────────────────────
export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useTabsContext();
    const listRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        const container = listRef.current;
        if (!container) return;

        const tabs = Array.from(
          container.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])'),
        );
        const currentIndex = tabs.indexOf(e.target as HTMLButtonElement);
        if (currentIndex === -1) return;

        let nextIndex: number | null = null;
        const isHorizontal = orientation === 'horizontal';

        if (
          (isHorizontal && e.key === 'ArrowRight') ||
          (!isHorizontal && e.key === 'ArrowDown')
        ) {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (
          (isHorizontal && e.key === 'ArrowLeft') ||
          (!isHorizontal && e.key === 'ArrowUp')
        ) {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          nextIndex = 0;
        } else if (e.key === 'End') {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex !== null) {
          e.preventDefault();
          tabs[nextIndex].focus();
          tabs[nextIndex].click();
        }
      },
      [orientation],
    );

    return (
      <div
        ref={(node) => {
          (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex',
          orientation === 'horizontal'
            ? 'flex-row border-b'
            : 'flex-col border-r',
          className,
        )}
        style={{ borderColor: 'var(--color-border)' }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TabList.displayName = 'TabList';

// ─── Tab ───────────────────────────────────────────────
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Unique value identifying this tab */
  value: string;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ value, disabled, className, children, ...props }, ref) => {
    const { activeValue, setActiveValue, baseId, orientation, registerTab } = useTabsContext();
    const isActive = activeValue === value;

    useEffect(() => {
      registerTab(value);
    }, [value, registerTab]);

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        id={`${baseId}-tab-${value}`}
        aria-selected={isActive}
        aria-controls={`${baseId}-panel-${value}`}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        onClick={() => !disabled && setActiveValue(value)}
        className={cn(
          'px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          orientation === 'horizontal'
            ? '-mb-px border-b-2'
            : '-mr-px border-r-2',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        style={{
          fontFamily: 'var(--font-body)',
          color: isActive
            ? 'var(--color-primary)'
            : disabled
              ? 'var(--color-text-muted)'
              : 'var(--color-text-secondary)',
          borderColor: isActive ? 'var(--color-primary)' : 'transparent',
          outlineColor: 'var(--color-border-focus)',
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Tab.displayName = 'Tab';

// ─── TabPanel ──────────────────────────────────────────
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Value matching the corresponding Tab */
  value: string;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, className, children, ...props }, ref) => {
    const { activeValue, baseId } = useTabsContext();
    const isActive = activeValue === value;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`${baseId}-panel-${value}`}
        aria-labelledby={`${baseId}-tab-${value}`}
        tabIndex={0}
        className={cn('pt-4 focus-visible:outline-none', className)}
        style={{ color: 'var(--color-text)' }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TabPanel.displayName = 'TabPanel';

export default Tabs;
