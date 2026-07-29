// SAMPLE TESTIMONIALS: structural placeholders only; not real client reviews.
const testimonials = [
  { quote: "This space is reserved for a verified client story about the thinking, collaboration and result behind the work.", name: "Sample testimonial", role: "Awaiting client approval" },
  { quote: "An approved client review will appear here once Kenicmind supplies the final wording and permission to publish it.", name: "Sample testimonial", role: "Temporary content" },
] as const;

export function TestimonialPreview() {
  const item = testimonials[0];
  return <section className="testimonials"><div className="shell testimonial-layout"><p className="kicker">Client perspective / 06</p><figure><span className="quote-mark">“</span><blockquote>{item.quote}</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption><div className="testimonial-nav" aria-label="Testimonial status"><span>01</span><span className="testimonial-line" /><span>02</span></div></figure></div></section>;
}
