import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface SideNavItem {
  /** Display label */
  label: string;
  /** Link href */
  href?: string;
  /** Nested items */
  children?: SideNavItem[];
  /** Whether this item is currently active */
  active?: boolean;
}

export interface SideNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items */
  items: SideNavItem[];
  /** Called when an item is clicked */
  onItemClick?: (href: string) => void;
}

interface NavItemRendererProps {
  item: SideNavItem;
  depth: number;
  onItemClick?: (href: string) => void;
}

function NavItemRenderer({ item, depth, onItemClick }: NavItemRendererProps) {
  const [expanded, setExpanded] = useState(
    item.active || item.children?.some((child) => child.active) || false,
  );
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = useCallback(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
    if (item.href) {
      onItemClick?.(item.href);
    }
  }, [hasChildren, item.href, onItemClick]);

  const paddingLeft = `${12 + depth * 16}px`;

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={hasChildren ? expanded : undefined}
        aria-current={item.active ? 'page' : undefined}
        className={cn(
          'w-full flex items-center justify-between py-2 text-sm transition-colors text-left',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset rounded-sm',
        )}
        style={{
          paddingLeft,
          paddingRight: '12px',
          fontFamily: 'var(--font-body)',
          color: item.active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
          backgroundColor: item.active ? 'var(--color-primary-light)' : 'transparent',
          borderLeft: item.active
            ? '3px solid var(--color-primary)'
            : '3px solid transparent',
          fontWeight: item.active ? 600 : 400,
          outlineColor: 'var(--color-border-focus)',
        }}
      >
        <span>{item.label}</span>
        {hasChildren && (
          <ChevronDown
            size={14}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200"
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'var(--color-text-muted)',
            }}
          />
        )}
      </button>

      {hasChildren && expanded && (
        <ul className="list-none p-0 m-0">
          {item.children!.map((child, idx) => (
            <NavItemRenderer
              key={idx}
              item={child}
              depth={depth + 1}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

const SideNavigation = React.forwardRef<HTMLElement, SideNavigationProps>(
  ({ items, onItemClick, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Side navigation"
        className={cn('w-full', className)}
        {...props}
      >
        <ul className="list-none p-0 m-0">
          {items.map((item, idx) => (
            <NavItemRenderer
              key={idx}
              item={item}
              depth={0}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      </nav>
    );
  },
);

SideNavigation.displayName = 'SideNavigation';

export { SideNavigation };
export default SideNavigation;
