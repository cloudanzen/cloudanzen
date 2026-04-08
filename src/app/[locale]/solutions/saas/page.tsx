import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "For SaaS Companies",
  description: "Win enterprise deals faster with continuous compliance, a branded trust center, and questionnaire automation built for SaaS companies.",
};

export default function SaaSPage() {
  return (
    <SolutionPage
      badge="Solutions · For SaaS"
      title="Compliance that"
      titleHighlight="wins enterprise deals"
      subtitle="SaaS companies using CloudAnzen close enterprise deals faster because their security posture is always available, always current, and always credible."
      description="Enterprise procurement teams are getting stricter. SaaS companies need SOC 2, a vendor security portal, and fast questionnaire responses just to get to POC. CloudAnzen covers all of it from one platform."
      benefits={[
        "SOC 2 Type II compliance with continuous monitoring",
        "Branded trust center your sales team can link in proposals",
        "Questionnaire automation to respond to security reviews in hours",
        "Vendor risk program to satisfy your own enterprise customers' requirements",
        "ISO 27001 support for European and regulated-industry buyers",
        "Multi-framework coverage (SOC 2 + GDPR + HIPAA) without duplicate work",
      ]}
      useCases={[
        { title: "Unblock enterprise deals", desc: "Give security questionnaire responders the tools to respond in days, not weeks." },
        { title: "Proactive trust center", desc: "Publish compliance status so prospects can self-serve before they even ask." },
        { title: "Scale beyond one framework", desc: "Add GDPR, HIPAA, or ISO 27001 alongside SOC 2 without starting from scratch." },
      ]}
      testimonial={{
        quote: "Our trust center removes the friction from enterprise security reviews. Deals that used to take 3 extra weeks for security paperwork now move in days.",
        name: "Sarah Chen",
        role: "Head of Security, B2B SaaS",
      }}
      accentColor="bg-teal-700"
    />
  );
}
