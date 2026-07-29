import { FinalCta } from "@/components/home/final-cta";

export function SiteCta({ title, text }: { title?: string; text?: string }) {
  return <FinalCta title={title} text={text} />;
}
