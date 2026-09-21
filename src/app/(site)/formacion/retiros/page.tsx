import type { Metadata } from "next";
import Link from "next/link";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import TrainingHero from "@/components/TrainingHero";

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

export default function RetreatsPage() {
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
