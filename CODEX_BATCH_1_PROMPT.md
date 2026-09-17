# Codex Batch 1 — VBM foundation

Work on repository `sgautier-dev/vbm-site`.

This is **Batch 1 only**. Build the technical/UI foundation. Do not implement the full page copy, Sanity Studio, forms, payment, newsletter, historical migration or final SEO migration yet.

## Read first

Read the repository root `AGENTS.md`, then:

1. `docs/README.md`
2. `docs/PROJECT_BRIEF.md`
3. `docs/SITE_STRUCTURE.md`
4. `docs/DESIGN_SYSTEM.md`
5. `docs/CONTENT_MODEL.md`
6. `docs/IMPLEMENTATION_CONTRACTS.md`
7. `docs/MAISON_KAILASH_REUSE.md`
8. `docs/SEO_STRATEGY.md`

Inspect the local Next.js documentation under `node_modules/next/dist/docs/` before relying on Next.js APIs that may differ from older versions.

## Current starter

Keep the existing Next.js 16.3.x / React 19 / TypeScript / Tailwind v4 starter.

Do not upgrade Next.js, React or TypeScript in this batch.

Do not enable React Compiler.

## Reference implementation

Maison Kailash is available at `sgautier-dev/maisonkailash`.

Use it as a tested structural/interaction reference, especially:

- `src/app/globals.css`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- the site layout/navigation pattern

Do not copy Maison Kailash branding, content, contact data, Sanity model, newsletter/forms, analytics or unrelated dependencies.

## Tasks

### 1. Clean starter

Remove Create Next App demo UI/assets that are no longer needed.

Keep the repo minimal.

### 2. Global routing/config foundation

Use the public trailing-slash convention documented in `SITE_STRUCTURE.md`.

Set Spanish document language.

Create the main route skeleton:

```text
/
/fundacion/
/formacion/
/formacion/presencial/
/formacion/online/
/formacion/entidades/
/formacion/retiros/
/acompanamiento/
/recursos/
/recursos/agenda/
/recursos/articulos/
/recursos/videos/
/zencare/
/colabora/
/contacto/
```

Skeleton pages may contain only their real Spanish page title/H1. Do not invent detailed copy.

Do not build legal pages yet.

Add a clean custom 404/not-found page with minimal approved-neutral Spanish wording.

### 3. Fonts

Implement:

- Figtree for body/UI
- Cormorant SC selectively for editorial/display use

Use Next.js font tooling appropriate to the installed version.

Remove Geist from the starter.

### 4. Design tokens

Translate `docs/DESIGN_SYSTEM.md` into centralized Tailwind v4/CSS tokens.

Keep brand swatches separate from functional UI tokens.

Primary CTA must use the accessible functional action magenta, not raw brand magenta with white normal text.

Create only useful primitives now, for example:

- container
- section spacing
- display/section heading utilities
- primary/secondary buttons
- text link
- focus treatment

Avoid building a large abstract component library.

### 5. Static navigation model

Create a typed static navigation source under `src/lib/`.

Navigation must not depend on Sanity.

Main navigation:

```text
Fundación
Formación
Acompañamiento
Recursos
ZenCare
Colabora
```

Logo/brand home link is separate.

### 6. Header and mobile navigation

Build a reusable accessible Header based on the good parts of Maison Kailash.

Requirements:

- static navigation
- desktop layout
- mobile drawer/menu
- keyboard accessible
- clear focus states
- current-route indication
- Colabora as primary CTA
- no unconfirmed contact-phone shortcut
- no final logo invention

Until an official VBM logo asset is deliberately added, use an accessible text brand fallback (`Fundación Vivir un Buen Morir`) rather than inventing/redrawing a logo.

If Headless UI/Heroicons are reused for accessibility and speed, install only the packages actually used.

### 7. Footer

Build a compact reusable Footer.

Include structural links only.

Do not include:

- newsletter
- unconfirmed address/phone
- unconfirmed social channels
- payment/donation mechanism

Include legal link placeholders only if their target routes already exist; otherwise omit them until the legal batch.

### 8. Content data contracts

Create lightweight TypeScript interfaces/types matching `docs/CONTENT_MODEL.md` and `docs/IMPLEMENTATION_CONTRACTS.md`.

This is **not** the Sanity implementation.

Do not install/configure Sanity in this batch unless the existing repo already requires it.

Purpose: Batch 3 page components should be able to depend on a stable shape before Batch 4 connects the CMS.

### 9. Metadata foundation

Replace Create Next App metadata.

Set a conservative site-wide title template/name and `metadataBase` for `https://vivirunbuenmorir.es`.

Do not invent final page descriptions.

Do not implement the full sitemap/redirect migration in Batch 1.

### 10. No unnecessary features

Do not add:

- dark mode
- animation library
- carousel
- page builder
- generic CMS abstraction
- newsletter
- forms
- analytics
- payment
- fake Sanity data
- placeholder current dates/prices
- final image selections

## Quality gates

Before finishing:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Fix all introduced issues.

Verify at least:

- all skeleton routes render
- desktop header
- mobile menu keyboard operation
- focus states
- no horizontal overflow at common mobile widths
- primary CTA contrast implementation
- 404 behavior

## Deliverable

Return a short summary containing:

- files/components added or materially changed
- dependencies added and why
- routes created
- QA commands/results
- real TODOs left for Batch 2+

Do not begin Batch 2 in the same task.
