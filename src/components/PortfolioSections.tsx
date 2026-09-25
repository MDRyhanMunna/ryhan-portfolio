import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Code2,
  Brain,
  Database,
  BarChart3,
  FileText,
} from "lucide-react";
import { featured, projects, profile, skills } from "@/lib/portfolio";
import { ContactForm } from "./ContactForm";

export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

export function AboutSection() {
  const focus = [
    { icon: BarChart3, title: "Data analytics", text: "Clean, explore, and communicate" },
    { icon: Brain, title: "AI & machine learning", text: "Experiment, evaluate, and learn" },
    { icon: Code2, title: "Web & software", text: "Turn ideas into working applications" },
    { icon: Database, title: "Database systems", text: "Organize, connect, and query" },
  ];
  return (
    <section id="about" className="wrap section about-section">
      <SectionHeading
        number="01"
        label="A little about me"
        title="Curious by nature. Learning by building."
      />
      <div className="about-grid">
        <p className="about-lead">
          I’m a final-year <strong>Computer Science & Engineering student</strong> at East West
          University, majoring in Data Science.
        </p>
        <div className="body-copy">
          <p>
            I enjoy working through practical problems with code and data. My projects span
            analytics, AI and machine learning, web and software development, and database systems.
          </p>
          <p>
            Recently, I completed two end-to-end analytics projects using MySQL, Python, and Power
            BI. Alongside that work, I continue exploring software and AI through academic and
            personal projects.
          </p>
        </div>
      </div>
      <div className="focus-grid">
        {focus.map((f) => (
          <div className="focus-item" key={f.title}>
            <f.icon size={22} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section tinted">
      <div className="wrap">
        <SectionHeading
          number="02"
          label="My toolkit"
          title="A foundation across disciplines."
          description="Tools and languages I use across coursework and project work."
        />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <article className="skill-group" key={s.title}>
              <span className="small-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <div className="tags">
                {s.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI/ML", "Web & software", "Database systems"];
  const shown = projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <section id="projects" className="wrap section">
      <SectionHeading
        number="03"
        label="Featured projects"
        title="From questions to working projects."
        description="Two completed analytics projects, from data validation to documented findings and dashboards."
      />
      <div className="featured-grid">
        {featured.map((p, i) => (
          <article className="featured-card" key={p.id}>
            <a
              className={"project-image " + p.id}
              href={p.image}
              target="_blank"
              rel="noreferrer"
              aria-label={"Open " + p.title + " dashboard image"}
            >
              <div className="image-caption">
                <span>
                  0{i + 1} / {p.label}
                </span>
                <ArrowUpRight size={18} />
              </div>
              <img
                src={p.image}
                alt={p.title + ": Power BI overview dashboard"}
                loading="lazy"
                width="1280"
                height="720"
              />
            </a>
            <div className="project-content">
              <div className="project-meta">
                <span>End-to-end analytics</span>
                <span className="complete">
                  <i />
                  Completed
                </span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="metrics">
                {p.metrics.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <details className="project-details">
                <summary>
                  Project approach <span>+</span>
                </summary>
                <p>{p.detail}</p>
                <p>{p.finding}</p>
              </details>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> View repository <ArrowUpRight size={15} />
                </a>
                <a href={p.image} target="_blank" rel="noreferrer">
                  Dashboard <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="more-heading">
        <div>
          <p className="eyebrow">Beyond analytics</p>
          <h3>More projects & explorations</h3>
        </div>
        <p>Selected work across computer science.</p>
      </div>
      <div className="filters" role="group" aria-label="Filter more projects">
        {categories.map((c) => (
          <button key={c} aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} projects shown
      </p>
      <div className="more-grid">
        {shown.map((p) => (
          <article className="more-card" key={p.title}>
            <div className="more-card-top">
              {p.category === "AI/ML" ? (
                <Brain size={24} />
              ) : p.category === "Database systems" ? (
                <Database size={24} />
              ) : (
                <Code2 size={24} />
              )}
              <span>{p.category}</span>
            </div>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p.github && (
              <a className="text-link" href={p.github} target="_blank" rel="noreferrer">
                View repository <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        ))}
      </div>
      <a className="text-link github-more" href={profile.github} target="_blank" rel="noreferrer">
        Explore my GitHub <ArrowRight size={16} />
      </a>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="section tinted">
      <div className="wrap">
        <SectionHeading number="04" label="Education" title="Built on a CSE foundation." />
        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={32} />
          </div>
          <div>
            <p className="eyebrow">East West University</p>
            <h3>B.Sc. in Computer Science & Engineering</h3>
            <p>Major in Data Science · Dhaka, Bangladesh</p><p>2022–Present · CGPA: 3.50/4.00 · Capstone in progress</p>
          </div>
          <span className="status-chip">Final-year student</span>
        </div>
      </div>
    </section>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="wrap section resume-section">
      <div className="resume-icon">
        <FileText size={32} />
      </div>
      <div>
        <p className="eyebrow">Resume</p>
        <h2>The essentials, in one place.</h2>
        <p>My education, technical skills, and selected project work.</p>
      </div>
      {profile.resume ? (
        <a className="button primary" href={profile.resume} target="_blank" rel="noreferrer">
          Download resume <ArrowUpRight size={17} />
        </a>
      ) : (
        <div className="resume-pending">
          <span>Resume available soon</span>
          <a href="/#contact" className="text-link">
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      )}
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">05 / Get in touch</p>
          <h2>
            Let’s start a<br />
            conversation<span>.</span>
          </h2>
          <p>
            I’m interested in internships, collaborative projects, and opportunities to keep
            learning across data, software, and AI.
          </p>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={19} /> GitHub <ArrowUpRight size={16} />
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={19} /> LinkedIn <ArrowUpRight size={16} />
              </a>
            )}
            {profile.email && (
              <a href={"mailto:" + profile.email}>
                <Mail size={19} />
                {profile.email}
              </a>
            )}
          </div>
          <p className="contact-location">Based in Dhaka, Bangladesh</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
