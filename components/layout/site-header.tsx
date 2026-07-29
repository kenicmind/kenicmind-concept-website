"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { BrandLockup } from "@/components/layout/brand-lockup";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="shell site-header__inner">
        <BrandLockup className="site-header__brand" />

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={isActive(item.href) ? "site-header__link active" : "site-header__link"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href="/start-project" variant="secondary" className="site-header__cta">
          Start a Project
        </ButtonLink>

        <button type="button" className={`site-header__menu-button ${open ? "is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          <span />
          <span />
        </button>
      </div>

      <MobileNavigation open={open} pathname={pathname} onClose={() => setOpen(false)} />
    </header>
  );
}
