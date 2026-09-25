import type {
  ContentResult,
  Event as VbmEvent,
  TrainingOnline,
  TrainingPresencial,
} from "@/lib/content";
import {
  mergeUpcomingEvents,
  selectFeaturedUpcomingEvents,
} from "@/lib/events";
import {
  adaptPublicEventSources,
  adaptTrainingOnlineEditions,
  adaptTrainingPresencialEditions,
} from "@/sanity/adapters";
import { getSanityClient } from "@/sanity/client";
import { SANITY_CACHE_TAGS } from "@/sanity/cache-tags";
import { getMadridCivilDate, getMadridYear } from "@/sanity/date";
import { SANITY_REVALIDATE_SECONDS } from "@/sanity/env";
import {
  PUBLIC_EVENTS_QUERY,
  TRAINING_ONLINE_QUERY,
  TRAINING_PRESENCIAL_QUERY,
} from "@/sanity/queries";

export async function getTrainingPresencialEditions(): Promise<
  ContentResult<TrainingPresencial[]>
> {
  return fetchSanityContent(
    TRAINING_PRESENCIAL_QUERY,
    { currentYear: getMadridYear() },
    adaptTrainingPresencialEditions,
    SANITY_CACHE_TAGS.trainingPresencial,
  );
}

export async function getTrainingOnlineEditions(): Promise<
  ContentResult<TrainingOnline[]>
> {
  return fetchSanityContent(
    TRAINING_ONLINE_QUERY,
    { currentYear: getMadridYear() },
    adaptTrainingOnlineEditions,
    SANITY_CACHE_TAGS.trainingOnline,
  );
}

export async function getUpcomingEvents(): Promise<ContentResult<VbmEvent[]>> {
  return getPublicEvents();
}

export async function getFeaturedUpcomingEvents(): Promise<
  ContentResult<VbmEvent[]>
> {
  const result = await getPublicEvents();

  if (result.status !== "available") {
    return result;
  }

  return {
    status: "available",
    data: selectFeaturedUpcomingEvents(result.data),
  };
}

async function getPublicEvents(): Promise<ContentResult<VbmEvent[]>> {
  const today = getMadridCivilDate();

  return fetchSanityContent(
    PUBLIC_EVENTS_QUERY,
    { today },
    (value) => {
      const sources = adaptPublicEventSources(value);

      return mergeUpcomingEvents(
        sources.independentEvents,
        sources.trainingRetreats,
        today,
      );
    },
    SANITY_CACHE_TAGS.events,
  );
}

async function fetchSanityContent<T>(
  query: string,
  params: Record<string, string | number>,
  adapt: (value: unknown) => T,
  tag: string,
): Promise<ContentResult<T>> {
  const client = getSanityClient();

  if (!client) {
    return { status: "not-configured" };
  }

  try {
    const value = await client.fetch<unknown>(
      query,
      params,
      process.env.NODE_ENV === "development"
        ? { cache: "no-store" }
        : { next: { revalidate: SANITY_REVALIDATE_SECONDS, tags: [tag] } },
    );

    return { status: "available", data: adapt(value) };
  } catch (error) {
    logSanityRequestFailure(error);
    return { status: "unavailable" };
  }
}

function logSanityRequestFailure(error: unknown) {
  const diagnostic =
    error instanceof Error
      ? { name: error.name, message: error.message }
      : { name: "UnknownError", message: "Unknown Sanity request failure." };

  console.error("[Sanity] Published content request failed.", diagnostic);
}
