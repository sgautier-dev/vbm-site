import type { Metadata } from "next";
import Link from "next/link";

import CivilDateRange from "@/components/CivilDateRange";
import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import { eventCategoryLabels } from "@/lib/content-presentation";
import { getUpcomingEvents } from "@/sanity/data";

export const metadata: Metadata = {
  title: "Recursos para comprender y acompañar",
  description:
    "Actividades y recursos de Fundación Vivir un Buen Morir para reflexionar sobre el final de la vida, el duelo y la cultura del cuidado.",
  alternates: { canonical: "/recursos/" },
};

export default async function ResourcesPage() {
  const eventsResult = await getUpcomingEvents();
  const upcomingEvents =
    eventsResult.status === "available" ? eventsResult.data.slice(0, 3) : [];

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="section-container py-20 sm:py-24 lg:py-28">
          <p className="eyebrow">Divulgación VBM</p>
          <h1 className="heading-display mt-5">
            Recursos para comprender, reflexionar y acompañar
          </h1>
          <div className="prose-editorial mt-8 text-foreground">
            <p>
              Una parte esencial del trabajo de VBM es abrir espacios de reflexión
              sobre la enfermedad, la muerte, el duelo, los cuidados paliativos y el
              arte de acompañar.
            </p>
            <p>
              Aquí reunimos contenidos y actividades para acercarnos a estas
              realidades con mayor claridad, naturalidad y conciencia.
            </p>
          </div>
        </div>
      </header>

      <section aria-labelledby="resources-agenda-title" className="section-padding bg-warm-sand/50">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading id="resources-agenda-title" title="Próximas actividades" editorial />
          <div>
            <p className="max-w-2xl text-lead">
              Conferencias, talleres, encuentros, retiros y actividades formativas
              organizadas por VBM o en colaboración con otras entidades.
            </p>
            {upcomingEvents.length > 0 ? (
              <ul aria-label="Próximas actividades publicadas" className="mt-8 border-t border-foreground/15">
                {upcomingEvents.map((event, index) => (
                  <li
                    key={`${event.startDate}-${event.title}-${index}`}
                    className="grid gap-2 border-b border-foreground/15 py-5 sm:grid-cols-[minmax(9rem,2fr)_minmax(0,5fr)] sm:gap-6"
                  >
                    <div className="text-sm">
                      <p className="font-semibold text-action-hover">
                        {eventCategoryLabels[event.category]}
                      </p>
                      <p className="mt-1 text-muted">
                        <CivilDateRange
                          startDate={event.startDate}
                          endDate={event.endDate}
                        />
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg leading-snug font-semibold tracking-tight">
                        {event.externalUrl ? (
                          <a href={event.externalUrl} className="text-link">
                            {event.title}
                          </a>
                        ) : (
                          <Link href="/recursos/agenda/" className="text-link">
                            {event.title}
                          </Link>
                        )}
                      </h3>
                      {event.location ? (
                        <p className="mt-1 text-sm text-muted">{event.location}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
            <Link href="/recursos/agenda/" className="arrow-link mt-7">
              Ver agenda
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-container section-padding grid gap-14 lg:grid-cols-2 lg:gap-20">
        <section aria-labelledby="resources-articles-title" className="border-t-4 border-brand-magenta pt-8">
          <EditorialSectionHeading id="resources-articles-title" title="Artículos y actualidad" />
          <p className="mt-6 max-w-2xl text-lead text-muted">
            Textos, entrevistas y colaboraciones que ayudan a profundizar en
            cuestiones relacionadas con el buen morir, los cuidados paliativos, la
            autonomía, el duelo y la cultura del cuidado.
          </p>
          <Link href="/recursos/articulos/" className="arrow-link mt-7">
            Leer artículos
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section aria-labelledby="resources-videos-title" className="border-t-4 border-brand-cyan pt-8">
          <EditorialSectionHeading id="resources-videos-title" title="Vídeos" />
          <p className="mt-6 max-w-2xl text-lead text-muted">
            Conferencias, entrevistas y materiales audiovisuales de VBM para seguir
            profundizando en la reflexión sobre el final de la vida y el
            acompañamiento.
          </p>
          <Link href="/recursos/videos/" className="arrow-link mt-7">
            Ver vídeos
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </>
  );
}
