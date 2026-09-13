import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asnehadiagnostic.com"),
  title: "Asneha Diagnostic | Dr Lal PathLabs Authorized Collection Center, Patna",
  description:
    "Asneha Diagnostic is the official authorized collection center of Dr Lal PathLabs in Jaganpura, Patna. Free home sample collection, NABL certified reports, Swasth Fit health packages, and 5000+ pathology tests.",
  keywords: [
    "Asneha Diagnostic",
    "Dr Lal PathLabs Patna",
    "Dr Lal PathLabs franchise Patna",
    "Blood test home collection Patna",
    "Jaganpura pathology lab",
    "Swasth Fit packages Patna",
    "Ajay Kumar DMLT Patna",
    "Pathology lab near me Jaganpura",
  ],
  authors: [{ name: "Asneha Diagnostic" }],
  openGraph: {
    title: "Asneha Diagnostic | Dr Lal PathLabs Authorized Collection Center",
    description:
      "Free Home Sample Collection across Patna. 100% Genuine Dr Lal PathLabs Barcoded Pathology Tests with Digital Reports.",
    url: "https://asnehadiagnostic.com",
    siteName: "Asneha Diagnostic",
    images: [
      {
        url: "/images/center-entrance.jpg",
        width: 1024,
        height: 768,
        alt: "Asneha Diagnostic Dr Lal PathLabs Authorized Collection Center Jaganpura Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased font-sans bg-slate-50 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
