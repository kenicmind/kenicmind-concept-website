import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { ArrowUpRight } from "@/components/ui/icons";

export const metadata:Metadata={title:"Awards | Kenicmind Concept",description:"Graphic Designer of the Year 2023 — Warri Entertainment and Recognition Award."};
export default function AwardsPage(){return <><PageHero label="Recognition" title={<>One meaningful<br/><em>achievement.</em></>} intro="A verified recognition of Johnken’s contribution to visual design and creative communication."/><section className="award-page"><div className="shell award-page-grid"><span className="award-page-year">2023</span><div><p className="kicker kicker--light">Verified achievement</p><h2>Graphic Designer of the Year 2023</h2><p>Warri Entertainment and Recognition Award</p><div className="award-statement"><span>What it represents</span><p>This recognition reflects the commitment to thoughtful visual craft, memorable communication and the continued development of Kenicmind Concept.</p></div><Link href="/about" className="light-link">Meet the founder <ArrowUpRight className="icon"/></Link></div></div></section></>}
