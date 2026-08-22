---
title: "MDM for compliance: device inventory that holds up at audit"
summary: "MDM enrollment alone doesn't produce an audit-ready device inventory — here's what gaps auditors find and how to close them"
type: "blog"
collection: null
category: "MDM"
readTime: "6 min read"
tags: ["MDM","device inventory","endpoint compliance","asset management","audit evidence"]
sortOrder: 129
publishedAt: "2026-08-22"
author: "sarah-jenkins"
---
The auditor asks for a complete device inventory — owner, OS version, encryption status, compliance state. You pull the MDM report. Hundreds of clean rows.

Then the questions start. The contractor laptops procured through a vendor. The sales iPads. The engineer who joined three weeks ago and has not finished enrollment. What looked complete unravels fast. MDM gives you a foundation. It does not give you an audit-ready inventory.

## What auditors are actually checking

ISO 27001:2022 Annex A 5.9 requires organizations to maintain an inventory of information and associated assets, with ownership clearly identified [source: https://www.isms.online/]. This control is not new — asset inventory has been a baseline requirement across editions — but the 2022 version sharpened the expectation around ownership attribution and classification.

SOC 2 auditors approach the same terrain under CC6.1, which covers logical and physical access controls. Before they can assess whether access is appropriately restricted, they need a complete picture of every device that can reach production systems, customer data, or administrative tooling.

What auditors want from a device inventory:

- **Completeness**: Every in-scope device is listed. "In scope" means anything that can reach, store, or process the data covered by the certification.
- **Ownership**: Each device has a named individual as owner. Not a team. A person.
- **Classification**: Devices are tagged by sensitivity tier — production access, PII access, standard, restricted.
- **Control state**: Encryption, MDM enrollment, EDR agent, OS patch level — all present and timestamped.
- **Lifecycle evidence**: When the device was onboarded, when controls were applied, when it was offboarded.

MDM delivers most of the control state data for enrolled devices. It delivers none of the completeness story, and it silently excludes anything that was never enrolled.

## Why your MDM report is not the inventory

MDM systems manage enrolled devices. The gap between "enrolled devices" and "all in-scope devices" is where audits get complicated.

Consider how gaps form in a mid-size team:

A new hire is onboarded on Monday. Their laptop ships on Tuesday. Enrollment completes on Wednesday. For 24 to 48 hours, a device with an active employee's credentials exists outside MDM. Multiply that by your hiring rate over a six-month audit period.

A contractor provides their own machine under a BYOD arrangement. You pushed a configuration profile. But they are not in your MDM enrollment unless you processed them separately. The auditor asks for the full contractor device list. You have a policy. You do not have a list.

An offboarded employee's device is wiped and re-issued. The original MDM record is deleted. The audit period covered both states. The auditor asks for the full device history. You have a gap.

A product manager buys a tablet on a corporate card for a conference. It goes to IT after the event — eventually. For weeks, it is an unmanaged device with credentials to your demo environment.

None of these are unusual events. They are standard device lifecycle moments that become findings when inventory depends entirely on MDM enrollment records.

## The three gaps that generate findings

**Enrollment lag.** The window between a device being issued and MDM enrollment completing. Every organization has an enrollment SLA in practice — the problem is whether it is documented, monitored, and enforced. Auditors want to see not just that devices are enrolled, but evidence that the SLA held during the audit period. If your policy says "enrollment within 48 hours of issuance" but you cannot produce timestamps showing that, the policy cannot be verified.

**Classification gaps.** A device exists in MDM but has no sensitivity tag, no role assignment, no data access tier. For SOC 2 auditors reviewing CC6.1, this makes it impossible to assess whether access controls were appropriately scoped. For ISO 27001 auditors, it creates a direct gap against the Annex A 5.9 asset inventory requirement, which expects assets to be identified and classified [source: https://www.isms.online/].

**Ownership drift.** Devices assigned to a person who no longer works at the company. Devices assigned to a role — "IT pool laptop" — rather than a named individual. Devices whose owner changed due to an internal transfer but the MDM record was never updated. Auditors ask ownership questions because they are testing accountability: whether there is a specific person responsible for each asset's control state.

## Building an inventory that survives scrutiny

Start with your MDM export. Pull every enrolled device with all available metadata: serial number, model, OS version, enrollment date, last check-in, encryption status, compliance state.

Then cross-reference against three additional data sources.

**HR system.** Your active employee count should roughly align with your managed device count, adjusted for role. When the numbers diverge, the gap is where unmanaged devices typically hide. This reconciliation should be automated — monthly manual comparisons drift out of date between runs.

**Procurement or IT ticketing.** Every device purchase or issuance should create a record. Compare the procurement log against MDM enrollment. Devices appearing in procurement but not in MDM are precisely the enrollment lag problem — visible only if you look for them.

**Access logs for production and sensitive systems.** If a device is authenticating to your production environment or admin console, it should be in your inventory. Pull the last 90 days of authentication events and match device IDs against your inventory list. Devices present in access logs but absent from the inventory are immediate findings.

Once the data is consolidated, apply ownership and classification consistently. Every device gets a named owner. Every device gets a classification tier. The tier can be simple — production access, standard, restricted — as long as it is documented in your asset classification policy and applied uniformly.

Document your enrollment SLA in policy. "All corporate devices must be enrolled in MDM within 48 hours of issuance." Then monitor it. Then produce the evidence log during the audit.

## Keeping the inventory current through the audit period

A SOC 2 Type II audit covers a period — typically three, six, or twelve months. A point-in-time inventory export tells an auditor what you had on the day you ran the report. They want evidence of control application throughout the period.

This means the inventory needs versioning or timestamping across the audit window. Monthly snapshots stored in your evidence repository work. Automated daily reconciliation logs work better. Either approach is defensible if you can produce evidence of consistent control application.

Reconciliation frequency matters. ISO 27001 Annex A 5.9 expects asset lists to be maintained and kept current [source: https://www.isms.online/]. Stale asset inventories appear regularly in internal audit findings. A quarterly refresh is a floor. Monthly is safer. Automated is the standard to work toward.

Build alert thresholds into the reconciliation. When a previously enrolled device drops compliance — profile removed, certificate expired, OS upgraded past your supported version — you want to catch it before the auditor does. An isolated control failure is a manageable exception. A pattern of undiscovered control failures with no documented response is a systemic finding.

The inventory is not just a document. For a Type II period, it is a continuous record of your control environment. Treat it that way from day one of the audit period.

Device inventory gaps surface at the worst possible moment — mid-audit, when every exception requires explanation. CloudAnzen connects your MDM, HR, and procurement data to surface unmanaged endpoints and maintain an asset inventory that maps to your control framework through the full audit period. [Talk to us](/demo).