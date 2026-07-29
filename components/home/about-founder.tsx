import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { ButtonLink } from "@/components/ui/button-link";

const principles = [
  ["01", "Purpose", "Design must communicate clearly."],
  ["02", "Strategy", "Every creative decision should support the goal."],
  ["03", "Imagination", "Original thinking gives brands distinction."],
];

export function AboutFounder() {
  return (
    <section className="about-founder" aria-labelledby="about-founder-title">
      <div className="site-container about-founder__layout">
        <div className="about-founder__media">
          <div className="about-founder__frame">
            <div className="about-founder__offset" />
            <div className="about-founder__border" />
            <div className="about-founder__image-wrap">
              <Image
                src="/Johnken.png"
                alt="Johnken, Founder and CEO of Kenicmind Concept"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="about-founder__image"
                style={{ objectPosition: "72% 18%" }}
              />
              <div className="about-founder__overlay" />
              <div className="about-founder__watermark" aria-hidden="true">
                K
              </div>
              <div className="about-founder__caption-panel">
                <span>JOHNKEN</span>
                <strong>FOUNDER/CEO &amp; CREATIVE DIRECTOR</strong>
              </div>
            </div>
            <div className="about-founder__caption">FOUNDER / CREATIVE DIRECTOR</div>
            <div className="about-founder__line" />
          </div>
        </div>

        <div className="about-founder__content">
          <p className="about-founder__label">ABOUT THE FOUNDER / 04</p>
          <h2 id="about-founder-title">
            Design guided by purpose, strategy and <em>imagination</em>.
          </h2>
          <p className="about-founder__lead">
            Johnken is an award-winning graphic designer and the Founder/CEO of Kenicmind Concept. He helps businesses, organisations and individuals communicate through memorable visual design.
          </p>
          <p className="about-founder__support">
            His approach combines creative thinking, strategic direction and careful execution to transform ideas into visual experiences that attract attention, build trust and leave a lasting impression.
          </p>

          <div className="about-founder__identity">
            <div>
              <span>Johnken</span>
              <p>Founder/CEO &amp; Creative Director</p>
              <p>Kenicmind Concept</p>
            </div>
          </div>

          <div className="about-founder__principles" aria-label="Creative principles">
            {principles.map(([number, title, text]) => (
              <article key={number} className="about-founder__principle">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="about-founder__award">
            <div className="about-founder__award-icon" aria-hidden="true">
              ✦
            </div>
            <div>
              <ActionLink href="/awards" className="about-founder__award-link">
                Graphic Designer of the Year 2023
              </ActionLink>
              <p>Warri Entertainment and Recognition Award</p>
            </div>
          </div>

          <div className="about-founder__cta">
            <ButtonLink href="/about" variant="primary" className="button-link--founder">
              Meet Johnken
            </ButtonLink>
            <ButtonLink href="/start-project" variant="secondary" className="button-link--founder button-link--founder-dark">
              Start a Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
