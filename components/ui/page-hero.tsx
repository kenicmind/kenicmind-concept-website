export function PageHero({ label, title, intro, meta }: { label:string; title:React.ReactNode; intro:string; meta?:string }) {
  return <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">{label}</p><h1>{title}</h1></div><div><p>{intro}</p>{meta && <span>{meta}</span>}</div></div></section>;
}
