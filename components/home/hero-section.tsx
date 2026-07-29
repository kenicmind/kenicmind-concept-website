import Link from "next/link";
import { LatestWorkSlider } from "@/components/home/latest-work-slider";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section className="hero hero--home" aria-label="Hero introduction and latest work">
      <div className="shell hero__grid">
        <Reveal variant="fade-up" className="hero__copy">
          <p className="eyebrow hero__eyebrow">Award-winning independent creative studio</p>
          <h1 className="hero__title">
            Visual ideas shaped into <em>unforgettable</em> experiences.
          </h1>
          <p className="hero__summary">
            Kenicmind Concept creates strategic identities, campaigns and visual experiences for brands, organisations and individuals.
          </p>
          <div className="hero__actions">
            <Link href="/work" className="button button--orange hero__button">
              Explore Our Work <ArrowUpRight className="icon" />
            </Link>
            <Link href="/start-project" className="button hero__button hero__button--secondary">
              Start a Project <ArrowUpRight className="icon" />
            </Link>
          </div>
        </Reveal>
        <Reveal variant="fade-right">
          <LatestWorkSlider />
        </Reveal>
      </div>
    </section>
  );
}
