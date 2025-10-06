# Architecture & Code Navigation

This document explains the project structure, naming conventions, and how to navigate the codebase.

## Tech Stack

- React + TypeScript
- Vite (bundler + dev server)
- Tailwind CSS
- GSAP (with ScrollTrigger)

## Top-Level Layout

```
src/
  components/          # Page-level and section components
  Animations/          # Reusable animation primitives (organized by vendor)
    Aceternity/
    ReactBits/         # Trimmed to only the components in use
  lib/                 # Small helpers
  utils/               # Utilities and helpers
  types/               # Shared TypeScript types (add here)
  assets/              # Static assets
```

## Components

- `src/components/About.tsx`: About section, uses GradientText, AnimatedContent, ScrollVelocity, GSAP.
- `src/components/Projects.tsx`: Projects grid, GSAP fade-ups, lazy images.
- `src/components/Service.tsx`: Services with GSAP scroll and layout.
- `src/components/FounderNote.tsx`: Founder’s note with ShinyText and GSAP.
- `src/components/Howwework.tsx`: Timeline with optimized scroll animations.

Conventions:

- One component per file.
- Keep JSX shallow; extract helpers to functions when logic grows.
- Place only minimal comments that clarify intent, not obvious JSX.

## Animations

- `src/Animations/Aceternity/*`: Third-party/UI patterns.
- `src/Animations/ReactBits/*`: Only used components remain:
  - ShinyText, GradientText, ScrollVelocity, AnimatedContent, GridMotion, Noise, StaggeredMenu, ScrollStack

Removed unused: ScrollReveal, ScrollFloat, Aurora, Shuffle, LogoLoop, Masonry, DomeGallery, TextPressure, MagicBento, DarkVeil.

## Types

Add shared domain types under `src/types/` and re-use across components.
Example: `src/types/content.ts`

```ts
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client: string;
  year: string;
  scope: string[];
}
```

## Styling

- Tailwind utility-first classes.
- Prefer semantic containers and consistent spacing.
- Use transitions with sensible durations (200–700ms) and easing (power2.out).

## GSAP Usage

- Register `ScrollTrigger` once per file: `gsap.registerPlugin(ScrollTrigger)`.
- Use `willChange` for animated elements; clear it on complete.
- Prefer `once: true` for enter animations to reduce work.
- Kill triggers in cleanup: `ScrollTrigger.getAll().forEach(t => t.kill())`.

## Performance Practices

- Images: `loading="lazy"`, `decoding="async"`, `fetchPriority` for first image.
- Use `content-visibility: auto` on heavy blocks.
- Remove dead code and unused imports.

## Navigation Guide

- Want to edit sections? Check `src/components/*`.
- Want to adjust animations? Look in `src/Animations/*` used by a component.
- Want to add a new type? Add to `src/types/` and import where needed.
- Global config: `vite.config.ts`, Tailwind config (if present), `tsconfig*.json`.

## Adding a New Section

1. Create `<Section>.tsx` under `src/components/`.
2. Add shared types if needed under `src/types/`.
3. Re-use existing animation primitives from `Animations/*`.
4. Wire into `App.tsx` routing/scroll/nav as appropriate.

## Code Style Highlights

- Clear names: functions as verbs; variables as meaningful nouns.
- Short, helpful comments above complex logic only.
- Early returns; guard clauses; minimal nesting.
- No unused imports or commented blocks left behind.

## Build & Run

```bash
npm i
npm run dev
npm run build
```

---

For quick orientation, start at `src/App.tsx`, then jump into `src/components/` for each section.
