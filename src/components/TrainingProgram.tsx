import CivilDateRange from "@/components/CivilDateRange";
import type { TrainingModuleDates } from "@/lib/content";
import { trainingProgram } from "@/lib/training-program";

type TrainingProgramProps = {
  moduleDates?: TrainingModuleDates;
};

export default function TrainingProgram({ moduleDates }: TrainingProgramProps) {
  return (
    <ol className="mt-12 border-y border-border">
      {trainingProgram.map((module) => {
        const dates = moduleDates?.[module.id];
        const hasDates = Boolean(dates?.startDate || dates?.endDate);

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
                {hasDates ? (
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold">Fechas · </span>
                    <CivilDateRange
                      startDate={dates?.startDate}
                      endDate={dates?.endDate}
                    />
                  </p>
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
