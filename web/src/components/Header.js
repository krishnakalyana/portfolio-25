"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header({ name, role, summary, avatarUrl, resumeUrl, contacts = {} }) {
  const hasContacts = Object.values(contacts).some(Boolean);
  return (
    <header className="w-full max-w-3xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
          <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
          {role ? <p className="text-sm text-foreground/70 mt-0.5">{role}</p> : null}
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
            className="text-sm px-3 py-1.5 rounded-md border border-foreground/15 hover:bg-foreground/5"
          >
            View Resume
          </a>
        ) : null}
      </motion.div>

      {summary ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-foreground/80 sm:col-span-2"
        >
          {summary}
        </motion.p>
      ) : null}
      {hasContacts ? (
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/80"
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


