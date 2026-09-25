import CivilDateRange from "@/components/CivilDateRange";
import type { TrainingModuleDates } from "@/lib/content";
import { trainingProgram } from "@/lib/training-program";

type TrainingProgramProps = {
  editions?: readonly {
    year: number;
    editionLabel?: string;
    moduleDates: TrainingModuleDates;
  }[];
};

export default function TrainingProgram({ editions = [] }: TrainingProgramProps) {
  return (
    <ol className="mt-12 border-y border-border">
      {trainingProgram.map((module) => {
        const datedEditions = editions
          .map((edition, index) => ({
            edition,
            index,
            dates: edition.moduleDates[module.id],
          }))
          .filter(({ dates }) => dates.startDate || dates.endDate);

        return (
          <li
            key={module.id}
            className="grid gap-6 border-b border-border py-8 last:border-b-0 sm:py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
          >
            <div className="flex items-start gap-5 sm:gap-7">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center border border-action/35 font-semibold text-action-hover"
              >
                {module.number.toString().padStart(2, "0")}
              </span>
              <div>
                <p className="eyebrow">Módulo {module.number}</p>
                <h3 className="mt-2 text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
                  {module.title}
                </h3>
                {datedEditions.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {datedEditions.map(({ edition, index, dates }) => {
                      const sameYear = editions.filter(
                        (candidate) => candidate.year === edition.year,
                      ).length > 1;
                      const editionName = sameYear
                        ? edition.editionLabel ?? `${edition.year} · edición ${index + 1}`
                        : edition.year;

                      return (
                        <li key={`${edition.year}-${index}`}>
                          <span className="font-semibold">{editionName} · </span>
                          <CivilDateRange
                            startDate={dates.startDate}
                            endDate={dates.endDate}
                          />
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>

            <p className="max-w-2xl text-muted lg:pt-1">
              {module.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
