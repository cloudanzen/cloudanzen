---
title: "Vendor risk reviews: evidence auditors actually look for"
summary: "Most vendor reviews generate reports nobody checks. Here's what to capture so auditors find a clean paper trail instead of a dead end."
type: "blog"
collection: null
category: "Vendor risk"
readTime: "5 min read"
tags: ["vendor risk","third-party risk","audit evidence","TPRM","ISO 27001"]
sortOrder: 36
publishedAt: "2026-05-15"
author: "maria-rodriguez"
---
Every compliance audit asks the same question about your third-party vendors: show me the evidence. Most teams have completed vendor reviews at some point, but what they've actually preserved — questionnaire PDFs buried in email, SOC 2 reports with expiry dates nobody tracked, SLAs no one re-read after signing — falls apart under examiner scrutiny. The work was done. The evidence just wasn't kept in a retrievable form.

## What auditors actually look for

SOC 2 CC9.2 requires that you evaluate third-party risk before engagement and on a recurring basis. ISO 27001 Annex A controls 5.19 through 5.23 cover supplier relationships in detail: selection criteria, security agreements, monitoring, managing changes, and termination procedures [source: https://www.isms.online/vendor-risk-management/].

What examiners want to see isn't that you asked vendors questions. They want a paper trail that shows:

- Which vendors were in scope and why
- What criteria you used to assess risk — data access, criticality, sub-processors
- What you found
- What you decided to do with what you found
- That you followed up

A spreadsheet row that says "reviewed Q2, OK" doesn't meet that bar. Neither does a PDF questionnaire that was never followed up and isn't linked to any decision.

## The five evidence categories that hold up

Evidence that survives auditor scrutiny falls into five categories.

**Completed assessments with conclusions.** The vendor questionnaire or assessment form, signed off with a risk conclusion — not just the raw answers. If your assessment surfaced red flags, the auditor wants to see what you decided and who approved it. A risk-acceptance decision with an approver and date is audit-ready. A form with no follow-up action is not.

**Current third-party assurance reports.** SOC 2 Type II reports, ISO 27001 certificates, and penetration test summaries for high-risk vendors. Capture the report issue date and the period it covers. A SOC 2 report older than 12 months is a gap finding waiting to happen [source: https://www.isms.online/vendor-risk-management/].

**Data processing agreements and security addenda.** Under GDPR, a signed DPA is a legal requirement for processors. Under ISO 27001, your supplier agreements must address information security requirements (Annex A 5.20). File these together so they're discoverable by vendor name, not by contract execution date.

**Incident and notification commitments.** Does your vendor commit to notifying you within a defined window if they have a breach? Where is that documented? This comes up in SOC 2 Type II reviews. If your vendor had an incident and you didn't hear about it for weeks, the auditor will ask whether your agreement required faster notification — and whether you enforced it.

**Sub-processor lists.** For data-heavy or SaaS vendors, their sub-processor register matters. Capture it and note the date. Vendor sub-processor lists change, and you need to track those changes against your own DPAs and risk posture [source: https://www.securitycompass.com/blog/].

## Timing matters as much as content

Most teams run vendor reviews annually and treat it as a box to check. Auditors see it differently. They look for evidence that you reviewed vendors:

- Before you gave them access to production data
- Annually thereafter
- When the vendor had a material change — acquisition, breach, key personnel change, or significant expansion of the services they provide you

Pre-engagement review evidence is the most commonly missing piece. Teams add a vendor mid-year, the annual review cycle doesn't pick them up, and the auditor finds a critical data processor that was never formally assessed.

Triggering a review on-event — not just on calendar — requires a defined process, not just good intentions. Define what counts as a material change trigger and document that you applied it.

## Making evidence retrievable

Evidence that can't be produced during an audit might as well not exist. The failure mode here isn't losing evidence — it's storing it in a way that makes retrieval impractical in the narrow window an auditor gives you.

The minimum viable retrieval structure maps every in-scope vendor to:

- Their risk tier
- Last assessment date and outcome
- Location of the current assurance report
- DPA or security addendum reference
- Next review date

This doesn't require a specialized tool. It requires consistency [source: https://www.securitycompass.com/blog/]. A maintained spreadsheet beats an abandoned platform configured once and never updated.

Where teams get tripped up: evidence lives in email threads, Slack channels, and shared drives with no naming convention. When an auditor asks for the SOC 2 report for your cloud hosting provider, "I think someone has it" is not an acceptable answer.

## What to do before your next audit

Vendor risk audit prep has two parts most teams do separately: running assessments and keeping evidence. The gap is in connecting them. After each review, capture the conclusion, link the assurance report, and set a next review date. Do it in the same place every time so anyone on your team can pull it when the auditor asks.

If you're heading into your first SOC 2 or ISO 27001 audit, start by listing every vendor with access to production systems or customer data. Tier them by risk. Fill in the evidence gaps from the top tier first — those are the ones auditors will drill into.

Vendor risk evidence gaps are one of the most common findings in first-year SOC 2 audits. CloudAnzen maps your vendor inventory to the controls that require third-party evidence, tracks report expiry dates before they become gaps, and keeps your evidence trail in a form auditors can actually use. [Talk to us](/demo).