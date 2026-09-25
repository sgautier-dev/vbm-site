import type { StructureResolver } from "sanity/structure";

const newestFirst = [
  { field: "year", direction: "desc" as const },
  { field: "editionLabel", direction: "asc" as const },
];

export const studioStructure: StructureResolver = (structure) =>
  structure
    .list()
    .title("Contenido")
    .items([
      structure
        .documentTypeListItem("trainingPresencial")
        .title("📚 Formación presencial")
        .child(
          structure
            .documentTypeList("trainingPresencial")
            .title("Formación presencial")
            .defaultOrdering(newestFirst),
        ),
      structure
        .documentTypeListItem("trainingOnline")
        .title("💻 Formación online")
        .child(
          structure
            .documentTypeList("trainingOnline")
            .title("Formación online")
            .defaultOrdering(newestFirst),
        ),
      structure
        .documentTypeListItem("event")
        .id("event")
        .title("📅 Agenda y actividades"),
    ]);
