"use client";

import { categories } from "@/data/categories";

type ProjectFiltersProps = {
  active: string;
  onChange: (value: string) => void;
};

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div className="project-filters" role="toolbar" aria-label="Project filters">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          type="button"
          className={active === category ? "project-filters__button is-active" : "project-filters__button"}
          aria-pressed={active === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
