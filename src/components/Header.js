"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import AccentToggle from "@/components/AccentToggle";

export default function Header({ name, role, summary, avatarUrl, resumeUrl, contacts = {} }) {
  const hasContacts = Object.values(contacts).some(Boolean);
  return (
    <header className="w-full max-w-3xl mx-auto hero rounded-xl p-5 sm:p-6 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${name} avatar`}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        ) : null}
        <div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-[0.08em] capitalize name-shine font-display display-gradient display-glow display-stroke">
            {name}
          </h1>
          {role ? <p className="text-sm text-foreground/70 mt-1 neon-role">{role}</p> : null}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-3"
      >
        {resumeUrl ? (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm px-3 py-1.5 rounded-md btn-gradient"
          >
            View Resume
          </a>
        ) : null}
        <AccentToggle />
      </motion.div>

      {summary ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/80"
        >
          {summary}
        </motion.p>
      ) : null}
      {hasContacts ? (
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="dot-sep flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground/80"
        >
          {contacts.email ? (
            <motion.li variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
              <a className="hover:underline" href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </motion.li>
          ) : null}
          {contacts.phone ? (
            <motion.li variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>{contacts.phone}</motion.li>
          ) : null}
          {contacts.website ? (
            <motion.li variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
              <a className="hover:underline" href={contacts.website} target="_blank" rel="noreferrer noopener">
                Website
              </a>
            </motion.li>
          ) : null}
          {contacts.github ? (
            <motion.li variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
              <a className="hover:underline" href={contacts.github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </motion.li>
          ) : null}
          {contacts.linkedin ? (
            <motion.li variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
              <a className="hover:underline" href={contacts.linkedin} target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </motion.li>
          ) : null}
          {contacts.twitter ? (
            <motion.li variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
              <a className="hover:underline" href={contacts.twitter} target="_blank" rel="noreferrer noopener">
                Twitter
              </a>
            </motion.li>
          ) : null}
        </motion.ul>
      ) : null}
    </header>
  );
}


