import Link from "next/link";

export default function NotFound(){return <section className="not-found"><div className="shell"><span>404</span><p className="eyebrow">Page not found</p><h1>This page has moved<br/>beyond the <em>frame.</em></h1><p>The address may be incorrect or the content may no longer be available.</p><Link href="/" className="button button--orange">Return home</Link></div></section>}
