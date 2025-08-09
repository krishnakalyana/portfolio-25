import Image from "next/image";

export default function Header({ name, role, summary, avatarUrl, resumeUrl, contacts = {} }) {
  const hasContacts = Object.values(contacts).some(Boolean);
  return (
    <header className="w-full max-w-3xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
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
      </div>

      <div className="flex items-center gap-3">
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
      </div>

      {summary ? <p className="text-sm text-foreground/80 sm:col-span-2">{summary}</p> : null}
      {hasContacts ? (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/80">
          {contacts.email ? (
            <li>
              <a className="hover:underline" href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </li>
          ) : null}
          {contacts.phone ? <li>{contacts.phone}</li> : null}
          {contacts.website ? (
            <li>
              <a className="hover:underline" href={contacts.website} target="_blank" rel="noreferrer noopener">
                Website
              </a>
            </li>
          ) : null}
          {contacts.github ? (
            <li>
              <a className="hover:underline" href={contacts.github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </li>
          ) : null}
          {contacts.linkedin ? (
            <li>
              <a className="hover:underline" href={contacts.linkedin} target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </li>
          ) : null}
          {contacts.twitter ? (
            <li>
              <a className="hover:underline" href={contacts.twitter} target="_blank" rel="noreferrer noopener">
                Twitter
              </a>
            </li>
          ) : null}
        </ul>
      ) : null}
    </header>
  );
}


