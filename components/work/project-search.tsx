"use client";

type ProjectSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function ProjectSearch({ value, onChange, onClear }: ProjectSearchProps) {
  return (
    <label className="project-search">
      <span className="sr-only">Search projects, categories or services</span>
      <span className="project-search__field">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="project-search__icon">
          <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16.2 16.2 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          className="project-search__input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search projects, categories or services"
          aria-label="Search projects, categories or services"
        />
        {value ? (
          <button type="button" className="project-search__clear" onClick={onClear} aria-label="Clear search">
            ×
          </button>
        ) : null}
      </span>
    </label>
  );
}
