import type { Metadata } from "next";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";

export const metadata: Metadata = {
  title: "ZenCare — Cuidado Contemplativo en Final de Vida",
  description:
    "ZenCare es un proyecto de Fundación Vivir un Buen Morir centrado en la presencia plena, la escucha y el cuidado contemplativo de personas vulnerables.",
  alternates: { canonical: "/zencare/" },
};

export default function ZenCarePage() {
  return (
    <>
      <header className="border-b border-border bg-soft-cyan/40">
        <div className="section-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-20 lg:py-28">
          <div>
            <p className="eyebrow">Un proyecto de Fundación Vivir un Buen Morir</p>
            <h1 className="heading-display mt-5">ZenCare</h1>
            <p className="mt-6 max-w-xl font-editorial text-3xl leading-tight font-semibold sm:text-4xl">
              Cuidado Contemplativo en Final de Vida
            </p>
          </div>
          <div>
            <div className="prose-editorial text-foreground">
              <p>
                ZenCare transforma la cultura de los cuidados mediante la formación
                y la práctica de la Atención Consciente.
              </p>
              <p>
                Es un enfoque ético de cuidado a personas vulnerables —personas con
                demencias, enfermedad mental o al final de la vida— inspirado en
                principios no confesionales del Zen y centrado en la presencia plena,
                el silencio contemplativo y el acompañamiento compasivo.
              </p>
            </div>
            <a href="https://zencare.es/" className="btn-primary mt-8">
              Descubrir ZenCare
              <span className="sr-only"> en zencare.es</span>
            </a>
          </div>
        </div>
      </header>

      <section aria-labelledby="zencare-approach-title" className="section-padding">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="zencare-approach-title"
            title="Presencia plena, compasión y cuidado consciente"
            editorial
          />
          <div>
            <p className="max-w-2xl text-lead">
              ZenCare complementa la dimensión técnica y clínica del cuidado
              atendiendo también al bienestar psicoemocional y espiritual. Busca
              generar una atmósfera de serenidad para la persona acompañada y ofrecer
              a profesionales, familiares y voluntarios una práctica que fortalezca
              su capacidad de estar presentes, escuchar y cuidar sin perderse a sí
              mismos.
            </p>
            <p className="mt-10 max-w-2xl border-l-4 border-brand-cyan pl-6 font-editorial text-2xl leading-snug font-semibold sm:pl-8 sm:text-3xl">
              Estar presentes en el aquí y ahora, aceptar el momento tal como es y
              ofrecer el cuidado con compasión profunda y escucha atenta.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="zencare-vbm-title" className="section-padding bg-warm-sand/50">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="zencare-vbm-title"
            title="Una evolución natural del trabajo de la Fundación"
            editorial
          />
          <div>
            <div className="prose-editorial text-foreground">
              <p>
                ZenCare nace dentro de Fundación VBM como un proyecto específico que
                profundiza en una dimensión presente desde sus orígenes: la calidad
                de presencia en el acompañamiento.
              </p>
              <p>
                A través de prácticas contemplativas, meditación, mindfulness,
                escucha compasiva, artes creativas y otras herramientas de
                autocuidado, amplía el trabajo de VBM hacia una comunidad de
                aprendizaje y práctica dirigida a quienes cuidan.
              </p>
            </div>
            <a href="https://zencare.es/" className="arrow-link mt-8">
              Conocer todas las actividades en zencare.es
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
