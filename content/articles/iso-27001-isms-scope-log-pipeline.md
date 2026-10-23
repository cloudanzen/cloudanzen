---
title: "ISO 27001 ISMS scope: does your log pipeline belong inside the boundary?"
summary: "How Series B SaaS teams should apply Clause 4.3 to decide whether observability tooling belongs in ISO 27001 ISMS scope"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","observability","Series B","audit readiness"]
sortOrder: 186
publishedAt: "2026-10-23"
author: "sarah-jenkins"
---
When you sit down to document your ISO 27001 ISMS scope, the cloud infrastructure that hosts your product is usually obvious. What trips up Series B teams is everything adjacent: the log aggregator that ingests application errors, the alerting pipeline that pages on-call engineers, the telemetry system that shows customer usage patterns. Are these in scope?

The answer depends on a specific test from Clause 4.3 of ISO 27001 [source: https://www.iso.org/standard/27001], and most teams apply it too loosely in both directions.

## What Clause 4.3 requires you to assess

Clause 4.3 asks you to define the ISMS scope in terms of the issues identified in Clause 4.1 (context of the organisation) and the requirements from Clause 4.2 (needs of interested parties). Critically, it asks you to consider the interfaces and dependencies between your activities and those of other organisations [source: https://www.iso.org/standard/27001].

Your observability stack — whether that is a managed service, a self-hosted cluster, or a mix — is a system that processes information. The question is not whether it is a log aggregator rather than an application server. The question is whether it handles information assets that fall within your ISMS boundary.

For most SaaS products, the answer is yes. Application logs contain request URLs. Request URLs contain user IDs. In a multi-tenant system, they may contain tenant identifiers or other data that reveals customer behaviour. That is personal data or commercially sensitive data, depending on your data classification scheme, and it belongs in the scope of any system that claims to protect it [source: https://www.isms.online/iso-27001/].

## The three scenarios where teams get this wrong

**Scenario 1: Excluding the log pipeline entirely.**
The reasoning usually sounds like: "Logs are just operations data; they don't contain production customer records." This holds for some systems and fails for others. If your logging configuration captures HTTP request parameters, API response codes with customer identifiers embedded, or error messages that include user-supplied input, the log pipeline is processing personal data. Excluding it from scope creates an information asset that your ISMS does not protect, which auditors at Stage 1 will identify when they sample your data flow diagrams [source: https://www.isms.online/iso-27001/].

**Scenario 2: Including every third-party monitoring service reflexively.**
At the other extreme, some teams pull every SaaS tool they use — uptime monitors, cost dashboards, on-call scheduling platforms — into scope as a response to auditor pressure. The standard does not require this. It requires that scope covers information assets that need protecting, not every tool that touches infrastructure. A cost management dashboard that shows aggregated spend does not process personal data. If it does not sit on a data flow path that carries personal or sensitive information, it does not belong in scope; including it adds compliance burden without adding security value [source: https://www.iso.org/standard/27001].

**Scenario 3: Treating scope as static after Stage 1.**
The log pipeline you deployed at seed stage is not the same as the one running now. You have added new services. You have changed retention policies. Your vendor may have added a feature that ships logs to a data warehouse. Every addition to the log pipeline is a potential expansion of the information assets you are handling. If your internal audit process does not include a scope review trigger for infrastructure changes, you are likely to discover scope drift when your surveillance auditor does.

## How to run the data flow test for your stack

The practical way to apply Clause 4.3 to your observability tooling is to run a short data flow analysis:

1. **Start at your application services.** Map what your application logs at INFO, WARN, and ERROR levels. Most teams have not done this comprehensively; it is worth half a day.
2. **Follow the data out.** Where do those logs go? A log forwarder? A managed SIEM? A third-party vendor? Each destination is a potential scope extension.
3. **Apply the data classification test.** Does each destination handle data your classification scheme marks as personal, sensitive, or confidential? If yes, it is in scope. If no, document why it is excluded.
4. **Check the access controls.** Who can query logs in each system? If an engineer with no other access to your production database can reconstruct customer records from logs, the log system is processing personal data, regardless of how you classified the data at ingestion.
5. **Document each decision.** One or two sentences per system, stating the data it processes and whether it is in scope, is sufficient for Stage 1 [source: https://www.isms.online/iso-27001/].

## What the scope document should say

Clause 4.3 requires the scope to be available as documented information. For your observability stack, the documented scope should answer:

- Which logging and monitoring systems are in scope, named explicitly.
- What categories of data each system processes that justify inclusion.
- Which systems are excluded and why, with a specific rationale referencing data classification or access isolation.
- What changes to the logging configuration would trigger a scope review.

Auditors check scope documents carefully at Stage 1 because weak scope documentation usually signals weak evidence preparation downstream. A scope document that addresses your logging infrastructure explicitly, even briefly, demonstrates that the scope decision was deliberate rather than overlooked [source: https://www.iso.org/standard/27001].

The standard does not prescribe a format. Some teams include a one-page system inventory table with scope status and rationale for each row. Others use a narrative document that walks through the data flow. Either works as long as it is version-controlled and tied to your last internal scope review [source: https://www.isms.online/iso-27001/].

## Scope maintenance as your stack evolves

At Series B, infrastructure changes quickly. A new microservice ships every few weeks. A team adopts a new observability vendor. Retention policies change to accommodate a compliance requirement in a new market. Each of these can shift which systems process personal data and therefore which systems belong in your ISMS scope.

The standard does not prescribe how often you review scope. It does require that scope remain accurate. Most teams handle this with a quarterly scope review trigger in their internal audit schedule, plus an ad hoc trigger for any infrastructure change that adds a new data flow or a new third-party processor [source: https://www.isms.online/iso-27001/].

The goal is not a perfect scope that anticipates every future change. It is a defensible scope: one where the decisions are recorded, the rationale is sound, and the process for updating it exists. For a log pipeline specifically, the risk of under-scoping is higher than over-scoping. Logs that contain personal data and sit outside your ISMS boundary are a gap that surveillance auditors and external penetration testers will find.

Keeping your ISMS scope current as your observability stack grows is the kind of operational detail that falls off the backlog under product delivery pressure. CloudAnzen maps your information assets and flags changes that may shift your scope boundary, so scope drift surfaces before your next audit rather than during it. [Talk to us](/demo).