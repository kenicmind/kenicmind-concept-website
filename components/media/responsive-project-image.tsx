"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  focalPoint?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  caption?: string;
  onOpen?: () => void;
  imageIndex?: number;
  className?: string;
};

export function ResponsiveProjectImage({ src, alt, aspectRatio = "4 / 3", objectFit = "cover", focalPoint = "center", sizes, priority, quality, onOpen, className = "" }: Props) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onOpen?.();
  };

  return (
    <button type="button" className={`responsive-project-image ${className}`.trim()} style={{ aspectRatio } as CSSProperties} onClick={handleClick} aria-label={alt}>
      <Image src={src} alt={alt} fill sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"} priority={priority} quality={quality} className="responsive-project-image__asset" style={{ objectFit, objectPosition: focalPoint }} />
    </button>
  );
}
