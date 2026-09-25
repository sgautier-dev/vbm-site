export const SANITY_CACHE_TAGS = {
  trainingPresencial: "sanity:training-presencial",
  trainingOnline: "sanity:training-online",
  events: "sanity:events",
} as const;

const EVENT_PATHS = ["/", "/recursos/agenda/", "/formacion/retiros/"] as const;

export function pathsForSanityType(type: string | undefined): string[] {
  switch (type) {
    case "trainingPresencial":
      return ["/formacion/presencial/", ...EVENT_PATHS];
    case "trainingOnline":
      return ["/formacion/online/"];
    case "event":
      return [...EVENT_PATHS];
    case undefined:
      return ["/formacion/presencial/", "/formacion/online/", ...EVENT_PATHS];
    default:
      return [];
  }
}

export function tagsForSanityType(type: string | undefined): string[] {
  switch (type) {
    case "trainingPresencial":
      return [SANITY_CACHE_TAGS.trainingPresencial, SANITY_CACHE_TAGS.events];
    case "trainingOnline":
      return [SANITY_CACHE_TAGS.trainingOnline];
    case "event":
      return [SANITY_CACHE_TAGS.events];
    case undefined:
      return Object.values(SANITY_CACHE_TAGS);
    default:
      return [];
  }
}
