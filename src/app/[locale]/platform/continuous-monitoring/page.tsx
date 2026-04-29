import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { ArrowRight, Eye, Bell, Activity, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Continuous Monitoring",
  description:
    "Replace point-in-time audits with always-on control health monitoring. CloudAnzen alerts you to drift before it becomes an audit finding.",
};

const features = [
  {
    icon: Eye,
    title: "Always-on control health",
    desc: "Every control is evaluated continuously, not just at audit time. Know your posture in real time.",
  },
  {
    icon: Bell,
    title: "Instant drift alerts",
    desc: "Get notified immediately when a control drifts out of compliance so you can remediate before it becomes a finding.",
  },
  {
    icon: Activity,
    title: "Historical trend analysis",
    desc: "Track how control health changes over time and demonstrate improvement to auditors and leadership.",
  },
  {
    icon: Shield,
    title: "Automated evidence refresh",
    desc: "Evidence is refreshed on each monitoring cycle, ensuring your audit package is never stale.",
  },
];

export default function ContinuousMonitoringPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Continuous Monitoring"
        title="Always-on control monitoring,"
        titleHighlight="zero blind spots"
        subtitle="Replace periodic point-in-time checks with continuous monitoring that catches control drift the moment it happens."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "See platform overview", href: "/platform" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Test.png"
              alt="CloudAnzen Continuous Monitoring interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/80 bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] p-10 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Stop auditing once a year. Monitor every day.
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-slate-600">
              Talk to our team to see how continuous monitoring works in your
              environment.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
