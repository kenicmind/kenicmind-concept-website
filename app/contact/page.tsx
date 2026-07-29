import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { contact } from "@/data/contact";
import { ArrowUpRight } from "@/components/ui/icons";

export const metadata:Metadata={title:"Contact | Kenicmind Concept",description:"Contact Kenicmind Concept about identity, campaign and visual design projects."};
export default function ContactPage(){const channels=[contact.email,contact.whatsapp,contact.instagram] as Array<{label:string;href:string|null}>;return <><PageHero label="Contact the studio" title={<>Good projects begin<br/>with a <em>conversation.</em></>} intro="Share an idea, ask a question or begin planning your next visual design project."/><section className="contact-section"><div className="shell contact-grid"><div><p className="kicker">Availability</p><p className="contact-lead">{contact.availability}</p><Link href="/start-project" className="button button--orange">Start a detailed enquiry <ArrowUpRight className="icon"/></Link></div><div className="contact-list">{channels.map((channel)=><div key={channel.label}><span>Contact channel</span>{channel.href?<a href={channel.href}>{channel.label}</a>:<p>{channel.label}</p>}</div>)}<div><span>Location</span><p>{contact.location}</p></div></div></div></section></>}
