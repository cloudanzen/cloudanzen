---
title: "ISO 27001 supplier security: what Annex A 5.19 audit evidence must include"
summary: "Annex A 5.19 covers information security in supplier relationships — here is exactly what evidence an auditor expects to see and why gaps are so common"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","Annex A 5.19","supplier security","third-party risk","audit evidence"]
sortOrder: 80
publishedAt: "2026-06-29"
author: "james-peterson"
---
Supplier relationships are where ISO 27001 audit evidence packages fall apart. Teams spend months getting internal controls right, then hand an auditor a folder of supplier questionnaires that are two years old and signed by a vendor contact who left the company. Annex A 5.19 — Information security in supplier relationships — is the control that catches this. Understanding what evidence it actually requires is the difference between a clean finding and a major nonconformity.

## What Annex A 5.19 requires

Annex A 5.19 in ISO 27001:2022 requires organisations to identify, assess, and manage information security risks that arise from using suppliers and other third parties [source: https://hightable.io/iso-27001-annex-a-5-19-information-security-in-supplier-relationships/]. The control sits within the broader supplier relationships cluster (5.19 through 5.22) and sets the foundation — if your supplier identification and risk assessment process is weak, every downstream control (agreements, monitoring, offboarding) inherits that weakness.

The control applies to any third party that accesses, processes, stores, or communicates your information or information processing facilities [source: https://www.upguard.com/compliance/iso-27001/5-19/]. That is a wider net than most teams draw. Cloud infrastructure providers are obvious. Less obvious: the law firm that receives employment contracts, the accounting SaaS that holds payroll data, the marketing automation platform with customer email addresses.

The auditor is not looking for a complete list of every vendor your company has ever paid. They are looking for evidence that:

- You have a defined process for identifying which suppliers are in scope for information security review
- You assess risk before granting access, not after
- You maintain current records of what access each supplier has and under what terms
- You review supplier security posture on a recurring cycle, not just at onboarding

## The evidence an auditor expects to see

The most common question from operators working through 5.19 for the first time: what exactly does "documented" mean here? [source: https://hightable.io/iso-27001-annex-a-5-19-audit-checklist/]

At minimum, an auditor will expect to examine the following:

**Supplier register.** A maintained list of all in-scope suppliers with classification by data type accessed, criticality tier, and review status. A spreadsheet works. What does not work is a list that was built at certification time and never updated. The auditor will cross-reference it against your contracts and access logs. Gaps — suppliers in your environment who do not appear on the list — are immediate findings [source: https://hightable.io/iso-27001-annex-a-5-19-audit-checklist/].

**Risk assessments.** Per-supplier or per-tier risk assessments that document what data the supplier can access, what could go wrong, and what controls reduce that risk. These do not need to be long documents. A one-page structured assessment is more useful and more auditable than a 40-page document that no one reads. The key is that assessments are dated and reflect the current access scope — not last year's scope if the supplier relationship has changed.

**Contractual security terms.** Annex A 5.20 (information security in supplier agreements) handles the contract specifics, but 5.19 establishes the requirement that security obligations exist. The auditor will look for evidence that security requirements were included before access was granted, not added to a contract renewal two years later [source: https://www.upguard.com/compliance/iso-27001/5-19/].

**Due diligence records.** What did you verify about the supplier's security posture before they were onboarded? This can be a completed questionnaire, a review of their ISO 27001 or SOC 2 certificate, penetration test results, or a combination. The record needs to show what was reviewed, by whom, and what the outcome was. "We checked their website" is not a due diligence record.

**Periodic review evidence.** This is where most programmes break down. Initial due diligence is done at onboarding. The auditor wants to see that reviews happen on a recurring cycle — annually for critical suppliers, at a minimum. The evidence is the review outputs: updated questionnaire responses, renewed certificates, notes from a review meeting, exception records [source: https://hightable.io/iso-27001-annex-a-5-19-audit-checklist/]. If your last review of a critical supplier was at onboarding eighteen months ago, that is a gap.

**Incident and issue records.** If a supplier had a security incident during the audit period, the auditor expects to see how your organisation was notified, what your response was, and whether your risk assessment for that supplier was updated. An absence of supplier incident records does not mean nothing happened — it means you may not have been tracking it.

## Where programmes consistently fall short

The gap between what 5.19 requires and what most organisations actually have in place is not usually ignorance of the control. It is process decay [source: https://www.upguard.com/blog/iso-27001-third-party-risk-requirements].

Supplier registers go stale. A supplier is onboarded, a questionnaire is filed, a certificate is recorded, and then nothing happens for eighteen months until audit prep starts. By that point, the supplier may have expanded their access scope, the certificate may have lapsed, or the contact who completed the original questionnaire may have left.

Three specific failure patterns show up repeatedly:

**Tiering that is too flat.** Treating a SaaS platform that processes production customer data the same as a courier service creates two problems. Critical suppliers do not get the scrutiny they warrant. The review workload appears uniform, so teams under-resource the entire programme. Risk tiering by data sensitivity and access type is not optional — it is what makes the programme tractable [source: https://www.upguard.com/blog/iso-27001-third-party-risk-requirements].

**Evidence that lives in email.** Questionnaire responses, certificate PDFs, and security review notes scattered across inboxes and individual drives are not an evidence package. They are a recovery exercise the auditor will not enjoy. The register needs to link to evidence, and the evidence needs to be retrievable on demand.

**Review cycles that are calendar events with no output.** A scheduled supplier review that produces no documented output — no updated risk assessment, no notes, no decision record — does not count as a review for audit purposes. The evidence is the record of what was examined and what was decided, not the meeting that happened.

## Building an evidence package that holds up

The practical approach is to treat 5.19 as an operating process, not a documentation project.

Start with the register. Get every supplier that touches your data or infrastructure into one place, classified by tier. This is the anchor point for everything else [source: https://hightable.io/iso-27001-annex-a-5-19-information-security-in-supplier-relationships/].

Attach review triggers to contract renewals and access changes. A supplier that expands their access scope mid-year should trigger a re-assessment, not wait for the annual cycle.

Capture review outputs at the point of review. A structured note in the register — what was reviewed, what the outcome was, what if any follow-up is required — takes fifteen minutes to write and provides exactly the evidence an auditor needs.

For critical suppliers, request fresh evidence each cycle. A certificate that was valid at onboarding may have been withdrawn. A questionnaire completed by a team that has since been restructured may not reflect current controls.

Supplier security evidence that accumulates through the year — rather than being assembled in the weeks before the audit — is the evidence package that survives scrutiny.

Supplier oversight is one of the areas where auditors consistently find programmes that look good on paper and operate poorly in practice. CloudAnzen maps your supplier register to Annex A 5.19 and tracks review cycles continuously so the evidence is current when the audit begins. [Talk to us](/demo).