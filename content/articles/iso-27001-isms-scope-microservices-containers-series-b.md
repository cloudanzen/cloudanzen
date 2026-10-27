---
title: "ISO 27001 ISMS scope when your stack is microservices and containers"
summary: "How Series B SaaS teams running microservices on Kubernetes draw ISMS boundaries without over-scoping or creating audit gaps"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","microservices","containers","Series B"]
sortOrder: 190
publishedAt: "2026-10-27"
author: "sarah-jenkins"
---
The auditor will ask one question you may not have a ready answer for: what is in scope? Most Series B SaaS teams running microservices on Kubernetes have never written a formal scope statement. They have a rough mental model of their production clusters. That mental model will not satisfy Clause 4.3. Here is how to draw the boundary correctly when your architecture is distributed, containerised, and constantly changing.

## What Clause 4.3 actually asks for

ISO 27001:2022 Clause 4.3 requires you to "determine the boundaries and applicability of the information security management system to establish its scope" [source: https://www.iso.org/standard/27001]. It lists four inputs: external and internal context from Clause 4.1, interested parties from Clause 4.2, interfaces and dependencies between activities performed by your organisation, and activities performed by other organisations.

That last item is the trap for microservices shops. You are not running one monolith. You have dozens of services, some owned by your team, some owned by third-party vendors, some running as managed services from your cloud provider. Every interface between them is a potential scope boundary question.

The standard does not tell you how big or small to make your scope. It tells you to document your reasoning. Auditors will probe that reasoning at Stage 1. If you cannot explain why your internal admin tool is out of scope while your billing service is in scope, expect a non-conformity.

## What to include and what to exclude

For a Series B SaaS with a microservices architecture, the right mental model is data flow, not service count. Follow the customer data. If a service receives, processes, stores, or transmits information that affects your confidentiality, integrity, or availability commitments, it belongs in scope [source: https://www.isms.online/iso-27001/].

### Production workloads

Every service that touches production customer data is in scope. That includes your API gateway, authentication service, data processing pipelines, and storage layers. For container workloads this means the orchestration platform itself — Kubernetes control plane configuration, node security settings, network policies — is also in scope.

### Internal tooling

This is where teams over-scope. An internal analytics dashboard that aggregates anonymised product metrics is a different risk profile from a service that processes personally identifiable information. You can exclude it from scope if you document the boundary and the rationale. What you cannot do is exclude it and then let it share a network segment with in-scope services without compensating controls.

### Managed services

Your cloud provider's managed Kubernetes service, managed database, and object storage are dependencies, not systems you operate. The shared responsibility model means you own the configuration; the provider owns the underlying infrastructure. Document this split. Auditors know it exists. What they want to see is that you have reviewed the provider's certifications and know which controls you own [source: https://www.isms.online/iso-27001/].

## Writing the scope statement

Your scope statement needs to be a document, not a Confluence page nobody updates. It must answer: what information assets does the ISMS protect, where are they, who handles them, and what are the boundaries?

For a containerised stack, a practical structure covers four points. First, what is in scope: production environment, staging if it processes real data, CI/CD pipelines that have write access to production, and the identity systems that grant access to all of the above. Second, what is out of scope: developer laptops covered separately under endpoint policy, internal non-production tooling with no path to customer data, archived backups in cold storage with no operational interface. Third, interfaces with out-of-scope systems: the boundary between your in-scope CI/CD pipeline and developer workstations, and how code leaves the developer environment and enters the build system. Fourth, the rationale for each exclusion — one sentence per item is enough.

Document this once. Then put a review trigger on it: any architecture change that creates a new interface between in-scope and out-of-scope systems requires a scope review [source: https://www.isms.online/iso-27001/].

## The CI/CD pipeline question

CI/CD is the scope decision that catches Series B teams off guard most often. Your production environment is clearly in scope. Your developers' laptops are typically out of scope. But the pipeline that runs between them has access to both production secrets and developer-controlled code. If that pipeline is compromised, an attacker can push to production.

The answer is to scope the CI/CD system in. Not the developer laptops, but the pipeline infrastructure: build runners, the secrets manager that holds deployment credentials, repository access controls, and deployment automation. That is the interface Clause 4.3 is asking you to define.

Some teams argue the pipeline is low risk because it runs in a managed service. That argument does not hold up at audit. A managed service reduces your operational burden; it does not remove the control requirements. You still own the configuration of that service, the credentials it holds, and the access controls on who can modify it [source: https://www.iso.org/standard/27001].

## Keeping scope current as you scale

At Series B, your architecture changes fast. New microservices appear in sprint reviews. New cloud regions are added for latency or data residency requirements. A scope statement written at certification becomes stale within months if you have no process to maintain it.

The practical fix is to tie scope review to your change management process. Any significant architectural change — adding a new service, migrating to a new cloud region, onboarding a new critical vendor — triggers a scope assessment. It does not need to be a full audit. It needs to be a documented check: does this change create a new interface? Does it bring something new into the information flow that touches in-scope assets?

Link this to your Statement of Applicability as well. Scope changes often mean new controls need to be applied or exclusions need justification updates [source: https://www.isms.online/iso-27001/].

Scoping a containerised, microservices stack takes a clear process and someone who owns the documentation. CloudAnzen maps your architecture to ISO 27001 Clause 4.3 requirements and keeps the scope statement current as your stack evolves. [Talk to us](/demo).