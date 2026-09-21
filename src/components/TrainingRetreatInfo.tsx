import CivilDateRange from "@/components/CivilDateRange";
import type { RetreatEditionInfo } from "@/lib/content";

type TrainingRetreatInfoProps = {
  mainRetreat?: RetreatEditionInfo;
  followUpRetreat?: RetreatEditionInfo;
};

export default function TrainingRetreatInfo({
  mainRetreat,
  followUpRetreat,
}: TrainingRetreatInfoProps) {
  const retreats = [
    { label: "Retiro principal", data: mainRetreat },
    { label: "Retiro de seguimiento", data: followUpRetreat },
  ].filter(
    (retreat): retreat is { label: string; data: RetreatEditionInfo } =>
      retreat.data !== undefined,
  );

  if (retreats.length === 0) {
    return null;
  }

  return (
    <div className="mt-9 border-y border-foreground/15 py-7">
      <p className="eyebrow">Edición actual</p>
      <div className="mt-5 grid gap-7 sm:grid-cols-2 sm:gap-10">
        {retreats.map((retreat) => (
          <section key={retreat.label} aria-label={retreat.label}>
            <h3 className="text-lg font-semibold tracking-tight">
              {retreat.label}
            </h3>
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
              {retreat.data.location ? (
                <div>
                  <dt className="font-semibold text-muted">Lugar</dt>
                  <dd className="mt-1">{retreat.data.location}</dd>
                </div>
              ) : null}
              {retreat.data.note ? (
                <div>
                  <dt className="font-semibold text-muted">Información práctica</dt>
                  <dd className="mt-1 whitespace-pre-line">{retreat.data.note}</dd>
                </div>
              ) : null}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
