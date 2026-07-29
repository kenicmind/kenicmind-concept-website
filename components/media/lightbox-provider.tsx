"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { ProjectLightbox } from "@/components/media/project-lightbox";
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

type LightboxProject = Project & { images?: LightboxImage[] };

type LightboxContextValue = {
  openLightbox: (project: LightboxProject, index?: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<LightboxProject | null>(null);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((nextProject: LightboxProject, nextIndex = 0) => {
    setProject(nextProject);
    setIndex(nextIndex);
  }, []);

  const close = useCallback(() => setProject(null), []);
  const images = project?.images?.length ? project.images : project?.cover ? [{ src: project.cover, alt: `${project.title} project image`, focalPoint: project.mobileFocalPosition ?? project.focalPosition ?? "center" }] : [];

  const value = useMemo(() => ({ openLightbox }), [openLightbox]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {project ? <ProjectLightbox project={project} images={images} index={index} onIndexChange={setIndex} onClose={close} /> : null}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) throw new Error("useLightbox must be used within a LightboxProvider");
  return context;
}
