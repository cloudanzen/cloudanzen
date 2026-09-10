---
title: "ISO 27001 ISMS scope when your SaaS also ships on-premise"
summary: "How to draw defensible ISMS boundaries when enterprise customers demand a private cloud or on-premise deployment option alongside your standard SaaS."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","on-premise deployment","hybrid SaaS","Stage 1 audit"]
sortOrder: 143
publishedAt: "2026-09-06"
author: "sarah-jenkins"
---
Your cloud-first SaaS just landed an enterprise deal—on condition you deploy into the customer's private cloud or on-premise environment. You say yes. Now your ISO 27001 auditor wants to know: does that customer's infrastructure fall inside your ISMS boundary? The answer reshapes your scope statement, your supplier controls, and your internal audit calendar before Stage 1 is even scheduled.

## What "control" means when the hardware is theirs

ISO 27001 scopes the ISMS around assets and processes the organisation controls or has the ability to influence. [source: https://www.iso.org/standard/27001] When you deploy into a customer's environment, the boundary of that control becomes ambiguous—and that ambiguity is where certification gets derailed.

The practical test is direct operability: can you push a patch, rotate a credential, or pull an audit log without asking the customer first? If the answer is no, that component almost certainly sits outside your defensible ISMS boundary. That does not mean it falls outside your risk register. You still have to document the risk, the contractual controls you are relying on, and how you will verify them over time. Excluding something from scope is a deliberate decision you must justify, not an excuse to stop thinking about it.

The standard also requires the scope to account for interfaces between your ISMS and any activity that falls outside its boundary. [source: https://www.iso.org/standard/27001] An on-premise deployment model is precisely that kind of interface, and the Stage 1 auditor will expect to see it documented in your scope statement and risk register alike.

## Three deployment models and where the scope line lands

The right scope answer depends on how the on-premise version actually runs in practice.

**Vendor-managed in the customer's VPC.** You retain access. You own the credentials, the patching cadence, and the monitoring agents. Everything running your application in that VPC is in scope. The cloud provider's underlying infrastructure is treated as a supplier and controlled under Annex A 5.19, the same as your primary cloud region.

**Customer-operated (you ship the image, they run it).** Your ISMS covers the software artefact, the build pipeline, and the update mechanism you control. The customer's servers and network are out of scope. You transfer the residual risk through contractual controls—a data processing agreement, a deployment addendum, or a hardening specification the customer is required to sign. Those contractual commitments belong in your supplier register and Statement of Applicability as an Annex A 5.19 entry.

**Hybrid (some processing in your cloud, some in theirs).** This is the hardest model to scope. Start by tracing where sensitive data is processed and where access decisions are made. If your cloud cluster handles authentication and authorisation, that cluster is in scope even when the customer's servers hold all the application data. Draw the line at the authentication and control boundary, not at the data boundary. [source: https://www.isms.online/iso-27001/] The data residency question is a privacy concern; the ISMS scope question is a control question.

## Writing a scope statement that survives Stage 1

Your scope statement must be precise enough that the auditor can draw the boundary on a network diagram without stopping to ask clarifying questions. Vague language like "all IT systems supporting the product" fails Stage 1 the moment an auditor discovers an on-premise deployment variant the statement does not mention.

State your exclusions explicitly. For customer-operated deployments, an exclusion block might read: "On-premise deployments operated by customers under the standard Deployment Addendum v2 are excluded from the ISMS boundary. Security obligations applicable to those environments are transferred via contractual controls documented in the supplier register."

Auditors probe specifically for internal consistency. If your risk register references a data-loss scenario on customer-operated instances but your scope statement declares those instances excluded, you have a contradiction to resolve before the documentation review. The scope statement, risk register, and Statement of Applicability must tell the same story about every deployment variant you have ever sold to a customer. Misalignment between these three documents is one of the most common reasons Stage 1 findings become remediation blockers.

Also consider future-proofing. If you expect to add a new deployment region or a new customer-operated tier within the certification period, scope your statement broadly enough that you do not need to re-issue it at every change. A scope written to accommodate planned growth avoids the annual scope amendment cycle that costs an operator several weeks each cycle.

## Managing supplier evidence for excluded environments

Excluding a deployment model from your ISMS scope does not eliminate the audit obligation for it. You need to show the auditor that you have transferred the residual risk through documented supplier controls and that you verify those controls on a defined cadence. [source: https://www.isms.online/iso-27001/]

The evidence set for customer-operated deployments typically includes:

- A deployment requirements document specifying minimum OS patch levels, network isolation rules, encryption-at-rest configuration, and log-retention obligations the customer must meet
- Contractual language requiring the customer to report security incidents to you within an agreed notification window
- An annual review mechanism—even a signed self-attestation form—that demonstrates the customer continues to meet the baseline deployment requirements

These artefacts belong in your supplier register alongside any other critical third-party dependency. If you have more than a handful of on-premise customers, group them by data classification and assign proportionate review cadences. Customers processing sensitive personal data need more scrutiny than customers who run only anonymised analytics workloads on their own servers.

## What your internal audit programme looks like without direct access

Once customer-operated environments leave your ISMS boundary, your internal audit cannot test those environments directly. That is expected—but you need a compensating assurance trail before Stage 1.

The workable approach is indirect verification. Define the configuration controls you cannot test yourself, then document how you obtain assurance over each one: customer-signed attestations, support ticket patterns that would signal a misconfiguration, or periodic deployment health checks the customer runs and shares with you. When the auditor asks how you gain assurance over excluded environments, the answer "contractual obligation backed by annual attestations from a sample of on-premise customers" satisfies the requirement.

Document the indirect verification mechanism in your internal audit plan and record the outcome in each audit report. An excluded environment with no verification trail is a nonconformity waiting to be written up. Stage 1 auditors routinely look for exactly this gap because it is easy to miss when the implementation team is focused on cloud controls and treats the on-premise option as an afterthought.

Scoping an ISMS across cloud and on-premise deployments is one of the most document-intensive decisions before Stage 1—get the boundary wrong and every downstream control gap compounds the remediation cost. CloudAnzen maps your infrastructure variants, supplier controls, and risk register to a single scope statement that auditors accept, without requiring you to rebuild evidence from scratch. [Talk to us](/demo).