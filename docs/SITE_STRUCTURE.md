# VBM — Site Structure

Version: consolidated V1 — September 2026

## Main navigation

- Inicio → `/`
- Fundación → `/fundacion/`
- Formación → `/formacion/`
- Acompañamiento → `/acompanamiento/`
- Recursos → `/recursos/`
- ZenCare → `/zencare/`
- Colabora → `/colabora/` (primary navigation CTA)

The logo links to `/`.

Contacto is available from the footer/contextual CTAs rather than consuming a primary navigation slot.

## Route convention

Use a consistent **trailing slash** convention for public pages.

Target routes:

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

Legal pages are added in the legal/launch batch with final names aligned to the current site and Spanish legal requirements.

## Homepage structure

Keep the homepage editorial and relatively short.

1. Mission-led hero
2. Three areas — Formación / Acompañamiento / Divulgación
3. Formarse con VBM — Presencial / Online / Entidades
4. Próximas actividades — dynamic
5. Acompañamiento editorial block
6. ZenCare bridge
7. Impact
8. Curated resources
9. Colabora CTA

The homepage must not become an archive aggregator.

## Fundación

Single long page combining the institutional material that was previously fragmented:

1. Hero / mission
2. Razón de ser
3. Three action areas
4. Short history
5. Values
6. Mar López
7. Current team
8. Impact
9. Transparency / annual reports
10. Final CTA

No separate "Profesorado" or generic institutional subsite is required in V1.

## Formación

`/formacion/` explains the program itself and routes visitors to the appropriate mode.

Subpages:

### Presencial

- experience
- current edition facts
- module calendar
- common eight-module program
- methodology
- retreats
- current teaching team
- registration CTA

### Online

- live-online experience
- current edition facts
- module calendar
- shared academic program
- online-specific methodology
- current teaching team
- registration CTA

### Entidades

- audiences
- VBM contribution/value
- currently offered formats only
- recent evidence/collaborations
- concise authentic imagery
- contact CTA

### Retiros

Present retreats as an experiential part of VBM training, not as a standalone wellness product.

## Acompañamiento

Replace the old "Asistencia" framing with a careful accompaniment page.

Only publish services that are explicitly confirmed as currently available.

Potential sections remain conditional until validated:

- orientation
- forms of accompaniment
- grief support
- advance directives
- care-related volunteering
- contact

## Recursos

`/recursos/` is a curated outreach/resource hub rather than a high-frequency news blog.

- Agenda: dynamic Sanity events
- Artículos: static curated/historical resources in V1
- Vídeos: static curated selection in V1

Selected historical articles may later have `/recursos/articulos/[slug]/` routes.

## ZenCare

Short bridge page only.

Purpose:

- explain that ZenCare is a project of Fundación VBM
- establish the relationship clearly
- send users to `zencare.es`

Do not reproduce ZenCare's site structure, practices or activity catalogue.

## Colabora

Single engagement page. Exact current member/donation/volunteering modalities are published only after confirmation.

## Contacto

Simple contact destination. The final form/provider is deliberately deferred until confirmed.
