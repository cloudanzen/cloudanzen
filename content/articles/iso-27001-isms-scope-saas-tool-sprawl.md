---
title: "ISO 27001 ISMS scope when your stack runs on SaaS tool sprawl"
summary: "How Series B SaaS teams define defensible ISMS boundaries when their infrastructure spans dozens of third-party tools."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","Series B","vendor oversight"]
sortOrder: 178
publishedAt: "2026-10-14"
author: "sarah-jenkins"
---
By Series B, your stack probably runs across AWS, GitHub, a CRM, HR software, and somewhere between 30 and 60 other SaaS tools. Your ISO 27001 auditor is going to ask one uncomfortable question: which of these are in scope? Get it wrong and you'll either over-engineer an unsustainable ISMS, or leave a gap large enough to fail Stage 1.

## Why tool sprawl complicates ISO 27001 scope

ISO 27001 scope defines the boundary of your Information Security Management System — the assets, processes, and locations subject to your controls and your certification audit [source: https://www.isms.online/iso-27001/]. Clause 4.3 requires you to account for interfaces and dependencies between your activities and external parties [source: https://www.isms.online/iso-27001/].

Every SaaS tool that processes, stores, or transmits your sensitive information is a dependency. That does not mean every tool must sit inside your audit boundary. It does mean every tool needs to be classified, documented, and assigned to either your direct control set or your supplier oversight programme.

The gap most companies fall into: they scope their core infrastructure carefully, then treat the remaining SaaS estate as an undifferentiated mass and hope the auditor does not probe. Auditors probe.

## A three-tier model that survives Stage 1

Divide your tool estate into three buckets based on control and data sensitivity.

**Tier 1 — in scope and under your direct control.** Your production cloud environment (AWS, GCP, or Azure accounts where customer data lives), source code repository, CI/CD pipeline if it deploys to production, and identity provider. You control the configuration. You write the access policies. These systems sit inside your ISMS boundary and generate direct audit evidence.

**Tier 2 — in scope via vendor oversight.** SaaS tools that process sensitive data — customer PII, employee personal data, financial records — where you do not control the underlying infrastructure but you do control access, configuration, and contractual requirements. Your CRM, HR platform, customer support tool, and data warehouse typically land here. They stay outside the direct audit boundary, but you manage them through your supplier assessment programme as required by Annex A [source: https://www.isms.online/iso-27001/]. You review their SOC 2 reports or ISO certificates annually and document your findings.

**Tier 3 — out of scope.** Tools that handle only low-sensitivity internal operational data with no material impact on your customers, their data, or your regulatory obligations. A design tool used for marketing assets. An internal wiki with no customer data. Your team calendar. These can be excluded — but the exclusion must be documented with a clear rationale.

The boundary between Tier 2 and Tier 3 is where teams either make sensible decisions or create audit problems. Pushing everything to Tier 3 to reduce overhead will not survive a Stage 1 challenge.

## Three filters to classify each tool correctly

When you are unsure which tier a tool belongs in, run three filters in order.

**Data flow first.** Map where customer data — personal data, contract data, usage telemetry you have classified as sensitive — actually travels. A tool customer data never reaches is a much easier Tier 3 argument. Even indirect adjacency can elevate a tool's tier. If a tool processes logs that include IP addresses, that is personal data under GDPR, and the classification changes.

**Authentication dependency second.** If a tool is federated through your identity provider — Google Workspace SSO, Okta, Azure AD — it is operationally in scope regardless of its sensitivity classification. A compromised identity provider cascades to every federated application. This makes your SSO layer your most critical Tier 1 asset, and it makes every federated application at minimum a Tier 2 concern until you can demonstrate meaningful isolation.

**Regulatory overlay third.** If you process healthcare data, EU personal data, or data subject to India's DPDP Act, the tools handling that data have regulatory treatment requirements independent of your internal classification [source: https://www.isms.online/iso-27001/]. Your ISMS scope must reflect those obligations explicitly, and the scope statement should name the applicable frameworks.

Running these three filters leaves most Series B teams with a small set of Tier 1 systems covering production infrastructure and identity, a broader set of Tier 2 vendors covering data-processing SaaS, and everything else in Tier 3. Your continuous monitoring covers Tier 1. Your annual supplier review cycle covers Tier 2. Tier 3 is documented and revisited each year.

## What your scope statement must say to survive Stage 1

Clause 4.3 makes the scope statement a mandatory document [source: https://www.isms.online/iso-27001/]. Stage 1 auditors read it before anything else, and they use it to decide where to push hard and where to accept your assertions.

A scope statement that survives Stage 1 must answer four questions.

**What is in scope.** Specific services, environments, and data classifications. Name your production cloud accounts or regions. Identify your in-scope SaaS categories. "Customer-facing product infrastructure hosted in AWS eu-west-1, including all systems processing customer personal data" is precise. "Our cloud infrastructure" is not.

**What is explicitly excluded.** Any system a reasonable assessor might expect to find in scope but that you are not certifying. State the exclusion and the reason. "Internal Confluence wiki excluded — no customer data stored" is defensible. Silence on tools that clearly handle customer-adjacent data is not.

**The applicable regulatory and legal context.** GDPR, DPDP, HIPAA, or whatever applies to your data subjects and markets. This anchors your risk treatment decisions and helps the auditor calibrate the review.

**The organisational and physical boundaries.** For a remote-first company with no office infrastructure in scope, say so explicitly. For a company with contractors or an offshore engineering team, clarify whether their systems are in scope or managed through contractual security requirements only.

A specific scope statement lets both parties spend time where risk is genuinely material. A vague one invites the auditor to question everything.

## Keeping scope current as the team scales

Scope is not a one-time decision. Series B companies onboard new tools as teams grow and product surface area expands. Each new tool needs to pass through your three-tier classification before anyone uses it with sensitive data.

This means your procurement or tool-onboarding process needs a security gate. Two questions that work in practice:

1. Will this tool process, store, or transmit data in Tier 1 or Tier 2 classifications?
2. Does the vendor hold a current SOC 2 Type II report or ISO 27001 certificate?

A yes to question one and a no to question two creates a risk to document before the tool goes live. Your risk register captures it. Your next annual review decides whether to accept, mitigate, or let the risk drive a vendor switch.

ISO 27001 requires the ISMS scope to be updated when the organisational context changes [source: https://www.isms.online/iso-27001/]. A new product line, a significant enterprise customer, or entry into a new regulated market are all scope-review triggers. Deferring those decisions compounds as debt that surfaces at the worst possible moment — audit week.

Audit prep eats months of engineering time when scope decisions accumulate as undocumented backlog. CloudAnzen maps your stack to ISO 27001 controls continuously so the evidence is ready when the auditor arrives. [Talk to us](/demo).