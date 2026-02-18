# Dogwood Design System — Implementation Progress

## Project Location
- **Repo**: `/Users/Vishal/Desktop/Work/Code/consulting-website-3`
- **Dogwood source**: `src/dogwood/`
- **Routes**: All under `/dogwood/*` (React Router, same SPA)
- **Deployed at**: `dogwood.studiopimmit.com` (via Vercel, subdomain config needed)

---

## Phase 1: Foundation + Skeleton — COMPLETE

### What's Built

#### Design Tokens (`src/dogwood/styles/tokens.css`, `src/dogwood/tokens/`)
- [x] 6 Virginia-inspired color families (blue-ridge, chesapeake, piedmont, shenandoah, cardinal, slate) — full 50-950 scales
- [x] 3-layer token architecture: System → Theme → Component
- [x] Light/dark mode via CSS custom properties (`.dark` class strategy)
- [x] Typography tokens (Merriweather, Source Sans 3, JetBrains Mono)
- [x] Spacing tokens (8px grid, 16 values)
- [x] Elevation tokens (5 shadow levels)
- [x] Border radius tokens (sm through full)
- [x] Transition tokens

#### Layout Components (`src/dogwood/components/docs/`)
- [x] `DocsLayout.tsx` — sidebar + topbar + scrollable content area with Outlet
- [x] `TemplateLayout.tsx` — full-width with "back to docs" escape hatch
- [x] `Sidebar.tsx` — collapsible navigation tree, responsive (drawer on mobile)
- [x] `TopBar.tsx` — logo, version badge, dark mode toggle, GitHub link
- [x] `TableOfContents.tsx` — right-side TOC with scroll spy

#### Doc Utility Components (`src/dogwood/components/docs/`)
- [x] `CodeBlock.tsx` — syntax-highlighted code with copy button (prism-react-renderer)
- [x] `ColorSwatch.tsx` — click-to-copy color swatches
- [x] `TokenTable.tsx` — generic token display table
- [x] `LivePreview.tsx` — live component preview with toggleable code
- [x] `PropsTable.tsx` — component props documentation table
- [x] `ComponentCard.tsx` — component grid card with status badge
- [x] `DosDonts.tsx` — do/don't usage guidelines

#### Foundation Pages (`src/dogwood/pages/foundations/`)
- [x] `FoundationsOverview.tsx` — grid of foundation sections
- [x] `PrinciplesPage.tsx` — 6 design principles
- [x] `ColorPage.tsx` — full color system with interactive swatches + theme token table
- [x] `TypographyPage.tsx` — font specimens, type scale, usage
- [x] `SpacingPage.tsx` — spacing scale with visual bars + border radius
- [x] `ElevationPage.tsx` — shadow levels with live examples

#### Landing Page (`src/dogwood/pages/LandingPage.tsx`)
- [x] Hero with "A Design System for the Commonwealth"
- [x] Problem statement section
- [x] 3-layer token architecture visual
- [x] Component strip (chip links)
- [x] Stats section (30 components, 7 patterns, 7 templates, WCAG 2.1 AA)
- [x] Attribution footer

#### Routing (`src/App.tsx`)
- [x] All Dogwood routes registered under `/dogwood/*`
- [x] DocsLayout wraps foundation/component/pattern/template/about routes
- [x] Landing page is standalone (no sidebar)
- [x] Main site routes unaffected

#### Data Files (`src/dogwood/data/`)
- [x] `navigation.ts` — sidebar nav tree
- [x] `components.ts` — 12 component metadata entries
- [x] `componentRegistry.tsx` — live preview, props, accessibility, guidelines for all 12 components

#### Hooks (`src/dogwood/hooks/`)
- [x] `useTheme.ts` — dark/light mode with localStorage persistence
- [x] `useCopyToClipboard.ts` — clipboard API with copied state
- [x] `useScrollSpy.ts` — IntersectionObserver for TOC highlighting

---

## Phase 2: Core Components — COMPLETE

### 12 Tier 1 Components (`src/dogwood/components/ui/`)
All with React.forwardRef, className via cn(), CSS custom properties, ARIA attributes:

- [x] `Button/` — 5 variants (primary/secondary/outline/ghost/destructive), 3 sizes, loading, icons
- [x] `Input/` — label, helper text, error state, 3 sizes
- [x] `Select/` — native select with custom styling, error state
- [x] `Checkbox/` — custom styled with checkmark, description, error
- [x] `Radio/` — RadioGroup + Radio, fieldset/legend, descriptions
- [x] `TextArea/` — multi-line, character count, error state
- [x] `Alert/` — 4 variants (info/success/warning/error), dismissible, default icons
- [x] `Card/` — composable (Card/Header/Title/Description/Content/Footer), 3 variants
- [x] `Badge/` — 6 variants, 2 sizes, pill shape
- [x] `Table/` — composable, striped, hoverable, compact, semantic HTML
- [x] `Breadcrumb/` — react-router links, aria-current, separator
- [x] `Accordion/` — single/multiple mode, animated, proper ARIA

### Component Documentation
- [x] `ComponentsOverview.tsx` — categorized grid of all components
- [x] `ComponentPage.tsx` — template with live preview, variants, props table, code, accessibility, guidelines
- [x] Component registry maps all 12 components to their doc pages

### Overview Pages
- [x] `PatternsOverview.tsx` — 7 patterns listed (marked "coming soon")
- [x] `TemplatesOverview.tsx` — 7 templates listed (marked "coming soon")
- [x] `AboutPage.tsx` — project info, inspiration, open source

---

## Build Status
- `npx tsc --noEmit` — PASSES (0 errors)
- `npm run build` — PASSES (1.01 MB bundle, could benefit from code splitting)
- Google Fonts loaded: Merriweather, Source Sans 3, JetBrains Mono

---

## What's Next

### Phase 3: Navigation Components + Patterns — COMPLETE
- [x] Build 10 Tier 2 components: Header (GovBanner), Footer, SideNavigation, Pagination, Tabs, Modal/Dialog, Banner, StepIndicator, Tooltip, Search
- [x] Build 3 priority patterns: Form Pattern, Search Results, Status Tracker
- [x] Add component data + registry entries for Tier 2

### Phase 4: Sample Pages — COMPLETE
- [x] Build TemplateLayout rendering (with "Back to docs" overlay)
- [x] Build 4 priority templates: Agency Homepage, DMV Portal, Benefit Application, News & Announcements
- [x] Wire routes in App.tsx using TemplateLayout
- [x] Update TemplatesOverview with live demo links (4 built, 3 coming soon)
- [x] Update navigation.ts with template sub-links

### Phase 5: Polish + Advanced
- [ ] Build 8 Tier 3 components: DatePicker, FileInput, ComboBox, Toast, DataTable, ProgressBar, Avatar, Skeleton
- [ ] Build remaining 3 templates (Services & Permits, Contact / Office Finder, Status Tracker)
- [ ] Build Cmd+K search (SearchDialog.tsx)
- [ ] Build remaining patterns (4): Authentication, Data Dashboard, Contact Info, News Feed
- [ ] Lighthouse audit + a11y fixes
- [ ] Code splitting for bundle size
- [ ] README.md + LICENSE

### Deployment
- [ ] Configure `dogwood.studiopimmit.com` subdomain on Vercel
- [ ] Or deploy as separate Vercel project if preferred

---

## File Structure Summary

```
src/dogwood/
├── components/
│   ├── docs/           # 7 doc utility components
│   │   ├── CodeBlock.tsx
│   │   ├── ColorSwatch.tsx
│   │   ├── ComponentCard.tsx
│   │   ├── DocsLayout.tsx
│   │   ├── DosDonts.tsx
│   │   ├── LivePreview.tsx
│   │   ├── PropsTable.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── TemplateLayout.tsx
│   │   ├── TokenTable.tsx
│   │   └── TopBar.tsx
│   └── ui/             # 12 design system components
│       ├── Accordion/
│       ├── Alert/
│       ├── Badge/
│       ├── Breadcrumb/
│       ├── Button/
│       ├── Card/
│       ├── Checkbox/
│       ├── Input/
│       ├── Radio/
│       ├── Select/
│       ├── Table/
│       └── TextArea/
├── data/
│   ├── componentRegistry.tsx
│   ├── components.ts
│   └── navigation.ts
├── hooks/
│   ├── useCopyToClipboard.ts
│   ├── useScrollSpy.ts
│   └── useTheme.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── LandingPage.tsx
│   ├── components/
│   │   ├── ComponentPage.tsx
│   │   └── ComponentsOverview.tsx
│   ├── foundations/
│   │   ├── ColorPage.tsx
│   │   ├── ElevationPage.tsx
│   │   ├── FoundationsOverview.tsx
│   │   ├── PrinciplesPage.tsx
│   │   ├── SpacingPage.tsx
│   │   └── TypographyPage.tsx
│   ├── patterns/
│   │   └── PatternsOverview.tsx
│   └── templates/
│       └── TemplatesOverview.tsx
├── styles/
│   ├── globals.css
│   └── tokens.css
├── tokens/
│   ├── colors.ts
│   ├── index.ts
│   ├── spacing.ts
│   └── typography.ts
├── utils/
│   └── cn.ts
└── plan.md
```
