import type { Metadata } from "next";
import CoursePlayer from "@/components/academy/CoursePlayer";

export const metadata: Metadata = {
  title: "Take the course — CloudAnzen Academy",
  robots: { index: false, follow: true },
};

interface Props {
  params: Promise<{ locale: string; courseSlug: string }>;
}

export default async function LearnPage({ params }: Props) {
  const { courseSlug } = await params;
  return <CoursePlayer slug={courseSlug} />;
}
