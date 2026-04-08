import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join CloudAnzen and help build the future of continuous GRC. Open roles in engineering, product, and go-to-market.",
};

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote (US/EU)" },
  { title: "GRC Product Manager", team: "Product", location: "Remote" },
  { title: "Enterprise Account Executive", team: "Sales", location: "San Francisco / Remote" },
  { title: "Security Solutions Engineer", team: "Sales Engineering", location: "Remote" },
  { title: "Customer Success Manager", team: "Customer Success", location: "Remote" },
];

export default function CareersPage() {
  return (
    <div>
      <PageHero
        badge="Company · Careers"
        title="Build the future"
        titleHighlight="of continuous GRC"
        subtitle="We're a small team solving a big problem. If you care deeply about security, great software, and helping teams build trust — we'd love to talk."
        ctaPrimary={{ label: "See open roles", href: "#roles" }}
      />
      <section className="section-pad bg-white" id="roles">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-xl text-slate-900 mb-8">Open roles</h2>
          <div className="space-y-4 mb-16">
            {roles.map(({ title, team, location }) => (
              <div key={title} className="flex items-center justify-between p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 mb-1">{title}</h3>
                  <div className="flex gap-3">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2.5 py-0.5 rounded-full">{team}</span>
                    <span className="text-xs text-slate-500">{location}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            ))}
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 text-center">
            <h3 className="font-bold text-slate-900 text-xl mb-3">Don&apos;t see a role that fits?</h3>
            <p className="text-slate-500 mb-6">We&apos;re always interested in meeting talented people. Send us a note and tell us how you&apos;d contribute.</p>
            <a href="mailto:careers@cloudanzen.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors text-sm">
              careers@cloudanzen.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
