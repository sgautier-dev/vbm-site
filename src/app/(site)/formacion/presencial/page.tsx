import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Formación presencial" };

export default function InPersonTrainingPage() {
  return <PageShell title="Formación presencial" />;
}
