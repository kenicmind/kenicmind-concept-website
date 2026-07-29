import { services } from "@/data/services";
import { ArrowUpRight } from "@/components/ui/icons";
import Link from "next/link";

export function Services() {
  return <section className="section services"><div className="shell"><div className="section-heading"><div><p className="kicker">Capabilities / 02</p><h2>Our <em>Expertise</em></h2></div><p>Focused creative services designed to give every brand expression clarity, character and lasting value.</p></div><div className="service-list">{services.slice(0,5).map((service) => <article key={service.number}><span>{service.number}</span><h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3><p>{service.summary}</p><Link href={`/services/${service.slug}`} className="service-arrow" aria-label={`View ${service.title}`}><ArrowUpRight className="icon" /></Link></article>)}</div><Link href="/services" className="text-link">Explore all services <ArrowUpRight className="icon" /></Link></div></section>;
}
