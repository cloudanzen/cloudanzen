import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Frameworks",
  description: "Build your own control framework in CloudAnzen. Map internal standards, customer requirements, or bespoke security programs.",
};

export default function CustomFrameworksPage() {
  return (
    <div>
      <PageHero
        badge="Frameworks · Custom"
        title="Your own framework,"
        titleHighlight="fully supported"
        subtitle="Map internal standards, customer-driven requirements, or proprietary security programs in CloudAnzen — with the same automation and evidence collection as built-in frameworks."
        ctaPrimary={{ label: "Talk to our team", href: "/contact" }}
      />
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-slate-900 mb-8 text-center">Built for complex programs</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              "Build frameworks from scratch or import from spreadsheets",
              "Map custom controls to evidence collection rules",
              "Cross-reference custom controls with SOC 2, ISO 27001, and other built-in frameworks",
              "Assign control owners, set due dates, and track completion",
              "Generate custom audit reports for internal or external stakeholders",
              "Version custom frameworks as requirements evolve",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 p-5 rounded-xl border border-slate-200 bg-slate-50">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-slate-900 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need a custom framework?</h2>
            <p className="text-slate-400 mb-8">Talk to our team about your specific requirements — customer mandates, internal standards, or sector regulations.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
