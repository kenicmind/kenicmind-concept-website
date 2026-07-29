import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/icons";

type Variant = "primary" | "secondary" | "dark" | "text" | "icon";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "", target, rel, ariaLabel }: Props) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`button-link button-link--${variant} ${className}`.trim()}
    >
      <span>{children}</span>
      {variant !== "text" && variant !== "icon" ? <ArrowUpRight className="button-link__icon" /> : null}
    </Link>
  );
}
