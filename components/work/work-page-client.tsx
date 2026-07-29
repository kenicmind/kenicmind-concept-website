"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectGrid } from "@/components/work/project-grid";
import { ProjectFilters } from "@/components/work/project-filters";
import { ProjectSearch } from "@/components/work/project-search";
import { WorkEmptyState } from "@/components/work/work-empty-state";
import { MoreWorkSection } from "@/components/work/more-work-section";
import { projects, type Project } from "@/data/projects";
import { ArrowUpRight } from "@/components/ui/icons";
import Link from "next/link";

function matchesSearch(project: Project, query: string) {
  const text = [project.title, project.category, project.year, project.description, project.client, project.services.join(" ")].join(" ").toLowerCase();
  return text.includes(query.toLowerCase().trim());
}

export function WorkPageClient() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = active === "All" ? true : project.category === active;
      const searchMatch = query.trim() ? matchesSearch(project, query) : true;
      return categoryMatch && searchMatch;
    });
  }, [active, query]);

  const featuredProjects = visibleProjects.slice(0, 5);
  const moreProjects = visibleProjects.slice(5);

  return (
    <>
      <section className="work-page__hero">
        <div className="site-container work-page__hero-grid">
          <Reveal variant="fade-up" className="work-page__intro">
            <p className="work-page__label">Selected work</p>
            <h1>Visual ideas built with clarity, character and confidence.</h1>
            <p className="work-page__lead">
              Explore sample identity, campaign, event, packaging and motion studies from the Kenicmind Concept portfolio. These temporary projects are placeholders for the approved case studies to come.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={100} className="work-page__summary">
            <div className="work-page__summary-card">
              <p className="work-page__summary-label">Portfolio overview</p>
              <strong>{String(visibleProjects.length).padStart(2, "0")} projects visible</strong>
              <p>Use the category filters or search to focus on the style of work you want to review.</p>
              <Link href="/start-project" className="button-link button-link--primary work-page__summary-link">
                Start a Project <ArrowUpRight className="button-link__icon" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="work-page__gallery" aria-labelledby="work-gallery-title">
        <div className="site-container">
          <div className="work-page__toolbar">
            <div>
              <p className="work-page__toolbar-label">Browse the gallery</p>
              <h2 id="work-gallery-title">Portfolio projects</h2>
            </div>
            <p className="work-page__toolbar-count" aria-live="polite">
              {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <div className="work-page__controls">
            <ProjectSearch value={query} onChange={setQuery} onClear={() => setQuery("")} />
            <ProjectFilters active={active} onChange={setActive} />
          </div>

          {visibleProjects.length ? (
            visibleProjects.length < 5 ? (
              <ProjectGrid projects={visibleProjects} />
            ) : (
              <>
                <section className="work-section work-section--featured" aria-labelledby="featured-work-title">
                  <div className="work-section__header">
                    <Reveal variant="fade-up" className="work-section__copy">
                      <p className="work-section__label">Featured work</p>
                      <h2 id="featured-work-title">A selection of projects that represent the studio’s approach to identity, communication and visual storytelling.</h2>
                    </Reveal>
                  </div>
                  <ProjectGrid projects={featuredProjects} />
                </section>

                <MoreWorkSection projects={moreProjects} visibleCount={moreProjects.length} />
              </>
            )
          ) : (
            <WorkEmptyState
              onReset={() => {
                setActive("All");
                setQuery("");
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}
