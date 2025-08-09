import portfolio from "@/data/portfolio";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  const { name, role, summary, avatarUrl, resumeUrl, contacts, skills, experience, projects, education } = portfolio;
  return (
    <div className="font-sans min-h-screen p-6 sm:p-10 relative overflow-hidden">
      <div className="fx-grid" />
      <div className="relative mx-auto max-w-3xl space-y-10">
        <Header
          name={name}
          role={role}
          summary={summary}
          avatarUrl={avatarUrl}
          resumeUrl={resumeUrl}
          contacts={contacts}
        />

        {skills?.length ? (
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 neon-chip"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>
        ) : null}

        {experience?.length ? (
          <Section title="Experience">
            <div className="space-y-5">
              {experience.map((item, idx) => (
                <ExperienceItem key={idx} {...item} />
              ))}
            </div>
          </Section>
        ) : null}

        {projects?.length ? (
          <Section title="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((p, idx) => (
                <ProjectCard key={idx} {...p} />
              ))}
            </div>
          </Section>
        ) : null}

        {education?.length ? (
          <Section title="Education">
            <ul className="space-y-3 text-sm">
              {education.map((e, i) => (
                <li key={i} className="border-b border-foreground/10 pb-3 last:border-none">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{e.school}</span>
                    <span className="text-foreground/70 text-xs">{[e.start, e.end].filter(Boolean).join(" — ")}</span>
                  </div>
                  {e.degree ? <div className="text-foreground/80 mt-0.5">{e.degree}</div> : null}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <Footer name={name} />
      </div>
    </div>
  );
}
