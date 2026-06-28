---
title: "Mapping GDPR Article 32 to engineering controls"
summary: "Article 32 demands 'appropriate technical measures' — here is how to translate the four named security properties into backlog tickets and audit evidence."
type: "blog"
collection: null
category: "GDPR"
readTime: "5 min read"
tags: ["GDPR","Article 32","data protection","encryption","engineering compliance"]
sortOrder: 4
publishedAt: "2026-06-16"
author: "sarah-jenkins"
---
Every GDPR readiness checklist eventually points to Article 32: implement "appropriate technical and organisational measures" to secure personal data. When the DPO hands that phrase to engineering, the team needs something more actionable than legal language. This guide maps each of the four security properties Article 32 names to concrete controls you can put in your backlog — and the evidence you will need when an auditor or enterprise procurement team asks.

## What Article 32 actually requires

The regulation text is deliberately risk-proportionate. Controllers must account for the state of the art, implementation costs, the nature and scope of processing, and the likelihood and severity of risk to data subjects when deciding what counts as "appropriate" [source: https://gdpr-info.eu/art-32-gdpr/]. That is not a shopping list. It is a framework for documented risk reasoning applied to four explicit security properties.

Article 32(1) names those four properties [source: https://gdpr-info.eu/art-32-gdpr/]:

- Pseudonymisation and encryption of personal data
- Ongoing confidentiality, integrity, availability, and resilience of processing systems
- Ability to restore personal data access in a timely manner after a physical or technical incident
- A process for regularly testing, assessing, and evaluating the effectiveness of measures

Each property translates to a category of engineering controls. The risk reasoning — why this control is appropriate for your data types, processing volumes, and threat model — belongs alongside the control in your documentation, not locked inside a legal review the engineering team never sees.

## Pseudonymisation and encryption

Pseudonymisation replaces direct identifiers — name, email address, national ID — with a non-identifying surrogate value, preserving analytical utility without exposing raw personal data in application logic or logs. The typical implementation is tokenisation at the data layer: a lookup table with access scoped to the services that have a legitimate need for the link.

Encryption at rest covers database volumes, backup snapshots, and object storage. Managed key services with documented rotation schedules satisfy the technical bar for most risk profiles. The area teams most commonly miss is internal service traffic. TLS terminating at the load balancer while unencrypted traffic flows between internal services is a gap that surfaces in pen test reports and should appear in your Article 32 risk assessment before that.

Encryption of backups warrants its own verification step. An encrypted database with unencrypted backup exports stored in a separate bucket is a meaningful exposure that an auditor will flag.

Audit evidence: a data map annotating which fields are pseudonymised and which services hold the lookup link; a key management policy with rotation logs; and a TLS scan covering both external endpoints and internal service paths.

## Confidentiality, integrity, availability, and resilience

**Confidentiality** maps to access control. Role-based permissions, least-privilege service accounts, and a secrets management solution that keeps credentials out of environment variables accessible to every service are the baseline controls. The audit failure mode is a shared database credential that was set up during an early sprint and never rotated.

**Integrity** maps to audit logging. Every write to personal data should emit an immutable event: which service, which identity, what changed, when. Append-only log stores with write-protected sinks make tampering harder and give you the forensic visibility you need when an incident response requires reconstructing what happened to a data subject's record.

**Availability** maps to redundancy and graceful degradation. Multi-availability-zone deployment handles the infrastructure layer. For the application layer, health checks that reflect actual application state — not just that a process is running — and circuit breakers that fail closed rather than bypass authorisation checks cover the most common availability-related data risks.

**Resilience** is the property most teams underscope. A resilient system survives partial failures without leaking personal data in error responses. Structured error handling that strips PII from stack traces before they reach external monitoring is a one-sprint change that materially improves your Article 32 posture.

Audit evidence: RBAC policy documentation; secrets rotation logs; immutable audit trail samples with schema documentation; and architecture diagrams annotated with redundancy and graceful degradation paths.

## Backup, restore, and incident recovery

Article 32(1)(c) requires the ability to restore personal data availability in a timely manner following a physical or technical incident [source: https://gdpr-info.eu/art-32-gdpr/]. "Timely" is risk-relative; your DPIA or risk register should set explicit RTO and RPO targets for each processing activity.

The control most teams skip is restore testing. Automated backup jobs that have never been verified against a successful restore are evidence of intent rather than evidence of capability. Schedule a quarterly restore drill into a non-production environment, verify that personal data is intact and accessible, and log the outcome with a date stamp. That log is what an auditor or supervisory authority will ask for.

Map your data processor chain for backup dependencies. If a sub-processor manages your backup infrastructure, their own recovery capability feeds into your RTO exposure. Confirm their commitments contractually and document which processors are in scope.

Audit evidence: backup policy with stated RPO and RTO targets; quarterly restore test logs with pass or fail outcomes and dates; and a sub-processor list noting backup-relevant vendors and their contractual recovery commitments.

## Regular testing as a standing process

Article 32(1)(d) requires a process for regularly testing and evaluating the effectiveness of technical and organisational measures [source: https://gdpr-info.eu/art-32-gdpr/]. The word "process" is doing work here. This is an operational cadence, not a one-time exercise.

The minimum viable programme has three elements. First, automated scanning in CI/CD: static analysis and dependency vulnerability scanning integrated into your merge pipeline, with failures configured as blockers rather than advisory warnings. Advisory warnings that surface in a dashboard nobody reads do not constitute a testing process.

Second, penetration testing at meaningful intervals — annual cadence is standard, with additional engagements before major releases or significant architecture changes. Retain the engagement report and remediation evidence for each finding.

Third, access reviews. Quarterly review of who holds access to personal data systems, with a documented approval for each grant that survives the review. Access that cannot be tied to a current business justification gets revoked. This is the control that catches privilege creep that no automated scanner will surface.

Audit evidence: CI/CD pipeline configuration showing mandatory scan steps; penetration test reports with finding closure records; and access review sign-off records from data owners.

Article 32 compliance audit prep burns engineering weeks when controls documentation lives in a tool the team never opens. CloudAnzen maps your technical stack against Article 32 requirements continuously, surfaces gaps as your architecture changes, and keeps evidence collections current so you are not assembling screenshots the night before a customer security review. [Talk to us](/demo).