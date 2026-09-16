<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# VBM project instructions

## Project

This repository contains the new website for **Fundación Vivir un Buen Morir (VBM)**, replacing the current WordPress site at `vivirunbuenmorir.es`.

The goal is a simpler, more contemporary, more readable and more robust site while preserving VBM's institutional and human voice. Modernize the structure, presentation and maintenance model without turning VBM into a generic wellness, coaching or lifestyle brand.

The project is independent from ZenCare. ZenCare remains a separate site at `zencare.es`.

## Read project documentation first

Before making project-level changes, read the relevant documents in this order:

1. `docs/PROJECT_BRIEF.md`
2. `docs/SITE_STRUCTURE.md`
3. `docs/DESIGN_SYSTEM.md`
4. `docs/CONTENT_MODEL.md`
5. copy drafts under `docs/content/` when they are present for the pages being implemented
6. `docs/SEO_STRATEGY.md`
7. `docs/REDIRECT_MAP.md`

If documents conflict:

- `PROJECT_BRIEF.md` defines scope and non-goals.
- `CONTENT_MODEL.md` defines what belongs in Sanity.
- page copy drafts define wording.
- `DESIGN_SYSTEM.md` defines the visual system.
- `SEO_STRATEGY.md` and `REDIRECT_MAP.md` define migration and route constraints.
- an explicit task instruction from Sébastien overrides an older planning document when the conflict is deliberate and clear.

Do not treat the old WordPress site as the source of truth when project documents contain a newer decision.

## VBM voice: absolute rule

**The structure and design are modernized; the voice remains VBM.**

Do not rewrite VBM copy into generic marketing, wellness, coaching or self-development language.

Preserve VBM terminology and concepts when present in approved copy, including:

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

Only rewrite site copy when the task explicitly asks for copy changes. Prefer shortening, clarifying and deduplicating over stylistic reinvention.

Visible site content is Spanish. Code, comments, commit messages and technical documentation are English.

## Never invent current facts

Never invent or infer missing prices, dates, schedules, registration links, accreditations, certification conditions, current care services, team members, partners, impact figures, medical or therapeutic guarantees, or external providers.

If a value is not confirmed, use an explicit development TODO, hide the optional feature, use a neutral fallback, or ask for confirmation. Never fill a gap with a plausible value.

## Stack

- Next.js 16.3.x, App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Sanity for intentionally limited, perishable content only
- Vercel deployment
- npm

Before using a Next.js API, follow the generated Next.js agent rule at the top of this file and inspect the local Next.js docs when relevant.

## Architecture

- Use Server Components by default.
- Add `"use client"` only when browser interaction requires it.
- Prefer native platform and Next.js capabilities over heavy dependencies.
- Build reusable components for stable patterns, but avoid premature abstraction.
- Do not create a page builder or generic block CMS.
- Do not create a monorepo with ZenCare.
- Keep permanent editorial content versioned in the repository.
- Keep design tokens centralized rather than hardcoding brand colors throughout components.

## Sanity: intentionally minimal

Sanity is a small operational back office for Mar, not the site-wide editorial engine.

V1 editable types only:

- `trainingPresencial` — singleton
- `trainingOnline` — singleton
- `event` — collection for agenda/activities

Do not add new Sanity document types without explicit approval.

Do not move institutional copy, navigation, footer, team/professorado, page structure, primary imagery, design tokens, structural SEO, module titles/descriptions, testimonials or resources into Sanity in V1 unless a later decision explicitly changes the scope.

The Studio UI must be simple and Spanish, with non-technical labels and help text. Hide unnecessary technical fields from Mar.

The frontend must degrade cleanly when Sanity is unavailable or optional fields are missing. Never render `undefined`, raw empty fields or technical placeholders in production.

## Events

The homepage displays only future or ongoing events.

Use `endDate` when present to determine whether an event is still current; otherwise use `startDate`.

Past events must disappear automatically from homepage listings, but must not be deleted automatically from Sanity.

Event cards must work without an image field.

## Training data

Presencial and Online share stable editorial structure, but their variable edition data comes from separate Sanity singletons.

Do not duplicate Sanity-controlled prices, dates or registration state manually in code.

Do not import old editions into the main current-edition UI unless an explicit archive is requested.

## Assets

Use only approved VBM assets according to the project asset manifest when it is available in the task context.

- `KEEP` / `KEEP WITH RETOUCH`: usable according to the assigned role.
- `SECONDARY`: do not use as a hero.
- `ARCHIVE`: historical use only.
- `DO NOT USE`: never publish.
- `CONSENT NEEDED`, `HOLD`, `CONSENT REQUIRED`: never publish without explicit confirmation.

Do not choose final production imagery from legacy folders based only on filenames.

Use only official logo files. Never recreate, trace, stylize or generate the VBM logo with AI.

If the asset manifest or an approved production asset is not available in the current coding task, do not invent a final asset choice. Build the layout so the approved asset can be inserted later.

## Design direction

Follow `docs/DESIGN_SYSTEM.md`.

The result should feel contemporary, editorial, human, calm, credible, warm without becoming sentimental, and serious without becoming heavy or clinical.

Avoid generic wellness aesthetics, dense association-style galleries, unnecessary gradients, glassmorphism, heavy shadows, decorative overload and spectacular motion.

VBM brand colors are accents, not permanent full-page fills.

Use the documented Figtree + Cormorant SC typography system. Cormorant SC is an editorial accent, not the default heading font for every element.

## Components

Create a shared component only when it serves multiple pages or stabilizes a meaningful visual/interaction pattern. Expected patterns may include Header/MobileMenu, Footer, Container, Section, SectionHeading, Button, Hero, SplitSection, PillarCard, TrainingCard, EventCard, ResourceCard, PersonCard, ImpactMetric, ModuleAccordion, RetreatInfo, TrainingEditionPanel, ZenCareBridge, ContactCTA and Breadcrumbs.

Do not create a large generic design-system abstraction layer merely because these names exist in planning documents. Implement patterns as the real pages require them.

## Accessibility

Target WCAG AA as a minimum: semantic HTML, keyboard navigation, visible focus states, sufficient contrast, explicit form labels, accessible accordions and menus, meaningful alt text, practical 44px touch targets, `prefers-reduced-motion`, and no essential text baked into images.

## SEO and routes

Follow `docs/SEO_STRATEGY.md` and `docs/REDIRECT_MAP.md`.

Always account for page-specific metadata, absolute canonical URLs, sitemap, robots rules, breadcrumbs on deep pages, permanent 301 redirects for confirmed migrations, no `/page/n/` duplication, and no indexable previews or staging routes.

Do not redirect unrelated legacy content to the homepage just to avoid a 404. When changing a route, check the redirect map first.

## Performance

Use `next/image` where appropriate, provide sensible dimensions and `sizes`, avoid unnecessarily large source images, lazy-load below-the-fold media, use Next.js font optimization, minimize client JavaScript, and avoid heavy carousels and autoplay hero video by default.

## Forms, payments and newsletter

These integrations are TBD until explicitly confirmed. Do not add Stripe, PayPal, Mailchimp, Brevo, Resend or another provider without instruction. Do not reproduce old WordPress forms as the default solution.

## ZenCare boundary

ZenCare stays at `zencare.es` in a separate repository. This repository contains only the short `/zencare/` bridge page and relevant external CTAs. Do not duplicate ZenCare practices or internal pages into this project.

## Historical content

When migrating historical articles/resources, preserve original author and publication date when available, preserve meaningful old slugs via redirects, do not silently rewrite historical articles, do not present old information as current, and flag content requiring legal or medical verification before republication.

## Working method

Work in coherent, reasonably broad batches rather than tiny file-by-file tasks.

Planned implementation sequence:

1. bootstrap repository foundation, design tokens, global layout, header/footer and route skeleton
2. Home + Fundación
3. Formación landing + Presencial + Online + Entidades + Retiros
4. Sanity schemas + Studio + queries + agenda
5. Acompañamiento + Recursos + ZenCare + Colabora + Contacto
6. selected historical migration + SEO + redirects + legal pages
7. responsive, accessibility, performance and content QA

At the end of each batch:

- run `npm run lint`
- run `npx tsc --noEmit` until/unless a dedicated typecheck script is added
- run `npm run build`
- fix all errors introduced by the batch
- verify the routes and interactions touched
- provide a short summary of changes and real remaining TODOs

## Git

Prefer clear, scoped commits per coherent batch or sub-batch. Do not mix unrelated refactors with editorial changes. Do not modify generated files or critical config without a documented reason.

## Final principle

When two solutions are technically valid, choose the one that is simplest to maintain, easiest for Sébastien to understand, and least likely to create future administrative work for Mar.
