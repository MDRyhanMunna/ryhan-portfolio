import { createFileRoute } from "@tanstack/react-router";
import {
  AboutSection,
  SkillsSection,
  EducationSection,
  ResumeSection,
} from "@/components/PortfolioSections";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Md. Ryhan Munna" }] }),
  component: () => (
    <>
      <h1 className="sr-only">About Md. Ryhan Munna</h1>
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ResumeSection />
    </>
  ),
});
