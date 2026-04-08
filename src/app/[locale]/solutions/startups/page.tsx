import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "For Startups",
  description: "Get SOC 2 or ISO 27001 done fast without hiring a compliance team. CloudAnzen is built for early-stage companies moving at startup speed.",
};

export default function StartupsPage() {
  return (
    <SolutionPage
      badge="Solutions · For Startups"
      title="SOC 2 done in weeks,"
      titleHighlight="not months"
      subtitle="Get audit-ready for SOC 2 or ISO 27001 without a dedicated compliance team. CloudAnzen guides you from zero to report in the fastest path possible."
      description="Startups face a unique challenge: enterprise buyers want SOC 2 before they'll sign, but you don't have the bandwidth or budget of a large security team. CloudAnzen gives you the automation, templates, and auditor network to get there fast."
      benefits={[
        "Pre-built control library for SOC 2 Type I and Type II",
        "Step-by-step readiness plan from day one",
        "Automatic evidence collection from your existing tools (AWS, GitHub, Okta, etc.)",
        "Policy templates for all required security policies",
        "Auditor referral network — no need to find your own",
        "Real-time readiness score so you know exactly where you stand",
        "Startup-friendly pricing that scales as you grow",
      ]}
      useCases={[
        { title: "SOC 2 Type I in 4–6 weeks", desc: "Get your first report fast to unblock enterprise deals while you work toward Type II." },
        { title: "ISO 27001 for EU expansion", desc: "Satisfy European buyer requirements with a structured ISMS implementation." },
        { title: "Security posture baseline", desc: "Build your security program on a solid foundation that scales to Series B and beyond." },
      ]}
      testimonial={{
        quote: "We went from zero compliance posture to SOC 2 Type I in under 8 weeks. CloudAnzen made it feel manageable for a 12-person team.",
        name: "Alex Morgan",
        role: "CTO, Early-stage SaaS",
      }}
      accentColor="bg-blue-700"
    />
  );
}
