import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Agenda y actividades" };

export default function AgendaPage() {
  return <PageShell title="Agenda y actividades" />;
}
