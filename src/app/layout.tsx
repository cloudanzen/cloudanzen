import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebsiteAiChatbot from "@/components/WebsiteAiChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "CloudAnzen — Continuous Compliance and Trust Operations for AI-Native Teams",
    template: "%s | CloudAnzen",
  },
  description:
    "CloudAnzen helps AI-native teams get audit-ready faster with compliance workflows, trust center capabilities, continuous monitoring, and AI-assisted security review workflows.",
  keywords: [
    "GRC platform",
    "compliance automation",
    "SOC 2",
    "ISO 27001",
    "GDPR",
    "risk management",
    "vendor risk",
    "audit readiness",
    "trust center",
    "continuous monitoring",
  ],
  authors: [{ name: "CloudAnzen" }],
  creator: "CloudAnzen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cloudanzen.com",
    siteName: "CloudAnzen",
    title:
      "CloudAnzen — Continuous Compliance and Trust Operations for AI-Native Teams",
    description:
      "Help AI-native teams get audit-ready faster, automate evidence workflows, and handle buyer trust requests from one platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CloudAnzen GRC Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CloudAnzen — Continuous Compliance and Trust Operations for AI-Native Teams",
    description:
      "Help AI-native teams get audit-ready faster, automate evidence workflows, and handle buyer trust requests from one platform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://www.cloudanzen.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        <main>{children}</main>
        <WebsiteAiChatbot />
        <Footer />
      </body>
    </html>
  );
}
