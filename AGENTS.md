<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code and heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Kenicmind Concept project rules

## Product and brand
- Build a premium Nigerian design-studio experience: editorial, confident, spacious, and art-led.
- Brand colours are blue `#003399`, orange `#FF6500`, white `#FFFFFF`, cream `#F7F7F4`, charcoal `#101218`, and grey `#696D78`.
- Orange is a high-value accent, not a background default. Prefer square or subtly rounded geometry.
- Use only verified claims. Never invent awards, clients, reviews, or statistics.
- Mark all non-final portfolio and testimonial records as sample content in source data.
- Never modify `public/brand/kenicmind-logo.png`.

## Engineering
- Use the App Router, TypeScript, Tailwind CSS, and `next/image` for raster images.
- Default to Server Components. Add `"use client"` only where browser state or effects are necessary.
- Keep content in `data/`, site-wide UI in `components/layout/`, and page sections in `components/home/`.
- Use semantic HTML, visible focus states, descriptive labels, reduced-motion fallbacks, and sufficient contrast.
- Prefer CSS transitions and animations; avoid dependencies unless they solve a demonstrated need.
- Do not expose credentials or private information in client code.
- Validate every material change with `npm run lint` and `npm run build`.

## Conventions
- Components and exported types use PascalCase; variables and files use kebab-case or camelCase as appropriate.
- Use the `@/` path alias for project imports.
- Section anchors must account for the sticky header.
- Temporary contact links remain non-actionable until real details are supplied.
