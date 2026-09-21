import type { Metadata } from "next";
import Link from "next/link";

import CivilDateRange from "@/components/CivilDateRange";
import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import TrainingHero from "@/components/TrainingHero";
import type { ContentResult, Event as VbmEvent } from "@/lib/content";
import { getUpcomingEvents } from "@/sanity/data";

export const metadata: Metadata = {
  title: "Retiros VBM",
  description:
    "Retiros experienciales para profundizar en la presencia, la escucha, el autoconocimiento y el acompañamiento de calidad al final de la vida.",
};

const mainRetreatContents = [
  "Aproximación experiencial a la muerte y a su potencial transformador.",
  "Comunicación auténtica entre acompañante y persona en proceso de morir.",
  "Exploración de los propios condicionamientos ante la muerte y el sufrimiento.",
  "Escucha real y eficaz.",
  "Dimensión espiritual o existencial como fundamento del acompañamiento de calidad.",
] as const;

const intendedFor = [
  "Profesionales sanitarios y sociosanitarios.",
  "Voluntarios y cuidadores en ámbitos hospitalarios, residenciales o domiciliarios.",
  "Personas que estén acompañando a un ser querido.",
  "Personas que deseen realizar un trabajo personal de aproximación a la muerte, al sufrimiento y al duelo.",
] as const;

export default async function RetreatsPage() {
  const eventsResult = await getUpcomingEvents();

  return (
    <>
      <TrainingHero
        eyebrow="Retiros VBM"
        title="Una experiencia para comprender desde dentro"
        body={[
          "El Retiro VBM está diseñado para enfocar la atención en la posición subjetiva del paciente terminal, imprescindible para un acompañamiento de calidad.",
          "Mediante un acercamiento experiencial al proceso de morir, los retiros permiten profundizar en la presencia, la escucha, el autoconocimiento y la relación con la propia muerte y la de los demás.",
        ]}
        tone="retiros"
      />

      <section aria-labelledby="main-retreat-title" className="section-padding">
        <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-24">
          <div>
            <EditorialSectionHeading
              id="main-retreat-title"
              title="Retiro experiencial principal"
              editorial
            />
            <span aria-hidden="true" className="mt-10 block h-1.5 w-28 bg-brand-magenta" />
          </div>

          <div>
            <div className="prose-editorial text-foreground">
              <p>
                Mediante técnicas apropiadas tenemos la oportunidad de comprender
                íntimamente la naturaleza del proceso de morir y acercarnos de forma
                experiencial a la muerte y al acompañamiento de calidad.
              </p>
              <p>
                Se trabajan también situaciones pendientes de resolución relacionadas
                con el miedo, la evitación o una actitud de ligereza frente a la
                muerte, así como experiencias de duelo no resueltas. Todo ello en una
                atmósfera sobria, pero también lúdica y protectora, dentro de un
                ambiente seguro y entrañable.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold tracking-tight">Contenidos</h3>
              <ul className="mt-6 border-y border-border">
                {mainRetreatContents.map((content) => (
                  <li
                    key={content}
                    className="flex gap-5 border-b border-border py-5 last:border-b-0 sm:py-6"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-3 w-1 shrink-0 bg-brand-magenta"
                    />
                    <span className="max-w-2xl">{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="follow-up-retreat-title" className="section-padding bg-soft-cyan/30">
        <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="follow-up-retreat-title"
            title="Profundizar en la presencia y la escucha"
            editorial
          />
          <div className="prose-editorial text-foreground">
            <p>
              El retiro de seguimiento profundiza en las habilidades de silencio,
              escucha y presencia en el acompañamiento de situaciones de
              vulnerabilidad.
            </p>
            <p>
              Se utilizan recursos de Atención Plena y Compasión, psicodrama, música y
              otras herramientas experienciales. También se abordan emociones y
              situaciones pendientes vinculadas al proceso de duelo, como el miedo, la
              culpa o la ira.
            </p>
            <p>
              Todo ello se desarrolla en una atmósfera serena, acogedora y lúdica, que
              refuerza los vínculos del grupo y facilita un aprendizaje orgánico ante
              situaciones de estrés relacionadas con el final de la vida.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="retreat-audience-title" className="section-padding bg-warm-sand/60">
        <div className="section-container">
          <EditorialSectionHeading id="retreat-audience-title" title="Dirigido a" />
          <ul className="mt-12 grid border-t border-border md:grid-cols-2">
            {intendedFor.map((audience, index) => (
              <li
                key={audience}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-border py-7 md:odd:pr-8 md:even:border-l md:even:pl-8 lg:gap-6 lg:py-9"
              >
                <span aria-hidden="true" className="font-editorial text-2xl text-action-hover">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="max-w-xl">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <UpcomingRetreats result={eventsResult} />

      <nav aria-label="Formación presencial" className="border-t border-border py-10 sm:py-12">
        <div className="section-container">
          <Link href="/formacion/presencial/" className="arrow-link">
            Formación presencial
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

function UpcomingRetreats({ result }: { result: ContentResult<VbmEvent[]> }) {
  if (result.status === "not-configured") {
    return null;
  }

  const retreats =
    result.status === "available"
      ? result.data.filter((event) => event.category === "retreat")
      : [];

  return (
    <section aria-labelledby="upcoming-retreats-title" className="section-padding bg-surface">
      <div className="section-container">
        <EditorialSectionHeading
          id="upcoming-retreats-title"
          title="Próximos retiros"
        />

        {result.status === "unavailable" ? (
          <p className="mt-8 max-w-2xl text-lead text-muted">
            La información de los próximos retiros no está disponible temporalmente.
          </p>
        ) : retreats.length === 0 ? (
          <p className="mt-8 max-w-2xl text-lead text-muted">
            No hay próximos retiros publicados por el momento.
          </p>
        ) : (
          <ol aria-label="Próximos retiros" className="mt-10 border-y border-border">
            {retreats.map((retreat, index) => {
              const titleId = `upcoming-retreat-${index + 1}`;

              return (
                <li
                  key={`${retreat.startDate}-${retreat.title}-${index}`}
                  className="border-b border-border last:border-b-0"
                >
                  <article
                    aria-labelledby={titleId}
                    className="grid gap-6 py-8 md:grid-cols-[minmax(12rem,3fr)_minmax(0,7fr)] md:gap-12 lg:gap-20"
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        <CivilDateRange
                          startDate={retreat.startDate}
                          endDate={retreat.endDate}
                        />
                      </p>
                      {retreat.timeLabel ? (
                        <p className="mt-2 text-sm text-muted">
                          <span className="font-semibold">Horario · </span>
                          {retreat.timeLabel}
                        </p>
                      ) : null}
                      {retreat.location ? (
                        <p className="mt-2 text-sm text-muted">
                          <span className="font-semibold">Lugar · </span>
                          {retreat.location}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <h3
                        id={titleId}
                        className="text-xl font-semibold tracking-tight sm:text-2xl"
                      >
                        {retreat.title}
                      </h3>
                      {retreat.excerpt ? (
                        <p className="mt-4 max-w-2xl text-muted">
                          {retreat.excerpt}
                        </p>
                      ) : null}
                      {retreat.externalUrl ? (
                        <a
                          href={retreat.externalUrl}
                          className="arrow-link mt-5"
                          aria-label={`Más información sobre ${retreat.title}`}
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
        )}
      </div>
    </section>
  );
}
