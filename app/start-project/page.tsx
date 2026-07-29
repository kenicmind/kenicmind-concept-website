import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectEnquiryForm } from "@/components/forms/project-enquiry-form";

export const metadata:Metadata={title:"Start a Project | Kenicmind Concept",description:"Tell Kenicmind Concept about your next brand, campaign or visual design project."};
export default function StartProjectPage(){return <><PageHero label="Project enquiry" title={<>Tell us what you<br/>want to <em>create.</em></>} intro="A considered brief helps us understand the ambition, requirements and best next step for your project."/><section className="form-section"><div className="shell form-layout"><aside><p className="kicker">Before you begin</p><p>Share as much useful context as you can. No enquiry is delivered yet because backend submission will be connected in a future phase.</p></aside><ProjectEnquiryForm/></div></section></>}
