"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DockNav({ resumeUrl = "/resume.pdf" }) {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const ids = ["about", "projects", "experience", "contact"];
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const Item = ({ href, label, icon: Icon }) => {
    const isActive = active === href.replace('#','');
    return (
      <a
        href={href}
        aria-label={label}
        className={`group relative flex items-center justify-center w-10 h-10 rounded-md btn-ghost ${
          isActive ? 'ring-1 ring-[rgba(var(--accent1),0.45)]' : ''
        }`}
      >
        <Icon className="w-5 h-5 opacity-90" />
        <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_85%,transparent)] text-xs opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
      </a>
    );
  };

  const IconInfo = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  );
  const IconGrid = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M3 3h8v8H3z"/><path d="M13 3h8v8h-8z"/><path d="M3 13h8v8H3z"/><path d="M13 13h8v8h-8z"/></svg>
  );
  const IconBriefcase = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><path d="M3 13h18"/></svg>
  );
  const IconMail = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/></svg>
  );
  const IconFile = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
  );

  return (
    <>
      {/* Desktop/right side dock */}
      <motion.nav
        initial={{ x: 24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex fixed right-2 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-xl backdrop-blur-md border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_70%,transparent)]"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="writing-vertical text-[11px] tracking-[0.25em] opacity-70">NAV</span>
          <div className="h-0.5 w-5 bg-foreground/20" />
        </div>
        <Item href="#about" label="About" icon={IconInfo} />
        <Item href="#projects" label="Projects" icon={IconGrid} />
        <Item href="#experience" label="Experience" icon={IconBriefcase} />
        <Item href="#contact" label="Contact" icon={IconMail} />
        <div className="h-px my-1 bg-foreground/10" />
        {resumeUrl ? (
          <a href={resumeUrl} target="_blank" rel="noreferrer noopener" className="group relative flex items-center justify-center w-10 h-10 rounded-md btn-gradient">
            <IconFile className="w-5 h-5" />
            <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_85%,transparent)] text-xs opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
          </a>
        ) : null}
      </motion.nav>

      {/* Mobile/bottom dock */}
      <motion.nav
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed inset-x-0 bottom-3 z-40 px-3"
      >
        <div className="mx-auto max-w-3xl flex items-center justify-between gap-2 rounded-xl backdrop-blur-md border border-foreground/10 bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-2 py-2">
          <a href="#about" aria-label="About" className="px-3 py-2 rounded-md btn-ghost"><IconInfo className="w-5 h-5" /></a>
          <a href="#projects" aria-label="Projects" className="px-3 py-2 rounded-md btn-ghost"><IconGrid className="w-5 h-5" /></a>
          <a href="#experience" aria-label="Experience" className="px-3 py-2 rounded-md btn-ghost"><IconBriefcase className="w-5 h-5" /></a>
          <a href="#contact" aria-label="Contact" className="px-3 py-2 rounded-md btn-ghost"><IconMail className="w-5 h-5" /></a>
          {resumeUrl ? (
            <a href={resumeUrl} target="_blank" rel="noreferrer noopener" aria-label="Resume" className="px-3 py-2 rounded-md btn-gradient"><IconFile className="w-5 h-5" /></a>
          ) : null}
        </div>
      </motion.nav>
    </>
  );
}


