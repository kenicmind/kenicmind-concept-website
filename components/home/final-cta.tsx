import { contact } from "@/data/contact";
import { ButtonLink } from "@/components/ui/button-link";
import { ActionLink } from "@/components/ui/action-link";

export function FinalCta({ title = "Let’s create something people will remember.", text = "Tell us about your brand, campaign, event or next big idea. We’ll help you shape it into a visual experience that communicates clearly and leaves a lasting impression." }: { title?: string; text?: string }) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="site-container final-cta__grid">
        <div className="final-cta__year" aria-hidden="true">
          K
        </div>
        <div className="final-cta__left">
          <p className="final-cta__label">BEGIN A CONVERSATION</p>
          <h2 id="final-cta-title">
            {title.includes("remember") ? (
              <>
                {title.replace("remember", "")}
                <em>remember</em>.
              </>
            ) : (
              title
            )}
          </h2>
        </div>

        <div className="final-cta__right">
          <p className="final-cta__text">
            {text}
          </p>

          <div className="final-cta__contacts" aria-label="Contact options">
            <ActionLink href={contact.instagramUrl} external className="final-cta__contact" ariaLabel={`Instagram ${contact.instagramHandle}`}>
              Instagram <strong>{contact.instagramHandle}</strong>
            </ActionLink>
            <ActionLink href={contact.whatsappPrimaryUrl} external className="final-cta__contact" ariaLabel={`WhatsApp ${contact.phonePrimary}`}>
              WhatsApp <strong>{contact.phonePrimary}</strong>
            </ActionLink>
            <ActionLink href={contact.whatsappSecondaryUrl} external className="final-cta__contact" ariaLabel={`WhatsApp ${contact.phoneSecondary}`}>
              WhatsApp <strong>{contact.phoneSecondary}</strong>
            </ActionLink>
          </div>

          <div className="final-cta__buttons">
            <ButtonLink href="/start-project" variant="primary" className="button-link--cta">
              Start a Project
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="button-link--cta button-link--cta-dark">
              Contact the Studio
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
