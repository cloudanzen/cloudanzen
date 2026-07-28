import type { Metadata } from "next";
import { localeAlternates } from "@/lib/site";
import CoursePlayer from "@/components/academy/CoursePlayer";

const metaBase: Omit<Metadata, "alternates"> = {
  title: "Take the course — CloudAnzen Academy",
  robots: { index: false, follow: true },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...metaBase,
    alternates: localeAlternates(locale, "/academy/courses/[courseSlug]/learn"),
  };
}

interface Props {
  params: Promise<{ locale: string; courseSlug: string }>;
}

export default async function LearnPage({ params }: Props) {
  const { courseSlug } = await params;
  return <CoursePlayer slug={courseSlug} />;
}
