"use client";

import { motion } from "framer-motion";

export default function Skills({ skills = [] }) {
  if (!skills?.length) return null;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      className="flex flex-wrap gap-2"
    >
      {skills.map((s, i) => (
        <motion.span
          key={`${s}-${i}`}
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
          className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 neon-chip neon-chip-hover neon-flicker"
          style={{ ['--flicker-delay']: `${(i % 5) * 0.25}s` }}
        >
          {s}
        </motion.span>
      ))}
    </motion.div>
  );
}


