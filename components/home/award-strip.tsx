import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";

export function AwardStrip() {
  return (
    <section className="award-section" aria-label="Award recognition">
      <div className="site-container award-layout">
        <span className="award-year" aria-hidden="true">
          2023
        </span>

        <div className="award-copy">
          <p className="award-label">RECOGNITION / 03</p>
          <span className="award-mark" aria-hidden="true">
            ✦
          </span>
          <h2>
            Graphic Designer of the Year <em>2023</em>
          </h2>
          <p className="award-organisation">Warri Entertainment and Recognition Award</p>
          <p className="award-summary">This recognition celebrates creative excellence, consistency and the impact of purposeful visual communication.</p>
          <Link href="/awards" className="award-link">
            View Award Story <ArrowUpRight className="icon" />
          </Link>
        </div>

        <div className="award-image" aria-hidden="true">
          <Image src="/award.png" alt="" fill sizes="(max-width: 768px) 240px, 420px" className="award-image__img" />
          <div className="award-image__shade" />
        </div>
      </div>
    </section>
  );
}
