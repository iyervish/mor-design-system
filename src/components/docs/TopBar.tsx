import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, Github, X } from 'lucide-react';
import MorLogo from '../MorLogo';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function TopBar({ theme, onToggleTheme, sidebarOpen, onToggleSidebar }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-6"
      style={{
        height: 'var(--topbar-height)',
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-md hover:opacity-80 transition-opacity"
          style={{ color: 'var(--color-text)' }}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline group"
        >
          <MorLogo size={28} />
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-sm tracking-tight"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
              >
                Mor
              </span>
              <span
                className="text-[10px] tracking-wide"
                style={{ color: 'var(--color-text-muted)' }}
              >
                India's Design System
              </span>
            </div>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--sona-100)',
                color: 'var(--sona-700)',
              }}
            >
              v1.0
            </span>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-md transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <a
          href="https://github.com/iyervish/mor-design-system"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
          aria-label="View on GitHub"
        >
          <Github size={17} />
        </a>
      </div>
    </header>
  );
}
