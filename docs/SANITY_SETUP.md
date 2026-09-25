# VBM Sanity setup

## Scope

Sanity V1 is a small operational back office for current training-edition data and independent agenda items. Permanent editorial copy, navigation, imagery, SEO and page composition remain in the repository.

The Studio exposes exactly three entries:

- `📚 Formación presencial` — edition collection, type `trainingPresencial`
- `💻 Formación online` — edition collection, type `trainingOnline`
- `📅 Agenda y actividades` — collection type `event`

Training entries open edition lists sorted by newest year first. Editors can create, duplicate and delete editions. Documents created under the former singleton IDs remain valid collection items without migration.

Canonical ownership is intentionally explicit:

- `trainingPresencial` owns each edition, its module dates and its main/follow-up retreats.
- `event` owns conferences, workshops, meetings, independent retreats and other activities not attached to a training edition.

Do not recreate a Presencial edition retreat in Agenda. When a Presencial retreat has a start date, public reads derive an event from it automatically; no additional Sanity document is required.

## Environment

Copy `.env.example` to an untracked `.env.local` and set:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_REVALIDATE_SECRET=
```

The `NEXT_PUBLIC_` values are public identifiers, not credentials. `SANITY_REVALIDATE_SECRET` is server-only and must remain private. Published reads use a public dataset and do not require a read or write token. Never commit `.env.local`, API tokens or credentials.

When either variable is absent, public pages continue to build, data functions return `not-configured`, and `/studio/` shows a local setup notice instead of loading an invalid Studio configuration.

Event queries compare ISO civil dates against the current calendar date in `Europe/Madrid`. Public training pages select up to two published editions from the current Madrid year onward, in ascending year order; older editions stay in Studio. Dated retreats from all Presencial editions can feed public events. Production reads use the direct Sanity API behind a one-hour Next cache, so webhook invalidation can fetch fresh published data. Local development reads bypass the Next data cache, so a normal reload can show newly published content without the production webhook.

## Public page integration

The public integration is active. The Presencial and Online pages read their selected published editions. Agenda merges current/upcoming independent events with dated Presencial retreats from all editions. Home reads featured items from that same unified list, and the Retiros page shows its upcoming retreat subset. Permanent editorial content remains in code.

## Production publication webhook

Set the same private `SANITY_REVALIDATE_SECRET` in the deployment environment and in a Sanity webhook. Configure the webhook to POST to `https://<production-domain>/api/revalidate/sanity` for create, update and delete events in the relevant dataset and the `trainingPresencial`, `trainingOnline` and `event` document types. Send a JSON payload with `_type` and `_id`; for deletion where the type is unavailable, `_id` alone triggers invalidation of all VBM Sanity caches. Sign requests with the shared secret. Never put the secret in the URL or repository.

Use the filter `coalesce(after()._type, before()._type) in ["trainingPresencial", "trainingOnline", "event"]` and a projection such as `{ "_id": _id, "_type": coalesce(after()._type, before()._type) }` so deletion payloads retain the former document type.

Presencial changes invalidate the training page and shared public-event data used by Agenda, Home and Retiros. Online changes invalidate Online data. Event changes invalidate the shared public-event data. The webhook expires tagged data and affected page paths, including cached public fallback states after a failed fetch. The one-hour fallback remains in place for date expiry. The webhook must be configured separately after deployment; this repository does not create it remotely.

Public pages remain functional without Sanity configuration: training pages omit operational edition details, Home keeps its generic Agenda bridge, and Agenda shows a neutral publication-pending state.

## Studio access

With the environment configured, run `npm run dev` and open `/studio/`. The Studio is embedded outside the public Header/Footer layout. `npm run studio` also starts the same Studio configuration with the installed Sanity CLI.

## Remote setup checklist

The remote project and dataset are managed outside this public repository. For a new environment, with the Sanity CLI installed by the project:

1. Ensure that the intended project contains a dataset with **public** visibility. Record the project ID and dataset name outside the repository; do not commit them as assumed defaults.
2. Add those values to `.env.local` and to the corresponding Vercel environment variables.
3. Allow credentialed CORS origins for local and deployed Studio access, for example `npx sanity cors add http://localhost:3000 --credentials`; repeat with the final production origin.
4. Restart the development server and open `/studio/` to create and publish training editions and real agenda entries.

Do not create sample production content.
