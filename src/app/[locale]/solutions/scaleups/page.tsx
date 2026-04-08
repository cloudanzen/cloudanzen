import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "For Scale-ups",
  description: "Scale your GRC program from one framework to many without rebuilding from scratch. CloudAnzen grows with your compliance program.",
};

export default function ScaleupsPage() {
  return (
    <SolutionPage
      badge="Solutions · For Scale-ups"
      title="Scale your GRC program"
      titleHighlight="without starting over"
      subtitle="You have SOC 2. Now your customers want ISO 27001. Your EU expansion needs GDPR. CloudAnzen lets you add frameworks without rebuilding your compliance program."
      description="Scale-ups face the hardest GRC challenge: they've already invested in compliance but now need to expand to new frameworks, new regions, and new regulatory requirements — fast. CloudAnzen's cross-framework control reuse is built for exactly this moment."
      benefits={[
        "Add new frameworks without duplicating existing controls or evidence",
        "Cross-framework gap analysis to see what's already covered",
        "Scale from 2 frameworks to 6+ with the same team",
        "Expanded vendor risk program as your third-party footprint grows",
        "Automated evidence refresh keeps historical compliance records intact",
        "Advanced reporting for board-level GRC program visibility",
      ]}
      useCases={[
        { title: "Add ISO 27001 to your SOC 2 program", desc: "Reuse 60–70% of SOC 2 controls and evidence directly in your ISO 27001 program." },
        { title: "GDPR compliance for EU expansion", desc: "Layer GDPR requirements onto your existing privacy and security controls." },
        { title: "Mature vendor risk as you scale", desc: "Move from informal vendor reviews to a structured, auditable third-party risk program." },
      ]}
      accentColor="bg-indigo-700"
    />
  );
}
