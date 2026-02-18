# Dogwood Design System

A design system for the Commonwealth — consistent, accessible, and beautifully crafted components for Virginia's state agencies.

## Overview

Dogwood is an open-source design system inspired by USWDS and rooted in Virginia's geography and identity. It provides a unified design language across 80+ state agencies, ensuring citizens have a consistent, trustworthy digital experience.

## Features

- **30+ Production-Ready Components** — Built with React, TypeScript, and accessibility in mind
- **Virginia-Inspired Design Tokens** — Color system based on Virginia geography (Blue Ridge, Chesapeake, Piedmont, Shenandoah, Cardinal, Dogwood)
- **3-Layer Token Architecture** — System → Theme → Component for maximum flexibility
- **WCAG 2.1 AA Compliant** — Accessible by default with keyboard navigation and screen reader support
- **Dark Mode Ready** — Full light/dark theme support
- **Mobile-First** — Responsive components designed for all devices
- **TypeScript** — Fully typed for better developer experience

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the design system documentation.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── docs/          # Documentation components (layouts, code blocks, etc.)
│   └── ui/            # Design system components (Button, Input, Card, etc.)
├── pages/             # Documentation pages
├── tokens/            # Design tokens (colors, spacing, typography)
├── hooks/             # React hooks (theme, clipboard, scroll spy)
├── data/              # Component metadata and navigation
├── styles/            # Global styles and CSS tokens
└── utils/             # Utility functions

```

## Design Principles

1. **Accessible First** — WCAG 2.1 AA is the floor. Every citizen, every ability.
2. **Consistent** — One system across all agencies. Citizens learn once, use everywhere.
3. **Virginia Identity** — Colors from our geography. Fonts chosen for government trust.
4. **Mobile-Ready** — Responsive by default. Most citizens access services on their phones.

## Component Library

- **Form Components**: Button, Input, Select, Checkbox, Radio, TextArea
- **Feedback Components**: Alert, Badge
- **Layout Components**: Card, Table, Breadcrumb, Accordion
- **More Coming Soon**: Header, Footer, Modal, Tabs, Pagination, and more

## Design Tokens

### Color System

- **Blue Ridge** — Deep navy, primary brand
- **Chesapeake** — Teal, informational & interactive
- **Piedmont** — Warm brown, earthy neutral
- **Dogwood** — Gold, accent & attention (Virginia state flower)
- **Shenandoah** — Forest green, success
- **Cardinal** — Red, error & danger
- **Slate** — Neutral grays

### Typography

- **Merriweather** — Serif heading font
- **Source Sans 3** — Sans-serif body font
- **JetBrains Mono** — Monospace code font

### Spacing

8px base grid system with 16 spacing values (0.5rem to 8rem).

## License

MIT License — see [LICENSE](LICENSE) file for details.

## Attribution

Built by [Studio Pimmit](https://studiopimmit.com). Not affiliated with the Commonwealth of Virginia.

## Contributing

This is an open-source demonstration project. Contributions, issues, and feature requests are welcome!

## Links

- [Documentation Site](https://dogwood.studiopimmit.com) (coming soon)
- [GitHub Repository](https://github.com/iyervish/dogwood-design-system)
