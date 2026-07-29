"use client";

import { useLightbox } from "@/components/media/lightbox-provider";
import type { Project } from "@/data/projects";

export function ProjectGallery({ project }: { project: Project }) {
  const { openLightbox } = useLightbox();
  const images = project.gallery.map((palette, index) => ({
    src: project.cover ?? "",
    alt: `${project.title} gallery image ${index + 1}`,
    caption: `Gallery image ${index + 1}`,
    originalFilename: `${project.slug}-${index + 1}.jpg`,
  }));

  return (
    <div className="case-gallery">
      {images.map((image, index) => (
        <button key={image.originalFilename} type="button" className={`artwork ${project.gallery[index]}`} onClick={() => openLightbox({ ...project, images } as Project & { images: typeof images }, index)} aria-label={`View full-size image ${index + 1} for ${project.title}`}>
          <div className="art-grid" />
          <div className="art-word">{index + 1}</div>
          <span className="sample-tag">Sample supporting artwork</span>
        </button>
      ))}
    </div>
  );
}
