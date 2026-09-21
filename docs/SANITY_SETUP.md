# VBM Sanity setup

## Scope

Sanity V1 is a small operational back office for current training-edition data and agenda items. Permanent editorial copy, navigation, imagery, SEO and page composition remain in the repository.

The Studio exposes exactly three entries:

- `📚 Formación presencial` — singleton type `trainingPresencial`, document ID `trainingPresencial`
- `💻 Formación online` — singleton type `trainingOnline`, document ID `trainingOnline`
- `📅 Agenda y actividades` — collection type `event`

The singleton entries open their canonical documents directly. Their create, duplicate and delete paths are removed from the normal Studio UI. Only Agenda behaves as a normal createable collection.

## Environment

Copy `.env.example` to an untracked `.env.local` and set:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
```

These are public identifiers, not credentials. V1 reads published content from a public dataset and does not require a read or write token. Never commit `.env.local`, API tokens or credentials.

When either variable is absent, public pages continue to build, data functions return `not-configured`, and `/studio/` shows a local setup notice instead of loading an invalid Studio configuration.

Event queries compare ISO civil dates against the current calendar date in `Europe/Madrid`. Published reads use a one-hour revalidation window, and the date parameter changes at the Madrid day boundary, so event lists refresh on a later request even without a publication webhook.

## Studio access

With the environment configured, run `npm run dev` and open `/studio/`. The Studio is embedded outside the public Header/Footer layout. `npm run studio` also starts the same Studio configuration with the installed Sanity CLI.

## One-time remote setup

No remote Sanity project or dataset is connected in this repository yet. With Sanity CLI 8.12.0 installed by the project:

1. Run `npx sanity projects create`, sign in, choose the real project/organization, and create a dataset with **public** visibility. Record the returned project ID and the dataset name; do not commit them as assumed defaults.
2. Add those values to `.env.local` and to the corresponding Vercel environment variables.
3. Allow credentialed CORS origins for local and deployed Studio access, for example `npx sanity cors add http://localhost:3000 --credentials`; repeat with the final production origin.
4. Restart the development server and open `/studio/` to create and publish the two canonical training documents and real agenda entries.

Do not create sample production content. The public pages are intentionally not connected to these queries until Batch 4B.
