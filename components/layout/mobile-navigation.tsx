"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button-link";

type MobileNavigationProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileNavigation({ open, pathname, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const activeIndex = useMemo(() => navigation.findIndex((item) => (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))), [pathname]);

  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const root = panelRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth > 1024) onClose();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, onClose]);

  return (
    <div id="mobile-menu" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-hidden={!open}>
      <div className="mobile-nav__scrim" onClick={onClose} aria-hidden="true" />
      <div ref={panelRef} className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="mobile-nav__top">
          <span className="mobile-nav__brand">Kenicmind Concept</span>
          <button ref={closeButtonRef} type="button" className="mobile-nav__close" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav className="mobile-nav__links" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={index === activeIndex ? "mobile-nav__link active" : "mobile-nav__link"}
              aria-current={index === activeIndex ? "page" : undefined}
              onClick={onClose}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/start-project" variant="primary" className="mobile-nav__cta" ariaLabel="Start a Project">
          Start a Project
        </ButtonLink>
        <div className="mobile-nav__social" aria-label="Social media placeholders">
          <span>Instagram</span>
          <span>Behance</span>
          <span>LinkedIn</span>
          <span>Dribbble</span>
        </div>
      </div>
    </div>
  );
}
