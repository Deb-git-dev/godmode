# /design-md — Export Any Website as design.md

> Curated by ALPHENEX.AI · Top 10 Claude Frontend Design Skills (2026)

## Execution Instructions
When the user invokes `/design-md <URL>` or provides a website URL:
1. Fetch and scrape the target website content using the Firecrawl v2 client (`src/lib/firecrawl.ts` / `https://mcp.firecrawl.dev/v2/mcp`).
2. Act as a senior UX/UI designer and analyze the website architecture.
3. Structure and generate clean, comprehensive design documentation in Markdown format conforming to the exact schema below:

```markdown
# Design Specification: [Website / Product Name]

## 1. Overview
- **Purpose**: Core mission and function of the website.
- **Audience**: Target demographics, user personas, and intent.
- **Value Proposition**: Key differentiator and conversion angle.

## 2. Information Architecture
- Navigation hierarchy and sitemap.
- Content groupings and reading flow.

## 3. Page Layout Breakdown
- Header / Hero Section (focal points, CTA placement, value hook).
- Content Sections (bento grids, feature lists, alternating blocks).
- Social Proof / Testimonials (TokComment proof, metrics badges, customer quotes).
- Conversion / Lead Capture (forms, tiered pricing tables, checkout funnel).
- Footer (statutory navigation, legal links, provenance).

## 4. UI Components Catalog
- Primary & Secondary Action Buttons (states, padding, border-radius).
- Cards & Surface Elevation (1px border alpha, backdrop-blur, subtle specular glow).
- Form Controls (input fields, dropdowns, validation states).
- Modals, Drawers & Toast feedback.

## 5. Design System & Tokens
- **Colors**: Canvas background, card surface, primary/secondary accents, borders, status alerts.
- **Typography**: Headline font, body font, monospace data metrics, tracking, line-height.
- **Spacing Scale**: 4px/8px base grid, padding rhythms, container max-widths.

## 6. Responsive & Adaptive Behavior
- Viewport breakpoints (Mobile: 375px-640px, Tablet: 768px-1024px, Desktop: 1280px+).
- Fluid typography and responsive grid collapse.

## 7. Interaction Patterns & Motion
- Hover, focus-visible, and active micro-interactions.
- Motion curves, scroll triggers, and `prefers-reduced-motion` safety fallbacks.

## 8. Strengths & Recommended Improvements
- What the design excels at.
- Concrete anti-slop refactoring suggestions.
```
4. Save the output directly into `design_specs/[product]-design.md` or present it to the user.
