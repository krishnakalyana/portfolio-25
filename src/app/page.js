import portfolio from "@/data/portfolio";
import Header from "@/components/Header";
import DockNav from "@/components/DockNav";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { name, role, summary, avatarUrl, resumeUrl, contacts, skills, experience, projects, education } = portfolio;
  return (
    <div className="font-sans min-h-screen p-4 sm:p-8 relative overflow-hidden">
      <div className="fx-grid" />
      <DockNav resumeUrl={resumeUrl} />
      <div className="relative mx-auto max-w-5xl space-y-16 pt-8 sm:pt-12" id="top">
        <div id="about">
          <Header
            name={name}
            role={role}
            summary={summary}
            avatarUrl={avatarUrl}
            resumeUrl={resumeUrl}
            contacts={contacts}
          />
        </div>
        {projects?.length ? (
          <Section id="projects" title="Featured Projects">
            <div className="glassy-grid">
              {projects.map((p, idx) => (
                <div key={idx}>
                  <ProjectCard {...p} />
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        <div className="separator" />

        {skills?.length ? (
          <Section title="Skills">
            <Skills skills={skills} />
          </Section>
        ) : null}

        <div className="separator" />

        {experience?.length ? (
          <Section title="Experience">
            <div id="experience" className="space-y-5">
              {experience.map((item, idx) => (
                <ExperienceItem key={idx} {...item} />
              ))}
            </div>
          </Section>
        ) : null}

        <div className="separator" />

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

        <Section id="contact" title="Contact">
          <Contact contacts={contacts} />
        </Section>

        <Footer name={name} />
      </div>
    </div>
  );
}
