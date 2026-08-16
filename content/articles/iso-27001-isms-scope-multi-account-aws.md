---
title: "Scoping ISO 27001 ISMS when your AWS footprint spans multiple accounts"
summary: "Multi-account AWS organizations make ISO 27001 scoping harder — here is a practical account-level approach that holds up at audit"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS","AWS","multi-account","scoping"]
sortOrder: 125
publishedAt: "2026-08-16"
author: "sarah-jenkins"
---
Most ISO 27001 guidance assumes one AWS account. Most Series B SaaS companies have five, eight, or twelve. When the auditor asks for the scope statement and your production data lives across an AWS Organization with a dozen child accounts, the standard scoping playbook breaks down. Here is a practical, account-level approach that holds up at audit.

## Why multi-account AWS complicates ISMS scope

ISO 27001:2022 Clause 4.3 requires you to determine the boundaries and applicability of your ISMS, considering interfaces and dependencies between your activities and those of external parties [source: https://www.iso.org/standard/27001]. In a single-account architecture, this is concrete: here is the account, here is what runs in it. In a multi-account organization, the boundary question multiplies.

AWS Organizations structures accounts for isolation, billing separation, and blast radius control. That is the security rationale. It is also what makes the ISO 27001 scope question harder. Each account has its own IAM policy set, its own CloudTrail trail, its own security group configuration. Controls you have verified in your production workload account may not exist — or may exist in a different state — in your shared services account, your audit log archive account, or your staging environment.

Auditors will ask: does the scope statement reflect the actual data flows? If customer personal data passes through a data pipeline that touches an account not listed in scope, your scope statement has a gap. The auditor finds it during fieldwork. You spend the next three weeks writing remediation evidence for controls you assumed were out of scope.

The correct move is to build your scope statement around the account topology from the start, not retrofit it after the Stage 1 audit surfaces surprises.

## Map accounts to data classification before writing scope

Before writing a single word of the scope statement, build an account register. List every account in the AWS organization, who owns it, which workloads run in it, and — most critically — what data classifications it touches.

Customer personal data is the boundary marker. Any account that processes, stores, or transmits customer personal data belongs inside the ISMS scope boundary. Any account that has network connectivity or IAM trust relationships to a data-processing account is also a candidate for inclusion, because the trust relationship creates a potential attack path [source: https://www.isms.online/iso-27001/].

A typical Series B SaaS multi-account map looks like this:

- **Management account** — billing and AWS Organizations administration only. Often defensibly out of scope if no customer data flows through it, but include it if it grants IAM roles used by engineers with production access.
- **Production workload accounts** — always in scope.
- **Shared services account** — centralized logging, DNS resolution, artifact registries, CI/CD runners. In scope if it holds production secrets, routes production traffic, or carries cross-account IAM trust to production workloads.
- **Security and audit account** — holds CloudTrail archive, threat detection findings, centralized alerting. Treat this as in scope: it holds the evidence of your controls, and a compromise here undermines your ability to detect incidents.
- **Sandbox and development accounts** — out of scope only if they provably contain no production data, enforced by a Service Control Policy blocking real data from reaching the environment. Document the control, not just the intent.

## Cross-account IAM trust as a scope-inclusion trigger

The shared-responsibility model places every control above the hypervisor in your hands. In a multi-account architecture, cross-account IAM roles are trust bridges [source: https://www.isms.online/iso-27001/]. If an engineer can assume a role in account B from account A, and account A is in scope, then account B must be in scope — a compromise in account A grants the attacker access to everything account B can reach.

Document every cross-account IAM trust relationship in your account register. For each one, record the principal, the target account, and the permissions the assumed role grants. This is the evidence your auditor needs to verify that Annex A access-control requirements cover the trust bridges in your architecture.

This exercise routinely surfaces trust relationships that were set up during rapid growth and were never formally reviewed. Finding them before the audit is far better than the auditor finding them during fieldwork.

## Handle the shared services account deliberately

Many AWS Organizations have a shared services account that runs internal tooling: artifact registries, secrets managers, build pipelines, monitoring stacks, internal APIs. This account is the most commonly mis-scoped asset in a growing SaaS company.

If the shared services account holds production secrets — database connection strings, API keys for external services the product depends on — it must be in scope. If the CI/CD pipeline that deploys to production runs in this account, it must be in scope. If it runs the monitoring stack that alerts engineers during incidents, it must be in scope, because Annex A requirements on logging, monitoring, and incident detection apply to the systems that provide those functions.

A practical approach: default the shared services account to in-scope and document any specific service within it that you exclude, with written rationale. "The internal developer wiki runs in this account, handles only internal collaboration content, and is network-isolated from all production workloads via a dedicated security group with no ingress from production subnets" is an acceptable exclusion for that specific service within an otherwise in-scope account.

## Write the scope statement at account level, not service level

The scope statement for a multi-account AWS environment must enumerate accounts by name and AWS account ID, not by vague service descriptions. Auditors can verify a specific account ID against your AWS Organizations console. They cannot verify "the cloud infrastructure that handles production data."

A strong scope statement section for a multi-account environment reads: "In-scope infrastructure includes the production workload account, shared services account, and security and audit account. Sandbox and development accounts are excluded; these accounts contain only synthetic test data and are governed by a Service Control Policy blocking real customer-data access."

This level of specificity does several things. It forces you to know your own account inventory before the audit. It gives the auditor a testable, concrete claim. It makes exclusions visible and challengeable by your own team. When you add a new account, the required scope statement update is obvious.

Build account register reviews into your quarterly ISMS management review cycle [source: https://www.iso.org/standard/27001]. Any new account, new cross-account trust relationship, or new data classification should trigger a scope assessment before the account goes live — not during the next annual audit cycle. Scope drift between surveillance audits is one of the most common reasons teams arrive at their next audit unprepared.

Multi-account AWS, properly mapped to your ISMS scope, turns each account boundary into evidence of deliberate blast-radius control — a demonstrable design choice auditors can verify, not an accident they have to interpret.

Keeping the scope statement accurate through sprint cycles and infrastructure changes is the hard part. CloudAnzen automatically discovers your AWS account inventory and maps it to ISO 27001 controls so the scope statement reflects your actual architecture — not a snapshot from last year's audit kick-off. [Talk to us](/demo).