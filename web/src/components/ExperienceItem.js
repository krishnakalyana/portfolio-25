export default function ExperienceItem({ company, role, start, end, location, bullets = [], stack = [] }) {
  return (
    <div className="border-b border-foreground/10 pb-4 last:border-none">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-medium">{role}{company ? ` · ${company}` : ""}</div>
        <div className="text-xs text-foreground/70">{[start, end].filter(Boolean).join(" — ")}</div>
      </div>
      {location ? <div className="text-xs text-foreground/70 mt-0.5">{location}</div> : null}
      {bullets?.length ? (
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}
      {stack?.length ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {stack.map((t, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}


