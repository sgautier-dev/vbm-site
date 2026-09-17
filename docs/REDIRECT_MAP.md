# VBM — Redirect Map

Version: consolidated working V1 — September 2026

This is a working migration map, not the final crawl export.

## Status model

Use these independent concepts:

- `SOURCE_VERIFIED` — legacy URL confirmed
- `DESTINATION_DECIDED` — semantic destination chosen
- `CONTENT_READY` — destination page/anchor actually exists with relevant content
- `IMPLEMENTED` — permanent redirect configured
- `TESTED` — HTTP behavior verified

Do not treat `SOURCE_VERIFIED` as "migration complete".

## Structural routes

| Legacy source | Target | Current decision |
|---|---|---|
| `/quienes-somos/` | `/fundacion/` | destination decided |
| `/presencial/` | `/formacion/presencial/` | destination decided |
| `/online/` | `/formacion/online/` | destination decided |
| `/formacion-para-profesionales/` | `/formacion/entidades/` | destination decided |
| `/profesorado/` | `/formacion/#equipo-docente` | target anchor must exist before implementation |
| `/retiro/` | `/formacion/retiros/` | destination decided |
| `/asistencia/` | `/acompanamiento/` | destination decided |
| `/grupo-vbm-apoyo-mutuo-duelo/` | `/acompanamiento/#duelo` | only if validated/current section exists |
| `/dovumento-de-voluntades-anticipadas-dva/` | `/acompanamiento/#voluntades-anticipadas` | preserve misspelled legacy source; target section must exist |
| `/colabora/` | `/colabora/` | keep equivalent route |
| `/formacion/` | `/formacion/` | keep equivalent route |

## Pagination

Known legacy examples:

```text
/page/2/
/page/5/
```

Only redirect `/page/[n]/` to `/` if the early/final crawl confirms these are simple obsolete homepage pagination duplicates.

Do not create a catch-all redirect for arbitrary unknown paths.

## Historical article examples

Potential pattern:

```text
/legacy-article-slug/ → /recursos/articulos/legacy-article-slug/
```

Do not apply blindly.

Known examples requiring migration validation include:

```text
/nueva-ley-eutanasia/
/como-mirar-a-los-vertiginosos-ojos-claros-de-la-muerte-y-no-huir-en-el-intento/
/dva-por-ccaa/
```

Legal/medical content must be checked for current accuracy before being republished as current information.

If an old resource has no suitable current equivalent and no preservation value, a deliberate 404/410 can be more correct than a misleading homepage redirect.

## Historical Joomla

Working targets include:

```text
joomla.vivirunbuenmorir.es/
→ vivirunbuenmorir.es/

joomla.vivirunbuenmorir.es/nosotros/quienes-somos
→ vivirunbuenmorir.es/fundacion/

joomla.vivirunbuenmorir.es/formacion
→ vivirunbuenmorir.es/formacion/
```

Anchor redirects for historic objetivos/valores/duelo are implemented only once the final corresponding sections exist.

## Technical rules

- permanent migration redirects only for deliberate final moves
- no redirect chains
- each old URL should point directly to its final destination
- never redirect unrelated content to `/`
- do not redirect media files to unrelated HTML pages
- do not migrate WordPress admin/feed/technical endpoints as editorial content
- use the project's trailing-slash convention consistently

## Final crawl requirements

Before launch:

1. authoritative crawl of WordPress
2. authoritative crawl of Joomla if accessible
3. Search Console URL merge if available
4. identify every meaningful 200 URL without a decision
5. verify destination pages/anchors
6. implement final redirects
7. test redirect HTTP behavior
8. verify no chains/loops
9. verify important new pages do not 404
