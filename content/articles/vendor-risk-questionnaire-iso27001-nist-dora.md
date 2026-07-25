---
title: "Vendor risk assessment questionnaire 2026: aligning TPRM to ISO 27001, NIST CSF 2.0, and DORA"
summary: "How to restructure your vendor assessment questionnaire so it satisfies ISO 27001 Annex A, NIST CSF 2.0 GV.SC, and DORA Article 28 in a single evidence pass"
type: "blog"
collection: null
category: "Vendor risk"
readTime: "6 min read"
tags: ["vendor risk","TPRM","ISO 27001","NIST CSF 2.0","DORA"]
sortOrder: 105
publishedAt: "2026-07-25"
author: "maria-rodriguez"
---
Your auditor asks for third-party due diligence records. What you have is a mix of email chains, old spreadsheets, and a questionnaire PDF last updated two years ago. That is not evidence — it is a liability. As ISO 27001:2022, NIST CSF 2.0, and DORA each tighten their third-party requirements in 2026, the questionnaire your team circulates at vendor onboarding needs a structural rethink.

## Why most vendor questionnaires fail at audit

A questionnaire that asks "do you have a security policy?" and accepts "yes" is not evidence — it is a survey. The difference matters when an auditor looks at your supplier management controls under ISO 27001 Clause 8.4 or NIST CSF 2.0's Govern function [source: https://blog.learntprm.com/2026/05/02/vendor-risk-assessment-questionnaire-2026/].

Three structural patterns appear repeatedly in TPRM programmes that fail audit scrutiny [source: https://www.upguard.com/blog/top-vendor-assessment-questionnaires]:

- **No framework mapping.** Questions are not tied to specific controls, so you cannot show an auditor which gaps you assessed.
- **No vendor tiering.** A SaaS provider that holds production data gets the same short form as an office supply vendor.
- **No refresh cadence.** Responses collected at contract signing go stale within months.

Fixing these does not require new software. It requires restructuring what you ask, who you ask it of, and what you do with the answers.

## Mapping questionnaire sections to ISO 27001 Annex A

ISO 27001:2022 requires supplier relationship management under Annex A controls 5.19 through 5.22 [source: https://www.atlassystems.com/blog/how-to-manage-third-party-risks-with-an-iso-27001-vendor-assessment]. The questionnaire is where those controls get operationalised.

A defensible questionnaire section for each relevant Annex A cluster:

**Access control (A.5.15–5.18)**
- Does the vendor enforce multi-factor authentication for all privileged access to systems that process your data?
- How are access rights revoked when a vendor employee is terminated, and within what SLA?
- Who reviews access logs, and at what frequency?

**Asset management (A.5.9–5.10)**
- Is your data classified within the vendor's asset inventory?
- What is the vendor's data destruction process at contract end?

**Supplier relationships (A.5.19–5.22)**
- Does the vendor extend these security requirements to its own sub-processors?
- What is the vendor's process for notifying customers of material changes to their security posture?
- Is a current audit report — SOC 2 Type II, ISO 27001 surveillance certificate, or equivalent — available for review?

**Cryptography (A.8.24)**
- What encryption standards are applied to data in transit and at rest?

Annotating each question with a control reference — a short "A.5.19" in the column header — means your completed questionnaires serve as both vendor due diligence records and control evidence for your ISMS. When an auditor requests Clause 8.4 evidence, you can hand over a mapped, completed questionnaire rather than a folder of email threads.

## What NIST CSF 2.0 and DORA add to the checklist

NIST CSF 2.0 elevated supply chain risk management into a discrete Govern function (GV.SC) rather than treating it as a sub-item of Identify [source: https://blog.learntprm.com/2026/05/02/vendor-risk-assessment-questionnaire-2026/]. For teams already running a questionnaire programme, the practical change is that you now need to demonstrate *governance* of TPRM, not just the execution of it. That means:

- A documented policy defining vendor tiers and review frequency.
- Clear ownership for each vendor relationship and for the review of questionnaire responses.
- A defined escalation path for findings, not a shared drive that nobody reads.

DORA applies to financial entities and their critical ICT providers operating in the EU [source: https://blog.learntprm.com/2026/05/02/vendor-risk-assessment-questionnaire-2026/]. For vendors in scope, your questionnaire template should cover:

**Operational resilience**
- What is the vendor's tested recovery time objective for systems that host your data?
- When was resilience last independently tested, and what was the outcome?

**Incident notification**
- Within how many hours does the vendor notify customers of a confirmed security incident affecting their data?
- Does the vendor maintain a dedicated escalation contact for incidents?

**Audit rights**
- Will the vendor grant audit access, or provide independent penetration test results as a substitute?

**Sub-outsourcing**
- Has the vendor notified you of any critical functions that are sub-outsourced?
- Do sub-outsourced services carry equivalent contractual security obligations?

For DORA-scoped vendor relationships, the questionnaire response alone is insufficient. You need contractual clauses that back up each answer. Identify divergences before the contract is signed, not during an incident.

## Scoring vendors without creating false assurance

A scoring model provides consistency but can mislead if it rewards self-declaration. Before assigning a vendor a risk score, distinguish between attested controls — what the vendor says it does — and verified controls: what it has demonstrated through an independent audit or certificate [source: https://www.bitsight.com/blog/vendor-risk-management-questionnaire-template].

A practical tiering structure:

| Tier | Typical criteria | Review cadence | Minimum evidence required |
|------|-----------------|----------------|---------------------------|
| Critical | Access to production data or infrastructure | Annual plus event-triggered | Current audit report plus completed questionnaire |
| High | Access to sensitive non-production data | Annual | Questionnaire plus spot check |
| Standard | No data access; SaaS tooling only | Every two years | Questionnaire |
| Low | No significant data exposure | At onboarding | Basic questionnaire |

For critical vendors, an audit report — SOC 2 Type II or ISO 27001 surveillance certificate — should accompany the questionnaire. When a vendor cannot provide one, that gap is itself a finding. Document it and note the compensating controls you have accepted in lieu. An undocumented acceptance is an unmanaged risk.

## Keeping questionnaire responses current

A questionnaire completed at onboarding is a snapshot. A vendor's certification can lapse, a sub-processor can be replaced, or new regulatory obligations can appear [source: https://www.upguard.com/blog/top-vendor-assessment-questionnaires]. A TPRM programme that only collects evidence at vendor onboarding will not surface these changes before your auditor does.

Practical cadence:

- **Annual delta review** for critical and high-tier vendors: send a focused questionnaire asking only what has changed since the last full assessment.
- **Event-triggered re-assessment** when the vendor announces a material change — acquisition, infrastructure migration, confirmed breach — or when their audit certificate lapses.
- **Contract renewal as a control point**: treat renewal as the moment to require an updated response and confirm that contractual clauses still reflect your current requirements.

Store responses where your evidence team can locate them quickly during a fieldwork window. If a vendor submits a PDF, extract the key fields into a tracking system. Auditors ask to see third-party risk evidence as a coherent file, not scattered attachments.

Vendor due diligence is one of the first areas an ISO 27001 or SOC 2 auditor probes. CloudAnzen maps your supplier controls to Annex A, NIST CSF 2.0, and DORA obligations so your questionnaire programme stays current and audit-ready without manual chasing. [Talk to us](/demo).