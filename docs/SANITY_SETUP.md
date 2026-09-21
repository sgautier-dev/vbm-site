# VBM Sanity setup

## Scope

Sanity V1 is a small operational back office for current training-edition data and independent agenda items. Permanent editorial copy, navigation, imagery, SEO and page composition remain in the repository.

The Studio exposes exactly three entries:

- `📚 Formación presencial` — singleton type `trainingPresencial`, document ID `trainingPresencial`
- `💻 Formación online` — singleton type `trainingOnline`, document ID `trainingOnline`
- `📅 Agenda y actividades` — collection type `event`

The singleton entries open their canonical documents directly. Their create, duplicate and delete paths are removed from the normal Studio UI. Only Agenda behaves as a normal createable collection.

Canonical ownership is intentionally explicit:

- `trainingPresencial` owns the current edition, module dates and its main/follow-up retreats.
- `event` owns conferences, workshops, meetings, independent retreats and other activities not attached to a training edition.

Do not recreate a Presencial edition retreat in Agenda. When a Presencial retreat has a start date, public reads derive an event from it automatically; no additional Sanity document is required.

## Environment

Copy `.env.example` to an untracked `.env.local` and set:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
```

These are public identifiers, not credentials. V1 reads published content from a public dataset and does not require a read or write token. Never commit `.env.local`, API tokens or credentials.

When either variable is absent, public pages continue to build, data functions return `not-configured`, and `/studio/` shows a local setup notice instead of loading an invalid Studio configuration.

Event queries compare ISO civil dates against the current calendar date in `Europe/Madrid`. Published reads use a one-hour revalidation window, and the date parameter changes at the Madrid day boundary, so event lists refresh on a later request even without a publication webhook.

## Public page integration

The public integration is active. The Presencial and Online pages read their published singleton data. Agenda merges current/upcoming independent events with dated Presencial retreats. Home reads featured items from that same unified list, and the Retiros page shows its upcoming retreat subset. Permanent editorial content remains in code.

Public pages remain functional without Sanity configuration: training pages omit operational edition details, Home keeps its generic Agenda bridge, and Agenda shows a neutral publication-pending state.

## Studio access

With the environment configured, run `npm run dev` and open `/studio/`. The Studio is embedded outside the public Header/Footer layout. `npm run studio` also starts the same Studio configuration with the installed Sanity CLI.

## Remote setup checklist

The remote project and dataset are managed outside this public repository. For a new environment, with the Sanity CLI installed by the project:

1. Ensure that the intended project contains a dataset with **public** visibility. Record the project ID and dataset name outside the repository; do not commit them as assumed defaults.
2. Add those values to `.env.local` and to the corresponding Vercel environment variables.
3. Allow credentialed CORS origins for local and deployed Studio access, for example `npx sanity cors add http://localhost:3000 --credentials`; repeat with the final production origin.
4. Restart the development server and open `/studio/` to create and publish the two canonical training documents and real agenda entries.

Do not create sample production content.
