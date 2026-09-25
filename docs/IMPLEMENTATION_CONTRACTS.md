# VBM — Implementation Contracts

Version: consolidated V1 — September 2026

These rules convert planning language into deterministic runtime behavior.

## 1. Event date semantics

V1 stores agenda dates as civil dates (`YYYY-MM-DD`), not UTC timestamps.

Business timezone for date boundaries: `Europe/Madrid`.

If `endDate` exists:

- the event is current through the end of `endDate`
- it becomes past on the following local calendar day

If `endDate` is absent:

- the event remains current through the end of `startDate`

`timeLabel` is display-only free text for an optional hour/schedule. Do not use it for automatic expiration logic.

This avoids timezone-driven early disappearance while keeping Mar's editing workflow simple.

## 2. Homepage event selection

`featured` means **eligible for homepage**, not merely "ranking boost".

Homepage query/render rule:

1. merge independent Agenda events and derived Presencial retreats
2. exclude past events
3. require `featured === true`
4. sort by `startDate` ascending
5. show up to 4

Agenda page:

1. upcoming/current events first, chronological
2. recent past archive only if/when the page design enables it

An event leaving the homepage must never be deleted automatically from Sanity.

## 3. Dynamic-data freshness

Time-dependent lists must not rely exclusively on a publish webhook.

Published reads use a one-hour revalidation fallback so pages eventually recalculate after local date changes even if nobody edits Sanity. A signed Sanity publication webhook invalidates the corresponding data cache tags immediately. Development reads use no Next data cache and bypass the Sanity CDN.

The exact Next.js caching API must follow the installed Next.js 16.3 documentation.

## 4. Sanity states

UI must distinguish:

### Not configured

Development/build environment has no Sanity configuration.

Expected behavior:

- static site shell still builds where practical
- dynamic sections are omitted or show an intentional non-production development state
- no fake dates/prices

### Temporarily unavailable

Configuration exists but fetch fails.

Expected behavior:

- page remains usable
- optional dynamic block is omitted or displays a neutral generic state
- no stale invented "current" values
- log/observability can record the failure without exposing technical details to visitors

### Available but empty

The request succeeded but there are no current items.

Expected behavior:

- "Próximas actividades" can be omitted or use approved generic empty-state copy
- never show old events as a fallback

Missing Presencial editions do not make independent Agenda events unavailable. An empty Agenda collection does not hide dated Presencial retreats.

## 5. Registration status

Internal values:

```text
open   → Abierta
soon   → Próximamente
closed → Cerrada
```

Only show a registration CTA when a valid destination exists and the current status permits the intended action.

Do not render a dead "Inscríbete" button with no URL.

## 6. Training source of truth

Training data comes from the corresponding edition collection. Public Presencial and Online pages select published editions with `year >=` the current Europe/Madrid year, ordered by year ascending, maximum two. An empty successful query returns `available` with `[]`. Historical editions remain in Sanity.

Do not duplicate current dates/prices into static page data.

Stable academic modules live in one static shared source used by Formación/Presencial/Online.

## 7. Retreat data

Each Presencial edition owns its editable retreat data in V1, including public title, dates, schedule label, location, summary, external URL and Home eligibility.

A Presencial retreat with a valid start date is derived at read time as an ordinary public event with category `retreat`. Retreats from all published Presencial editions participate in Agenda, Home when featured, and Próximos retiros. Past derived retreats follow the same Europe/Madrid civil-date rule as independent events.

Do not create a second independent `event` document for the same training retreat. The Agenda collection owns only independent activities, including independent retreats. No fuzzy title/date deduplication is performed.

The training-specific retreat `note` is not copied into the public event excerpt.

Online retreat participation/dates remain a business-validation point. Do not model separate Online retreat dates until a real difference is confirmed.

## 8. Publication status of copy

Three distinct concepts:

1. **approved wording** — agent should preserve wording
2. **validated current fact** — safe to publish as current
3. **working/internal note** — never publish

A copy draft can contain approved-style wording and still mention facts awaiting validation.

Do not strip an internal warning and publish the associated claim.

## 9. Public repository boundary

The GitHub repository is public.

Allowed:

- application code
- repo-safe technical docs
- final public copy
- public-safe optimized assets when redistribution is permitted

Keep outside Git:

- private Drive URLs
- raw consent records
- patient/participant personal information
- client correspondence
- unvalidated private operational details
- credentials/tokens
- raw source assets whose public redistribution rights are uncertain

Website publication approval and public-repository redistribution are separate checks.

## 10. Route convention

Use trailing slashes consistently.

Configure Next.js rather than manually constructing inconsistent URL variants.

## 11. QA is incremental

Each batch checks:

- mobile + desktop behavior
- keyboard/focus for touched interactions
- new contrast combinations
- empty/error states
- lint
- typecheck
- production build

The final QA batch repeats these checks across the complete site.
