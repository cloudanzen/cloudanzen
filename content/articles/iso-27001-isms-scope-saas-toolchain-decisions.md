---
title: "ISO 27001 ISMS scope: classifying your SaaS toolchain"
summary: "How to decide which SaaS tools belong inside your ISO 27001 ISMS scope — and what evidence to keep when you draw the line"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","SaaS toolchain","supplier management"]
sortOrder: 155
publishedAt: "2026-09-19"
author: "sarah-jenkins"
---
The ISMS scope statement is one of the first documents an ISO 27001 auditor asks for at Stage 1. Most first-time operators nail the obvious parts — production infrastructure, customer data stores — and then stall when the auditor points to the rows in their toolchain spreadsheet marked "TBD."

Slack. GitHub. Notion. Datadog. The question is almost never "do we use this?" It is: does this tool process information assets within your declared scope, and have you applied the right controls to it?

Get this wrong in either direction and the certification suffers. Over-include everything and you carry supplier assessment obligations you cannot staff. Under-include and the auditor finds an information asset processed outside your declared scope. The answer is neither extreme — it is a documented, defensible classification for every significant tool.

## What ISO 27001 Clause 4.3 actually requires

Clause 4.3 requires you to define the scope of your ISMS in terms of the organisation's activities, functions, services, and products [source: https://www.iso.org/standard/27001]. The standard does not say every tool you use must be in scope. It says the scope must cover what is relevant to your information security objectives and the context established in Clauses 4.1 and 4.2.

The practical test for any SaaS tool: does it store, process, or transmit information assets that fall within your declared ISMS boundary?

If yes, the tool is in scope. Excluding it requires a written rationale explaining why the exclusion does not compromise the confidentiality, integrity, or availability of assets your ISMS is meant to protect. "We use the vendor's SOC 2 certified product" is not a rationale. It is a supplier assessment input. The two are different.

If no, document that briefly. One sentence is sufficient. Undocumented exclusions invite Stage 1 questions that eat time. Documented exclusions, even ones the auditor initially questions, give you something concrete to defend.

## Five toolchain categories and how to classify them

Rather than reviewing each SaaS tool one by one, classify by function. Most Series B SaaS companies have toolchains that fall into five categories.

**Infrastructure and platform.** AWS, GCP, Azure, and their managed services are always in scope. They run your product. The shared responsibility model applies here: the cloud provider is responsible for security of the cloud; you are responsible for security in the cloud [source: https://www.isms.online/iso-27001/]. Your scope statement should reference the shared responsibility boundary and document which controls you have delegated to the provider versus which you own.

**Source control and CI/CD.** GitHub, GitLab, CircleCI, Terraform Cloud. In scope if they hold production code, infrastructure definitions, or secrets — and for most Series B teams, they do. These tools process your most sensitive engineering assets. Access controls, change management procedures, and monitoring requirements all apply. Exclude them without documentation and you will struggle to explain your change management evidence chain to an auditor.

**Collaboration and productivity.** Slack, Google Workspace, Microsoft 365, Notion, Confluence. The scoping decision depends on what actually lives in these systems. If incident runbooks, architecture decision records, and employee personal data reside there, they belong in scope. If a workspace holds only social discussion and no operationally sensitive content, a documented exclusion is defensible. In practice, most teams include their primary productivity suite because HR records, financial communications, and customer-related exchanges all flow through it.

**Customer support and CRM.** Zendesk, Intercom, Salesforce, HubSpot. If customer personal data flows through these — and for a B2B SaaS product it almost always does — they are in scope. This is also where ISO 27001 scoping and data protection obligations overlap. A tool that processes personal data and sits outside your ISMS scope creates a gap that is difficult to explain to an auditor, and doubly difficult when a customer's security team comes asking the same question.

**Security and monitoring tooling.** Datadog, PagerDuty, your SIEM, endpoint detection tooling. Include these by default. They are part of your control infrastructure. An auditor tracing your monitoring evidence will follow the chain to these tools. If they are out of scope, your evidence chain breaks before it reaches any of the controls it is supposed to demonstrate.

## The supplier assessment mistake operators make

The most common error at Series B is treating a vendor's SOC 2 certification as justification for leaving the tool outside your ISMS scope.

This conflates two separate requirements. A vendor's SOC 2 report covers controls in their environment. It says nothing about the controls you apply in yours. When Slack is in scope, you still need to manage access provisioning and deprovisioning for your Slack workspace. You still need to know who holds admin rights and review that access periodically. The vendor's certification does not do that work.

The correct use of a vendor's SOC 2 report is as evidence input to your annual supplier assessment — the documented review required by the supplier relationship controls in Annex A [source: https://www.isms.online/iso-27001/]. The supplier assessment record should show that you requested the report, reviewed it, logged any findings, and scheduled re-review. A screenshot of the vendor's trust page is not a supplier assessment record.

When a vendor refuses to share their security report, document that too. Note the refusal, record what compensating evidence you obtained or what risk acceptance you made, and include it in your ISMS records. An auditor who sees a gap in vendor documentation wants to see that you noticed it and handled it, not that you stopped looking.

## What to record for each in-scope tool

For every SaaS tool included in your ISMS scope, your records should cover four areas.

**Asset classification.** What category of data does this tool process? What classification level does it carry under your data classification policy? A tool that processes confidential customer records sits in a different risk tier than a tool that holds only public marketing content.

**Supplier assessment record.** Evidence you reviewed the vendor's security posture at least annually. This means requesting their SOC 2, ISO 27001 certificate, or security questionnaire, reviewing the results, recording any findings, and scheduling the next review. The cadence and formality can scale with the risk tier of the tool.

**Access review record.** Who has access, in what role, and when was it last reviewed? At minimum, a periodic access review that confirms who should have access and shows that leavers have been deprovisioned. For admin-level access, the review should be more frequent.

**Offboarding procedure.** A written procedure for what happens when someone leaves the organisation and must be removed from this tool. Auditors check for this specifically, particularly for tools with elevated access. A generic "we follow HR offboarding" answer is weaker than a tool-specific procedure with evidence it was followed.

For excluded tools, keep a brief rationale entry. Two sentences is enough: what the tool does, why it sits outside scope, and when the rationale was last reviewed.

## Keeping scope current as the toolchain grows

At Series B the toolchain changes faster than most ISMS programmes can absorb. A free-tier observability tool the engineering team adopted last quarter now processes production logs that include request metadata. Your scope statement says the tool is excluded. That gap will surface at your next audit.

A quarterly toolchain review is the most practical control. Maintain a record — a spreadsheet or entries in your GRC tool — of every SaaS tool in use: its function, its classification, its in-scope or out-of-scope decision, the rationale for that decision, and the last review date. Flag any tool added since the previous review that has not been assessed. For in-scope tools, confirm the supplier assessment and access review are current before the quarter closes.

This is operational work without much visible output. That is precisely the discipline that distinguishes a credible ISMS from a certification that only holds together under ideal conditions. Scope drift is one of the most common findings in surveillance audits, and it is almost always preventable.

Maintaining ISO 27001 scope across a growing SaaS toolchain takes steady attention every quarter. CloudAnzen maps your toolchain against your ISMS scope, tracks supplier assessment cadences, and flags coverage gaps before your auditor finds them. [Talk to us](/demo).