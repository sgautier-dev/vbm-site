import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Vídeos" };

export default function VideosPage() {
  return <PageShell title="Vídeos" />;
}
