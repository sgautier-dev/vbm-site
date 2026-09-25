<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# VBM project instructions

## Project

This repository contains the new website for **Fundación Vivir un Buen Morir (VBM)**, replacing the current WordPress site at `vivirunbuenmorir.es`.

The goal is a simpler, more contemporary, readable and robust website while preserving VBM's institutional and human voice.

**Core principle: modernize the structure and design; keep the VBM voice.**

ZenCare remains a separate site and repository at `zencare.es`. VBM contains only a short bridge page and relevant external CTAs.

## Source of truth

Before project-level changes, read:

1. `docs/README.md`
2. `docs/PROJECT_BRIEF.md`
3. `docs/SITE_STRUCTURE.md`
4. `docs/DESIGN_SYSTEM.md`
5. `docs/CONTENT_MODEL.md`
6. `docs/IMPLEMENTATION_CONTRACTS.md`
7. `docs/SEO_STRATEGY.md`
8. `docs/REDIRECT_MAP.md`
9. `docs/MAISON_KAILASH_REUSE.md` when implementing shared UI patterns

For page copy, use only the approved copy explicitly provided in the task or an approved repo-safe copy snapshot. Working drafts and client validation notes are not automatically publishable.

If sources conflict:

- `PROJECT_BRIEF.md` defines scope and non-goals.
- `CONTENT_MODEL.md` defines what belongs in Sanity.
- `IMPLEMENTATION_CONTRACTS.md` defines runtime behavior and fallbacks.
- approved page copy defines wording.
- `DESIGN_SYSTEM.md` defines visual implementation.
- `SEO_STRATEGY.md` and `REDIRECT_MAP.md` define route/migration constraints.
- an explicit task instruction from Sébastien overrides an older planning decision when the conflict is deliberate and clear.

Do not treat the old WordPress/Joomla sites as current truth when the consolidated repo docs contain a newer decision.

## Language

- Visible website content: Spanish.
- Code, code comments, commit messages and technical repo documentation: English.
- Do not rewrite approved VBM copy unless the task explicitly asks for copy editing.

## VBM voice

Do not turn VBM into a generic wellness, coaching, lifestyle or self-development brand.

Preserve VBM terminology when it appears in approved copy, including:

- `buen morir`
- `acompañamiento de calidad`
- `calidad de presencia`
- `sabiduría`
- `ecuanimidad`
- `cuidado consciente`
- `amor compasivo`
- `libertad de conciencia`
- `dimensión psicoemocional y espiritual`
- `afrontamiento`
- `bioética`
- `final de vida`

Prefer shortening, clarifying and deduplicating over stylistic reinvention.

## Never invent current facts

Never invent or infer missing:

- prices or payment conditions
- dates or schedules
- registration links
- accreditations
- diploma/certification conditions
- current care services
- current team/professorado
- partners
- impact figures
- current donation/member conditions
- medical or therapeutic guarantees
- form, newsletter or payment providers

If a value is not confirmed, omit it from publishable UI, use a development TODO, or request confirmation. Never fill gaps with plausible values.

## Stack

- Next.js 16.3.x, App Router
- React 19
- TypeScript strict
- Tailwind CSS v4
- Sanity only for the intentionally limited dynamic scope
- Vercel
- npm

Do not upgrade the framework or add experimental features as part of an unrelated batch.

Before using a Next.js API, follow the generated Next.js rule at the top of this file and inspect the local Next.js documentation when relevant.

## Architecture

- Server Components by default.
- Add `"use client"` only where browser interaction actually requires it.
- Prefer platform/Next.js capabilities over heavy dependencies.
- Reuse stable patterns, but avoid premature abstraction.
- No monorepo with ZenCare.
- No generic page builder.
- No generic editorial block system.
- Permanent editorial content remains versioned in code.
- Centralize design tokens; do not hardcode brand colors repeatedly.
- Static navigation: never fetch navigation from Sanity.

## Sanity V1 boundary

Exactly three visible editorial entries in V1:

- `trainingPresencial` — edition collection
- `trainingOnline` — edition collection
- `event` — agenda/activity collection

Do not add an announcement/banner document type in V1.

Do not add new document types without explicit approval.

Do not place these in Sanity in V1:

- institutional copy
- navigation
- footer
- team/professorado
- primary imagery
- design tokens
- page composition
- structural SEO
- module titles/descriptions
- testimonials/resources unless a later explicit decision changes the scope

The Studio must be simple and Spanish. Hide unnecessary technical fields and generic content trees.

## Runtime and fallbacks

Follow `docs/IMPLEMENTATION_CONTRACTS.md`.

The site must distinguish:

1. data source not configured,
2. data source temporarily unavailable,
3. configured and available but with no current items.

Do not show stale invented fallback dates/prices as if they were current.

Optional data should be omitted cleanly. Never render `undefined`, raw empty fields or technical placeholders in production.

## Assets and privacy

Use only approved assets for the role they were approved for.

Status semantics:

- `KEEP` / `KEEP WITH RETOUCH`: usable for the assigned role.
- `SECONDARY`: never a hero.
- `ARCHIVE`: historical only.
- `DO NOT USE`: never publish.
- `CONSENT NEEDED`, `HOLD`, `CONSENT REQUIRED`: never publish without explicit confirmation.

Use official logo files only. Never recreate, trace, stylize or generate the VBM logo with AI.

This repository is public. Do not commit private Drive links, consent records, client correspondence, unpublished personal data, secrets or source assets whose redistribution rights have not been confirmed.

Approval for website publication does not automatically mean approval for redistribution in a public Git repository.

## Design

Follow `docs/DESIGN_SYSTEM.md`.

The result should feel contemporary, editorial, human, calm, credible and serious without being heavy or clinical.

Avoid:

- generic wellness styling
- dense association-style photo galleries
- unnecessary gradients
- glassmorphism
- heavy shadows
- decorative overload
- spectacular motion
- oversized startup-style typography

Use brand colors as accents, not constant full-surface fills.

Use Figtree as the functional/body family and Cormorant SC selectively as an editorial accent.

## Maison Kailash reference

Use `docs/MAISON_KAILASH_REUSE.md`.

Maison Kailash is a tested implementation reference, not a template to copy blindly.

Reuse/adapt structural and interaction patterns where they reduce work. Never import Maison Kailash branding, copy, contact details, production configuration, Sanity schemas, newsletter/forms or secrets.

## Accessibility

Target WCAG AA minimum.

Required:

- semantic HTML
- complete keyboard operation
- visible focus
- sufficient contrast
- explicit labels
- accessible mobile navigation and accordions
- meaningful alt text
- practical ~44px touch targets
- `prefers-reduced-motion`
- no essential text embedded only in images

Do not use the raw VBM brand magenta with white body-sized text for a primary action if the combination fails contrast. Use the documented functional action token.

## SEO and routes

Follow `docs/SEO_STRATEGY.md` and `docs/REDIRECT_MAP.md`.

Use the repo's trailing-slash route convention consistently.

When changing routes, check the redirect map first.

Do not redirect unrelated legacy content to the homepage merely to avoid a 404.

Do not assume a legacy redirect is ready merely because the source URL was verified. The destination content/anchor must exist and the redirect must be tested.

## Performance

- Use `next/image` when appropriate.
- Provide explicit responsive `sizes`.
- Avoid unnecessarily large source files.
- Lazy-load below-the-fold media.
- Use Next.js font optimization.
- Minimize client JavaScript.
- Avoid heavy carousels and autoplay hero video.
- Do not add animation libraries unless a real requirement justifies them.

## Forms, payments and newsletter

These integrations remain out of scope until explicitly confirmed.

Do not add Stripe, PayPal, Mailchimp, Brevo, Resend, Arcjet or another service without instruction.

Do not reproduce old WordPress forms by default.

## Historical content

When historical resources are migrated:

- preserve original author/date when available
- preserve meaningful legacy URLs with a suitable permanent redirect
- do not silently rewrite historical articles
- do not present old information as current
- flag legal/medical content that requires verification before republication

## Working method

Work in coherent batches.

Planned sequence:

1. repo foundation, tokens, global layout, header/footer, route skeleton, content contracts
2. Home + Fundación
3. Formación landing + Presencial + Online + Entidades + Retiros
4. Sanity schemas + Studio + queries + agenda
5. Acompañamiento + Recursos + ZenCare + Colabora + Contacto
6. selected historical migration + SEO + redirects + legal
7. cross-site responsive/accessibility/performance/content QA

Accessibility, responsive behavior and error states are checked within every batch. Batch 7 is the final transverse audit, not the first QA pass.

At the end of each batch:

- run `npm run lint`
- run `npx tsc --noEmit` until a dedicated typecheck script exists
- run `npm run build`
- fix errors introduced by the batch
- verify touched routes/interactions
- report changes and real TODOs briefly

## Git

Prefer clear commits per coherent batch/sub-batch.

Do not mix unrelated refactors with editorial changes.

Do not modify generated files or critical configuration without a reason.

## Final principle

When two solutions are technically valid, choose the one that is simplest to maintain, easiest for Sébastien to understand, and least likely to create future administrative work for Mar.
