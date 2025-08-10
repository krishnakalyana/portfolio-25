"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSpotlight({ title, tagline, ctaLabel, ctaHref, secondaryLabel, secondaryHref, cover }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateBg = useTransform(x, [-60, 60], [20, -20]);
  const translateBgY = useTransform(y, [-60, 60], [10, -10]);
  const translateFg = useTransform(x, [-60, 60], [-6, 6]);
  const translateFgY = useTransform(y, [-60, 60], [-3, 3]);

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-60, Math.min(60, dx)));
    y.set(Math.max(-60, Math.min(60, dy)));
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[min(100%,90rem)] rounded-2xl overflow-hidden card-neo"
      style={{ perspective: 1000 }}
    >
      <div className="relative h-[36vh] min-h-[260px] sm:h-[44vh]">
        <motion.div
          className="absolute inset-0"
          style={{
            x: translateBg,
            y: translateBgY,
            background:
              cover
                ? `url(${cover}) center/cover no-repeat`
                : `radial-gradient(1200px 500px at 10% -10%, rgba(var(--accent1),0.25), transparent 60%), radial-gradient(1200px 500px at 110% 60%, rgba(var(--accent2),0.25), transparent 60%), linear-gradient(135deg, rgba(8,8,16,0.6), rgba(8,8,16,0.2))`,
            filter: "saturate(1.2)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)",
            mixBlendMode: "overlay",
            x: translateBg,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,10,0.8))]" />

        <motion.div
          className="relative h-full w-full flex flex-col justify-end p-6 sm:p-10"
          style={{ x: translateFg, y: translateFgY }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight title-wide heading-cyber" style={{ textTransform: "none" }}>
            {title}
          </h2>
          {tagline ? <p className="mt-2 text-sm text-foreground/85 max-w-3xl">{tagline}</p> : null}
          <div className="mt-6 flex flex-wrap gap-3">
            {ctaHref && (
              <a href={ctaHref} className="btn-gradient rounded-md px-4 py-2 text-sm" target="_blank" rel="noreferrer noopener">{ctaLabel || "View"}</a>
            )}
            {secondaryHref && (
              <a href={secondaryHref} className="btn-ghost rounded-md px-4 py-2 text-sm" target="_blank" rel="noreferrer noopener">{secondaryLabel || "Code"}</a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


