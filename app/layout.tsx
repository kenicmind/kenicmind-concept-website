import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { LightboxProvider } from "@/components/media/lightbox-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700"] });
const display = DM_Serif_Display({ variable: "--font-display", subsets: ["latin"], display: "swap", weight: "400" });

export const metadata: Metadata = {
  title: "Kenicmind Concept | Memorable Visual Design",
  description: "Kenicmind Concept is a premium Nigerian graphic design brand founded by award-winning designer Johnken.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${display.variable}`}><body><LightboxProvider><SiteHeader/><main id="main">{children}</main><Footer/></LightboxProvider></body></html>;
}
