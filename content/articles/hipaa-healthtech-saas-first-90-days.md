---
title: "HIPAA compliance for health-tech SaaS: the first 90 days"
summary: "A 90-day operational playbook for SaaS teams handling PHI: risk analysis, BAA coverage, access controls, and breach notification readiness."
type: "blog"
collection: null
category: "HIPAA"
readTime: "6 min read"
tags: ["HIPAA compliance","health-tech SaaS","BAA","risk analysis","PHI"]
sortOrder: 148
publishedAt: "2026-09-12"
author: "sarah-jenkins"
---
You just closed a health-tech deal. The buyer's legal team sent over a Business Associate Agreement and a security questionnaire asking about your HIPAA program. The deal closes when you have answers. Most SaaS teams reach this moment before they have built a program, and they have roughly 90 days to close the gap.

Here is what to work on first, and why the order matters.

## Understand what HIPAA actually covers

HIPAA's Security Rule covers electronic Protected Health Information (ePHI) — any individually identifiable health information your systems process, store, or transmit [source: https://www.hhs.gov/hipaa/for-professionals/security/index.html]. If a covered entity signs a Business Associate Agreement with you, you are a business associate, and the full Security Rule applies to your systems.

The Security Rule divides requirements into three categories: administrative safeguards, physical safeguards, and technical safeguards [source: https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html]. Within each category, specifications are either required or addressable. Addressable does not mean optional. Addressable means implement the specification or document why an equivalent alternative provides the same protection. Most teams misread this and treat addressable items as skippable. OCR enforcement tells a different story.

Start by printing the required versus addressable matrix. Every gap you find in the next 90 days maps to a cell in that table.

## Do the risk analysis before anything else

HHS Office for Civil Rights publishes the findings from every resolution agreement it has reached with covered entities and business associates [source: https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/index.html]. The most common finding across those agreements is a missing or inadequate risk analysis. A risk analysis is required under 45 CFR § 164.308(a)(1). There is no compliant HIPAA program without one.

A risk analysis is not a penetration test. It is not a questionnaire you fill in once and file away. It is a documented, ongoing process that answers four questions: Where does ePHI live in your environment and your supply chain? How could it be compromised, corrupted, or made unavailable? What controls reduce those threats? What residual risk remains, and who has accepted it?

For a SaaS product in month one, this means mapping every place ePHI touches your stack — API ingestion, application database, object storage, backup, logs, analytics, and support tooling — and mapping every sub-processor that handles it. Then enumerate the threat list: ransomware, misconfigured cloud storage, insider access abuse, compromised credentials, lost endpoints, and dependency vulnerabilities. For each threat, rate likelihood and impact. Map your existing controls. Flag gaps.

The output is a document. OCR wants to see the reasoning, not a spreadsheet cell that says high.

## Get your BAA chain complete

A Business Associate Agreement is a contractual obligation. The compliance chain it creates is an operational one. Every vendor whose systems can reach your ePHI needs a signed BAA before ePHI gets there [source: https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html].

Walk your data flow map and audit BAA coverage for each vendor in the chain.

Your cloud infrastructure provider. Most hyperscalers make BAAs available through their compliance portals with self-service workflows. Sign and retain the executed document, not just a checkbox in a vendor portal.

Your database-as-a-service, object storage, and data warehouse. If ePHI lands there, you need paper.

Your logging and SIEM vendor. This one gets missed constantly. Engineers copy a database query into a debug log to chase a production incident. If that query includes a patient identifier, ePHI is now in your log pipeline. Your logging vendor needs a BAA.

Your APM and error tracking tools. Stack traces often include request context. If request context includes ePHI, those tools need a BAA.

Your customer support platform, if agents can see health-related data in tickets or chat.

Maintain a vendor register with BAA status, executed date, and renewal date. This is the evidence auditors look for in a HIPAA review. Verbal confirmation from a vendor account manager is not evidence.

## Access controls and audit logs are what buyers actually ask about

The two technical requirements that appear in almost every health-tech security questionnaire are access control and audit logging.

Access controls under HIPAA mean unique user IDs, emergency access procedures, automatic logoff, and encryption [source: https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html]. In practice, that means every user who can access ePHI authenticates with MFA. Role-based access limits which records each user class can read or modify. Production database access goes through a privileged access workflow with just-in-time provisioning, not persistent credentials shared across the engineering team. Shared accounts are removed. Service accounts are named, documented, and scoped to least privilege.

Audit logging means activity logs that record who accessed which ePHI record, when, from which source, and through which code path. HIPAA documentation must be retained for a minimum of six years from the date of creation or the date it was last in effect, whichever is later [source: https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html].

Ship your access logs to an append-only destination where application code cannot delete them. A SIEM or an immutable log archive both work. The point is that an attacker who compromises your application tier cannot also destroy the evidence trail.

## Build your breach notification runbook before you need it

HIPAA's Breach Notification Rule requires notifying affected individuals and HHS within 60 calendar days of discovering a breach [source: https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html]. For breaches affecting more than 500 residents of a state or territory, prominent media outlets in that state must also be notified within 60 days.

Sixty days sounds like a long runway until you are trying to reconstruct what data was in a compromised database, scope which patient records were affected, get legal review of notification language, and draft patient-facing notices while your engineering team is still in triage mode.

Not every security incident is a reportable breach. HIPAA includes a four-factor risk assessment to determine whether the presumption of breach is rebutted [source: https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html]. Your runbook needs to include that assessment step, not just the notification logistics.

Build the runbook now. Include who calls legal, when the assessment clock starts, which covered entity customers get notified with what template, who files the HHS breach portal entry, and how you preserve evidence without contaminating it. Then run a tabletop exercise in month two. A 90-minute session will expose the gaps before OCR does.

HIPAA compliance in the first 90 days is not about having a perfect program — it is about having a defensible one. A completed risk analysis, a documented BAA chain, access controls with an audit trail, and a tested breach runbook puts you well ahead of most first-time business associates. CloudAnzen continuously maps your environment to HIPAA Security Rule controls and keeps evidence current as your stack changes. [Talk to us](/demo).