import type { Metadata } from "next";
import { localeAlternates } from "@/lib/site";
import CompleteFlow from "@/components/academy/CompleteFlow";

const metaBase: Omit<Metadata, "alternates"> = {
  title: "Course complete — CloudAnzen Academy",
  robots: { index: false, follow: false },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...metaBase,
    alternates: localeAlternates(
      locale,
      "/academy/courses/[courseSlug]/complete",
    ),
  };
}

interface Props {
  params: Promise<{ locale: string; courseSlug: string }>;
}

export default async function CompletePage({ params }: Props) {
  const { courseSlug } = await params;
  return <CompleteFlow slug={courseSlug} />;
}
