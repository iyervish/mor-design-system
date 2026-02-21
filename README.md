# Mor Design System

An accessibility-first design system for India's civic digital services — consistent, trustworthy, and beautifully crafted components for government agencies and public institutions.

## Overview

Mor is an open-source design system built for India's digital governance ecosystem. Inspired by systems like USWDS and rooted in India's cultural identity, it provides a unified design language across government services, ensuring citizens have a consistent and accessible digital experience.

## Features

- **22 Production-Ready Components** — Built with React, TypeScript, and accessibility in mind
- **India-Inspired Design Tokens** — Color system drawn from Indian nature and mythology (Firoza, Mayura, Mitti, Sona, Vana, Laal, Dhumra)
- **3-Layer Token Architecture** — Primitives → Semantic → Component for maximum flexibility
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
2. **Consistent** — One system across all services. Citizens learn once, use everywhere.
3. **Indian Identity** — Colors drawn from nature and mythology. Typography chosen for government trust.
4. **Mobile-Ready** — Responsive by default. Most citizens access services on their phones.

## Component Library

- **Form Components**: Button, Input, Select, Checkbox, Radio, TextArea
- **Feedback Components**: Alert, Badge
- **Layout Components**: Card, Table, Breadcrumb, Accordion
- **Navigation**: Header, Footer, Tabs, Pagination, and more

## Design Tokens

### Color System

- **Firoza** — Teal, primary brand and interactive
- **Mayura** — Cobalt, informational (inspired by the peacock)
- **Mitti** — Terracotta, earthy warm neutral
- **Sona** — Gold, accent and attention
- **Vana** — Forest green, success
- **Laal** — Red, error and danger
- **Dhumra** — Neutral grays

### Typography

- **Heading font** — Chosen for authority and legibility
- **Body font** — Sans-serif, optimized for screen reading
- **Mono font** — For code and technical content

### Spacing

8px base grid system with 16 spacing values (0.5rem to 8rem).

## License

MIT License — see [LICENSE](LICENSE) file for details.

## Contributing

This is an open-source project. Contributions, issues, and feature requests are welcome!
