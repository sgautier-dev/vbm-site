# VBM — Sanity Content Model

Version: consolidated V1 — September 2026

## Purpose

Sanity is **not** the global VBM CMS.

It is a small operational back office for data Mar must update repeatedly without technical intervention.

Decision rule:

- changes several times per year → candidate for Sanity
- stable structural/editorial/visual/SEO content → repository maintenance

## Visible Studio navigation

Exactly three visible entries:

1. `📚 Formación presencial`
2. `💻 Formación online`
3. `📅 Agenda y actividades`

No announcement/banner document type in V1.

No generic page builder.

No site settings document.

No visible technical content tree for Mar.

## `trainingPresencial` singleton

Studio label: **Formación presencial**

One editable document only.

Fields:

```ts
type RegistrationStatus = "open" | "soon" | "closed"

type DateRange = {
  startDate?: string // YYYY-MM-DD
  endDate?: string   // YYYY-MM-DD
}

type RetreatEditionInfo = DateRange & {
  location?: string
  note?: string
}

type TrainingPresencial = {
  editionLabel?: string
  year?: number
  registrationStatus: RegistrationStatus
  registrationUrl?: string
  pricingSummary?: string
  locationSummary?: string
  scheduleNote?: string
  moduleDates: {
    m1: DateRange
    m2: DateRange
    m3: DateRange
    m4: DateRange
    m5: DateRange
    m6: DateRange
    m7: DateRange
    m8: DateRange
  }
  mainRetreat?: RetreatEditionInfo
  followUpRetreat?: RetreatEditionInfo
  importantNotice?: string
}
```

### Notes

`pricingSummary` is intentionally short free text. It is presentation content, not a machine-readable checkout price model.

`locationSummary` covers the main current-edition venue/location, which can change between editions.

`scheduleNote` is for practical timing information that does not justify a more complex schema.

Module titles and descriptions remain static in code.

Do not add accreditation/diploma claims here as a workaround for unvalidated editorial facts.

## `trainingOnline` singleton

Studio label: **Formación online**

```ts
type TrainingOnline = {
  editionLabel?: string
  year?: number
  registrationStatus: RegistrationStatus
  registrationUrl?: string
  pricingSummary?: string
  scheduleNote?: string
  moduleDates: {
    m1: DateRange
    m2: DateRange
    m3: DateRange
    m4: DateRange
    m5: DateRange
    m6: DateRange
    m7: DateRange
    m8: DateRange
  }
  importantNotice?: string
}
```

Online-specific stable methodology remains static.

Do not duplicate Presencial retreat dates into Online in V1 without an explicit business decision. If Online participants can access the same retreats, link/reuse the canonical retreat information rather than creating parallel editable dates.

## `event` collection

Studio label: **Agenda y actividades**

```ts
type EventCategory =
  | "conference"
  | "workshop"
  | "retreat"
  | "training"
  | "meeting"
  | "other"

type Event = {
  title: string
  startDate: string       // YYYY-MM-DD
  endDate?: string        // YYYY-MM-DD
  timeLabel?: string
  location?: string
  category: EventCategory
  excerpt?: string
  externalUrl?: string
  featured: boolean       // eligible for homepage
}
```

Visible category labels in Spanish:

- Conferencia
- Taller
- Retiro
- Formación
- Encuentro
- Otro

V1 deliberately has no event image field.

## Studio UX

The Studio should open to a short custom structure, not a generic "Content" list.

Singletons open directly.

Only Agenda offers creating a new document.

Field labels/help text are Spanish and non-technical.

Examples:

- `Se mostrará automáticamente en la página de formación presencial.`
- `Los eventos pasados dejarán de aparecer en portada automáticamente.`

## Validation

- sensible edition year range
- URLs valid
- end date not before start date
- event title required
- registration status required
- excerpt length constrained
- singleton duplication prevented

## Outside Sanity

Keep static/versioned:

- Homepage editorial content
- Fundación
- Acompañamiento
- ZenCare bridge
- Colabora
- Formación structure
- eight academic modules
- Entidades
- stable Retiros copy
- team/professorado
- testimonials/resources
- annual impact figures
- transparency/report links
- navigation
- footer
- forms/integration code
- primary images
- metadata/SEO
- redirects
- design system
