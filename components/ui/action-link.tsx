import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/icons";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

export function ActionLink({ href, children, external = false, className = "", ariaLabel, target, rel }: ActionLinkProps) {
  const shared = `action-link ${className}`.trim();
  if (external) {
    return (
      <a href={href} target={target ?? "_blank"} rel={rel ?? "noopener noreferrer"} aria-label={ariaLabel} className={shared}>
        <span>{children}</span>
        <ArrowUpRight className="action-link__icon" />
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={shared}>
      <span>{children}</span>
      <ArrowUpRight className="action-link__icon" />
    </Link>
  );
}
