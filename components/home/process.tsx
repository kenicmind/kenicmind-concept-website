const steps = [
  ["01", "Discover", "We listen, ask the right questions and understand what the work needs to achieve."],
  ["02", "Develop", "We shape the strategy and explore the strongest creative directions."],
  ["03", "Design", "We craft the visual system with care, clarity and consistency."],
  ["04", "Deliver", "We prepare polished, practical assets ready to make their mark."],
] as const;

export function Process() {
  return <section className="section process"><div className="shell"><p className="kicker">Our process / 05</p><div className="process-title"><h2>Considered from first<br />thought to final <em>detail.</em></h2><p>A focused process keeps the work clear, collaborative and moving toward the right outcome.</p></div><div className="process-steps">{steps.map(([number, title, description]) => <article key={number}><span>{number}</span><div className="process-dot" /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}
