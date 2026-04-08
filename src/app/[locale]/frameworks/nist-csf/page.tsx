import type { Metadata } from "next";
import FrameworkPage from "@/components/FrameworkPage";

export const metadata: Metadata = {
  title: "NIST CSF Compliance",
  description: "Implement the NIST Cybersecurity Framework 2.0 to structure your security program and satisfy enterprise and government security requirements.",
};

export default function NISTCSFPage() {
  return (
    <FrameworkPage
      name="NIST CSF"
      fullName="NIST Cybersecurity Framework (CSF) 2.0"
      badge="Frameworks · NIST CSF"
      description="Structure your entire security program around the NIST CSF 2.0 — Govern, Identify, Protect, Detect, Respond, Recover — and align it with SOC 2, ISO 27001, and other frameworks."
      whatIs="The NIST Cybersecurity Framework provides a flexible, risk-based approach to managing cybersecurity risk. Version 2.0, released in 2024, adds a new 'Govern' function, making it a comprehensive foundation for enterprise security programs and a common language for board-level reporting."
      benefits={[
        "Pre-mapped controls across all six NIST CSF 2.0 functions",
        "Maturity tier tracking with current and target state scoring",
        "Cross-framework mapping to SOC 2, ISO 27001, and HIPAA",
        "Board-ready reporting dashboards by CSF function",
        "Continuous control monitoring aligned to NIST categories",
        "Custom profile support for sector-specific requirements",
      ]}
      modules={[
        { title: "Govern (GV)", desc: "Organizational context, risk strategy, supply chain risk, and oversight — the new CSF 2.0 function." },
        { title: "Identify (ID)", desc: "Asset management, risk assessment, and improvement planning." },
        { title: "Protect (PR)", desc: "Identity management, awareness training, data protection, and platform security." },
        { title: "Detect (DE)", desc: "Continuous monitoring, adverse event detection, and anomaly analysis." },
        { title: "Respond & Recover (RS/RC)", desc: "Incident management, communications, analysis, and recovery planning." },
      ]}
      ctaLabel="Build your NIST CSF program"
      accentColor="bg-sky-700"
    />
  );
}
