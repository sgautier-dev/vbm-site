import type {
  ContentResult,
  Event as VbmEvent,
  TrainingOnline,
  TrainingPresencial,
} from "@/lib/content";
import {
  adaptEvents,
  adaptTrainingOnline,
  adaptTrainingPresencial,
} from "@/sanity/adapters";
import { getSanityClient } from "@/sanity/client";
import {
  getMadridCivilDate,
  isCurrentOrUpcomingEvent,
} from "@/sanity/date";
import { SANITY_REVALIDATE_SECONDS } from "@/sanity/env";
import {
  FEATURED_UPCOMING_EVENTS_QUERY,
  TRAINING_ONLINE_QUERY,
  TRAINING_PRESENCIAL_QUERY,
  UPCOMING_EVENTS_QUERY,
} from "@/sanity/queries";
import { SINGLETON_DOCUMENT_IDS } from "@/sanity/studio/singletons";

export async function getTrainingPresencial(): Promise<
  ContentResult<TrainingPresencial | null>
> {
  return fetchSanityContent(
    TRAINING_PRESENCIAL_QUERY,
    { documentId: SINGLETON_DOCUMENT_IDS.trainingPresencial },
    adaptTrainingPresencial,
  );
}

export async function getTrainingOnline(): Promise<
  ContentResult<TrainingOnline | null>
> {
  return fetchSanityContent(
    TRAINING_ONLINE_QUERY,
    { documentId: SINGLETON_DOCUMENT_IDS.trainingOnline },
    adaptTrainingOnline,
  );
}

export async function getUpcomingEvents(): Promise<ContentResult<VbmEvent[]>> {
  const today = getMadridCivilDate();

  return fetchSanityContent(
    UPCOMING_EVENTS_QUERY,
    { today },
    (value) => prepareEvents(value, today),
  );
}

export async function getFeaturedUpcomingEvents(): Promise<
  ContentResult<VbmEvent[]>
> {
  const today = getMadridCivilDate();

  return fetchSanityContent(
    FEATURED_UPCOMING_EVENTS_QUERY,
    { today },
    (value) =>
      prepareEvents(value, today)
        .filter((event) => event.featured)
        .slice(0, 4),
  );
}

async function fetchSanityContent<T>(
  query: string,
  params: Record<string, string>,
  adapt: (value: unknown) => T,
): Promise<ContentResult<T>> {
  const client = getSanityClient();

  if (!client) {
    return { status: "not-configured" };
  }

  try {
    const value = await client.fetch<unknown>(query, params, {
      next: { revalidate: SANITY_REVALIDATE_SECONDS },
    });

    return { status: "available", data: adapt(value) };
  } catch (error) {
    logSanityRequestFailure(error);
    return { status: "unavailable" };
  }
}

function prepareEvents(value: unknown, today: string): VbmEvent[] {
  return adaptEvents(value)
    .filter((event) => isCurrentOrUpcomingEvent(event, today))
    .sort(
      (first, second) =>
        first.startDate.localeCompare(second.startDate) ||
        first.title.localeCompare(second.title, "es"),
    );
}

function logSanityRequestFailure(error: unknown) {
  const diagnostic =
    error instanceof Error
      ? { name: error.name, message: error.message }
      : { name: "UnknownError", message: "Unknown Sanity request failure." };

  console.error("[Sanity] Published content request failed.", diagnostic);
}
