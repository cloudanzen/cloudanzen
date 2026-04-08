import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ArrowRight, Users, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Readiness",
  description:
    "Organize evidence, manage auditor access, and collaborate in a dedicated audit workspace. CloudAnzen makes audit preparation operational.",
};

export default function AuditReadinessPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Audit Readiness"
        title="Audit prep that's"
        titleHighlight="always done"
        subtitle="When every control has evidence and every gap is tracked, audit season stops being a scramble — it's just another week."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Audit.png"
              alt="CloudAnzen Audit Readiness interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: FileCheck,
                title: "Evidence room",
                desc: "All evidence organized by control, framework, and audit period in a clean auditor-facing workspace.",
                color: "emerald",
              },
              {
                icon: Users,
                title: "Auditor collaboration portal",
                desc: "Give auditors scoped read access to evidence and a request-response workflow that keeps everything traceable.",
                color: "emerald",
              },
              {
                icon: CheckCircle2,
                title: "Readiness scoring",
                desc: "A real-time readiness score shows how close you are to audit-ready and what's blocking you.",
                color: "emerald",
              },
              {
                icon: ArrowRight,
                title: "Multi-audit support",
                desc: "Run SOC 2, ISO 27001, and custom assessments simultaneously without duplicating evidence.",
                color: "emerald",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
