"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { useLightbox } from "@/components/media/lightbox-provider";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons";

type SlideProject = (typeof projects)[number];

function SlideArtwork({ project }: { project: SlideProject }) {
  if (project.cover) {
    return <Image src={project.cover} alt="" fill sizes="(max-width: 1440px) 100vw, 840px" className="hero-slider__image" style={{ "--focal": project.focalPosition ?? "center", "--mobile-focal": project.mobileFocalPosition ?? project.focalPosition ?? "center" } as CSSProperties} />;
  }
  return (
    <div className={`hero-slider__placeholder ${project.palette}`}>
      <div className="hero-slider__placeholder-grid" />
      <div className="hero-slider__placeholder-word">{project.title.charAt(0)}</div>
    </div>
  );
}

export function LatestWorkSlider() {
  const slides = useMemo(() => projects.filter((project) => project.slider).slice(0, 5), []);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const { openLightbox } = useLightbox();
  const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const go = useCallback((index: number) => setActive((index + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (reducedMotion || paused || slides.length <= 1) return;
    timerRef.current = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, reducedMotion, slides.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(active - 1);
      if (event.key === "ArrowRight") go(active + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, go]);

  const current = slides[active];

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Latest work slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="hero-slider__stage">
        {slides.map((project, index) => (
          <article key={project.id} className={`hero-slider__slide ${index === active ? "is-active" : ""}`} aria-hidden={index !== active}>
            <Link href={`/work/${project.slug}`} className="hero-slider__hit-area" aria-label={`View ${project.title} case study`} tabIndex={index === active ? 0 : -1} />
            <SlideArtwork project={project} />
            <div className="hero-slider__overlay" />
            <button type="button" className="hero-slider__expand" aria-label={`View full image for ${project.title}`} onClick={() => openLightbox(project)} />
            <div className="hero-slider__content">
              <p className="hero-slider__meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </p>
              <h2>{project.title}</h2>
              <p className="hero-slider__description">{project.description}</p>
              <Link href={`/work/${project.slug}`} tabIndex={index === active ? 0 : -1} className="hero-slider__link">
                View Case Study <ArrowUpRight className="icon" />
              </Link>
            </div>
            <div className="hero-slider__counter">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</div>
          </article>
        ))}
      </div>

      <div className="hero-slider__controls" aria-label="Slider controls">
        <div className="hero-slider__progress" aria-hidden="true">
          <span style={{ width: `${((active + 1) / slides.length) * 100}%` }} />
        </div>
        <button type="button" className="hero-slider__control" onClick={() => go(active - 1)} aria-label="Previous slide">
          <ArrowLeft className="icon" />
        </button>
        <button type="button" className="hero-slider__control" onClick={() => go(active + 1)} aria-label="Next slide">
          <ArrowRight className="icon" />
        </button>
      </div>

      {current && (
        <div className="sr-only" aria-live="polite">
          Showing {current.title} from {current.category}, slide {active + 1} of {slides.length}
        </div>
      )}
    </section>
  );
}
