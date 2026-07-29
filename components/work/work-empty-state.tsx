type WorkEmptyStateProps = {
  onReset: () => void;
};

export function WorkEmptyState({ onReset }: WorkEmptyStateProps) {
  return (
    <div className="work-empty" role="status" aria-live="polite">
      <p className="work-empty__label">No projects match your current selection.</p>
      <button type="button" className="work-empty__button" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
}
