"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AccentToggle from "@/components/AccentToggle";

export default function Navbar({ name = "", resumeUrl = "/resume.pdf" }) {
  const brand = (name || "Portfolio")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-20 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_70%,transparent)] border-b border-foreground/10"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] opacity-80 hover:opacity-100 transition-opacity">
          {brand}
        </Link>
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <AccentToggle />
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs sm:text-sm px-3 py-1.5 rounded-md btn-ghost"
            >
              Resume
            </a>
          ) : null}
        </div>
      </div>
    </motion.nav>
  );
}


