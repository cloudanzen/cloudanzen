import type { Metadata } from "next";
import FrameworkPage from "@/components/FrameworkPage";

export const metadata: Metadata = {
  title: "PCI DSS Compliance",
  description: "Map PCI DSS v4.0 requirements, track scoping decisions, and maintain continuous compliance for cardholder data environments.",
};

export default function PCIDSSPage() {
  return (
    <FrameworkPage
      name="PCI DSS"
      fullName="Payment Card Industry Data Security Standard (PCI DSS)"
      badge="Frameworks · PCI DSS"
      description="Map PCI DSS v4.0 requirements to your cardholder data environment, manage scoping decisions, and stay compliant between annual assessments."
      whatIs="PCI DSS is a global security standard for organizations that store, process, or transmit payment card data. Version 4.0, effective from March 2025, introduces customized implementation options and strengthened authentication and encryption requirements."
      benefits={[
        "Pre-mapped PCI DSS v4.0 requirements across all 12 major requirements",
        "Cardholder Data Environment (CDE) scoping workflow",
        "Network segmentation documentation and evidence",
        "Vulnerability scanning and penetration test tracking",
        "QSA collaboration workspace for Report on Compliance (ROC)",
        "Continuous monitoring for key PCI controls",
      ]}
      modules={[
        { title: "Network Security Controls", desc: "Requirement 1-2: Firewall configuration, network segmentation, and service hardening." },
        { title: "Account & Access Management", desc: "Requirements 7-8: Least privilege, MFA, and identity lifecycle." },
        { title: "Protect Cardholder Data", desc: "Requirements 3-4: Encryption, key management, and transmission security." },
        { title: "Vulnerability Management", desc: "Requirements 5-6: Malware protection, patch management, and application security." },
        { title: "Monitoring & Testing", desc: "Requirements 10-11: Logging, SIEM integration, and periodic testing programs." },
      ]}
      ctaLabel="Simplify your PCI DSS compliance"
      accentColor="bg-violet-700"
    />
  );
}
