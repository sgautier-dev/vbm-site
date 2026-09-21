import type { StructureResolver } from "sanity/structure";

import { SINGLETON_DOCUMENT_IDS } from "@/sanity/studio/singletons";

export const studioStructure: StructureResolver = (structure) =>
  structure
    .list()
    .title("Contenido")
    .items([
      structure
        .listItem()
        .id("trainingPresencial")
        .title("📚 Formación presencial")
        .child(
          structure
            .document()
            .schemaType("trainingPresencial")
            .documentId(SINGLETON_DOCUMENT_IDS.trainingPresencial)
            .title("Formación presencial"),
        ),
      structure
        .listItem()
        .id("trainingOnline")
        .title("💻 Formación online")
        .child(
          structure
            .document()
            .schemaType("trainingOnline")
            .documentId(SINGLETON_DOCUMENT_IDS.trainingOnline)
            .title("Formación online"),
        ),
      structure
        .documentTypeListItem("event")
        .id("event")
        .title("📅 Agenda y actividades"),
    ]);
