import type { Metadata } from "next";
import Link from "next/link";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import TrainingHero from "@/components/TrainingHero";

export const metadata: Metadata = {
  title: "Formación para entidades",
  description:
    "Cursos elaborados a medida para hospitales, residencias, servicios sociales, colegios profesionales, asociaciones y otras organizaciones vinculadas al cuidado.",
};

const adaptableObjectives = [
  "Clarificar qué entendemos por un buen morir como base para unos cuidados y un acompañamiento de calidad.",
  "Identificar los diferentes aspectos del proceso de morir: físicos, psicológicos, emocionales y espirituales.",
  "Profundizar en la escucha, la comunicación y la calidad de presencia.",
  "Conocer aspectos de bioética, legislación y buena praxis en el final de la vida.",
  "Desarrollar recursos personales de afrontamiento y autocuidado en profesionales y equipos.",
  "Favorecer condiciones para la elaboración de un duelo sano.",
] as const;

const intendedFor = [
  "Hospitales",
  "Residencias y centros sociosanitarios",
  "Servicios sociales",
  "Colegios profesionales",
  "Asociaciones de pacientes y familiares",
  "Equipos de cuidados paliativos",
  "Entidades vinculadas al cuidado y al acompañamiento",
] as const;

export default function OrganizationsTrainingPage() {
  return (
    <>
      <TrainingHero
        eyebrow="Formación para entidades"
        title="Formación adaptada a equipos y organizaciones"
        body={[
          "La colaboración con diferentes entidades públicas y privadas es una de las acciones formativas principales de Fundación Vivir un Buen Morir.",
          "Impartimos cursos elaborados a medida para profesionales de hospitales, residencias, servicios sociales, colegios profesionales de psicología, enfermería y medicina, asociaciones de pacientes y otras organizaciones, en función de sus objetivos e intereses específicos.",
        ]}
        tone="entidades"
      />

      <section aria-labelledby="entities-purpose-title" className="section-padding">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="entities-purpose-title"
            title="Cuidar también a quienes cuidan"
            editorial
          />
          <p className="max-w-2xl text-lead text-muted">
            Estas formaciones tienen como propósito facilitar recursos personales,
            mejorar la capacidad de afrontamiento y favorecer una buena praxis en
            entornos de final de vida, contribuyendo también a disminuir el riesgo de
            fatiga psicológica en profesionales y cuidadores.
          </p>
        </div>
      </section>

      <section aria-labelledby="entities-objectives-title" className="section-padding bg-surface">
        <div className="section-container">
          <EditorialSectionHeading
            id="entities-objectives-title"
            title="Objetivos adaptables"
          />
          <ol className="mt-12 grid border-t border-border md:grid-cols-2">
            {adaptableObjectives.map((objective, index) => (
              <li
                key={objective}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-border py-7 md:odd:pr-8 md:even:border-l md:even:pl-8 lg:gap-6 lg:py-9"
              >
                <span aria-hidden="true" className="font-editorial text-2xl text-action-hover">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span>{objective}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="entities-audience-title" className="section-padding">
        <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <EditorialSectionHeading
            id="entities-audience-title"
            title="A quién se dirige"
            editorial
          />
          <ul className="grid border-t border-border sm:grid-cols-2">
            {intendedFor.map((audience) => (
              <li
                key={audience}
                className="flex items-start gap-4 border-b border-border py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-brand-cyan" />
                <span className="text-lg font-semibold leading-snug">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="entities-method-title" className="section-padding bg-soft-cyan/35">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-20">
          <EditorialSectionHeading
            id="entities-method-title"
            title="Metodología"
          />
          <div>
            <p className="max-w-2xl text-lead">
              Cada propuesta se adapta a las necesidades de la entidad. Puede combinar
              contenidos teóricos, reflexión, análisis de situaciones reales y
              dinámicas experienciales. El objetivo es que la formación resulte
              aplicable a la práctica cotidiana de cada equipo.
            </p>
            <Link href="/contacto/" className="btn-primary mt-8">
              Solicitar información
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="Formación VBM" className="border-t border-border py-10 sm:py-12">
        <div className="section-container">
          <Link href="/formacion/" className="arrow-link">
            Formación VBM
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
