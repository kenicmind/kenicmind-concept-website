type IconProps = { className?: string };

export function ArrowUpRight({ className = "" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 18 18 6M8 6h10v10" /></svg>;
}

export function ArrowLeft({ className = "" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m15 18-6-6 6-6" /></svg>;
}

export function ArrowRight({ className = "" }: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m9 18 6-6-6-6" /></svg>;
}
