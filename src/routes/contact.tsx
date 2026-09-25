import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/PortfolioSections";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Md. Ryhan Munna" }] }),
  component: () => (
    <>
      <h1 className="sr-only">Contact Md. Ryhan Munna</h1>
      <ContactSection />
    </>
  ),
});
