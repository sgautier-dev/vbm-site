export const SANITY_API_VERSION = "2026-09-01";
export const SANITY_REVALIDATE_SECONDS = 3600;

export type SanityEnvironment = {
  projectId: string;
  dataset: string;
};

export function getSanityEnvironment(): SanityEnvironment | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();

  if (!projectId || !dataset) {
    return null;
  }

  return { projectId, dataset };
}

export function requireSanityEnvironment(): SanityEnvironment {
  const environment = getSanityEnvironment();

  if (!environment) {
    throw new Error(
      "Sanity requires NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.",
    );
  }

  return environment;
}
