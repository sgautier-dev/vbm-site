# VBM — Project Brief

Version: consolidated V1 — September 2026

## Project

Complete redesign of `vivirunbuenmorir.es` for **Fundación Vivir un Buen Morir (VBM)**.

The current WordPress site is replaced by a simpler, more contemporary, more readable and more robust Next.js site.

The redesign modernizes presentation, architecture and maintenance without replacing VBM's institutional, existential and human voice.

## Positioning

VBM works around end-of-life, accompaniment, training, outreach and a culture of care grounded in concepts historically used by the Foundation, including:

- sabiduría
- ecuanimidad
- cuidado consciente
- amor compasivo
- libertad de conciencia
- calidad de presencia
- respeto
- humanidad

Editorial principle:

> The structure becomes contemporary; the voice remains VBM.

## Primary audiences

- healthcare and social-care professionals
- volunteers and future volunteers
- carers and families
- people accompanying a loved one
- people reflecting on death, care and finitude
- hospitals, care homes, associations, social services and related institutions
- donors, members, supporters and partners

## Site goals

- explain VBM clearly
- provide fast access to Formación VBM
- present Presencial, Online, Entidades and Retiros clearly
- present only accompaniment services that are currently confirmed
- show current activities without stale events remaining on the homepage
- present ZenCare clearly as a VBM project while keeping `zencare.es` independent
- facilitate collaboration, donations, volunteering and contact once the corresponding mechanisms are confirmed
- preserve useful historical/SEO resources selectively
- minimize administration work for Mar

## Target stack

- Next.js 16.3.x
- React 19
- TypeScript strict
- Tailwind CSS v4
- Sanity for a deliberately small perishable-data scope
- Vercel
- npm
- independent repository from ZenCare

## Content strategy

Most content is static and versioned in code.

Sanity is an operational mini back office for information that changes repeatedly:

- current Presencial edition
- current Online edition
- agenda/activities

Static repository content includes institutional copy, page structure, team, primary imagery, design, structural SEO, training module content and curated resources.

## Visual principle

A contemporary, serious and deeply human foundation — **not a generic wellness brand**.

Prioritize authentic VBM photography. Large imagery is reserved for the strongest approved assets. Documentary/social material is used selectively.

## V1 done criteria

V1 is ready when:

- all main routes exist with final content
- responsive design is coherent
- approved VBM copy is integrated
- minimal Sanity is operational
- current events leave upcoming/home views automatically
- current training edition data is driven from the correct dynamic source
- public assets comply with approval/rights rules
- technical SEO and validated redirects are implemented
- legal pages reflect the final stack and providers
- confirmed forms/integrations are tested
- no unvalidated factual placeholder is presented as current truth
