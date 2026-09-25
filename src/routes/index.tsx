import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { AnimatedInterests } from "@/components/Motion";
import heroImg from "@/assets/munna-hero.png";
import { profile } from "@/lib/portfolio";
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  EducationSection,
  ResumeSection,
  ContactSection,
} from "@/components/PortfolioSections";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md. Ryhan Munna — CSE Student & Builder" },
      {
        name: "description",
        content:
          "Final-year CSE student at East West University, majoring in Data Science. Explore projects in data analytics, AI, software, and databases.",
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <>
      <section id="home" className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> A curious mind. A practical approach.
            </p>
            <p className="hello">Hi, I’m</p>
            <h1>
              Md. Ryhan
              <br />
              <span>Munna.</span>
            </h1>
            <h2>Computer Science & Engineering Student</h2>
            <AnimatedInterests />
            <p className="hero-description">
              Final-year student at East West University, majoring in Data Science. I build
              projects, explore data, and learn by turning ideas into working solutions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#resume">
                Resume <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
                </a>
              )}
              <span>
                <MapPin size={15} /> Dhaka, Bangladesh
              </span>
            </div>
          </div>
          <div className="portrait-area">
            <div className="portrait-grid" />
            <span className="portrait-code" aria-hidden="true">
              &lt; curious /&gt;
            </span>
            <img
              className="hero-portrait"
              src={heroImg}
              alt="Md. Ryhan Munna"
              width="1024"
              height="1024"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span className="status-dot" />
              <div>
                <strong>Learning. Building. Improving.</strong>
                <span>CSE @ East West University</span>
              </div>
              <span className="caption-arrow">↗</span>
            </div>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <span>Exploring the intersection of</span>
          <div>
            Data Analytics <i /> AI / ML <i /> Web & Software <i /> Database Systems
          </div>
          <a href="#about" aria-label="Scroll to about">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
