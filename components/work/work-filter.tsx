"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { ProjectArtwork } from "@/components/ui/project-artwork";

export function WorkFilter() {
  const [filter,setFilter]=useState("All");
  const visible=filter==="All"?projects:projects.filter((project)=>project.category===filter);
  return <><div className="filters" aria-label="Filter projects"><button onClick={()=>setFilter("All")} className={filter==="All"?"active":""} aria-pressed={filter==="All"}>All</button>{categories.map((category)=><button key={category} onClick={()=>setFilter(category)} className={filter===category?"active":""} aria-pressed={filter===category}>{category}</button>)}</div><p className="filter-count" aria-live="polite">{visible.length} {visible.length===1?"project":"projects"}</p>{visible.length ? <div className="portfolio-gallery">{visible.map((project)=><article key={project.slug}><Link href={`/work/${project.slug}`}><ProjectArtwork project={project} label={project.sampleContent}/><div className="work-meta"><div><h2>{project.title}</h2><p>{project.category}</p></div><span>{project.year}</span></div></Link></article>)}</div> : <div className="empty-state"><h2>No sample projects in this category yet.</h2><p>Real Kenicmind work can be added here during the content phase.</p><button onClick={()=>setFilter("All")} className="text-link">Reset filter</button></div>}</>;
}
