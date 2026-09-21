import { defineField, defineType } from "sanity";

import { eventCategories, type EventCategory } from "@/lib/content";
import { validateDateRange } from "@/sanity/date";

const eventCategoryLabels: Record<EventCategory, string> = {
  conference: "Conferencia",
  workshop: "Taller",
  retreat: "Retiro",
  training: "Formación",
  meeting: "Encuentro",
  other: "Otro",
};

export const eventType = defineType({
  name: "event",
  title: "Agenda y actividades",
  type: "document",
  description: "Los eventos pasados dejarán de aparecer en portada automáticamente.",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Fecha de fin",
      type: "date",
      validation: (rule) =>
        rule.custom((endDate, context) =>
          validateDateRange({
            startDate: context.document?.startDate,
            endDate,
          }),
        ),
    }),
    defineField({
      name: "timeLabel",
      title: "Horario",
      description: "Texto visible únicamente; no modifica cuándo deja de mostrarse el evento.",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Lugar",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: eventCategories.map((value) => ({
          title: eventCategoryLabels[value],
          value,
        })),
      },
      validation: (rule) =>
        rule.required().custom(
          (value) =>
            eventCategories.some((category) => category === value) ||
            "Selecciona una categoría válida.",
        ),
    }),
    defineField({
      name: "excerpt",
      title: "Resumen",
      description: "Una presentación breve del evento, con un máximo de 320 caracteres.",
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
      description: "Solo los eventos vigentes marcados aquí podrán aparecer en portada.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      startDate: "startDate",
      location: "location",
    },
    prepare({ title, startDate, location }) {
      return {
        title,
        subtitle: [startDate, location].filter(Boolean).join(" · "),
      };
    },
  },
});
