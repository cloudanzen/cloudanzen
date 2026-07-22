---
title: "GDPR transfer impact assessments: the evidence file and reassessment cadence DPAs now require"
summary: "DPAs are auditing TIAs as live compliance files — here is what the evidence package must contain and how often to refresh it"
type: "blog"
collection: "gdpr"
category: "GDPR"
readTime: "6 min read"
tags: ["GDPR","data transfers","TIA","Schrems II","DPA enforcement"]
sortOrder: 102
publishedAt: "2026-07-22"
author: "sarah-jenkins"
---
A Transfer Impact Assessment is not a checkbox. Data Protection Authorities across the EU treat it as a live compliance file — one they expect to audit, not archive. If your organisation exports personal data outside the EEA, the question is not whether you have completed a TIA. It is whether you can produce the reasoning, the evidence, and the date you last reviewed it.

## What a TIA actually is

The Court of Justice's Schrems II ruling in 2020 invalidated the EU–US Privacy Shield and placed a new obligation on every exporter of personal data: before relying on Standard Contractual Clauses or Binding Corporate Rules to transfer data to a third country, you must assess whether the destination country's law undermines the protections those mechanisms provide.

That assessment is a TIA. The EDPB formalised the approach in Recommendations 01/2020, setting out a six-step methodology. Step six — the ongoing monitoring obligation — is the one most organisations skip.

DPA enforcement actions since 2022 have targeted exactly that gap. Regulators have signalled that a TIA conducted at the time of transfer initiation and never revisited does not satisfy the continuing obligation [source: https://www.insideprivacy.com/cross-border-transfers/roundup-of-cross-border-data-transfer-developments/].

## The evidence file DPAs expect

When a regulator asks for your TIA, they want a dossier, not a paragraph. The file must show your reasoning, not just your conclusion.

**The data mapping layer.** Before you can assess transfer risk, you need to know what is being transferred. Personal data categories, data subjects, processing purpose, recipient entity, and destination country must all be documented. Vague entries like "HR data to US vendor" do not survive scrutiny.

**The legal basis for transfer.** Which Article 46 mechanism applies — SCCs, BCRs, adequacy decision, or an Article 49 derogation? If you are relying on SCCs, document which set, which module, and whether supplementary measures were required. EDPB guidance is explicit that SCCs alone may not be sufficient where the destination country's laws undermine the protections they provide [source: https://www.insideprivacy.com/cross-border-transfers/roundup-of-cross-border-data-transfer-developments/].

**The legal landscape analysis.** This is the core of the TIA. You must assess the destination country's laws on government access to data: national security legislation, surveillance frameworks, and whether the importer can notify the exporter of compelled disclosures. Sources should include primary legislation, independent legal opinions for high-risk jurisdictions, and sector-specific guidance from supervisory authorities.

**The supplementary measures decision.** Based on the legal landscape, you decide whether the Article 46 mechanism offers sufficient protection as-is or whether you need to add technical measures — encryption in transit and at rest, pseudonymisation, client-side encryption with keys held in the EEA — or additional contractual terms covering audit rights and breach notification timelines tighter than statutory minimums.

**The conclusion and sign-off.** A dated conclusion, signed by someone with clear accountability — your DPO, legal counsel, or a named senior officer — with explicit language about residual risk and the decision to proceed or suspend transfers.

## When a TIA goes stale

A TIA records a point-in-time assessment. The conditions it assessed do not stay still [source: https://pages.priverion.com/gdpr-enforcement-trends-2026-what-privacy-teams-must-prepare]. Triggers that require a reassessment include:

- The destination country passes new surveillance legislation or amends existing national security laws
- A government access demand is reported against the recipient or a comparable entity in the same jurisdiction
- The European Commission downgrades or revokes an adequacy decision covering the destination country
- The importer introduces sub-processors located in high-risk jurisdictions
- A supervisory authority issues a fine or enforcement notice related to transfers to that destination country
- The SCCs your transfer relied on are superseded by a new Commission decision

Time-based reassessment matters even without a trigger event. Annual review is the expected minimum for high-risk transfers, and more frequent checks are warranted for transfers to jurisdictions with active government access programmes [source: https://secureprivacy.ai/blog/gdpr-compliance-2026].

## Building a repeatable reassessment cadence

Ad hoc reassessment does not scale. When you manage dozens of third-country transfer relationships, you need a process that surfaces triggers automatically and assigns ownership for each review before one is needed.

**Inventory-first.** Maintain a dedicated register of third-country transfers, separate from your general Records of Processing Activities. Each entry should carry a next-review date, a named owner, and a reference to the current TIA version.

**Trigger detection.** Subscribe to primary-law monitoring services for your key jurisdictions. Regulatory guidance from supervisory authorities — particularly the EDPB and national DPAs — frequently signals changes before legislation passes. Set up alerts for adequacy decision updates from the European Commission.

**Structured review workflow.** When a trigger fires, the review is not a full rewrite. It is a structured delta check: has anything changed in the legal landscape section? Do supplementary measures still address the identified risks? Has the importer's situation changed? Document the check even when the conclusion is unchanged — the absence of a documented review is itself a gap.

**Escalation criteria.** Define in advance what change level escalates to senior management and what triggers transfer suspension. That decision tree needs to exist before you need it, not the morning a regulator calls.

**Audit trail.** Version your TIAs and preserve superseded versions. When a DPA asks what your TIA looked like on a specific date, you need to retrieve it, not reconstruct it from memory.

## Before each review: a working checklist

Confirm the following before a transfer goes live and at each scheduled review cycle:

- Data mapping entry is current and complete, including all sub-processors
- Legal basis for transfer is documented, including the applicable SCC version and module
- Legal landscape analysis for the destination country is current and includes source references
- Supplementary measures are assessed and implemented where the analysis identifies gaps
- Signed conclusion carries a date and a named accountable officer
- Next-review date is recorded in the transfer register
- Trigger monitoring is active for the destination jurisdiction

This is the file a DPA auditor expects. Build it once, maintain it continuously, and the next audit becomes a retrieval task rather than a reconstruction project.

Maintaining defensible TIA files across dozens of vendor relationships quietly consumes weeks of compliance capacity before an audit ever arrives. CloudAnzen maps your data flows to GDPR Article 46 requirements and surfaces reassessment triggers as jurisdiction-level changes land. [Talk to us](/demo).