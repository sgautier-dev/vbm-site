import type { Metadata } from "next";
import Link from "next/link";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import TrainingEditionInfo from "@/components/TrainingEditionInfo";
import TrainingHero from "@/components/TrainingHero";
import TrainingProgram from "@/components/TrainingProgram";
import TrainingRetreatInfo from "@/components/TrainingRetreatInfo";
import { getTrainingPresencialEditions } from "@/sanity/data";

export const metadata: Metadata = {
  title: "Formación presencial",
  description:
    "La modalidad presencial combina contenidos teórico-prácticos, dinámicas experienciales, trabajo personal y encuentro directo con el grupo y el profesorado.",
};

export default async function InPersonTrainingPage() {
  const trainingResult = await getTrainingPresencialEditions();
  const editions = trainingResult.status === "available" ? trainingResult.data : [];

  return (
    <>
      <TrainingHero
        eyebrow="Formación VBM presencial"
        title="Vivir un Buen Morir y el arte de acompañar"
        body="La modalidad presencial recorre el programa completo combinando contenidos teórico-prácticos, dinámicas experienciales y trabajo personal. El encuentro directo con el grupo y el profesorado forma parte esencial del proceso formativo."
        tone="presencial"
      />

      <TrainingEditionInfo
        headingId="presencial-edition-title"
        result={trainingResult}
      />

      <section aria-labelledby="presencial-method-title" className="section-padding">
        <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="presencial-method-title"
            title="Una formación que combina conocimiento y experiencia"
            editorial
          />
          <div>
            <div className="prose-editorial text-foreground">
              <p>
                Al tiempo que el programa ofrece un marco cognitivo sobre la muerte,
                el morir y el acompañamiento, se propone que los participantes
                realicen una labor introspectiva sobre sus propias creencias y
                conceptos en torno a estos temas.
              </p>
              <p>
                La metodología incorpora prácticas de autoexploración, dinámicas
                experienciales, psicodrama y análisis de situaciones clínicas reales,
                buscando un acercamiento personal y directo a las cuestiones
                abordadas.
              </p>
            </div>
            <p className="mt-9 border-l-4 border-brand-yellow bg-warm-sand/55 px-6 py-5 text-muted sm:px-8">
              Una vez completado cada módulo se proporciona un dosier didáctico con
              documentos y material audiovisual relacionado con la temática
              impartida.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="presencial-program-title" className="section-padding bg-surface">
        <div className="section-container">
          <EditorialSectionHeading
            id="presencial-program-title"
            title="Ocho módulos para comprender y acompañar el proceso de morir"
          />
          <TrainingProgram editions={editions} />
        </div>
      </section>

      <section aria-labelledby="presencial-retreats-title" className="section-padding bg-warm-sand/65">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-20">
          <EditorialSectionHeading
            id="presencial-retreats-title"
            title="Retiros VBM"
            editorial
          />
          <div>
            <p className="max-w-2xl text-lead">
              Los retiros permiten profundizar en el trabajo de presencia, escucha,
              comunicación, autoconocimiento y acompañamiento de calidad desde una
              dimensión experiencial.
            </p>
            <TrainingRetreatInfo editions={editions} />
            <Link href="/formacion/retiros/" className="btn-secondary mt-8 bg-background/65">
              Conocer los retiros VBM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
