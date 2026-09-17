# VBM — Design System

Version: consolidated implementation V1 — September 2026

## Direction

The visitor should perceive:

> A contemporary, serious and deeply human foundation.

The interface should communicate presence, serenity, humanity, clarity, quality and trust.

It must not feel:

- clinical
- funerary
- generic wellness/spa
- like an old association newsletter
- like a startup UI demo

## Brand vs functional UI colors

The official brand identity remains authoritative for the logo and brand marks.

Working brand swatches derived from the official brandboard:

```css
--vbm-brand-magenta: #C060A0;
--vbm-brand-yellow: #FDCC0E;
--vbm-brand-cyan: #30A9C4;
--vbm-brand-gray-lilac: #CFCCD5;

--vbm-soft-magenta: #E4B9D5;
--vbm-soft-yellow: #FEF2C2;
--vbm-soft-cyan: #CBE9F1;
--vbm-soft-gray: #F3F3F5;
--vbm-warm-sand: #EEE5D6;
```

These are implementation working values until exact vector/source palette values are verified.

### Accessibility correction

Raw brand magenta `#C060A0` with white normal-sized text is not sufficient for the project's WCAG AA target.

Keep `#C060A0` as the brand/decorative magenta, and introduce a darker **functional action token**:

```css
--vbm-action: #B24E91;
--vbm-action-hover: #9E397E;
```

Use white text on `--vbm-action`.

Do not use raw yellow as body text on white.

Cyan is an accent/information color; do not assume white text on cyan is accessible without checking the final combination.

### Neutral UI tokens

Implementation neutrals may be refined visually, but keep them centralized. Recommended starting point:

```css
--vbm-background: #FFFFFF;
--vbm-surface: #F7F4F6;
--vbm-foreground: #272329;
--vbm-muted: #68616B;
--vbm-border: #E7E2E8;
```

## Color use

- Magenta: primary brand/action accent.
- Cyan: secondary/information accent.
- Yellow: rare highlight/micro-accent.
- Soft colors: light section surfaces.
- Warm Sand: occasional editorial/history/quote surface.
- Main text: dark neutral, never brand magenta as long-form body text.

One section should normally use no more than one strong accent.

## Typography

Brandboard pairing:

- **Figtree** — body, navigation, UI, buttons, labels, cards, functional text
- **Cormorant SC** — selective editorial display, symbolic headings, quotes

Cormorant SC is not the universal heading font. Use it to create editorial breathing space, not theatrical density.

Suggested responsive scale:

```text
Hero H1:       clamp(2.6rem, 5vw, 4.5rem)
H2:            clamp(2rem, 3.5vw, 3.25rem)
H3:            clamp(1.5rem, 2.4vw, 2.125rem)
Lead:          1.25rem–1.375rem
Body:          1.0625rem–1.1875rem
Small/meta:    0.875rem–1rem
```

Long editorial text should generally remain around 65–75 characters per line.

## Layout

Main container:

```text
max width: ~80rem / 1280px
page gutters: responsive, minimum ~1rem
editorial text width: ~42–48rem
```

Section rhythm:

```text
desktop: ~6–9rem vertical padding
mobile:  ~4–5.5rem vertical padding
```

Prefer simple vertical flow to carousels.

Do not show more than 3–4 cards in one desktop row without a strong reason.

## Hero

### Homepage

Mission-led, not retreat-led.

Structure:

- optional eyebrow
- short H1
- mission paragraph
- one primary CTA
- one secondary CTA maximum
- strong approved image or image/negative-space composition

The final home hero image remains intentionally open until an asset represents VBM broadly enough.

### Internal pages

More compact:

- title
- short introduction
- editorial image where appropriate

## Buttons

### Primary

- background: `--vbm-action`
- white text
- moderate radius, not an exaggerated pill
- comfortable 44px+ interaction area
- hover: `--vbm-action-hover`
- subtle transform only if reduced-motion rules permit

### Secondary

- white/transparent surface
- subtle border
- dark or functional magenta text
- clear hover/focus

### Tertiary/link

- text + optional arrow
- underline or clear hover treatment
- never rely on color alone

## Cards

Simple surfaces, generous padding, subtle border or near-invisible shadow.

Avoid heavy floating-card aesthetics.

Important families:

- Pillar
- Training
- Event
- Resource
- Person
- Impact

Event cards must work without an image.

## Imagery

Priority:

1. strong real VBM photography
2. authentic portraits/activity scenes
3. nature/material as breathing space
4. stock only for a precise uncovered need

Treatment:

- responsive crop
- exposure
- white balance
- light contrast
- restrained color harmonization

Never artificially transform real people's appearance.

Avoid dense galleries and decorative flower filler.

## ZenCare bridge

Clearly related to VBM, visually distinct.

- quiet light/soft-cyan surface
- official ZenCare logo only
- real approved ZenCare visual
- explicit "Un proyecto de Fundación VBM"
- CTA to `zencare.es`

Do not turn the bridge into a mini ZenCare homepage.

## Header

Desktop:

- official VBM brand mark left
- Fundación / Formación / Acompañamiento / Recursos / ZenCare
- Colabora CTA right

Mobile:

- compact brand mark
- accessible menu/drawer
- clear Colabora access without overcrowding

Sticky behavior is permitted if restrained.

## Footer

Useful and compact:

- brand
- contact route
- secondary navigation
- transparency/reports
- legal
- confirmed active social channels only
- ZenCare relationship

Do not add newsletter UI until a provider/workflow is confirmed.

## Motion

Optional, subtle and functional.

Allowed:

- restrained fade/translate
- micro-hover
- simple reveal

Avoid:

- heavy parallax
- line-by-line text animation
- scroll hijacking
- animation libraries without a real need

Respect `prefers-reduced-motion`.

## Accessibility

WCAG AA minimum.

Check actual final combinations, not only token names.

Required:

- keyboard navigation
- visible focus
- contrast
- semantic headings
- accessible menus/accordions
- meaningful alt text
- 44px-ish interactive targets
- no essential information only inside an image
