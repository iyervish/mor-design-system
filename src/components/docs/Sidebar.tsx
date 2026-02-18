import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { navigation, type NavItem } from '../../data/navigation';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function NavSection({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === item.href;
  const hasActiveChild = item.children?.some(child => location.pathname === child.href);
  const [expanded, setExpanded] = useState(isActive || hasActiveChild || false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className="block px-3 py-2 rounded-md text-[13px] font-medium transition-all no-underline"
        style={{
          color: isActive ? 'var(--neelkanth-950)' : 'var(--color-text-secondary)',
          backgroundColor: isActive ? 'var(--surya-100)' : 'transparent',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="mt-2 first:mt-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-[11px] font-bold uppercase tracking-[0.12em] transition-colors text-left"
        style={{
          color: hasActiveChild ? 'var(--color-text)' : 'var(--color-text-muted)',
          fontFamily: 'var(--font-body)',
        }}
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown
          size={12}
          className="transition-transform duration-200"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {expanded && (
        <div className="mt-0.5 space-y-px ml-1">
          {item.children.map(child => {
            const childActive = location.pathname === child.href;
            return (
              <Link
                key={child.href}
                to={child.href}
                onClick={onNavigate}
                className="block pl-3 py-1.5 text-[13px] no-underline transition-all rounded-md"
                style={{
                  color: childActive ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  fontWeight: childActive ? 600 : 400,
                  backgroundColor: childActive ? 'var(--surya-100)' : 'transparent',
                  borderLeft: childActive ? '2px solid var(--surya-500)' : '2px solid transparent',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: 'rgba(10,31,56,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full overflow-y-auto morni-scrollbar
          transition-transform duration-200 ease-out
          lg:translate-x-0 lg:z-30
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          width: 'var(--sidebar-width)',
          paddingTop: 'var(--topbar-height)',
          backgroundColor: 'var(--color-surface)',
          borderRight: '1px solid var(--color-border)',
        }}
        aria-label="Documentation navigation"
      >
        <nav className="p-4 space-y-1">
          {navigation.map(item => (
            <NavSection key={item.href} item={item} onNavigate={onClose} />
          ))}
        </nav>

        {/* Bottom attribution */}
        <div className="p-4 mt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <a
            href="https://studiopimmit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] no-underline transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Built by Studio Pimmit
          </a>
        </div>
      </aside>
    </>
  );
}
