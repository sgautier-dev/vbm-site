import type {
  Event,
  RetreatEditionInfo,
  TrainingPresencialRetreats,
} from "./content";

type RetreatSource = {
  retreat?: RetreatEditionInfo;
  fallbackTitle: string;
};

export function deriveTrainingRetreatEvents(
  trainingRetreats: readonly TrainingPresencialRetreats[],
): Event[] {
  return trainingRetreats.flatMap((edition) => {
    const retreatSources: RetreatSource[] = [
      { retreat: edition.mainRetreat, fallbackTitle: "Retiro VBM" },
      {
        retreat: edition.followUpRetreat,
        fallbackTitle: "Retiro de seguimiento VBM",
      },
    ];

    return retreatSources.flatMap(({ retreat, fallbackTitle }) => {
      if (!retreat?.startDate) {
        return [];
      }

      return [
        {
          title: retreat.title ?? fallbackTitle,
          startDate: retreat.startDate,
          category: "retreat" as const,
          featured: retreat.featured,
          ...(retreat.endDate ? { endDate: retreat.endDate } : {}),
          ...(retreat.timeLabel ? { timeLabel: retreat.timeLabel } : {}),
          ...(retreat.location ? { location: retreat.location } : {}),
          ...(retreat.excerpt ? { excerpt: retreat.excerpt } : {}),
          ...(retreat.externalUrl ? { externalUrl: retreat.externalUrl } : {}),
        },
      ];
    });
  });
}

export function mergeUpcomingEvents(
  independentEvents: readonly Event[],
  trainingRetreats: readonly TrainingPresencialRetreats[],
  today: string,
): Event[] {
  return [
    ...independentEvents,
    ...deriveTrainingRetreatEvents(trainingRetreats),
  ]
    .filter((event) => isCurrentOrUpcomingEvent(event, today))
    .sort(
      (first, second) =>
        first.startDate.localeCompare(second.startDate) ||
        first.title.localeCompare(second.title, "es"),
    );
}

export function selectFeaturedUpcomingEvents(events: readonly Event[]): Event[] {
  return events.filter((event) => event.featured).slice(0, 4);
}

export function isCurrentOrUpcomingEvent(
  event: Pick<Event, "startDate" | "endDate">,
  today: string,
): boolean {
  return today <= (event.endDate ?? event.startDate);
}
