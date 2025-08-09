export default function ProjectCard({ name, description, link, repo, highlights = [], stack = [] }) {
  return (
    <article className="rounded-lg border border-foreground/10 p-4 hover:bg-foreground/5 transition-colors">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-2 text-sm">
          {link ? (
            <a className="hover:underline" href={link} target="_blank" rel="noreferrer noopener">
              Live
            </a>
          ) : null}
          {repo ? (
            <a className="hover:underline" href={repo} target="_blank" rel="noreferrer noopener">
              Code
            </a>
          ) : null}
        </div>
      </div>
      {description ? <p className="text-sm text-foreground/80 mt-1">{description}</p> : null}
      {highlights?.length ? (
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : null}
      {stack?.length ? (
        <div className="mt-3 flex flex-wrap gap-1">
          {stack.map((t, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}


