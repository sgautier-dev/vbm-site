# VBM repository documentation

This directory is the **repo-safe consolidated V1 reference** for the new Fundación Vivir un Buen Morir website.

It intentionally does not mirror every historical planning document from Drive. Older variants, client validation notes, consent records, source-photo archives and private Drive links remain outside the public repository.

## Authority order

1. `PROJECT_BRIEF.md` — scope, goals and non-goals
2. `SITE_STRUCTURE.md` — final V1 information architecture
3. `DESIGN_SYSTEM.md` — implementation-ready visual rules
4. `CONTENT_MODEL.md` — final V1 dynamic-content boundary
5. `IMPLEMENTATION_CONTRACTS.md` — runtime behavior, fallbacks and publication rules
6. approved page-copy snapshot supplied for the current implementation task
7. `SEO_STRATEGY.md`
8. `REDIRECT_MAP.md`
9. `MAISON_KAILASH_REUSE.md`

`AGENTS.md` at repository root defines agent behavior and conflict resolution.

## Important consolidation decisions

- Sanity V1 has **three visible entries only**: Presencial, Online, Agenda.
- There is **no announcement/banner document type in V1**.
- Internal Sanity names are `trainingPresencial`, `trainingOnline`, and `event`.
- Home + Fundación copy V02 supersedes the earlier V01.
- Working copy notes are not automatically publishable facts.
- The repository is public; private client/consent/source-asset records stay outside Git.
- The brand palette and functional UI palette are related but not identical: accessibility can require a darker interaction token than the raw brand swatch.
