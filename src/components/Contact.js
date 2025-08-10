"use client";

import { motion } from "framer-motion";

export default function Contact({ contacts = {} }) {
  const { email, phone, website, github, linkedin, twitter } = contacts || {};
  const items = [
    { label: "Email", href: email && `mailto:${email}` },
    { label: "Phone", href: phone && `tel:${phone}` },
    { label: "Website", href: website },
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
    { label: "Twitter", href: twitter },
  ].filter((i) => i.href);

  if (!items.length) return null;

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-3"
    >
      {items.map((it) => (
        <motion.li key={it.label} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
          <a className="btn-ghost rounded-md px-3 py-2 block text-sm hover:underline" href={it.href} target="_blank" rel="noreferrer noopener">
            {it.label}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}


