import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "@/components/ui/icons";
import { ProjectCard } from "@/components/work/project-card";
import { Reveal } from "@/components/motion/reveal";

export function SelectedWork() {
  const featured = projects.slice(0, 5);

  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="shell selected-work__layout">
        <Reveal variant="fade-up" className="selected-work__intro">
          <p className="selected-work__label">Selected Work</p>
          <h2 id="selected-work-title">Featured Projects</h2>
          <p>Every project begins with a clear idea and is developed into a visual system designed to be remembered. This selection brings together brand identities, campaign graphics, event visuals and packaging work shaped through strategy, detail and strong creative direction.</p>
          <p>Explore the thinking, process and final execution behind each featured project.</p>
          <p className="selected-work__count">05 SELECTED PROJECTS</p>
          <Link href="/work" className="selected-work__link">
            View All Work <ArrowUpRight className="icon" />
          </Link>
        </Reveal>

        <Reveal variant="stagger-container" className="selected-work__grid" role="list" aria-label="Featured projects">
          {featured.map((project, index) => (
            <div key={project.id} className={`selected-work__item selected-work__item--${index + 1} motion-reveal motion-reveal--stagger-item`} role="listitem">
              <ProjectCard project={project} priority={index === 0} ratio={index < 3 ? "4 / 3" : "16 / 9"} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
