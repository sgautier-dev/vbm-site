# VBM — SEO Strategy

Version: consolidated V1 — September 2026

## Goal

Preserve useful existing search equity while simplifying architecture and removing technical duplication.

The initial launch objective is **migration safety and clarity**, not artificial ranking growth.

## Principles

- Do not sacrifice valuable historical URLs solely for a prettier tree.
- Removed public content either remains accessible, redirects to the closest true equivalent, or is deliberately retired.
- Never mass-redirect unrelated content to the homepage.
- Preserve useful historical resources/backlinks selectively.
- SEO must not rewrite VBM into keyword-stuffed marketing language.
- One page = one clear primary intent.

## Indexable architecture

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

Selected historical articles may live under:

```text
/recursos/articulos/[slug]/
```

## Semantic focus

- Home: Fundación Vivir un Buen Morir, buen morir, acompañamiento al final de la vida, formación, divulgación
- Fundación: misión, valores, cultura del cuidado, final de vida
- Formación: Formación VBM, Vivir un Buen Morir y el Arte de Acompañar
- Presencial: formación presencial sobre final de vida y acompañamiento
- Online: formación online en directo sobre final de vida y acompañamiento
- Entidades: formación a medida para instituciones/equipos sociosanitarios
- Retiros: experiential retreats linked to Formación VBM
- Acompañamiento: orientation, end-of-life accompaniment, grief and advance directives where current/validated
- Recursos: articles, videos, conferences and VBM resources
- ZenCare: VBM project, contemplative care, conscious attention, compassionate accompaniment

## Metadata

Each indexable page gets deliberately written metadata.

Do not generate final title/description mechanically from the H1.

Canonical public host:

```text
https://vivirunbuenmorir.es
```

Use absolute canonical URLs for indexable public pages.

## Heading hierarchy

- one H1 per page
- H2 for major sections
- H3 for real subsections/cards where semantically appropriate
- never choose heading levels only for visual size

## Formación duplication control

- `/formacion/` explains the global program, objectives and methodology
- `/formacion/presencial/` explains the present mode and current edition data
- `/formacion/online/` explains online-specific behavior and current edition data
- module content has one shared technical source

## Articles and archives

Prioritize historical resources with:

- editorial value
- continuing relevance
- known external links/backlinks
- institutional/historical value

Preserve original author/date when available.

If content is substantially updated, make the update explicit.

Do not recreate WordPress-style homepage pagination.

## Indexation

Index/follow:

- main public pages
- training pages
- quality resources
- migrated historical articles

Noindex:

- previews
- technical routes
- staging/preview environments
- low-value pagination/filter pages if any

## Sitemap and robots

Generate sitemap/robots with Next.js.

Include only real public indexable URLs.

Agenda does not need individual event URLs in V1 unless those pages are later intentionally introduced with enough content.

## Structured data

Use only complete, truthful data.

Candidates:

- Organization globally
- BreadcrumbList on deeper pages
- Article on migrated editorial resources
- Event only if a sufficiently complete individual event page exists later

## Internal linking

Key paths:

```text
Home → Fundación / Formación / Acompañamiento / Recursos / Colabora
Formación → Presencial / Online / Entidades / Retiros
Acompañamiento → relevant verified resources
ZenCare → zencare.es
```

ZenCare should identify VBM as the parent foundation where appropriate; VBM should identify ZenCare clearly as its project.

## Redirect semantics

The migration goal is a **permanent redirect**, not a dogmatic dependence on one status code label.

Use the appropriate Next.js permanent-redirect mechanism for the installed version, verify the actual HTTP behavior and document it.

A redirect is not "done" until:

1. source URL is known
2. destination content/anchor exists
3. destination is semantically appropriate
4. redirect is implemented
5. redirect is tested

## Crawl strategy

Do two passes:

### Early inventory

Before deep migration work:

- inventory current WordPress URLs
- inventory historical Joomla URLs if accessible
- identify obvious PDFs/media with value
- compare with the working redirect map

Purpose: discover migration scope early.

### Pre-launch authoritative crawl

Immediately before launch:

- crawl both legacy sources again
- export status/title/canonical
- merge Search Console URLs if available
- compare against final redirect map
- test every implemented permanent redirect
- check internal 404s
- check chains/loops
- submit the new sitemap after launch
- monitor 404s and impressions

## Historical Joomla

If under VBM control, useful Joomla URLs should migrate/redirect to true equivalents.

Do not leave indexable duplicate historical content indefinitely.
