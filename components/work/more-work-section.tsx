import { Reveal } from "@/components/motion/reveal";
import { ProjectGrid } from "@/components/work/project-grid";
import type { Project } from "@/data/projects";

type MoreWorkSectionProps = {
  projects: Project[];
  visibleCount: number;
};

export function MoreWorkSection({ projects, visibleCount }: MoreWorkSectionProps) {
  return (
    <section className="work-more" aria-labelledby="more-work-title">
      <div className="work-more__header">
        <Reveal variant="fade-up" className="work-more__copy">
          <p className="work-more__label">More creative work</p>
          <h2 id="more-work-title">More ideas brought to life.</h2>
          <p>Explore additional campaign designs, event visuals, brand concepts, social-media graphics, print applications and creative experiments.</p>
        </Reveal>
        <p className="work-more__count" aria-live="polite">
          {visibleCount} additional projects
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}
