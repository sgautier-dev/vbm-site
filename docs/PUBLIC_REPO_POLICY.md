# VBM — Public Repository Policy

The repository is public.

## Safe for Git

- source code
- technical documentation cleaned for public distribution
- approved public website copy
- optimized public assets only when redistribution rights are clear
- non-secret configuration examples

## Keep outside Git

- `.env*`
- API tokens and secrets
- Sanity write tokens
- private Drive links
- raw consent records
- patient/participant personal data
- client correspondence
- drafts containing private operational notes
- source photography with uncertain redistribution rights
- unpublished payment/banking details

## Images

A photo can be:

1. selected editorially
2. approved for public website publication
3. approved for redistribution in a public source repository

These are separate states.

Do not assume (1) implies (2) or (2) implies (3).

## CMS

Hiding a Sanity field from the Studio navigation is UX, not access control.

Never put confidential data in the public editorial dataset merely because the editor UI hides the field.
