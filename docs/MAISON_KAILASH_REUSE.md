# VBM — Maison Kailash Reuse Plan

Reference repository: `sgautier-dev/maisonkailash`

Purpose: save implementation time by reusing tested patterns without importing Maison Kailash's identity or operational stack.

## Reuse/adapt

### Tailwind v4 token approach

Maison Kailash centralizes colors, radii, typography aliases and reusable component classes in `globals.css` via Tailwind v4 `@theme`.

VBM should reuse this **architecture**, replacing all MK tokens with VBM tokens.

Useful patterns to adapt:

- centralized semantic colors
- `section-padding`
- `section-container`
- heading utility classes
- primary/secondary button classes
- nav active underline pattern
- reduced-motion-safe motion approach

Do not copy MK palette values.

### Header interaction architecture

Maison Kailash has a tested responsive header with:

- sticky lightweight chrome
- active-route handling
- desktop navigation
- accessible mobile drawer
- keyboard-friendly disclosure/popover patterns
- separate primary CTA

VBM navigation is simpler, so **reduce the component instead of copying it whole**.

VBM target:

```text
Fundación / Formación / Acompañamiento / Recursos / ZenCare / [Colabora]
```

A Formación dropdown is optional only if it improves navigation; do not create nested complexity automatically.

The current Maison Kailash implementation uses Headless UI and Heroicons. They are permitted for VBM if reusing the accessible interaction pattern genuinely saves work. Do not import unrelated Maison Kailash dependencies.

### Footer layout

Reuse the idea of:

- compact multi-column desktop layout
- brand + short identity
- contact/navigation/legal grouping
- clean copyright line

Do **not** copy:

- Maison Kailash address/phone
- newsletter signup
- social URLs
- health/wellness wording

Only confirmed VBM contact/social information is published.

### Route group layout

Maison Kailash uses a `(site)` layout containing Header/Footer.

This is a good pattern if VBM later embeds Sanity Studio under a separate route group.

Do not make navigation depend on Sanity; VBM navigation is static.

## Do not reuse by default

- ContactForm
- NewsletterSignup
- Arcjet setup
- Resend setup
- existing Sanity schemas/queries
- dynamic navigation from Sanity
- Maison Kailash copy
- Maison Kailash images/logos
- Vercel Analytics until analytics/privacy decisions are confirmed
- service-booking components
- wellness-specific page templates

## Dependency policy

Current VBM starter should remain lean.

Add a dependency only when Batch 1 actually uses it.

Permitted likely reuse candidates:

```text
@headlessui/react
@heroicons/react
```

Do not copy the full Maison Kailash dependency list.

## Design reuse boundary

Reuse:

- layout rhythm
- responsive behavior
- interaction quality
- implementation conventions

Replace:

- brand palette
- typography roles
- copy
- image treatment
- section composition where VBM requires a more institutional/editorial tone

VBM must look like VBM, not a recolored Maison Kailash.
