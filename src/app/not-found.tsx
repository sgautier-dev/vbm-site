import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-container section-padding">
      <p className="text-sm font-bold tracking-[0.12em] text-action-hover uppercase">
        Error 404
      </p>
      <h1 className="heading-display mt-3">Página no encontrada</h1>
      <p className="mt-6 max-w-xl text-muted">La página que buscas no existe.</p>
      <Link href="/" className="btn-primary mt-8">
        Volver al inicio
      </Link>
    </main>
  );
}
