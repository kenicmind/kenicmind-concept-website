import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { SiteCta } from "@/components/ui/site-cta";
import { Process } from "@/components/home/process";
import { services } from "@/data/services";
import { ArrowUpRight } from "@/components/ui/icons";

export const metadata:Metadata={title:"Services | Kenicmind Concept",description:"Brand identity, campaigns, event design, print, corporate communication, creative direction and motion graphics."};
export default function ServicesPage(){return <><PageHero label="Creative capabilities" title={<>Design expertise for<br/>meaningful <em>impact.</em></>} intro="Focused creative services that help brands and organisations communicate with clarity, consistency and character." meta="Seven core capabilities"/><section className="listing-section"><div className="shell service-list route-services">{services.map((service)=><article key={service.slug}><span>{service.number}</span><h2><Link href={`/services/${service.slug}`}>{service.title}</Link></h2><p>{service.summary}</p><Link href={`/services/${service.slug}`} className="service-arrow" aria-label={`Explore ${service.title}`}><ArrowUpRight className="icon"/></Link></article>)}</div></section><Process/><SiteCta/></>}
