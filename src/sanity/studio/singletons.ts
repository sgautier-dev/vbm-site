export const SINGLETON_DOCUMENT_IDS = {
  trainingPresencial: "trainingPresencial",
  trainingOnline: "trainingOnline",
} as const;

export const SINGLETON_SCHEMA_TYPES = new Set<string>(
  Object.keys(SINGLETON_DOCUMENT_IDS),
);
