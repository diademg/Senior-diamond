import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Adeoye Emmanuel — Webflow Developer & Website Designer",
  description: "I design and build thoughtful Webflow websites, responsive experiences and conversion-focused digital storefronts for growing brands.",
  openGraph: { title: "Adeoye Emmanuel — Webflow Developer", description: "Thoughtful Webflow websites built with purpose.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}