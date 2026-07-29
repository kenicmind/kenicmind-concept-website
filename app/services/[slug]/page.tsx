import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services,getService } from "@/data/services";
import { projects } from "@/data/projects";
import { ProjectArtwork } from "@/components/ui/project-artwork";
import { ArrowUpRight } from "@/components/ui/icons";

export const dynamicParams=false;
export function generateStaticParams(){return services.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const service=getService((await params).slug);return service?{title:`${service.title} | Kenicmind Concept`,description:service.summary}:{title:"Service not found"};}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const service=getService((await params).slug);if(!service)notFound();const related=projects.filter((project)=>service.relatedCategories.includes(project.category)).slice(0,3);return <><section className="service-hero"><div className="shell"><p className="eyebrow">Service / {service.number}</p><h1>{service.title}</h1><p>{service.description}</p><Link href="/start-project" className="button button--orange">Start a project <ArrowUpRight className="icon"/></Link></div></section><section className="service-detail section"><div className="shell detail-grid"><div><p className="kicker">What is included</p><ul>{service.inclusions.map((item)=><li key={item}>{item}</li>)}</ul></div><div><p className="kicker">Who it is for</p><ul>{service.suitableFor.map((item)=><li key={item}>{item}</li>)}</ul></div></div><div className="shell mini-process"><p className="kicker">The process</p><ol>{service.process.map((step,index)=><li key={step}><span>0{index+1}</span>{step}</li>)}</ol></div></section><section className="related-work"><div className="shell"><p className="kicker">Related sample work</p>{related.length?<div className="related-grid">{related.map((project)=><Link key={project.slug} href={`/work/${project.slug}`}><ProjectArtwork project={project}/><h3>{project.title}</h3></Link>)}</div>:<p className="muted-copy">Approved related work will be added during the content phase.</p>}</div></section></>}
