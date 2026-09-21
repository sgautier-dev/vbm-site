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
    type: "object",
    fields: [
      ...createDateFields(),
      defineField({
        name: "location",
        title: "Lugar",
        type: "string",
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
