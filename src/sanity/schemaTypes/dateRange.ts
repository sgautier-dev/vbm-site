import { defineField } from "sanity";

import { validateDateRange } from "@/sanity/date";

type DateRangeFieldOptions = {
  name: string;
  title: string;
  description?: string;
};

function createDateFields() {
  return [
    defineField({
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "Fecha de fin",
      type: "date",
    }),
  ];
}

export function defineDateRangeField({
  name,
  title,
  description,
}: DateRangeFieldOptions) {
  return defineField({
    name,
    title,
    description,
    type: "object",
    fields: createDateFields(),
    validation: (rule) => rule.custom(validateDateRange),
  });
}

export function defineRetreatField({
  name,
  title,
}: Pick<DateRangeFieldOptions, "name" | "title">) {
  return defineField({
    name,
    title,
    description:
      "Si tiene una fecha de inicio, este retiro aparecerá automáticamente en la Agenda.",
    type: "object",
    fields: [
      defineField({
        name: "title",
        title: "Título público",
        type: "string",
      }),
      ...createDateFields(),
      defineField({
        name: "timeLabel",
        title: "Horario",
        description: "Texto visible únicamente; no modifica la vigencia del retiro.",
        type: "string",
      }),
      defineField({
        name: "location",
        title: "Lugar",
        type: "string",
      }),
      defineField({
        name: "excerpt",
        title: "Resumen",
        description: "Una presentación breve del retiro, con un máximo de 320 caracteres.",
        type: "text",
        rows: 3,
        validation: (rule) => rule.max(320),
      }),
      defineField({
        name: "externalUrl",
        title: "Enlace externo",
        type: "url",
        validation: (rule) =>
          rule.uri({
            allowRelative: false,
            scheme: ["http", "https"],
          }),
      }),
      defineField({
        name: "featured",
        title: "Destacar en portada",
        description:
          "Si está activado y el retiro sigue vigente, también podrá aparecer en la portada.",
        type: "boolean",
        initialValue: false,
      }),
      defineField({
        name: "note",
        title: "Nota práctica",
        type: "text",
        rows: 3,
      }),
    ],
    validation: (rule) => rule.custom(validateDateRange),
  });
}
