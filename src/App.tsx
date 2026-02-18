import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/docs/ScrollToTop';
import LandingPage from './pages/LandingPage';
import DocsLayout from './components/docs/DocsLayout';
import FoundationsOverview from './pages/foundations/FoundationsOverview';
import PrinciplesPage from './pages/foundations/PrinciplesPage';
import ColorPage from './pages/foundations/ColorPage';
import TypographyPage from './pages/foundations/TypographyPage';
import SpacingPage from './pages/foundations/SpacingPage';
import ElevationPage from './pages/foundations/ElevationPage';
import IconsPage from './pages/foundations/IconsPage';
import MotionPage from './pages/foundations/MotionPage';
import ComponentsOverview from './pages/components/ComponentsOverview';
import ComponentPage from './pages/components/ComponentPage';
import PatternsOverview from './pages/patterns/PatternsOverview';
import PatternPage from './pages/patterns/PatternPage';
import TemplatesOverview from './pages/templates/TemplatesOverview';
import TemplateLayout from './components/docs/TemplateLayout';
import MinistryHomepage from './pages/templates/MinistryHomepage';
import RTOPortal from './pages/templates/RTOPortal';
import WelfareApplication from './pages/templates/WelfareApplication';
import PIBAnnouncements from './pages/templates/PIBAnnouncements';
import MCAPortal from './pages/templates/MCAPortal';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Docs Routes */}
        <Route element={<DocsLayout />}>
          <Route path="/foundations" element={<FoundationsOverview />} />
          <Route path="/foundations/principles" element={<PrinciplesPage />} />
          <Route path="/foundations/color" element={<ColorPage />} />
          <Route path="/foundations/typography" element={<TypographyPage />} />
          <Route path="/foundations/spacing" element={<SpacingPage />} />
          <Route path="/foundations/elevation" element={<ElevationPage />} />
          <Route path="/foundations/icons" element={<IconsPage />} />
          <Route path="/foundations/motion" element={<MotionPage />} />
          <Route path="/components" element={<ComponentsOverview />} />
          <Route path="/components/:slug" element={<ComponentPage />} />
          <Route path="/patterns" element={<PatternsOverview />} />
          <Route path="/patterns/:slug" element={<PatternPage />} />
          <Route path="/templates" element={<TemplatesOverview />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Template Demo Routes (full-page, outside DocsLayout) */}
        <Route element={<TemplateLayout />}>
          <Route path="/templates/ministry-homepage" element={<MinistryHomepage />} />
          <Route path="/templates/rto-portal" element={<RTOPortal />} />
          <Route path="/templates/welfare-application" element={<WelfareApplication />} />
          <Route path="/templates/pib-announcements" element={<PIBAnnouncements />} />
          <Route path="/templates/mca-portal" element={<MCAPortal />} />
        </Route>
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
