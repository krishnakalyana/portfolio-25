"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import AccentToggle from "@/components/AccentToggle";

export default function Header({ name, role, summary, avatarUrl, resumeUrl, contacts = {} }) {
  const hasContacts = Object.values(contacts).some(Boolean);
  return (
    <>
      {/* Full-width name banner */}
      <div className="w-full px-4 sm:px-8 py-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-[0.08em] capitalize name-shine font-display display-gradient display-glow display-stroke">
            {name}
          </h1>
        </div>
      </div>

      {summary ? (
        <div className="w-full px-4 sm:px-8 pb-4">
          <div className="mx-auto max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-base sm:text-lg text-foreground/85"
            >
              {summary}
            </motion.p>
          </div>
        </div>
      ) : null}

      {/* Role line */}
      {role ? (
        <div className="w-full px-4 sm:px-8 pb-2">
          <div className="mx-auto max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-sm text-foreground/70 neon-role"
            >
              {role}
            </motion.p>
          </div>
        </div>
      ) : null}

      {/* CTAs / Accent */}
      <div className="w-full px-4 sm:px-8 pb-3">
        <div className="mx-auto max-w-6xl flex items-center gap-3">
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
        </div>
      </div>

      {/* Contacts */}
      {hasContacts ? (
        <div className="w-full px-4 sm:px-8 pb-6">
          <div className="mx-auto max-w-6xl">
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
          </div>
        </div>
      ) : null}
    </>
  );
}


