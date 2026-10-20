---
title: "Vendor risk reviews: the evidence worth keeping"
summary: "A practical framework for deciding which vendor security documents count as evidence at audit and which ones waste storage without proving anything."
type: "blog"
collection: null
category: "Vendor risk"
readTime: "6 min read"
tags: ["vendor risk","TPRM","audit evidence","third-party risk"]
sortOrder: 184
publishedAt: "2026-10-20"
author: "maria-rodriguez"
---
Third-party risk programs tend to accumulate evidence the way attics accumulate boxes. After a few years you have a shared drive full of SOC 2 reports dated 2021, questionnaire PDFs nobody opened, and a vendor tier spreadsheet nobody updated after the last acquisition. When the auditor arrives, none of it tells a coherent story. The fix is not more evidence — it is better selection.

## The difference between a document and evidence

Evidence is not any document you received from a vendor. It is documentation that proves a specific control was operating at a specific point in time. The distinction matters because auditors — for SOC 2, ISO 27001, or a customer security review — ask pointed questions: Is this still current? What assertion does this prove? What did your team do with what it found?

A SOC 2 Type II report from your payment processor is evidence that the processor's controls were assessed over a defined period against specific trust service criteria. A vendor's email promising "enterprise-grade security" is a claim, not evidence.

Before you retain anything, ask: what assertion does this document support, and would an independent assessor accept it as proof of that assertion? If you cannot answer both parts, the document is storage cost with no audit value.

## What is worth keeping

**Current SOC 2 Type II or ISO 27001 certificates.** The operative word is current. A report more than 12 months past its period end is stale for most control assertions unless the vendor provides a bridge letter covering the gap. Keep one copy, dated, filed against the vendor record. Once the renewed report arrives, archive the prior year's version and set a purge date.

**Completed questionnaire responses with a named signatory and date.** A security questionnaire with a named responder, a date, and a signature — or equivalent electronic acknowledgment — has evidentiary weight. An auto-filled PDF with no context does not. Retain responses for Tier 1 and Tier 2 vendors. Do not keep drafts or partially completed responses.

**Executed contracts, DPAs, and amendment history.** Data Processing Agreements define obligations. Keep the executed version and every amendment. If the vendor updated their DPA after a regulatory change — revised standard contractual clauses for EU transfers, new state privacy law requirements — keep the version log, not just the latest text.

**Scope-of-access records.** What data does this vendor actually access? What systems can they reach? This is consistently the weakest area in vendor evidence libraries. A scope-of-access record does not need to be elaborate. A dated entry in your vendor register — "read access to customer metadata in production; no PII export rights; last verified 2024-11-01" — is sufficient and defensible. The entry is evidence you understood what was at stake.

**Incident notification history.** If a vendor notified you of a security incident, keep the notification as received. If no notifications were received in a review period, a brief annual attestation stating that fact is more useful than silence. Silence looks like a gap; a documented nil return looks like a process.

## What is not worth keeping

**Vendor security policies.** Unless the vendor is a critical sub-processor handling regulated data, their internal access control policy does not prove anything about your residual risk from using them. You are managing your exposure, not auditing their internal procedures.

**Penetration test reports without scope confirmation.** Unless the pentest scope explicitly covers the systems processing your data, a third-party pentest report tells you something was tested — not that the vulnerabilities relevant to your integration were found or fixed. If you negotiated a scope inclusion covering your integration surface, that report becomes meaningful evidence. Without it, it is background noise.

**Marketing materials and sales collateral.** A vendor's claim to be "SOC 2 compliant" in a pitch deck has zero evidentiary weight if you have not obtained and reviewed the actual report. Keep the report. Discard the deck.

**Questionnaire responses older than 24 months.** Controls change. Staff change. Architecture changes. A three-year-old questionnaire response cannot support a current-period control assertion and may actively mislead reviewers about the vendor's current posture.

**Duplicate copies of the same report.** Many vendor programs accumulate three or four copies of the same SOC 2 report because different team members downloaded it at different times. One indexed copy per report period is sufficient. Duplicates introduce version confusion and inflate the apparent comprehensiveness of your library without adding any evidentiary value.

## Building a lean, defensible vendor evidence library

The practical test for a defensible vendor evidence library is narrow: can you, in under 30 minutes, produce documentation showing that your Tier 1 vendors were assessed, their access was understood, their controls were reviewed, and material risks were tracked to a decision?

That benchmark drives the architecture.

**Tier your vendors.** Tier 1 covers vendors with access to production data or critical infrastructure. Tier 2 covers vendors with access to business systems without production data. Tier 3 covers low-risk services with no meaningful data access. Evidence requirements drop sharply by tier. A Tier 3 vendor — office supplies, travel booking — needs a register entry and nothing else. A Tier 1 vendor needs the full evidence package described above.

**Set a refresh calendar, not a collection habit.** SOC 2 reports and ISO 27001 certificates: refresh annually. Questionnaires: every 12 to 18 months for Tier 1 vendors, every 24 months for Tier 2. DPAs: on contract renewal or when a regulatory trigger fires. Scope-of-access records: on any change to the integration or the data flows involved.

**File by vendor, not by document type.** One folder per vendor containing only current evidence is dramatically faster to navigate during an audit than a flat folder of every SOC 2 report received across all vendors sorted by date. When an auditor asks about a specific vendor, you open one location.

**Document your decisions, not just your receipts.** A vendor risk program is ultimately about decisions: was the risk accepted, transferred, or remediated? If a Tier 1 vendor's SOC 2 report showed open exceptions in their user access review section, what did your team do? A dated risk acceptance note or a remediation request email thread is more valuable evidence than the SOC 2 report itself. It shows a functioning process, not just a collection exercise.

## When to trigger an out-of-cycle review

Not all vendor reviews belong on a fixed schedule. Trigger an unplanned review when any of the following occurs:

- The vendor announces a merger, acquisition, or significant infrastructure migration
- Your organization changes how it uses the vendor — new API integration, expanded data access, new use case with different risk exposure
- A regulatory change affects the legal basis for the data transfer
- The vendor discloses a security incident, even if your data was not reportedly involved
- A customer security review names the vendor directly and asks for documentation

In each case, scope the out-of-cycle review to what the trigger actually puts at risk. You do not need to refresh the entire vendor file — you need to refresh the evidence relevant to the changed conditions. A targeted review documented promptly is better evidence of a live process than an annual sweep that happens six months late.

Vendor risk reviews drain compliance and engineering cycles when the evidence library is disorganized or stale. CloudAnzen maps your vendor portfolio to the controls that matter, keeps evidence current against your review calendar, and surfaces gaps before they become audit findings. [Talk to us](/demo).