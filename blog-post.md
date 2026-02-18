# Building a Design System for an Entire State

I've been thinking a lot about what happens when 80 state agencies all need digital services and none of them share a common design language. Each one hires its own vendor, picks its own component library, builds its own buttons. The result is predictable: inconsistent experiences for citizens, duplicated effort across teams, and accessibility that ranges from "pretty good" to "nonexistent."

That's the problem Dogwood is trying to solve.

---

## What Dogwood Actually Is

Dogwood is a design system for the Commonwealth of Virginia. Not a starter kit. Not a Figma file with aspirational spacing tokens. It's 22 production-ready components, 7 design patterns, and 5 full-page government templates—all built to WCAG 2.1 AA compliance out of the box.

The name comes from Virginia's state flower. And that's not just branding—it's a design decision that runs through the entire system.

---

## The Real Cost of Going It Alone

Here's what happens when every agency handles digital services independently: a citizen who files taxes, renews their vehicle registration, and applies for a benefit program is effectively using three different products. Different visual languages. Different interaction patterns. Different accessibility outcomes.

For the agencies, it's worse. Each team is solving the same problems from scratch—same button, same form, same navigation pattern—without the benefit of what anyone else has figured out. That's not just inefficient. It's a compounding liability. Every team that rolls their own solution is a team that might get accessibility wrong, might not handle mobile well, might ship something that looks nothing like the rest of state government.

A shared design system changes that math entirely. Build it once, build it well, and 80 teams get reliable components instead of reinventing them. The investment is front-loaded; the returns compound over time.

---

## Naming Colors After the Land

Most design systems name their colors something like `blue-600` or `primary-dark`. Functional, forgettable. Dogwood takes a different approach: every color family is named after Virginia geography.

- **Blue Ridge** — deep navy tones, inspired by the mountains. Used for primary brand and authority.
- **Chesapeake** — teal, drawn from the bay. Used for information and interactive states.
- **Shenandoah** — forest green, from the valley. Used for success states.
- **Cardinal** — red, from the state bird. Used for errors.
- **Dogwood** — warm gold, from the flower itself. Used for accents and warnings.
- **Piedmont** — earthy brown, from the clay-rich region. A warm neutral alternative.
- **Slate** — blue-gray. The workhorse for text, borders, and backgrounds.

It might seem like a small thing, but naming matters. When a developer writes `--blue-ridge-600`, they're referencing something with identity. It's not a generic system that could belong to any state or any company. It belongs to Virginia. And for citizens interacting with these services, there's something grounding about that—even if they never see the variable names. Government digital services shouldn't feel like SaaS products. They should feel like the place they're from.

---

## Flexibility Without Fragmentation

One of the harder design problems in any shared system is the tension between consistency and flexibility. Agencies have different needs. A DMV portal looks different from a benefits application. But if every agency customizes everything, you lose the consistency that makes the system worth having.

Dogwood resolves this with a layered token architecture. Raw color values live at one level. Semantic meanings—primary, error, success—map to those values at another. Components consume the semantic layer, not the raw values. The practical result: an agency can adjust the feel of their implementation without breaking the system's visual coherence. Dark mode, alternate themes, agency-specific accents—all handled at the theming layer, not by forking components.

This matters enormously for long-term maintenance. A system that's easy to customize is a system that gets adopted. A system that requires forking is a system that gets abandoned.

---

## Components That Actually Ship

It's easy to build a design system that looks great in demos and falls apart when a team with limited frontend expertise tries to use it. Dogwood's components are built with the assumption that they'll land in real government applications—maintained by teams who may not have dedicated designers or senior engineers.

That means full keyboard navigation, ARIA attributes, and accessibility compliance aren't optional features. They're the baseline. An agency team shouldn't have to audit every component for compliance before shipping. That work is already done.

The component set covers the essentials without chasing novelty: Button, Input, Select, Checkbox, Radio, TextArea, Search, Alert, Badge, Banner, Tooltip, Card, Table, Accordion, Modal, Breadcrumb, Pagination, Tabs, StepIndicator, SideNavigation. Plus two components that reflect the government context specifically: a `GovBanner` (the official Commonwealth identifier strip) and a structured `Footer`.

Nothing exotic. A government design system doesn't need novelty. It needs reliability.

---

## Templates Over Demos

Most design systems show you a button in isolation and wish you luck. Dogwood ships five full-page templates that show how components compose into real government services:

- An agency homepage
- A DMV portal
- A benefit application flow
- A news and announcements layout
- A State Corporation Commission (SCC) portal

The SCC Portal is the most fully realized—entity search, certificate verification, fee payment, property lookup. The kind of workflows that state government actually runs on. It's built entirely from Dogwood components, and it works as a blueprint an agency team can take and adapt.

For a team without a dedicated designer, that's significant. The difference between "blank canvas" and "working template" might be the difference between shipping something good and shipping something that gets quietly abandoned. Templates lower the barrier to getting started, which is the hardest part of any new initiative.

---

## Typography With Intent

Three typefaces, each chosen deliberately:

- **Merriweather** (serif) for headings. It conveys trust and permanence—qualities that matter in government communication.
- **Source Sans 3** (sans-serif) for body text. The same family used by the U.S. Web Design System, battle-tested for readability at government scale.
- **JetBrains Mono** for code. Useful for technical documentation and developer-facing content.

The type system has 11 levels and sits on a consistent spacing grid. The goal isn't to be interesting—it's to be legible, trustworthy, and consistent across every agency that uses it.

---

## The Adoption Problem Is the Real Problem

A design system is only as good as its uptake. You can build the most technically sophisticated component library in the world, and if agencies don't use it, nothing changes. Citizens still get inconsistent experiences. Teams still duplicate effort. Accessibility still varies wildly.

Virginia has 80+ agencies, each with its own procurement process, its own technical constraints, its own existing vendors and relationships. Getting Dogwood into production across the Commonwealth is a longer and harder project than building it in the first place.

But the foundation matters. A system that's well-documented, accessible by default, flexible enough to handle agency-specific needs, and concrete enough that a team can go from zero to working template in days—that system has a real shot at adoption. One that requires extensive customization, has compliance gaps, or assumes a level of design maturity most government teams don't have? It won't get past the pilot.

Dogwood is designed with adoption in mind. That's the bet.

---

## What This Model Gets Right

For any state or municipality watching from the sidelines, wondering whether it's worth building a shared design system instead of letting every agency fend for itself: the math isn't complicated. The question is whether the upfront investment in a shared system costs more than the ongoing cost of 80 teams building the same things independently, getting them wrong at different rates, and leaving citizens to navigate the inconsistency.

The answer is almost never "let every agency keep doing their own thing." The question is just what the shared system looks like and who owns it.

Virginia's approach—a system with clear identity, deep accessibility compliance, real templates, and a token architecture that handles flexibility without fragmentation—is a model worth studying.

---

*Dogwood is open source under the MIT license. Built by [Studio Pimmit](https://studiopimmit.com).*
