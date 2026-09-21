import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

import { getSanityEnvironment } from "@/sanity/env";

import Studio from "./Studio";

export const metadata = {
  ...studioMetadata,
  title: "Studio | Fundación VBM",
};

export const viewport = studioViewport;

export default function StudioPage() {
  const environment = getSanityEnvironment();

  if (!environment) {
    return (
      <main className="grid min-h-screen place-items-center bg-surface px-6 py-16 text-foreground">
        <div className="max-w-xl rounded-panel border border-border bg-background p-8 shadow-sm">
          <p className="text-sm font-semibold tracking-wide text-action uppercase">
            Fundación VBM
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Sanity Studio no está configurado</h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Añade el identificador del proyecto y el nombre del dataset al entorno
            local antes de abrir el Studio.
          </p>
        </div>
      </main>
    );
  }

  return <Studio {...environment} />;
}
