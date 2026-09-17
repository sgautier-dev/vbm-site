export default function PageShell({ title }: { title: string }) {
  return (
    <div className="section-container section-padding">
      <h1 className="heading-display">{title}</h1>
    </div>
  );
}
