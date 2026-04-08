import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "For Enterprises",
  description: "Enterprise-grade GRC that scales across multiple frameworks, entities, and business units. SSO, role-based access, API access, and audit log included.",
};

export default function EnterprisePage() {
  return (
    <SolutionPage
      badge="Solutions · For Enterprise"
      title="Enterprise GRC"
      titleHighlight="at any scale"
      subtitle="CloudAnzen supports complex organizations with multiple frameworks, entities, and business units — with the controls, access, and integrations enterprise teams require."
      description="Large organizations need a GRC platform that can handle multiple compliance frameworks simultaneously, support complex role hierarchies, integrate with enterprise tools, and generate board-level reporting. CloudAnzen is built for that scale."
      benefits={[
        "Multi-framework support (SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, NIST CSF) from one platform",
        "Multi-entity and business unit support with cross-framework control reuse",
        "SAML/SSO and SCIM provisioning for enterprise identity management",
        "Role-based access control with custom roles and permissions",
        "API access for integration with internal GRC, ticketing, and SIEM systems",
        "Audit log and immutable evidence chain for regulatory defensibility",
        "Dedicated customer success and onboarding for enterprise rollouts",
      ]}
      useCases={[
        { title: "Consolidated GRC across entities", desc: "Manage compliance programs across subsidiaries, regions, and business units in one platform." },
        { title: "Board and leadership reporting", desc: "Generate exec-level dashboards showing risk posture, control health, and framework status." },
        { title: "Enterprise vendor risk at scale", desc: "Manage hundreds of vendors with tiered review workflows and automated follow-ups." },
      ]}
      accentColor="bg-slate-800"
    />
  );
}
