import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "For Security Teams",
  description: "Give your security team continuous control visibility, automated evidence collection, and real-time drift alerting across your entire environment.",
};

export default function SecurityTeamsPage() {
  return (
    <SolutionPage
      badge="Solutions · For Security Teams"
      title="Continuous security visibility"
      titleHighlight="across every control"
      subtitle="CloudAnzen gives security teams always-on control monitoring, automated evidence collection, and real-time alerting when something drifts out of compliance."
      description="Security teams shouldn't spend their time chasing audit evidence. CloudAnzen automates evidence collection, monitors control health continuously, and alerts you to drift before it becomes a finding — so your team can focus on actual security work."
      benefits={[
        "Always-on monitoring across 100+ integrated systems",
        "Real-time alerts when controls drift out of compliance",
        "Automatic evidence collection from cloud, identity, and endpoint tools",
        "Historical control health trends for management reporting",
        "Integrated risk management with control linkage",
        "API access for custom integrations and SIEM forwarding",
      ]}
      useCases={[
        { title: "Replace point-in-time audits", desc: "Monitor controls daily instead of scrambling to prove compliance once a year." },
        { title: "Catch drift before auditors do", desc: "Get alerted the moment a control fails so you can remediate before it becomes a finding." },
        { title: "Automate evidence collection", desc: "Free your team from manual evidence gathering with native integrations for every tool in your stack." },
      ]}
      accentColor="bg-slate-900"
    />
  );
}
