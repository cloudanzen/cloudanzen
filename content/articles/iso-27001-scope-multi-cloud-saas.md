---
title: "Scoping ISO 27001 across multiple cloud providers: a Series B playbook"
summary: "When your stack spans AWS, GCP, and Azure, 'all production systems' is not a scope statement — here is how to draw boundaries that hold up at Stage 1"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","multi-cloud compliance","SaaS audit","Stage 1 audit"]
sortOrder: 0
publishedAt: "2026-10-07"
author: "chloe-thompson"
---
Your Series B is done. Your stack spans AWS for production, GCP for ML pipelines, and Azure for identity — because that is how a three-year build actually looks. Now your first enterprise prospect's procurement team is asking for an ISO 27001 certificate. Before you engage a certification body, you need to know what is in scope and what is not.

## Why multi-cloud architecture complicates ISMS scope

ISO 27001 scope is not about technology. It is about information assets and the processes that handle them [source: https://www.isms.online/iso-27001/]. But your technology choices drive where information lives, who can reach it, and which controls are technically feasible. When your production environment spans three cloud providers, each with its own IAM model, logging stack, and network boundary, "all production systems" is not a scope statement — it is a to-do list.

The practical problem is control consistency. ISO 27001:2022 requires you to apply your ISMS to the scope you declare [source: https://www.iso.org/standard/27001]. If AWS and GCP have different log retention periods, different MFA enforcement paths, and different approaches to key management, you will spend your Stage 2 audit explaining three sets of controls instead of one. Most certification bodies will pass you. Your auditor will write observations. Those observations accumulate into a difficult surveillance audit twelve months later.

The better approach is to define scope around information flows first, then let the cloud architecture follow.

## What ISO 27001 Clause 4.3 actually requires

Clause 4.3 of the standard [source: https://www.iso.org/standard/27001] requires your scope to account for:

- Internal and external issues, from Clause 4.1
- Requirements of interested parties, including customers and regulators, from Clause 4.2
- Interfaces and dependencies between your organization and external entities

What it does not require: a system-level inventory of every VM or container in your scope statement. That belongs in your asset register, not the scope document itself. The scope statement names the boundaries. The asset register names what is inside them.

For a multi-cloud SaaS company, your Clause 4.3 analysis might look like this:

- **External issues**: data residency requirements from EU customers if GCP multi-region spans outside the EU; contract restrictions in regulated-industry verticals
- **Interested parties**: enterprise customers running vendor security review programs; investors with representations on information security; regulated-industry customers who require evidence of controls
- **Interfaces**: between your SaaS product and your payment processor; between your ML pipeline outputs and your product database; between your CI/CD system and your production environment

That analysis drives the scope. The cloud providers are infrastructure inside the scope, not the scope boundary itself [source: https://www.isms.online/iso-27001/].

## Mapping the control plane to your ISMS boundary

A useful model for multi-cloud scope is the split between control plane and data plane.

The **control plane** is where humans make decisions: IAM policies, network rules, secret management, change management. For most Series B SaaS teams, the control plane includes your cloud provider consoles, your infrastructure-as-code repository, and the identity provider that grants access across all three environments.

The **data plane** is where your application processes customer data at runtime: EC2 instances, Cloud Run jobs, RDS clusters, object storage buckets.

Both belong in scope. The reason to draw the distinction is that control plane controls — IAM policy reviews, privilege escalation paths, config drift detection — require different evidence than data plane controls. Auditors will sample both. If you only collect evidence for one layer, you will surface a gap.

For your scope statement, the practical output is a sentence like: "The ISMS covers the information assets, systems, and processes used to deliver the service to customers, including production infrastructure hosted across cloud providers, the corporate identity and access management environment, source code repositories, and the employee devices that access these systems." [source: https://www.isms.online/iso-27001/]

That sentence is specific enough to defend and general enough to survive minor architecture changes without requiring a scope amendment before every audit.

## Documenting what stays out — and the interfaces

Exclusions are as important as inclusions. ISO 27001 allows you to exclude parts of your organization from scope only if the exclusion does not affect your ability to meet requirements and obligations to customers [source: https://www.iso.org/standard/27001].

Common legitimate exclusions for a Series B SaaS:

- Finance and HR systems, if they do not touch customer data and have a documented access boundary with in-scope systems
- The parent company's IT environment, if your SaaS product runs in separate cloud accounts with no shared credentials
- Sandbox and development environments, if they are isolated from production data by both policy and technical controls

For each exclusion, document three things:

1. What is excluded
2. Why it is excluded — what boundary or control separates it from in-scope assets
3. Who is responsible for maintaining that boundary control

The interface documentation is what auditors look for. A well-documented exclusion is not a weakness. An undocumented exclusion that turns out to share a production credential is a major nonconformity.

One pattern that catches multi-cloud teams: a GCP service account key stored in an AWS Secrets Manager instance that is nominally out of scope. The moment credentials cross the boundary, the boundary is broken. Map your cross-cloud credential flows before your Stage 1, not during it.

## Before your Stage 1 audit: a scope review checklist

Before your certification body reads your scope statement, run through these checks:

- Every cloud account and project that handles customer data appears in your asset register with a named owner
- Your IAM policy review covers all cloud providers in scope, not just the primary one
- The identity provider that grants access across cloud environments is explicitly named in scope
- Employee device management is addressed — either MDM coverage is documented or the scope statement explains the boundary between devices and in-scope systems
- Each exclusion names the control that separates it from in-scope assets and the person accountable for that control

A scope that passes this checklist will hold up at Stage 1. It will not eliminate audit findings — no scope document does — but it will prevent the kind of observation that sends you back to redraw boundaries under a certification deadline.

Audit readiness across a multi-cloud environment is easier when your control coverage is mapped continuously rather than assembled the month before Stage 1. CloudAnzen maps your cloud configurations to ISO 27001 controls and surfaces scope gaps before your auditor does. [Talk to us](/demo).