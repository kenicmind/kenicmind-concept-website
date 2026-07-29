"use client";

import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Service } from "@/data/services";

export function ServiceRow({ service, active = false, onHover }: { service: Service; active?: boolean; onHover?: (slug: string) => void }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`service-row ${active ? "is-active" : ""}`}
      aria-label={`${service.title}: ${service.summary}`}
      onMouseEnter={() => onHover?.(service.slug)}
      onFocus={() => onHover?.(service.slug)}
    >
      <span className="service-row__number">{service.number}</span>
      <span className="service-row__title">{service.title}</span>
      <span className="service-row__description">{service.summary}</span>
      <span className="service-row__arrow" aria-hidden="true">
        <ArrowUpRight className="icon" />
      </span>
      <span className="service-row__accent" aria-hidden="true" />
    </Link>
  );
}
