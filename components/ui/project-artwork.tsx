import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

export function ProjectArtwork({ project, label = false, className = "" }: { project:Project; label?:boolean; className?:string }) {
  return <div className={`artwork ${project.palette} ${className}`}>{project.cover ? <Image src={project.cover} alt={`${project.title} project artwork`} fill sizes="(max-width:768px) 100vw, 70vw" className="project-image" style={{ "--focal":project.mobileFocalPosition ?? project.focalPosition ?? "center" } as CSSProperties} /> : <><div className="art-grid" /><div className="art-word">{project.title.charAt(0)}</div></>}{label && <span className="sample-tag">Selected work</span>}</div>;
}
