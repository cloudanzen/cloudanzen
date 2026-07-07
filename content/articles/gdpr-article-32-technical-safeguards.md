---
title: "GDPR Article 32 technical safeguards: what SaaS operators must implement"
summary: "A practical breakdown of the four Article 32 technical safeguards GDPR requires SaaS teams to implement, document, and test continuously"
type: "blog"
collection: "gdpr"
category: "GDPR"
readTime: "6 min read"
tags: ["GDPR","Article 32","data protection","encryption","SaaS compliance"]
sortOrder: 77
publishedAt: "2026-06-20"
author: "sarah-jenkins"
---
An auditor lands in your Zoom. Slide three is always the same question: walk me through your technical and organisational measures under Article 32. Most SaaS teams have encryption checked somewhere in their security docs and something labelled access controls. What they often lack is a coherent, documented control set that maps to Article 32's four requirements and holds up under scrutiny.

## What Article 32 actually requires

Article 32 of the GDPR requires controllers and processors to implement "appropriate technical and organisational measures" proportionate to the risk of their processing activities [source: https://gdpr-info.eu/art-32-gdpr/]. The regulation names four specific areas:

- Pseudonymisation and encryption of personal data
- Ongoing confidentiality, integrity, availability and resilience of processing systems
- Ability to restore personal data availability in a timely manner after an incident
- Regular testing, assessing and evaluating the effectiveness of those measures [source: https://gdpr-info.eu/art-32-gdpr/]

The proportionality principle matters. Appropriate for a newsletter platform managing subscriber emails is different from appropriate for a healthtech SaaS storing diagnostic records. Your control set should reflect the nature, scope, context and purpose of your processing — not just a generic security baseline.

What regulators consistently flag is the gap between designed controls and operating controls. You can have encryption configured on day one and lose it silently when an engineer spins up a new service without the standard deployment template. Article 32 compliance is a continuous state, not a one-time configuration.

## Encryption as a baseline safeguard

Encryption is the first technical measure Article 32 names, and it is the most auditable. DPA guidance across the EU treats encryption as a near-mandatory control for any processing of personal data [source: https://www.imperva.com/learn/data-security/gdpr-article-32/].

For SaaS operators, that translates to:

**Data in transit**: TLS 1.2 minimum, TLS 1.3 preferred for all external connections. No production services serving plaintext. Certificate lifecycle tracked in your asset inventory.

**Data at rest**: AES-256 for databases and object storage. If your cloud provider handles this through managed encryption, document the key management chain — who controls the keys and under what conditions they rotate.

**Backup encryption**: Backups are data too. An unencrypted backup of an encrypted database is an unencrypted copy of personal data. Most cloud-native backup services offer encryption by default; confirm it is active and document it [source: https://www.complyance.com/resources/gdpr-article-32-guide].

Pseudonymisation is often misread as full anonymisation. It means separating identifying fields from processing data so that re-identification requires an additional step. Tokenisation at the application layer — replacing a customer email with a UUID in your analytics pipeline while keeping the real value behind an API gate — satisfies the spirit of Article 32's pseudonymisation requirement [source: https://www.imperva.com/learn/data-security/gdpr-article-32/].

The operational question to answer before a DPA inquiry: how do you detect a misconfigured service that is processing personal data without encryption? The answer requires either automated scanning in your deployment pipeline or continuous infrastructure monitoring that alerts on unencrypted storage resources.

## Access control and logging as Article 32 evidence

Confidentiality and integrity under Article 32 translate directly to who can access personal data and whether you have a durable record of when they did [source: https://www.orbiqhq.com/eu-regulations/gdpr-article-28-32-33-34].

**IAM hygiene**
- Role-based access control with documented data classification per role
- Privileged access reviewed on a fixed cadence — quarterly is the common defensible interval
- Just-in-time access for direct database reads, logged to a tamper-evident audit trail
- Offboarding that revokes access within hours, not days

**Audit logging**
- Log every read, write and delete event on personal data, not just authentication events
- Retain logs for a period that covers your breach notification window — twelve months is a common floor for teams processing personal data at scale
- Store logs separately from the systems they monitor so a compromise of the production environment does not also wipe the audit trail

A common gap: support team database access. Customer success and engineering staff often hold read access to production tables justified as troubleshooting access. That access requires the same IAM classification, just-in-time treatment and logging as privileged engineering access. Support team exemptions are a frequent finding in DPA audits [source: https://www.orbiqhq.com/eu-regulations/gdpr-article-28-32-33-34].

Integrity and availability are not the same obligation. Availability means your processing systems stay up. Integrity means the data inside them has not been altered without authorisation. Both requirements appear in Article 32 and require distinct controls — uptime SLAs address the first, write-once audit logs and checksum verification address the second.

## Resilience and backup restoration

Article 32 requires you to restore availability of personal data "in a timely manner" following a physical or technical incident [source: https://gdpr-info.eu/art-32-gdpr/]. This is a restoration obligation, not just a backup policy.

What that looks like operationally:

- Defined recovery time objective and recovery point objective mapped to data classification — personal data may warrant more aggressive targets than internal logs
- Restore tests on a documented schedule. A backup you have never successfully restored is not a functioning control; it is a documented assumption
- Cross-region or cross-zone replication for services processing significant volumes of personal data
- Incident playbooks that specify when the restoration obligation triggers your breach notification clock

If a ransomware event encrypts your primary database and you cannot restore from backup within a defensible window, you are likely past your breach notification deadline and face a resilience finding alongside the breach report [source: https://www.complyance.com/resources/gdpr-article-32-guide]. Most organisations that fail here do not lack backups — they lack tested, documented restoration processes.

## Testing, evaluation and the evidence map

The fourth Article 32 requirement — regularly testing and evaluating your controls — is where most SaaS teams have the largest gap. A single annual penetration test does not satisfy it [source: https://gdpr-info.eu/art-32-gdpr/].

A defensible testing cadence:

- Penetration testing: annual minimum for services processing personal data, with more frequent cycles for payment or health data flows
- Vulnerability scanning: continuous for internet-facing services
- Privileged access review: quarterly
- Backup restore tests: quarterly at minimum, with results documented and signed off by an accountable owner

Beyond testing, Article 32 requires evaluating and improving. That means documenting what you tested, what you found, and what you remediated. A penetration test report sitting in a shared drive with no remediation tracking satisfies the testing requirement but fails the evaluation requirement.

Most SaaS teams already have many Article 32 controls in place. The problem is scattered evidence — encryption documented in infrastructure notes, access reviews tracked in a spreadsheet, restoration tests recorded in a Slack thread. Map each control to Article 32's four requirements, assign an owner, and define an evidence cadence. That map is what an auditor or DPA will ask to see first.

If you operate as a controller using sub-processors, Article 28 requires you to verify that those sub-processors maintain equivalent Article 32 measures [source: https://www.orbiqhq.com/eu-regulations/gdpr-article-28-32-33-34]. Your processor agreements need to specify those obligations, and your supplier review process needs to confirm they are operating, not just contractually required.

Gathering Article 32 evidence from scattered systems takes weeks every time a customer security review or DPA inquiry lands. CloudAnzen continuously maps your controls to GDPR requirements so the evidence is ready before the question arrives. [Talk to us](/demo).