import { createClient } from "next-sanity";

import { getSanityEnvironment, SANITY_API_VERSION } from "@/sanity/env";

export function getSanityClient() {
  const environment = getSanityEnvironment();

  if (!environment) {
    return null;
  }

  return createClient({
    ...environment,
    apiVersion: SANITY_API_VERSION,
    perspective: "published",
    useCdn: true,
  });
}
