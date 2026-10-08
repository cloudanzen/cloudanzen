---
title: "ISO 27001 ISMS scope when your product depends on LLM APIs"
summary: "How to draw ISMS scope boundaries around LLM API dependencies—OpenAI, Anthropic, and others—without creating gaps auditors will find."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","LLM APIs","supplier controls","Series B"]
sortOrder: 173
publishedAt: "2026-10-08"
author: "sarah-jenkins"
---
You've decided to pursue ISO 27001. The assessor asks: "Show me your scope document." You pull it up. Cloud infrastructure—check. SaaS application—check. Your CI/CD pipeline—check. Then they ask: "What about the LLM APIs your product calls at runtime?"

Silence.

## Why LLM API dependencies are a scoping trap

Series B SaaS products built in the last two years routinely call one or more external LLM providers—for summarisation, classification, code generation, customer-facing chat. The API call is simple. The scoping question is not.

The ISO 27001:2022 scope statement (Clause 4.3) requires you to document "the interfaces and dependencies between activities performed by the organisation and those that are performed by other organisations" [source: https://www.iso.org/standard/27001]. An LLM API is exactly that interface.

Three positions operators take, and why two of them fail.

**Position A: "They're just vendors."** You add the LLM provider to your vendor register, fill out a questionnaire, note they're SOC 2 Type II certified, and exclude the API from the ISMS scope. Stage 1 may pass. Stage 2 won't—when the assessor traces data flow from your product to an LLM API, they'll ask for evidence that Annex A control A.5.19 (supplier relationships) and A.5.20 (addressing information security within supplier agreements) are met. If your vendor file contains only a questionnaire and a PDF of their SOC 2 report, you have a nonconformity.

**Position B: "They're in scope, so we control them."** You try to draw the LLM provider inside your ISMS boundary. You cannot. You don't operate their infrastructure. Assessors know this and will push back. An organisation is in scope; a third-party service it depends on is a scoped dependency.

**Position C: "They're out of scope, with managed interfaces."** This is the defensible position. The LLM provider is excluded from your ISMS scope as a separate organisation. The *interfaces* between your systems and theirs—the API credentials, the data you send, the controls you run on your side of the call—are explicitly in scope.

## What the scope document needs to say

Your Clause 4.3 scope statement should address three things.

First, name the LLM dependencies explicitly: "The organisation integrates with external LLM APIs for [function]. These providers operate under their own management systems and are not included in the ISMS scope. The interface—including API credential management, prompt content, and data transmitted to the API—is in scope."

Second, reference the supplier control set. Point to your Annex A controls that govern the relationship: A.5.19 (supplier policy), A.5.20 (agreements), and A.5.22 (monitoring supplier services). Don't leave the scope document as a floating statement—link it to the controls that operationalise it.

Third, document what data crosses the boundary. If user PII or proprietary data passes to the LLM API, that needs to appear in your data flow diagrams and your Record of Processing Activities. Assessors compare data flows against scope statements; gaps show up fast [source: https://www.isms.online/iso-27001/].

## Controls that draw assessor attention

Three Annex A controls dominate questions on this boundary.

### A.5.19: Information security in supplier relationships

You need a supplier policy that explicitly covers cloud service providers and LLM API vendors. A generic vendor policy written for SaaS tools often treats LLM providers as infrastructure rather than data processors—creating a classification gap your assessor will notice.

The evidence file: your supplier policy, the LLM provider listed in your vendor register with tier classification, and a record of your last annual review against the provider's published security documentation.

### A.5.20: Addressing information security within supplier agreements

Your Terms of Service with the LLM provider is not a supplier agreement—it's a consumer agreement written to protect the provider. Check whether the API terms include: data processing clauses, subprocessor disclosure, incident notification obligations, and data deletion on account termination.

If they don't, and you pass user data to the API, document the gap as a risk in your register. Apply a compensating control—data minimisation at the application layer, prompt sanitisation, or on-premise inference—and record the residual risk acceptance.

### A.5.22: Monitoring, review and change management of supplier services

If your product's core function depends on the LLM API, your ISMS should show: SLA documentation, a business continuity consideration for provider outages, and a formal review trigger when the provider announces changes to their model or data handling practices.

This is the control most operators skip. They configure the API once and forget it. When the provider quietly revises their data retention policy, that is a supplier service change that belongs in your ISMS record.

## Audit findings that catch operators off guard

**API credentials without a rotation policy.** The API key to your LLM provider is an information asset. It belongs in your asset register (A.5.9) and needs a documented rotation schedule. Assessors will ask for this, particularly after high-profile key compromise incidents across the LLM ecosystem.

**Prompts that carry sensitive data with no sanitisation control.** If user input passed to the LLM API includes customer PII, you need a documented control: explicit processing basis, data minimisation at the application layer, or a contractual data processing agreement with the provider. Silence on this point becomes a finding.

**No change process for model version updates.** When the provider updates their model, behaviour changes. Without a formal process for testing and approving model version changes before they affect production, you have a gap in change management (A.8.32). Assessors increasingly ask for this where AI outputs affect customer-facing decisions.

## How to document the boundary before Stage 1

Before your Stage 1 audit, prepare a data flow diagram that includes:

- ISMS-scoped systems: cloud infrastructure, application, CI/CD, corporate endpoints
- External services and the data flows to each, labelled by type
- For each LLM API: the interface layer explicitly labelled as in-scope, with a reference to your supplier controls

Assessors want evidence that you have thought through the boundary, not that you have excluded the hard parts. A diagram showing the LLM provider outside the boundary with an arrow labelled "API call—interface in scope" and pointers to A.5.19, A.5.20, and A.5.22 is exactly the right level of detail.

The scope document does not need to be long. It needs to be defensible. If your product called an LLM API in the last twelve months, that boundary decision belongs in your scope statement.

Managing LLM API dependencies under ISO 27001 is new territory—most scoping guidance predates generative AI products. CloudAnzen maps your data flows, including third-party API integrations, to ISO 27001 controls and keeps your supplier evidence current between audits. [Talk to us](/demo).