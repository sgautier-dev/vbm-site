import { trainingProgram } from "@/lib/training-program";

export default function TrainingProgram() {
  return (
    <ol className="mt-12 border-y border-border">
      {trainingProgram.map((module) => {
        const titleId = `training-module-${module.id}-title`;

        return (
          <li
            key={module.id}
            className="training-module grid gap-6 border-b border-border py-7 last:border-b-0 sm:py-9 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
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
                <h3
                  id={titleId}
                  className="mt-2 text-xl leading-snug font-semibold tracking-tight sm:text-2xl"
                >
                  {module.title}
                </h3>
              </div>
            </div>

            <details className="self-start rounded-panel border border-border bg-background">
              <summary
                aria-describedby={titleId}
                className="training-module-toggle flex min-h-11 cursor-pointer items-center px-5 py-3.5 text-sm font-bold text-action-hover sm:px-6"
              >
                Ver contenidos
              </summary>
              <p className="border-t border-border px-5 py-5 text-muted sm:px-6 sm:py-6">
                {module.description}
              </p>
            </details>
          </li>
        );
      })}
    </ol>
  );
}
