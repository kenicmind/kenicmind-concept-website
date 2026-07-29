"use client";

import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/work/project-card";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid" role="list" aria-label="Portfolio projects">
      {projects.map((project, index) => (
        <Reveal
          key={project.slug}
          variant="fade-up"
          delay={index * 80}
          className="project-grid__item"
          role="listitem"
        >
          <ProjectCard project={project} priority={index === 0} />
        </Reveal>
      ))}
    </div>
  );
}
