"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceRow } from "@/components/services/service-row";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";

export function ExpertiseSection() {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");
  const activeService = useMemo(() => services.find((service) => service.slug === activeSlug) ?? services[0], [activeSlug]);

  return (
    <section className="section expertise" aria-labelledby="expertise-title">
      <div className="site-container">
        <Reveal variant="fade-up" className="expertise__header">
          <div>
            <p className="expertise__label">CAPABILITIES / 02</p>
            <h2 id="expertise-title">
              Our <em>Expertise</em>
            </h2>
          </div>
          <p>
            Strategic creative services designed to give brands clarity, distinction and lasting visual value. From identity development to campaign execution, every
            solution is shaped with purpose, detail and strong creative direction.
          </p>
        </Reveal>

        <div className="expertise__divider" aria-hidden="true" />

        <div className="expertise__layout">
          <div className="expertise__list" role="list" aria-label="Expertise services">
            {services.map((service) => (
              <div key={service.slug} role="listitem">
                <ServiceRow service={service} active={service.slug === activeService?.slug} onHover={setActiveSlug} />
              </div>
            ))}
          </div>

          <aside className="expertise__preview" aria-label={`${activeService?.title ?? "Service"} preview`} aria-hidden="true">
            <div className="expertise__artwork">
              {activeService?.previewImage ? (
                <Image src={activeService.previewImage} alt="" fill sizes="(min-width:1100px) 390px, 100vw" className="expertise__image" style={{ objectPosition: activeService.previewFocal ?? "center" }} />
              ) : (
                <div className="expertise__fallback artwork art-blue">
                  <div className="art-grid" />
                  <div className="art-word">{activeService?.number}</div>
                </div>
              )}
              <div className="expertise__shade" />
            </div>
          </aside>
        </div>

        <Reveal variant="fade-up" className="expertise__footer">
          <Link href="/services" className="expertise__link">
            Explore All Services <ArrowUpRight className="icon" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
