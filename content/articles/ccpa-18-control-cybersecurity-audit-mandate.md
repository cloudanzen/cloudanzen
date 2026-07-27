---
title: "CCPA cybersecurity audit requirements: what the new California 18-control mandate means for your program"
summary: "The CPPA's finalized cybersecurity audit rules require covered businesses to assess 18 control categories annually — here is what your program needs"
type: "blog"
collection: null
category: "Audit strategy"
readTime: "5 min read"
tags: ["CCPA","cybersecurity audit","CPPA","California privacy","compliance audit"]
sortOrder: 107
publishedAt: "2026-07-27"
author: "sarah-jenkins"
---
The CPPA finalized its cybersecurity audit regulations in late 2024. If your SaaS product processes California residents' personal information at scale, you now face a structured annual audit requirement: 18 enumerated control categories, assessed by an independent auditor, with findings the CPPA can request at any time. This is not a vague general security obligation. It is an audit mandate with a defined scope. Here is what it requires and how to build toward it.

## What the 18-control mandate covers and how the audit works

The cybersecurity audit regulations — finalized as part of the CPPA's broader CCPA rulemaking [source: https://cppa.ca.gov/regulations/ccpa_updates.html] — define 18 control categories a covered business must assess annually. The categories span the full security operations surface: asset inventory and classification, access controls and identity management, encryption in transit and at rest, vulnerability management, patch management, incident response planning and testing, employee security training, vendor and third-party risk management, logging and monitoring, network security architecture, business continuity and disaster recovery, and physical security controls, among others.

These are control families, not individual controls. Each category covers a domain. Within access controls, you might have MFA enforcement, privileged access management, quarterly access reviews, and offboarding procedures — all falling under one category. The auditor assesses whether your controls within that domain exist and, critically, whether they operate effectively.

An independent, qualified auditor must conduct the assessment and produce a written report [source: https://www.whitecase.com/insight-alert/cppa-finalizes-rules-admt-risk-assessments-and-cybersecurity-audits-requirements]. That report must document findings and identified deficiencies. The CPPA does not need a complaint or incident to request it — the report must exist and be available on demand.

There is no CCPA certification badge. The regulation requires a gap assessment, not a pass/fail audit. For each of the 18 categories, the auditor documents whether the control exists, whether it operates effectively, and what deficiencies were found [source: https://www.bpm.com/insights/ca-cybersecurity-audit-requirement/]. A candid finding with a documented remediation plan demonstrates a mature program. An audit report showing zero deficiencies with thin underlying evidence does not.

Audits are annual. The first establishes your baseline. Every subsequent audit compares against it.

## Who this catches

The cybersecurity audit requirement does not apply to every CCPA-covered business. It targets those that meet at least one of these thresholds [source: https://www.thompsoncoburn.com/insights/californias-2026-ccpa-regulations-summary-and-preparation-guide/]:

- Annually buy, sell, receive, or share for commercial purposes the personal information of more than 100,000 consumers or households; or
- Derive 25% or more of annual revenues from selling or sharing personal information.

B2B SaaS teams consistently underestimate how quickly they hit 100,000 consumer records. A platform with hundreds of business customers, each with dozens of end users and associated user-level telemetry, can cross that threshold before Series B. If you process login events, behavioral data, support tickets, or any user-level analytics, count your records before assuming you are out of scope.

The second threshold — revenue from selling or sharing data — is narrower for most product companies. But if your business model includes data licensing, advertising partnerships, or enrichment services, it applies.

## Mapping the 18 categories to what you already operate

Most covered SaaS teams are not starting from zero. If you hold SOC 2 Type II or ISO 27001 certification, meaningful overlap exists between those control libraries and the CCPA's 18 categories.

Rough alignment:

- SOC 2 CC6 (logical and physical access) → CCPA access controls and physical security
- SOC 2 CC7 (system operations, change management) → CCPA logging, monitoring, and vulnerability management
- SOC 2 CC9 / ISO 27001 clause 6.1 (risk management) → CCPA risk assessment requirements
- ISO 27001 Annex A 5.19–5.22 (supplier relationships) → CCPA vendor and third-party risk management

The gap in most programs tends to appear in the same three places.

**Training records.** Teams run security awareness training but do not generate durable, per-user completion records tied to dates and content versions. An auditor needs individual-level evidence — not an LMS dashboard screenshot taken the week before the audit.

**Vendor assessments.** Vendor reviews exist but live in a spreadsheet. No documented cadence. No recorded risk decision. No evidence of who reviewed and when. That is not an operating vendor risk program — it is an ad hoc file.

**Incident response testing.** An IR plan exists on paper. Proof it was exercised does not. Tabletop exercise artifacts — the scenario description, attendee list, findings from the exercise, and follow-up actions with owners and due dates — are what separate a documented control from an operating one.

## Building twelve months of auditor-grade evidence

Operating effectiveness is the standard, not existence. A policy document in a shared drive demonstrates that a policy was written. It does not demonstrate that controls operate against it. Evidence that does:

- Access review logs with timestamps, reviewer names, and outcomes — not just the date the review occurred
- Vulnerability scan results with linked remediation tickets and documented closure dates, showing findings tracked to resolution
- Tabletop exercise artifacts: the scenario, attendees, findings that emerged, and how they were addressed
- Training completion records at the individual user level, with completion dates and content identifiers
- Vendor questionnaire responses archived with the date received, the risk tier assigned, and the reviewer's recorded decision

Start collecting these now, not in the quarter before your first audit. Auditors sample across the full audit period. If access reviews run quarterly and you have four completed cycles on record, you demonstrate consistent operation. A single review in the 60 days before the audit cannot demonstrate operating effectiveness for the full period.

The CPPA has signaled that enforcement will reward programs that operate continuously and document deficiencies honestly [source: https://www.whitecase.com/insight-alert/cppa-finalizes-rules-admt-risk-assessments-and-cybersecurity-audits-requirements]. Build toward that by treating evidence collection as an ongoing operation, not a project you activate once a year.

One more mistake to avoid: running two separate programs — one for SOC 2 or ISO 27001, one for the CCPA cybersecurity audit — because no one mapped the overlap. Redundant evidence requests compound across every audit cycle. Map the 18 CCPA categories against your existing control library first. Build toward the gaps. A mapped program also simplifies auditor onboarding — an auditor who receives a control matrix with existing evidence already cross-referenced spends less time in discovery and more time assessing.

Preparing for a first CCPA cybersecurity audit means maintaining auditor-grade evidence across 18 control categories, twelve months of operating history, and a documented remediation log — while running a product. CloudAnzen maps your existing controls to the CCPA cybersecurity audit categories and surfaces evidence gaps before the auditor does. [Talk to us](/demo).
