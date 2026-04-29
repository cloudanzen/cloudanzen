import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Zap, ArrowRight, Database, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Questionnaire Automation",
  description: "Answer security questionnaires 10x faster with reusable answers, AI assistance, and auto-populated evidence packages.",
};

export default function QuestionnaireAutomationPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Questionnaire Automation"
        title="Security questionnaires"
        titleHighlight="answered in minutes"
        subtitle="Build a reusable answer library, auto-populate common formats like SIG and CAIQ, and respond to security reviews in a fraction of the time."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/AIAssistant.png"
              alt="CloudAnzen Questionnaire Automation interface"
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
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Database, title: "Answer library", desc: "Build a curated library of approved answers vetted by security, legal, and leadership. Reuse across every questionnaire." },
              { icon: Zap, title: "AI-assisted completion", desc: "CloudAnzen suggests answers from your library and attached evidence, so responses are consistent and fast." },
              { icon: Clock, title: "Response time tracking", desc: "Track open questionnaires, due dates, and response progress so nothing slips through the cracks." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-orange-600 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stop losing deals to slow security reviews</h2>
            <p className="text-orange-100 mb-8">See how CloudAnzen helps sales-supporting security teams respond to enterprise questionnaires in days, not weeks.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-orange-700 font-semibold hover:bg-orange-50 transition-colors">
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
