---
title: "ISO 27001 Annex A 5.19 and 5.22: what your supplier files must show at audit"
summary: "What auditors actually check when they open the supplier section — evidence requirements for controls 5.19 and 5.22 and where most programmes fall short."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","supplier management","Annex A","audit evidence","vendor risk"]
sortOrder: 87
publishedAt: "2026-07-05"
author: "maria-rodriguez"
---
Your auditor opens the supplier section and asks for the last review record. You hand over the original onboarding questionnaire from two years ago. They mark a finding. Controls 5.19 and 5.22 in ISO 27001:2022 Annex A cover the full lifecycle of supplier relationships — from initial onboarding through continuous service monitoring and change management. Most teams satisfy 5.19 at onboarding, then let 5.22 drift. Auditors notice.

## What Annex A 5.19 requires

Control 5.19, Information security in supplier relationships, establishes the policy and process layer that must be in place before any supplier accesses your information, systems, or facilities. It is not satisfied by a signed NDA or a vendor onboarding form alone.

The control requires that you define what information security requirements apply to each supplier relationship and that those requirements are formally agreed upon. In practice this means:

- A supplier security policy, or a section of your ISMS policy covering third-party relationships
- A tiering or classification approach identifying which suppliers receive access to sensitive systems or data
- Evidence that security requirements were agreed before access was granted, not after
- Supplier agreements containing explicit clauses on confidentiality, access control, incident notification, and rights to audit

The rights-to-audit clause catches many teams off-guard. You do not need to execute an audit of every supplier, but the contract must reserve that right. If your standard supplier template does not include it, the auditor will flag it as a gap.

The control also requires you to consider the information security implications of your supplier's own supply chain — what some auditors call fourth-party risk. If a critical SaaS provider subcontracts infrastructure to another party, your agreement should address how that is disclosed and how changes are managed. [source: https://hightable.io/iso-27001-annex-a-5-19-information-security-in-supplier-relationships/]

## What Annex A 5.22 adds: monitoring, review, and change management

Control 5.22, Monitoring and review of supplier services, is where most programmes stall. If 5.19 is the onboarding gate, 5.22 is the ongoing operating rhythm.

The control has two distinct requirements. First, you must regularly monitor and review supplier service delivery against the agreed security requirements. Second — and this is the part teams overlook — it explicitly covers change management: changes to supplier services must be managed, and you must assess the security implications before accepting them.

Auditors look for:

- Periodic supplier review records within the current audit period — meeting notes, completed review checklists, or renewal assessments that include a security component, not just commercial terms
- A defined intake process for supplier-initiated changes: if a key vendor migrates infrastructure, changes its subprocessor list, or is acquired by another company, what triggers your security review and who owns it?
- Evidence that findings from reviews are tracked and resolved, not just noted and filed

The standard does not mandate a fixed review frequency. Your audit evidence needs to show a cadence proportionate to the risk each supplier presents. A cloud provider hosting production data warrants more frequent engagement than a low-risk commodity service. [source: https://hightable.io/iso-27001-annex-a-5-22-monitor-review-and-change-management-of-supplier-services/]

## What the audit evidence package needs to contain

When your auditor requests the supplier section, they are looking for a coherent evidence story, not a pile of disconnected files. A minimum adequate package includes:

**Supplier register** — a list of all suppliers with access to company information or systems, their risk tier, the type of access they hold, and whether they fall within the ISMS scope. Without this register, the auditor cannot assess whether your controls have adequate coverage.

**Executed supplier agreements with security clauses** — the signed version, not a template. Auditors want to see the agreement actually in effect. Pay attention to subprocessor coverage: if your supplier can delegate to a fourth party, the agreement should address disclosure obligations and your approval rights over material changes.

**Onboarding due diligence record** — evidence that you assessed the supplier's security posture before granting access. This does not require an exhaustive vendor security questionnaire for every supplier. A documented review of their ISO 27001 certificate with a validity check, a completed standard questionnaire, or a risk assessment tied to the supplier's access scope is acceptable.

**Periodic review records for the current audit period** — one or more records showing that you reviewed the supplier during the period under audit. The record should capture what was reviewed, what was found, and what actions were taken or remain open.

**Change notification and response records** — if a supplier communicated a material change during the audit period, you need documentation showing how you received it, assessed the security implications, and responded. [source: https://iseoblue.com/iso-27001/annex-a/control-5-19/]

## Common gaps that cause nonconformities

**No review evidence for the current audit period.** Solid onboarding documentation does not substitute for a review within the active surveillance period. If the last documented review predates the current certification year, expect a nonconformity.

**Agreements that predate the 2022 revision.** ISO 27001:2022 added explicit change management requirements that were not present in the 2013 edition. Agreements last updated before the transition may not include change notification obligations or security implication assessment clauses.

**Change intake without a security lens.** Many teams have procurement processes for handling supplier changes that focus on commercial terms and SLAs. If those processes do not include a security implication review step, material infrastructure or subprocessor changes can move through without a documented risk assessment.

**Shadow SaaS missing from the supplier register.** Tools acquired without central IT involvement — common in product and engineering teams — often miss the register entirely. If they process personal data or have access to production systems, they are in scope for both 5.19 and 5.22.

**Questionnaire responses that were never reviewed.** Some teams send onboarding questionnaires and file the responses without documenting that someone reviewed them and reached a conclusion. A response sitting in a shared drive with no review record attached does not constitute evidence of due diligence.

## A supplier review cadence that holds up

A sustainable programme does not require a full security assessment of every third party every year. The structure that tends to survive surveillance audits has three tiers:

**Annual comprehensive review for critical suppliers** — those with access to production data, systems processing personal data under a DPA, or suppliers with significant operational dependency. The review should cover whether access remains appropriate, whether certifications are current and valid, what incident history exists, whether there have been material service changes, and whether prior findings are resolved.

**Annual lightweight check for standard suppliers** — a confirmation that certifications remain valid, no material service changes have occurred, and no open incidents are unresolved. A structured email exchange with the supplier, with the response captured in your register, satisfies this at most audit levels.

**Event-triggered review for all tiers** — any material change from the supplier (infrastructure migration, acquisition, subprocessor change, significant security incident) triggers a documented review regardless of when the last scheduled review took place. This is the change management component that 5.22 explicitly requires.

Document this cadence in a supplier management procedure. The auditor needs to see that the process is defined, applied consistently, and producing records — not just that reviews happened to occur during the period.

Supplier evidence gaps are one of the most common sources of findings in ISO 27001 surveillance audits. CloudAnzen maps your supplier register, review cadence, and agreement coverage directly against Annex A 5.19 and 5.22 so the evidence is current when your auditor arrives. [Talk to us](/demo).