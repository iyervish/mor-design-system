import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import { useTheme } from '../../hooks/useTheme';

export default function DocsLayout() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="mor min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <TopBar
        theme={theme}
        onToggleTheme={toggleTheme}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main
        className="transition-all duration-200 mor-paisley"
        style={{
          marginTop: 'var(--topbar-height)',
          marginLeft: '0',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          minHeight: 'calc(100vh - var(--topbar-height))',
        }}
      >
        <div className="lg:ml-[280px] xl:mr-[220px]">
          <div className="max-w-[860px] mx-auto py-8 lg:py-12">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
