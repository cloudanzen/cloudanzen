import type { Metadata } from "next";
import Link from "next/link";
import { Award, BookOpen, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "CloudAnzen Academy",
  description:
    "Framework-aware security and AI governance training built into the CloudAnzen GRC platform. Role-based assignments, auditor-ready training records, verified certificates.",
};

export default function CloudAnzenAcademyPage() {
  return (
    <>
      <PageHero
        badge="Platform module"
        title="Train your team on the frameworks you actually run"
        subtitle="CloudAnzen Academy assigns the right awareness training to each person based on the frameworks your organization runs — ISO 42001, ISO 27001, SOC 2, HIPAA, NIST CSF."
      />

      <section className="page-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature
            icon={Users}
            title="Role-aware assignment"
            body="Auditors, contributors, and admins each see only the awareness work their role actually needs. Configurable per organization."
          />
          <Feature
            icon={BookOpen}
            title="Framework-aware courses"
            body="Activate ISO 42001 and your team gets the ISO 42001 awareness course. Add HIPAA and HIPAA training appears. No manual rostering."
          />
          <Feature
            icon={ShieldCheck}
            title="Audit-ready records"
            body="Every attempt, score, and pass timestamp is captured to the training audit log. Export evidence in one click during your audit."
          />
          <Feature
            icon={Award}
            title="Verified certificates"
            body="Learners can share a verifiable certificate URL on LinkedIn or X — the same surface anyone can browse at /academy."
          />
        </div>
      </section>

      <section className="page-shell pb-24">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Try the courses yourself
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            All five courses are free to take on cloudanzen.com — same content,
            same scoring engine your team gets in the app.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/academy"
              className="inline-flex items-center rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Browse Academy
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

function Feature({
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
