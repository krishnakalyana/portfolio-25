"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "top", label: "Top" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SideNav({ resumeUrl = "/resume.pdf" }) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );

    const observed = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Desktop right rail */}
      <nav className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-2">
        {LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
              active === l.id ? "btn-gradient" : "btn-ghost"
            }`}
            aria-label={l.label}
          >
            {l.label}
          </button>
        ))}
        {resumeUrl ? (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="px-3 py-1.5 rounded-md text-xs btn-ghost"
          >
            Resume
          </a>
        ) : null}
      </nav>

      {/* Mobile bottom bar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
        <div className="backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_70%,transparent)] border border-foreground/10 rounded-full px-2 py-1 flex items-center gap-1">
          {LINKS.slice(0, 5).map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-1 rounded-full text-xs transition-colors ${
                active === l.id ? "btn-gradient" : "btn-ghost"
              }`}
            >
              {l.label}
            </button>
          ))}
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3 py-1 rounded-full text-xs btn-ghost"
            >
              CV
            </a>
          ) : null}
        </div>
      </nav>
    </>
  );
}


