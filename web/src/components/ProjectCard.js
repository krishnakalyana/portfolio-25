"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ name, description, link, repo, highlights = [], stack = [] }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, dx)));
    y.set(Math.max(-50, Math.min(50, dy)));
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="card-neo rounded-lg p-4"
    >
      <div className="flex items-center justify-between gap-2" style={{ transform: "translateZ(24px)" }}>
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
      {description ? <p className="text-sm text-foreground/80 mt-1" style={{ transform: "translateZ(18px)" }}>{description}</p> : null}
      {highlights?.length ? (
        <ul className="list-disc list-inside mt-2 text-sm space-y-1" style={{ transform: "translateZ(14px)" }}>
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : null}
      {stack?.length ? (
        <div className="mt-3 flex flex-wrap gap-1" style={{ transform: "translateZ(12px)" }}>
          {stack.map((t, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}


