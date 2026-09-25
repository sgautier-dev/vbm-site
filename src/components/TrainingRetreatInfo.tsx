import CivilDateRange from "@/components/CivilDateRange";
import type { RetreatEditionInfo, TrainingPresencial } from "@/lib/content";

type TrainingRetreatInfoProps = {
  editions: readonly TrainingPresencial[];
};

export default function TrainingRetreatInfo({ editions }: TrainingRetreatInfoProps) {
  const editionRetreats = editions
    .map((edition) => ({
      edition,
      retreats: [
        { label: "Retiro principal", data: edition.mainRetreat },
        { label: "Retiro de seguimiento", data: edition.followUpRetreat },
      ].filter(
        (retreat): retreat is { label: string; data: RetreatEditionInfo } =>
          retreat.data !== undefined && hasPracticalDetails(retreat.data),
      ),
    }))
    .filter(({ retreats }) => retreats.length > 0);

  if (editionRetreats.length === 0) {
    return null;
  }

  return (
    <div className="mt-9 divide-y divide-foreground/15 border-y border-foreground/15">
      {editionRetreats.map(({ edition, retreats }, editionIndex) => (
        <section key={`${edition.year}-${editionIndex}`} className="py-7">
          <h3 className="text-lg font-semibold tracking-tight">
            {edition.editionLabel ?? `Edición ${edition.year}`}
          </h3>
          <div className="mt-5 grid gap-7 sm:grid-cols-2 sm:gap-10">
            {retreats.map((retreat) => (
              <div key={retreat.label}>
                <h4 className="text-base font-semibold tracking-tight">
                  {retreat.data.title ?? retreat.label}
                </h4>
                <dl className="mt-4 space-y-3 text-sm">
                  {retreat.data.startDate || retreat.data.endDate ? (
                    <div>
                      <dt className="font-semibold text-muted">Fechas</dt>
                      <dd className="mt-1">
                        <CivilDateRange
                          startDate={retreat.data.startDate}
                          endDate={retreat.data.endDate}
                        />
                      </dd>
                    </div>
                  ) : null}
                  {retreat.data.timeLabel ? (
                    <div>
                      <dt className="font-semibold text-muted">Horario</dt>
                      <dd className="mt-1">{retreat.data.timeLabel}</dd>
                    </div>
                  ) : null}
                  {retreat.data.location ? (
                    <div>
                      <dt className="font-semibold text-muted">Lugar</dt>
                      <dd className="mt-1">{retreat.data.location}</dd>
                    </div>
                  ) : null}
                  {retreat.data.note ? (
                    <div>
                      <dt className="font-semibold text-muted">Información práctica</dt>
                      <dd className="mt-1 whitespace-pre-line">
                        {retreat.data.note}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function hasPracticalDetails(retreat: RetreatEditionInfo): boolean {
  return Boolean(
    retreat.title ||
      retreat.startDate ||
      retreat.endDate ||
      retreat.timeLabel ||
      retreat.location ||
      retreat.note,
  );
}
