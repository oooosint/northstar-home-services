import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Northstar Home Services | A Better Home Starts Here", description: "A professional home services portfolio concept. Explore home care services and request a demonstration estimate.", applicationName: "Northstar Home Services", openGraph: { title: "Northstar Home Services", description: "A better home starts here.", type: "website" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
