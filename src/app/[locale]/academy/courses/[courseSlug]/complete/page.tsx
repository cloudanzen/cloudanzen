import type { Metadata } from "next";
import CompleteFlow from "@/components/academy/CompleteFlow";

export const metadata: Metadata = {
  alternates: { canonical: "/academy/courses/[courseSlug]/complete" },
  title: "Course complete — CloudAnzen Academy",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ locale: string; courseSlug: string }>;
}

export default async function CompletePage({ params }: Props) {
  const { courseSlug } = await params;
  return <CompleteFlow slug={courseSlug} />;
}
