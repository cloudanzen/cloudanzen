import type { Metadata } from "next";
import Link from "next/link";
import { Award, BookOpen, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { listCourses } from "@/lib/academy";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "CloudAnzen Academy — Framework-Aware Security Training",
  description:
    "Free, framework-aware security and AI governance training. Take audit-grade ISO 42001, ISO 27001, SOC 2, HIPAA, and NIST CSF courses. Earn verifiable certificates.",
  openGraph: {
    title: "CloudAnzen Academy",
    description:
      "Take audit-grade ISO 42001, ISO 27001, SOC 2, HIPAA, and NIST CSF courses. Earn verifiable certificates.",
    url: `${SITE_URL}/academy`,
    type: "website",
  },
};

const FRAMEWORK_ACCENT: Record<string, string> = {
  "iso-42001": "from-fuchsia-500 to-violet-500",
  "iso-27001": "from-emerald-500 to-sky-500",
  "soc-2": "from-indigo-500 to-fuchsia-500",
  hipaa: "from-rose-500 to-orange-500",
  "nist-csf": "from-amber-500 to-emerald-500",
};

export default async function AcademyPage() {
  let courses: Awaited<ReturnType<typeof listCourses>> = [];
  let loadError: string | null = null;
  try {
    courses = await listCourses();
  } catch (err) {
    loadError = err instanceof Error ? err.message : "Unable to load courses";
  }

  return (
    <>
      <PageHero
        badge="CloudAnzen Academy"
        title="Framework-aware security training for teams proving trust"
        subtitle="Audit-grade awareness courses for ISO 42001, ISO 27001, SOC 2, HIPAA, and NIST CSF — free, self-paced, and certified."
      />

      <section className="page-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard
            icon={BookOpen}
            title="Built around what auditors expect"
            body="Each course maps directly to the framework's awareness requirements — no generic CBT filler."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Scored on the backend"
            body="Pass/fail decisions happen server-side against the canonical answer key — your score can't be forged client-side."
          />
          <FeatureCard
            icon={Award}
            title="Verifiable certificates"
            body="Share a verified certificate URL on LinkedIn or X. Anyone can confirm authenticity at the same link."
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Choose a course</h2>
          <p className="text-slate-600 mt-1">
            All courses are free, take 35–45 minutes, and require an 80% pass score.
          </p>
        </div>

        {loadError && (
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            Unable to load the course catalogue right now. Please refresh in a moment.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const accent =
              FRAMEWORK_ACCENT[course.frameworkSlug] ??
              "from-slate-500 to-slate-700";
            return (
              <Link
                key={course.slug}
                href={`/academy/courses/${course.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg flex flex-col"
              >
                <div
                  className={`inline-flex w-fit items-center rounded-full bg-gradient-to-r ${accent} px-3 py-1 text-xs font-semibold text-white`}
                >
                  {course.frameworkName}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-fuchsia-700">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-4">
                  {course.description}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.estimatedMinutes} min
                  </span>
                  <span>{course.moduleCount} modules</span>
                  <span>{course.questionCount} questions</span>
                </div>
                <span className="mt-5 text-sm font-semibold text-fuchsia-600 group-hover:underline">
                  Start course →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="page-shell pb-24">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Need to train your whole team?
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            CloudAnzen Academy is built into the CloudAnzen GRC platform —
            assignments by role, completion tracking, and auditor-ready records
            of every attempt and pass.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/platform/cloudanzen-academy"
              className="inline-flex items-center rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              See the platform module
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Award;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-50 text-fuchsia-600">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}
