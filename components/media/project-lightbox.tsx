"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  focalPoint?: string;
  objectFit?: "cover" | "contain";
  originalFilename?: string;
};

export function ProjectLightbox({ project, images, index, onIndexChange, onClose }: { project: Project; images: LightboxImage[]; index: number; onIndexChange: (value: number) => void; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const image = images[index];
  const total = images.length;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + total) % total);
      if (event.key === "ArrowRight") onIndexChange((index + 1) % total);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onClose, onIndexChange, total]);

  const stage = useMemo(() => ({ backgroundImage: `url(${image?.src})` }), [image?.src]);

  return (
    <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} image viewer`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="project-lightbox__panel" ref={dialogRef} tabIndex={-1}>
        <button type="button" className="project-lightbox__close" onClick={onClose} aria-label="Close lightbox">×</button>
        <div className="project-lightbox__stage" style={stage}>
          {image ? (
            <Image src={image.src} alt={image.alt} fill sizes="100vw" className="project-lightbox__image" style={{ objectFit: "contain" }} />
          ) : null}
        </div>
        <aside className="project-lightbox__info">
          <p className="project-lightbox__label">{project.sampleContent ? "SAMPLE CONCEPT" : "PROJECT IMAGE"}</p>
          <h2>{project.title}</h2>
          <p className="project-lightbox__meta">{project.category} / {project.year}</p>
          <p className="project-lightbox__count" aria-live="polite">Image {index + 1} of {total}</p>
          {image?.caption ? <p className="project-lightbox__caption">{image.caption}</p> : null}
          {image?.width && image?.height ? <p className="project-lightbox__dimensions">{image.width} × {image.height} px</p> : null}
          {image?.originalFilename ? <p className="project-lightbox__filename">{image.originalFilename}</p> : null}
          <Link href={`/work/${project.slug}`} className="button-link button-link--primary project-lightbox__link" onClick={onClose}>
            View Full Case Study <ArrowUpRight className="button-link__icon" />
          </Link>
          <div className="project-lightbox__controls">
            <button type="button" onClick={() => onIndexChange((index - 1 + total) % total)} aria-label="Previous image"><ArrowLeft className="icon" /></button>
            <button type="button" onClick={() => onIndexChange((index + 1) % total)} aria-label="Next image"><ArrowRight className="icon" /></button>
          </div>
        </aside>
      </div>
    </div>
  );
}
