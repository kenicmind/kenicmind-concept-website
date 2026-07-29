import type { Metadata } from "next";
import { WorkPageClient } from "@/components/work/work-page-client";
import { SiteCta } from "@/components/ui/site-cta";

export const metadata: Metadata = {
  title: "Work | Kenicmind Concept",
  description: "Explore selected branding, campaign, event, packaging and visual communication projects by Kenicmind Concept.",
};

export default function WorkPage() {
  return (
    <>
      <WorkPageClient />
      <SiteCta
        title="Have a project in mind?"
        text="Share your brief, timeline or idea and we’ll shape it into a polished visual direction with the same care and precision shown across the portfolio."
      />
    </>
  );
}
