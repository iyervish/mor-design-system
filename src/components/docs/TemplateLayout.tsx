import { Outlet, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function TemplateLayout() {
  useTheme();

  return (
    <div className="mor min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div
        className="fixed top-4 left-4 z-50"
      >
        <Link
          to="/templates"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium no-underline shadow-lg transition-opacity hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
          }}
        >
          <ArrowLeft size={16} />
          Back to docs
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
