import Link from "next/link";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { contact } from "@/data/contact";
import { ActionLink } from "@/components/ui/action-link";
import { BrandLockup } from "@/components/layout/brand-lockup";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <BrandLockup className="footer-brand__link" />
          <p>Kenicmind Concept creates strategic visual identities, campaigns and experiences that help brands communicate clearly and stand out with confidence.</p>
          <p className="footer-location">{contact.location}</p>
          <ActionLink href="/start-project" className="footer-start-link">
            Start a Project
          </ActionLink>
        </div>

        <div>
          <p className="footer-label">EXPLORE</p>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <p className="footer-label">SERVICES</p>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="footer-link">
              {service.title}
            </Link>
          ))}
        </div>

        <div>
          <p className="footer-label">CONNECT</p>
          <ActionLink href={contact.instagramUrl} external className="footer-link footer-link--icon" ariaLabel={`Instagram ${contact.instagramHandle}`}>
            <>
              <span className="footer-contact__label">Instagram</span>
              <span className="footer-contact__value">{contact.instagramHandle}</span>
            </>
          </ActionLink>
          <ActionLink href={contact.whatsappPrimaryUrl} external className="footer-link footer-link--icon" ariaLabel={`WhatsApp ${contact.phonePrimary}`}>
            <>
              <span className="footer-contact__label">WhatsApp</span>
              <span className="footer-contact__value">{contact.phonePrimary}</span>
            </>
          </ActionLink>
          <ActionLink href={contact.whatsappSecondaryUrl} external className="footer-link footer-link--icon" ariaLabel={`WhatsApp ${contact.phoneSecondary}`}>
            <>
              <span className="footer-contact__label">WhatsApp</span>
              <span className="footer-contact__value">{contact.phoneSecondary}</span>
            </>
          </ActionLink>
          <ActionLink href={contact.whatsappPrimaryUrl} external className="footer-quick-link" ariaLabel="Chat with us on WhatsApp">
            Chat with us on WhatsApp
          </ActionLink>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <span>© {year} Kenicmind Concept. All rights reserved.</span>
        <span>Designed by Kenicmind Concept</span>
        <div className="footer-bottom__legal">
          <span className="footer-muted">Privacy Policy</span>
          <span className="footer-muted">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}
