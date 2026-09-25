import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "@/components/PortfolioSections";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Md. Ryhan Munna" }] }),
  component: () => (
    <>
      <h1 className="sr-only">Projects by Md. Ryhan Munna</h1>
      <ProjectsSection />
    </>
  ),
});
