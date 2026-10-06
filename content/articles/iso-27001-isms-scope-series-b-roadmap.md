---
title: "ISO 27001 ISMS scope: a Series B SaaS founder's roadmap"
summary: "How to define your ISO 27001 ISMS boundary so your first certification covers what matters without stalling the business."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS compliance","certification"]
sortOrder: 171
publishedAt: "2026-10-06"
author: "sarah-jenkins"
---
Your Series B is closing. A Fortune 500 prospect just asked for your ISO 27001 certificate. You have eight months, one dedicated GRC hire, and a cloud-native SaaS that runs across three AWS accounts. The hardest decision you'll make in the first two weeks isn't the tooling. It's the scope.

## Why scope determines your audit cost

The ISO 27001 standard requires you to define the boundary of your ISMS — which assets, processes, and people fall inside it — before you design a single control. [source: https://www.iso.org/standard/27001] Get it wrong and you're either defending controls for systems that aren't certified, or leaving material risks outside the perimeter.

A scope that's too narrow creates its own risk. If your staging environment, your CI/CD pipeline, or your customer support tooling sits outside the ISMS, an auditor at Stage 2 will notice. They will ask you to demonstrate that customer data doesn't touch those excluded systems. At Series B, it almost certainly does.

A scope that's too broad ties up engineering time on controls that deliver zero customer value. Mapping your employee wellness app to Annex A controls isn't compliance — it's theatre.

## The four decisions that shape your ISMS boundary

ISO 27001 clause 4.3 requires you to set the scope in writing, accounting for internal context, external context, and interested parties. [source: https://www.iso.org/standard/27001] In practice that means making four calls:

**Which products does this certification cover?** Start with the product your enterprise customers are paying for. If you have a secondary product in beta with no regulated data, exclude it — but document the exclusion and the rationale. Auditors accept exclusions; they don't accept surprises.

**Where does customer data live and move?** Map the data flow before you draw the boundary. Typically: application tier (AWS, GCP, or Azure), CI/CD pipelines (GitHub Actions, ArgoCD), secrets management (AWS Secrets Manager, HashiCorp Vault), support tooling (Zendesk, Intercom), and SaaS integrations that touch customer records. Every system that processes production data should be in scope or explicitly excluded with a written rationale.

**Which third parties share the perimeter?** ISO 27001 requires you to account for supplier relationships in your ISMS. [source: https://www.isms.online/iso-27001/] Cloud infrastructure providers sit outside your direct scope but inside your risk picture. For each material supplier, decide: are they a shared-responsibility partner, a data sub-processor under contract, or a fully excluded vendor with no access to customer data?

**What is the geographic and organisational boundary?** If you have offshore engineering teams, a US entity, and an India-based ops function, your scope document needs to state whether all three are in scope. At Series B, many founders default to including the whole company — simpler to defend, harder to control. Consider whether a product-team scope covering engineering, devops, and security is more practical for your first certification.

## Writing a scope statement that holds up at Stage 1

The scope statement must appear in your ISMS documentation and will be reviewed at Stage 1. [source: https://www.iso.org/standard/27001] It should answer five questions in two to four sentences:

- What does the organisation do?
- What information is being protected?
- Which systems and locations are in scope?
- Which systems or locations are excluded, and why?
- How does the ISMS boundary map to organisational boundaries?

Example: *CloudCo's ISMS covers the design, operation, and maintenance of its SaaS workforce management platform, including the AWS multi-account environment (production, staging, tooling accounts), internal CI/CD pipelines, and the people and processes in the engineering and security teams at its Bengaluru and Singapore offices. Corporate HR, finance, and marketing systems are excluded as they do not process customer data.*

That's a defensible scope. It's specific, it names what's out and why, and it won't cause confusion at Stage 2.

## Four scope mistakes that derail first-time certifications

**Including shared internal tooling without controls.** Slack, Google Workspace, and Jira are in scope for many Series B companies because they carry customer-related information. If you include them, you need controls: acceptable use policies, access reviews, data retention settings. If you're not ready to control them yet, exclude them and document the rationale.

**Scoping out staging environments to simplify the audit.** Staging often mirrors production. If customer data is masked but the codebase is identical, auditors will ask about the pipeline. Include staging in scope, or document a clean data-masking process that shows no production data crosses into staging.

**Changing the scope after Stage 1.** Scope changes after Stage 1 restart the audit clock. Lock the boundary before Stage 1. If your product roadmap will expand to a new region within twelve months, scope it in from the start rather than adding it mid-certification.

**Not getting engineering buy-in before filing.** The CTO and head of infrastructure need to sign off on the scope boundary before you file the documentation. If they push back on including the CI/CD pipeline, that's a conversation to have in week one — not during the Stage 2 audit.

## What a practical Series B scope looks like

Based on how cloud-native SaaS teams commonly structure their first certification, a practical ISMS scope includes: [source: https://www.isms.online/iso-27001/]

- Production and staging cloud accounts
- CI/CD toolchain that deploys to production
- Secrets management and identity tooling
- Endpoint devices used by engineering and security staff
- Core SaaS integrations that process or store customer data
- The engineering, devops, and security functions

It excludes marketing systems, HR software, finance tooling, and corporate IT beyond endpoint management. Each exclusion carries a documented rationale.

This scope is auditable with a lean team. It's also what most enterprise procurement teams expect when they ask for ISO 27001 certification from a Series B vendor.

Getting the scope right is the first milestone in the ISO 27001 journey, not the last. Once the boundary is fixed, you need a gap assessment against Annex A controls, a risk register anchored to those boundaries, and an evidence collection process that holds up when the auditor arrives.

ISO 27001 certification prep eats months of engineering time when teams must manually map their stack to controls and gather evidence on request. CloudAnzen continuously maps your cloud environment to ISO 27001 Annex A controls and surfaces evidence as your systems change — so the scope document you file today stays accurate on the day of your audit. [Talk to us](/demo).