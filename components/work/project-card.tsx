"use client";

import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import { ResponsiveProjectImage } from "@/components/media/responsive-project-image";
import { useLightbox } from "@/components/media/lightbox-provider";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean; ratio?: string }) {
  const { openLightbox } = useLightbox();

  return (
    <article className="project-card">
      <div className="project-image-frame">
        {project.cover ? (
          <ResponsiveProjectImage
            src={project.cover}
            alt={`Sample ${project.category.toLowerCase()} presentation for ${project.title}`}
            priority={priority}
            sizes="(max-width: 699px) 100vw, (max-width: 1099px) 50vw, 33vw"
            focalPoint={project.mobileFocalPosition ?? project.focalPosition ?? "center"}
            className="project-card__image"
            onOpen={() => openLightbox(project)}
          />
        ) : (
          <button type="button" className="project-card__media-button" onClick={() => openLightbox(project)} aria-label={`View full-size image for ${project.title}`}>
            <div className={`project-card__fallback artwork ${project.palette}`}>
              <div className="art-grid" />
              <div className="art-word">{project.title.charAt(0)}</div>
            </div>
          </button>
        )}
      </div>

      <div className="project-card__meta">
        <div className="project-card__copy">
          <div className="project-card__title-row">
            <Link href={`/work/${project.slug}`} className="project-card__title-link">
              <h3>{project.title}</h3>
            </Link>
            <Link href={`/work/${project.slug}`} className="project-card__arrow-link" aria-label={`Open ${project.title} case study`}>
              <ArrowUpRight className="project-card__arrow" />
            </Link>
          </div>
          <p>
            {project.category} <span>/</span> {project.year}
          </p>
          {project.sampleContent ? <span className="project-card__sample">Sample Concept</span> : null}
        </div>
      </div>
    </article>
  );
}
