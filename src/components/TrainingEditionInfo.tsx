import type {
  ContentResult,
  TrainingOnline,
  TrainingPresencial,
} from "@/lib/content";
import { registrationStatusLabels } from "@/lib/content-presentation";

type TrainingEdition = TrainingOnline | TrainingPresencial;

type TrainingEditionInfoProps = {
  headingId: string;
  result: ContentResult<TrainingEdition[]>;
};

const registrationStatusStyles: Record<
  TrainingEdition["registrationStatus"],
  string
> = {
  open: "border-brand-cyan/45 bg-soft-cyan/45",
  soon: "border-brand-yellow/60 bg-soft-yellow/60",
  closed: "border-border bg-soft-gray",
};

export default function TrainingEditionInfo({
  headingId,
  result,
}: TrainingEditionInfoProps) {
  if (result.status === "not-configured") {
    return null;
  }

  const editions = result.status === "available" ? result.data : [];
  const stateMessage = getStateMessage(result);

  return (
    <section
      aria-labelledby={headingId}
      className="border-b border-border py-12 sm:py-16"
    >
      <div className="section-container grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
        <h2 id={headingId} className="heading-section-sans">
          Información práctica
        </h2>

        {editions.length > 0 ? (
          <div className="divide-y divide-border border-y border-border">
            {editions.map((edition, index) => (
              <section key={`${edition.year}-${index}`} className="py-8">
                <h3 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
                  {edition.editionLabel ?? `Edición ${edition.year}`}
                </h3>
                <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  <EditionDetail label="Año">{edition.year}</EditionDetail>
                  <EditionDetail label="Inscripción">
                    <span
                      className={`inline-flex min-h-8 items-center border px-3 py-1 text-sm font-semibold ${registrationStatusStyles[edition.registrationStatus]}`}
                    >
                      {registrationStatusLabels[edition.registrationStatus]}
                    </span>
                  </EditionDetail>
                  {edition.pricingSummary ? (
                    <EditionDetail label="Información económica">
                      {edition.pricingSummary}
                    </EditionDetail>
                  ) : null}
                  {getLocationSummary(edition) ? (
                    <EditionDetail label="Lugar">
                      {getLocationSummary(edition)}
                    </EditionDetail>
                  ) : null}
                  {edition.scheduleNote ? (
                    <EditionDetail label="Horario">
                      {edition.scheduleNote}
                    </EditionDetail>
                  ) : null}
                </dl>

                {edition.importantNotice ? (
                  <p className="mt-8 border-l-4 border-brand-yellow bg-warm-sand/55 px-5 py-4 text-muted sm:px-6">
                    {edition.importantNotice}
                  </p>
                ) : null}

                {edition.registrationStatus === "open" && edition.registrationUrl ? (
                  <a href={edition.registrationUrl} className="btn-primary mt-8">
                    Inscribirme
                  </a>
                ) : null}
              </section>
            ))}
          </div>
        ) : (
          <p className="max-w-2xl text-lead text-muted">{stateMessage}</p>
        )}
      </div>
    </section>
  );
}

function EditionDetail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-sm font-semibold text-muted">{label}</dt>
      <dd className="mt-1.5 whitespace-pre-line text-foreground">{children}</dd>
    </div>
  );
}

function getLocationSummary(edition: TrainingEdition): string | undefined {
  return "locationSummary" in edition ? edition.locationSummary : undefined;
}

function getStateMessage(
  result: Exclude<
    ContentResult<TrainingEdition[]>,
    { status: "not-configured" }
  >,
): string {
  if (result.status === "unavailable") {
    return "La información práctica de esta edición no está disponible temporalmente.";
  }

  return "La información de la próxima edición se publicará aquí cuando esté confirmada.";
}
