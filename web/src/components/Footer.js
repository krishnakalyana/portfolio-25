export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full max-w-3xl mx-auto text-xs text-foreground/70 py-10">
      <div className="flex items-center justify-between">
        <span>© {year} {name || ""}</span>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:underline"
        >
          Built with Next.js + Tailwind
        </a>
      </div>
    </footer>
  );
}


