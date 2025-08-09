"use client";
import { motion } from "framer-motion";

export default function Section({ title, children, className = "" }) {
  return (
    <section className={`w-full max-w-3xl mx-auto ${className}`}>
      {title ? (
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.45 }}
          className="text-lg font-semibold tracking-tight text-foreground/90 mb-6 section-underline"
        >
          {title}
        </motion.h2>
      ) : null}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="space-y-4"
      >
        {children}
      </motion.div>
    </section>
  );
}


