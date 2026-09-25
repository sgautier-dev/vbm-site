import type { Metadata } from "next";
import Link from "next/link";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";

export const metadata: Metadata = {
  title: "Acompañamiento al final de la vida",
  description:
    "La mirada de Fundación Vivir un Buen Morir sobre el acompañamiento al final de la vida, el duelo y las voluntades anticipadas.",
  alternates: { canonical: "/acompanamiento/" },
};

const carePrinciples = [
  "Favorecer el acceso a unos cuidados paliativos de calidad, allí donde se encuentre la persona.",
  "Atender las necesidades físicas, psicoemocionales y espirituales del paciente y de su entorno familiar.",
  "Crear condiciones que faciliten la comunicación auténtica y el acompañamiento cercano.",
  "Aportar claridad y calma para afrontar el proceso de morir y favorecer un duelo sano en quienes permanecen.",
  "Velar por el respeto a las voluntades anticipadas y por la autonomía de la persona hasta el final.",
] as const;

export default function AccompanimentPage() {
  return (
    <>
      <header className="border-b border-border bg-soft-cyan/35">
        <div className="section-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-end lg:gap-20 lg:py-28">
          <div>
            <p className="eyebrow">Acompañamiento VBM</p>
            <h1 className="heading-display mt-5">
              Acompañamiento al paciente terminal y su entorno
            </h1>
          </div>
          <div className="max-w-2xl border-l-4 border-brand-cyan pl-6 sm:pl-8">
            <div className="prose-editorial text-foreground">
              <p>
                El acompañamiento al final de la vida busca orientar, sostener y
                cuidar a las personas que atraviesan situaciones de enfermedad
                avanzada y final de vida, así como a sus familias y personas cercanas.
              </p>
              <p>
                Para VBM, un acompañamiento de calidad contempla, junto a las
                necesidades físicas, las dimensiones psicoemocional, cognitiva y
                espiritual de cada persona, respetando siempre sus valores, creencias
                y decisiones.
              </p>
            </div>
            <Link href="/contacto/" className="btn-primary mt-8">
              Contactar con VBM
            </Link>
          </div>
        </div>
      </header>

      <section aria-labelledby="care-dimensions-title" className="section-padding">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="care-dimensions-title"
            title="Cuidar todas las dimensiones de la persona"
            editorial
          />
          <div>
            <p className="max-w-2xl text-lead">
              Para VBM, acompañar no consiste únicamente en aliviar síntomas.
              Significa también ayudar a crear un entorno cálido y sereno, favorecer
              una comunicación sincera, aportar claridad y calma al proceso de morir
              y respetar la voluntad de la persona hasta el final.
            </p>
            <ul className="mt-10 border-t border-border">
              {carePrinciples.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-5 border-b border-border py-5 sm:py-6"
                >
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-brand-cyan" />
                  <span className="max-w-2xl">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="duelo"
        aria-labelledby="grief-title"
        className="section-padding scroll-mt-24 bg-warm-sand/55"
      >
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="grief-title"
            eyebrow="Apoyo al duelo"
            title="Acompañarnos también después de la pérdida"
            editorial
          />
          <div className="prose-editorial text-foreground">
            <p>
              La pérdida de un ser querido abre un proceso natural de readaptación
              que afecta al cuerpo, a los pensamientos y sentimientos, a la conducta
              y a nuestra relación con los demás.
            </p>
            <p>
              A lo largo de su trayectoria, VBM ha desarrollado espacios de apoyo
              mutuo en los que compartir la experiencia del duelo, sentirse
              comprendido y recorrer este proceso al propio ritmo.
            </p>
            <p>
              Encontrarnos con otras personas que comprenden lo que vivimos, poder
              expresar nuestras emociones y dejarnos acompañar puede ayudar a
              integrar la pérdida y a encontrar una nueva forma de estar en el mundo.
            </p>
          </div>
        </div>
      </section>

      <section
        id="voluntades-anticipadas"
        aria-labelledby="advance-directives-title"
        className="section-padding scroll-mt-24"
      >
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="advance-directives-title"
            eyebrow="Autonomía y final de vida"
            title="Documento de Voluntades Anticipadas"
            editorial
          />
          <div className="prose-editorial text-foreground">
            <p>
              Planificar de forma anticipada la atención que deseamos recibir al
              final de la vida implica reflexionar sobre nuestros valores, nuestra
              idea de calidad de vida y las decisiones sanitarias que queremos que se
              respeten si algún día no podemos expresarlas personalmente.
            </p>
            <p>
              Para VBM, el Documento de Voluntades Anticipadas es una herramienta
              importante para que la persona siga siendo sujeto de su propia vida
              hasta el final y para facilitar a familiares y profesionales la toma de
              decisiones de acuerdo con su voluntad.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="accompaniment-contact-title" className="section-padding bg-soft-magenta/30">
        <div className="section-container grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-20">
          <EditorialSectionHeading
            id="accompaniment-contact-title"
            title="¿Necesitas orientación?"
          />
          <div>
            <p className="max-w-2xl text-lead">
              Si estás viviendo una situación de enfermedad avanzada o final de vida
              y quieres ponerte en contacto con la Fundación, puedes escribirnos y
              contarnos tu situación.
            </p>
            <Link href="/contacto/" className="btn-primary mt-8">
              Contactar con la Fundación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
