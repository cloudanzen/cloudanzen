---
title: "ISO 27001 ISMS scope decisions for multi-tenant SaaS"
summary: "How shared compute, databases, and pipelines change the boundary decisions you must make when scoping your ISMS for ISO 27001 certification"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001 scope","multi-tenant SaaS","ISMS boundaries","tenant isolation","SaaS compliance"]
sortOrder: 177
publishedAt: "2026-10-13"
author: "sarah-jenkins"
---
Multi-tenant SaaS complicates ISMS scoping in ways single-tenant deployments simply do not. Your infrastructure serves dozens or hundreds of customers at the same time. A scope boundary that looks clean on a diagram becomes contested the moment an auditor asks: 'Does your control environment cover Customer A's data the same way it covers Customer B's?' This article maps the scoping decisions that actually matter when you share compute, storage, and deployment pipelines across tenants.

## Why tenant architecture is a scoping decision, not an architecture decision

ISO 27001 Clause 4.3 requires you to define the boundaries and applicability of the ISMS — but the standard does not prescribe how to handle shared infrastructure [source: https://www.iso.org/standard/27001]. The boundary you draw must reflect how information assets are actually controlled, not how you wish they were.

In a multi-tenant SaaS, you typically share:

- Compute and orchestration (Kubernetes clusters, Lambda execution environments)
- Database infrastructure with row-level or schema-level tenant separation
- Logging and observability pipelines that aggregate events across all tenants
- CI/CD tooling and deployment systems with production access
- Identity and access management layers used by your own engineering team

Each of these shared components must sit inside the ISMS scope boundary. If a security incident could affect any tenant's data through one of these systems, that system is in scope — full stop.

Where teams go wrong: they scope only the production application tier and exclude the shared CI/CD pipeline. Then the Stage 1 audit surfaces pipeline access controls as an obvious gap, because the pipeline holds keys that deploy directly to production and any weakness there is a weakness in the production environment.

The auditor's test is simple: can a compromise of this system affect customer data? If yes, it belongs inside the boundary.

## How to draw the boundary around shared infrastructure

The practical approach is to treat all infrastructure that processes, transmits, or stores any tenant's data as in scope. This applies regardless of whether the data is in transit, at rest, or being processed in memory.

**Compute boundaries**: If your Kubernetes cluster runs workloads for multiple tenants with namespace-level isolation, the cluster itself is in scope. The scope statement should reference the cluster as the controlled unit, not individual tenant namespaces. Namespace boundaries are a control, not a scope boundary.

**Database boundaries**: Whether you use schema-per-tenant or row-level security, the database server and its backup infrastructure are in scope. Tenant isolation controls — row-level security policies, schema permissions — become documented controls operating inside the ISMS boundary, not arguments for keeping the database outside it.

**Observability pipelines**: Log aggregation that ingests events from multiple tenants must be in scope. Pay attention to your logging vendor: if you ship logs to a third-party SaaS, that vendor relationship belongs in your supplier assessment register [source: https://www.isms.online/iso-27001/]. A logging vendor with access to production events is a supplier with access to customer data.

**CI/CD pipelines**: Anything holding deployment credentials for production is in scope. Auditors will look at who can trigger deployments, how secrets are managed in the pipeline, and whether privileged access is reviewed at a regular cadence.

Your scope statement should describe the boundary in one or two clear paragraphs. Something like: 'The ISMS covers all infrastructure, tooling, and processes used to develop, operate, and maintain the [product name] multi-tenant platform, including production environments, shared observability systems, CI/CD pipelines, and the development toolchain with production access.'

If your scope statement still uses vague phrases like 'the cloud environment' or 'the production system,' rewrite it before your Stage 1 audit. Vague scope statements create ambiguity that auditors interpret against you, because they cannot confirm controls are in place for something they cannot clearly locate.

## The tenant isolation controls that satisfy auditors

Once you have drawn the boundary, you need to demonstrate that tenant isolation controls are operating effectively. For multi-tenant SaaS, the key controls cluster around two themes: logical separation and access segregation.

**Logical separation** means tenants cannot access each other's data through normal application paths. Your controls documentation should describe the isolation mechanism — schema separation, row-level security policies, application-layer tenant ID enforcement — and how it is tested. Penetration test results that explicitly include tenant isolation testing and quarterly access review procedures are the evidence auditors most commonly ask for.

**Access segregation** means your own team cannot accidentally access one customer's data while investigating an issue for another. This is harder than it sounds in a shared operations environment. The controls that support it include:

- Role-based access controls that enforce tenant context on internal support and operations tooling
- Audit logs showing which engineer accessed which tenant's data and when, stored in a tamper-evident system
- Break-glass procedures for emergency access with documented post-access review and approval records

If your support tooling allows engineers to query any tenant's data without a context switch or an approval step, you have a gap. Document it as a known gap with a remediation timeline, rather than hoping the auditor does not notice.

The evidence package for these controls does not need to be elaborate. A documented access control policy, a quarterly access review record, and a change log for break-glass events will carry most of what a Stage 2 auditor needs to close this area.

## What the Statement of Applicability looks like for multi-tenant SaaS

The Statement of Applicability is where scope decisions become concrete. For multi-tenant SaaS, the controls most likely to require specific tailoring are in the access control, cryptography, and supplier relationships sections of Annex A.

A few areas where teams regularly under-scope the SoA:

**Cryptography**: If different tenants have different encryption requirements — some requiring customer-managed keys, others relying on platform-managed encryption — your cryptography policy needs to address both cases explicitly. The SoA should call this out rather than assuming a single encryption standard covers all deployment configurations.

**Access to information systems**: For multi-tenant systems, this control extends to how tenant context is enforced at the application layer. Document the mechanism, not just the policy. 'Tenant context is enforced by the application at the data access layer using a row-level security filter parameterised on the tenant identifier' is a more defensible control statement than 'access is restricted to authorized users.'

**Supplier relationships**: Every infrastructure vendor that touches shared tenant data is a supplier in scope of your Annex A 5.19 through 5.22 controls. Cloud provider, logging vendor, observability platform — all need to appear in your supplier assessment process with a documented review cadence. If your log aggregation vendor can read your production event stream, they are a supplier with access to customer data, and your ISMS needs to reflect that relationship explicitly.

## Updating scope as you add tenants and products

Series B SaaS companies consistently underestimate how quickly scope becomes stale. You will add new products, new infrastructure tiers, and potentially new geographies as you scale. The ISMS scope document needs a review cadence tied to product and infrastructure changes, not just to the annual surveillance audit calendar.

Define trigger-based reviews and document the triggers in your ISMS operating procedure. Any material change to shared infrastructure, any new product that processes customer data, any significant change to your cloud architecture or deployment model should trigger a documented scope assessment. This does not mean a full recertification — it means a written assessment of whether the existing scope statement still accurately describes the boundary and the controls that operate within it.

Your Stage 2 auditor will ask how scope has been actively maintained since initial certification. 'We review it annually' is a weak answer that suggests scope is treated as a checkbox rather than a live document. 'We review it at defined architectural change milestones and maintain a change log with each assessment outcome' is a strong answer that demonstrates active management.

Keep the change log brief — a date, a description of what changed in the infrastructure or product, and one sentence on whether it affected the scope boundary. That is enough to demonstrate that scope is managed rather than frozen at the point of certification.

Multi-tenant ISMS scoping is one of the places where vague decisions early on become expensive audit findings later. CloudAnzen maps your infrastructure to ISO 27001 controls continuously, so when an auditor asks about tenant isolation evidence, it is already documented and ready. [Talk to us](/demo).