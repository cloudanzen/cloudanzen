---
title: "Annex A control mappings every SOC 2 founder gets wrong"
summary: "The five places founders mis-map ISO 27001 Annex A controls to SOC 2 Trust Services Criteria, and how to fix the crosswalk before the auditor finds it"
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["SOC 2","ISO 27001","Control mapping","Dual certification"]
sortOrder: 37
publishedAt: "2026-05-16"
author: "sarah-jenkins"
---
Founders chasing dual certification almost always start the same way. They pull an Annex A control list, pull the SOC 2 Trust Services Criteria, and assume the crosswalk is mechanical. It is not. The frameworks were written by different bodies, for different audiences, with different evidence expectations [source: https://www.aicpa.org/soc4so]. The mapping errors below are the ones that surface in readiness reviews and cost weeks to unwind during the audit.

## Mapping access reviews to a single control

The most common mistake is treating ISO 27001 Annex A 5.18 (access rights) as a one-to-one match for SOC 2 CC6.2 or CC6.3. Founders write one access review procedure, run it quarterly, and check both boxes.

The auditor sees it differently. SOC 2 CC6.1, CC6.2, and CC6.3 split the lifecycle into provisioning, modification, and de-provisioning. Each needs its own evidence trail. Annex A 5.18 covers the same ground but pairs with 5.15 (access control policy), 5.16 (identity management), and 8.2 (privileged access rights). A single quarterly review does not satisfy either framework cleanly.

What works: a control matrix that lists each Annex A control on one axis and each TSC criterion on the other, with the actual evidence artifact in the cell. Joiner tickets, mover tickets, leaver tickets, and the quarterly attestation are four different artifacts, not one.

## Treating Annex A 8.16 as equivalent to CC7.2

Monitoring activities is where dual-certification projects quietly fall apart. Annex A 8.16 asks for monitoring of networks, systems, and applications for anomalous behavior. CC7.2 in the 2017 Trust Services Criteria asks the entity to monitor system components and the operation of controls to detect anomalies indicating malicious acts, natural disasters, and errors [source: https://www.aicpa.org/soc4so].

The overlap is real. The scope is not. CC7.2 reaches into control operation monitoring, which Annex A 8.16 does not require directly. You need evidence that your control monitoring itself is monitored, not just the underlying systems. Founders who map these one-to-one show up to the SOC 2 audit with SIEM logs and no evidence that anyone reviews whether the SIEM rules still fire.

Fix the gap with a monthly control health review. Document which detections fired, which were tuned, and which controls produced no signal at all. The no-signal cases are the ones auditors press on.

## Assuming the risk assessment is portable

ISO 27001 mandates a risk assessment methodology and a documented risk treatment plan. SOC 2 references risk assessment in CC3.1 through CC3.4 but does not prescribe the methodology. Founders read this and assume the ISO 27001 risk register satisfies SOC 2 outright.

It usually does not, for two reasons. First, the ISO risk register is typically asset-based or scenario-based. SOC 2 expects risk identification tied to the entity's objectives and the specific Trust Services Criteria in scope. The asset list does not map cleanly to objectives. Second, SOC 2 CC3.4 specifically calls out assessing risks from significant changes, which most ISO risk registers update on an annual cadence rather than continuously.

Keep one risk register, but tag each risk with both the Annex A controls and the TSC criteria it touches. Add a change-trigger field so significant changes (new product line, new region, new sub-processor) create risk register entries automatically.

## Confusing supplier security policies with vendor risk

Annex A 5.19 through 5.23 cover supplier relationships, information security in supplier agreements, ICT supply chain, monitoring supplier services, and managing changes to supplier services. SOC 2 CC9.2 covers vendor and business partner risk.

Founders write one vendor risk policy and assume it covers everything. The Annex A controls are more granular about contract clauses, supply chain transparency, and change management on the vendor side. CC9.2 is broader in expecting risk-based tiering and ongoing monitoring.

The practical issue is evidence. ISO auditors will ask to see the security clauses in your top-tier vendor contracts. SOC 2 auditors will ask how you tiered those vendors in the first place and what monitoring exists between annual reviews. Same vendors, different questions. Build a vendor inventory with tier, contract review date, security clause coverage, and last monitoring touchpoint in one table. Both auditors get what they need from the same source.

## Mapping incident response to a single procedure

Annex A 5.24 through 5.28 break incident management into planning, assessment, response, learning, and evidence collection. SOC 2 CC7.3, CC7.4, and CC7.5 cover the same ground from a different angle: anomaly evaluation, incident response, and recovery.

The failure pattern is a single incident response runbook that covers detection-to-resolution but skips the learning loop and the evidence collection requirements. Post-incident reviews exist on paper. The artifacts are missing.

What passes both audits: a runbook that explicitly produces five artifacts per incident. A detection record, a triage decision log, a containment and recovery log, a post-incident review document, and a forensic evidence index. The last one is where most teams have nothing. Annex A 5.28 expects you to know what evidence you collected, who handled it, and where it lives. SOC 2 will accept the same artifact.

## Building the crosswalk once

The pattern across all five failures is the same. Founders build the control mapping as a spreadsheet exercise at the start of the project, then never revisit it. By the time the auditor arrives, the controls have drifted, the evidence is scattered across tools, and the crosswalk no longer reflects reality.

A durable mapping has three properties. Each cell points to a specific evidence artifact, not a policy document. Each artifact has an owner and a refresh cadence. And the mapping itself is reviewed when scope changes, not annually.

For a working reference on how regulatory frameworks overlap and where they diverge, the Security Compass guide to compliance frameworks is a useful starting point [source: https://www.securitycompass.com/blog/regulatory-security-compliance-frameworks-standards/]. It will not build your crosswalk for you, but it sets expectations on where the seams between frameworks actually sit.

Dual certification fails when the control mapping is treated as paperwork. CloudAnzen builds the Annex A to Trust Services Criteria crosswalk against your live stack, ties each cell to the evidence artifact and its owner, and refreshes the mapping as your scope changes. [Talk to us](/demo).