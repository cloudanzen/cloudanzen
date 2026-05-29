import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { getCourseSummary, listCourses } from "@/lib/academy";

interface PageParams {
  params: Promise<{ locale: string; courseSlug: string }>;
}

export async function generateStaticParams() {
  try {
    const courses = await listCourses();
    return courses.map((c) => ({ courseSlug: c.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = await getCourseSummary(courseSlug).catch(() => undefined);
  if (!course) {
    return { title: "Course not found" };
  }
  return {
    title: `${course.title} — CloudAnzen Academy`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      url: `https://www.cloudanzen.com/academy/courses/${course.slug}`,
      type: "article",
    },
  };
}

export default async function CourseDetailPage({ params }: PageParams) {
  const { courseSlug } = await params;
  let course: Awaited<ReturnType<typeof getCourseSummary>>;
  try {
    course = await getCourseSummary(courseSlug);
  } catch {
    course = undefined;
  }
  if (!course) notFound();

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "CloudAnzen",
      sameAs: "https://www.cloudanzen.com",
    },
    educationalLevel: "Awareness",
    timeRequired: `PT${course.estimatedMinutes}M`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }}
      />
      <section className="page-shell pt-32 pb-12">
        <Link
          href="/academy"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" /> All courses
        </Link>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              {course.frameworkName}
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              {course.title}
            </h1>
            <p className="mt-3 text-lg text-slate-600">{course.description}</p>
            <div className="mt-5 flex items-center gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {course.estimatedMinutes} minutes
              </span>
              <span>{course.moduleCount} modules</span>
              <span>{course.questionCount} questions</span>
              <span>Pass: {course.passThresholdPct}%</span>
            </div>
          </div>
          <Link
            href={`/academy/courses/${course.slug}/learn`}
            className="inline-flex items-center rounded-lg bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white hover:bg-fuchsia-700"
          >
            Start course →
          </Link>
        </div>
      </section>

      <section className="page-shell pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Bullet
            title="What you'll learn"
            body={`Audit-grade awareness for ${course.frameworkName}: policies, behaviors, and evidence habits that hold up under audit.`}
          />
          <Bullet
            title="How it works"
            body={`${course.moduleCount} short modules, each ending in multi-question checks. Score ≥${course.passThresholdPct}% to earn a verified certificate.`}
          />
          <Bullet
            title="Your certificate"
            body="Shareable URL with a verified badge. Add to LinkedIn or X. Private by default until you publish."
          />
        </div>
      </section>
    </>
  );
}

function Bullet({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}
