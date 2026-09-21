import type { Metadata } from "next";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import TrainingEditionInfo from "@/components/TrainingEditionInfo";
import TrainingHero from "@/components/TrainingHero";
import TrainingProgram from "@/components/TrainingProgram";
import { getTrainingOnline } from "@/sanity/data";

export const metadata: Metadata = {
  title: "Formación online",
  description:
    "La modalidad online consta de ocho módulos en directo y permite la interacción con docentes y estudiantes, manteniendo el carácter participativo de la Formación VBM.",
};

const onlineFormat = [
  "8 módulos teórico-prácticos en directo.",
  "Interacción con docentes y estudiantes durante las sesiones.",
  "Tras cada módulo se proporciona un dosier didáctico con documentos y material audiovisual relacionado.",
] as const;

export default async function OnlineTrainingPage() {
  const trainingResult = await getTrainingOnline();
  const currentEdition =
    trainingResult.status === "available" ? trainingResult.data : null;

  return (
    <>
      <TrainingHero
        eyebrow="Formación VBM online"
        title="La Formación VBM en directo, desde cualquier lugar"
        body="La modalidad online consta de ocho módulos en formato webinar y se desarrolla en directo. Permite la interacción con los docentes y con el resto de estudiantes, manteniendo el carácter participativo de la Formación VBM."
        tone="online"
      />

      <TrainingEditionInfo
        headingId="online-edition-title"
        result={trainingResult}
      />

      <section aria-labelledby="online-format-title" className="section-padding">
        <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <EditorialSectionHeading
            id="online-format-title"
            title="Cómo funciona"
            editorial
          />
          <ol className="border-t border-border">
            {onlineFormat.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[3.25rem_1fr] gap-5 border-b border-border py-7 sm:grid-cols-[4rem_1fr] sm:py-8"
              >
                <span aria-hidden="true" className="font-editorial text-3xl text-action-hover">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="max-w-2xl text-lead">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="online-program-title" className="section-padding bg-soft-cyan/30">
        <div className="section-container">
          <EditorialSectionHeading
            id="online-program-title"
            title="Ocho módulos para comprender y acompañar el proceso de morir"
          />
          <TrainingProgram moduleDates={currentEdition?.moduleDates} />
        </div>
      </section>

      <section aria-labelledby="online-experience-title" className="section-padding">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="online-experience-title"
            title="Una experiencia compartida en directo"
            editorial
          />
          <p className="max-w-2xl text-lead text-muted">
            La participación en directo y la interacción con docentes y grupo sostienen
            el carácter compartido de la experiencia. El programa académico común
            mantiene el trabajo reflexivo y personal como parte del aprendizaje.
          </p>
        </div>
      </section>
    </>
  );
}
