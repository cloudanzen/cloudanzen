import type { Metadata } from "next";
import DemoForm from "./DemoForm";
import { Shield, CheckCircle2, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "See CloudAnzen in action. Book a personalized 30-minute demo with our team.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — static content, stays a server component */}
          <div className="pt-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-slate-900 text-lg">CloudAnzen</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              See CloudAnzen in 30 minutes
            </h1>
            <p className="text-lg text-slate-500 mb-10">
              We&apos;ll show you exactly how CloudAnzen works for your team&apos;s specific use
              case — no generic product tour.
            </p>
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: Clock,
                  title: "30-minute personalized demo",
                  desc: "Tailored to your frameworks, team size, and existing tools.",
                },
                {
                  icon: CheckCircle2,
                  title: "See your use case live",
                  desc: "SOC 2, ISO 27001, vendor risk, trust center — we demo what matters to you.",
                },
                {
                  icon: Users,
                  title: "Talk to a GRC expert",
                  desc: "Our team has real-world GRC experience and can answer technical questions.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — interactive form (client component) */}
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
