import type { Metadata } from "next";

import CivilDateRange from "@/components/CivilDateRange";
import type { ContentResult, Event as VbmEvent } from "@/lib/content";
import { eventCategoryLabels } from "@/lib/content-presentation";
import { getUpcomingEvents } from "@/sanity/data";

export const metadata: Metadata = {
  title: "Agenda y actividades",
  description:
    "Próximas formaciones, talleres, conferencias, retiros y encuentros de Fundación Vivir un Buen Morir.",
};

export default async function AgendaPage() {
  const eventsResult = await getUpcomingEvents();

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="section-container py-20 sm:py-24 lg:py-28">
          <p className="eyebrow">Recursos VBM</p>
          <h1 className="heading-display mt-5">Agenda y actividades</h1>
          <p className="mt-7 max-w-3xl text-lead text-muted">
            Próximas formaciones, talleres, conferencias, retiros y encuentros de
            Fundación Vivir un Buen Morir.
          </p>
        </div>
      </header>

      <div className="section-container section-padding">
        <AgendaContent result={eventsResult} />
      </div>
    </>
  );
}

function AgendaContent({ result }: { result: ContentResult<VbmEvent[]> }) {
  if (result.status !== "available") {
    return (
      <p className="max-w-2xl text-lead text-muted">
        {result.status === "unavailable"
          ? "La agenda no está disponible temporalmente."
          : "La agenda se publicará próximamente."}
      </p>
    );
  }

  if (result.data.length === 0) {
    return (
      <p className="max-w-2xl text-lead text-muted">
        No hay próximas actividades publicadas por el momento.
      </p>
    );
  }

  return (
    <ol aria-label="Próximas actividades" className="border-y border-border">
      {result.data.map((event, index) => {
        const titleId = `agenda-event-${index + 1}`;

        return (
          <li
            key={`${event.startDate}-${event.title}-${index}`}
            className="border-b border-border last:border-b-0"
          >
            <article
              aria-labelledby={titleId}
              className="grid gap-7 py-9 sm:py-11 md:grid-cols-[minmax(12rem,3fr)_minmax(0,7fr)] md:gap-12 lg:gap-20"
            >
              <div>
                <p className="eyebrow">{eventCategoryLabels[event.category]}</p>
                <p className="mt-3 font-semibold text-foreground">
                  <CivilDateRange
                    startDate={event.startDate}
                    endDate={event.endDate}
                  />
                </p>
                {event.timeLabel ? (
                  <p className="mt-2 text-sm text-muted">
                    <span className="font-semibold">Horario · </span>
                    {event.timeLabel}
                  </p>
                ) : null}
                {event.location ? (
                  <p className="mt-2 text-sm text-muted">
                    <span className="font-semibold">Lugar · </span>
                    {event.location}
                  </p>
                ) : null}
              </div>

              <div>
                <h2
                  id={titleId}
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  {event.title}
                </h2>
                {event.excerpt ? (
                  <p className="mt-4 max-w-2xl text-muted">{event.excerpt}</p>
                ) : null}
                {event.externalUrl ? (
                  <a
                    href={event.externalUrl}
                    className="arrow-link mt-6"
                    aria-label={`Más información sobre ${event.title}`}
                  >
                    Más información
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
