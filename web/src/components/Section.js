export default function Section({ title, children, className = "" }) {
  return (
    <section className={`w-full max-w-3xl mx-auto ${className}`}>
      {title ? (
        <h2 className="text-lg font-semibold tracking-tight text-foreground/90 mb-4">
          {title}
        </h2>
      ) : null}
      <div className="space-y-4">{children}</div>
    </section>
  );
}


