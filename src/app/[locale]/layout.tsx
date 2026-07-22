import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebsiteAiChatbot from "@/components/WebsiteAiChatbot";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  return {
    title: {
      default: t("meta.title"),
      template: `%s | ${t("meta.siteName")}`,
    },
    description: t("meta.description"),
    keywords: [
      "GRC platform",
      "compliance automation",
      "ISO 42001",
      "AI governance",
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
      locale: locale === "ja" ? "ja_JP" : "en_US",
      url: SITE_URL,
      siteName: "CloudAnzen",
      title: t("meta.title"),
      description: t("meta.ogDescription"),
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
      title: t("meta.title"),
      description: t("meta.ogDescription"),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: locale === "ja" ? `${SITE_URL}/ja` : SITE_URL,
      languages: {
        en: SITE_URL,
        ja: `${SITE_URL}/ja`,
        "x-default": SITE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    metadataBase: new URL(SITE_URL),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <Navbar />
      <main>{children}</main>
      <WebsiteAiChatbot />
      <Footer />
    </NextIntlClientProvider>
  );
}
