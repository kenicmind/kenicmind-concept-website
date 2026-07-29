import Image from "next/image";
import Link from "next/link";

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Kenicmind Concept home" className={`brand-lockup ${className}`.trim()}>
      <span className="brand-lockup__mark" aria-hidden="true">
        <Image src="/brand/kenicmind-logo.png" alt="" width={38} height={42} priority className="brand-lockup__mark-image" />
      </span>
      <span className="brand-lockup__copy">
        <span className="brand-lockup__name">KENICMIND</span>
        <span className="brand-lockup__tag">CONCEPT</span>
      </span>
    </Link>
  );
}
