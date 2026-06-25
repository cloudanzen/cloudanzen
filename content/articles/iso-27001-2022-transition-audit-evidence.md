---
title: "ISO 27001 2022 transition: evidence documentation auditors now expect"
summary: "The 2022 revision restructured Annex A and added 11 new controls — here is what your auditor will actually ask for at the transition audit."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","audit evidence","ISMS","Annex A","transition"]
sortOrder: 4
publishedAt: "2026-06-14"
author: "sarah-jenkins"
---
The transition deadline passed. Your scope statement still says "ISO/IEC 27001:2013." If your certification body hasn't flagged it yet, they will.

The 2022 revision isn't cosmetic. Ninety-three controls replaced 114 [source: https://www.konfirmity.com/blog/iso-27001-what-changed-in-2026]. Eleven are entirely new. Four themes replaced the original fourteen clause groups in Annex A. Teams running a 2013-era ISMS are walking into surveillance audits with the wrong stack of documents.

## What the restructure actually changed

The most visible change is the collapse and reordering of controls. The 2022 Annex A groups security activities by theme: Organizational (5.x), People (6.x), Physical (7.x), and Technological (8.x).

The restructure is mostly cosmetic at the control level. If you had evidence for A.12.1.2 (Change Management) under 2013, that maps cleanly to 8.32 (Change management) under 2022. The mapping isn't always one-to-one, but a documented crosswalk satisfies auditors who want to see continuity of coverage.

What matters more is the eleven new controls. Your old ISMS almost certainly has no evidence for them, because they didn't exist until 2022.

## The eleven new controls and what they require

**5.7 Threat intelligence.** You need documented input from at least one threat intelligence source, evidence it was reviewed on a defined cadence, and records showing how findings influenced your controls. A shared channel with threat links doesn't satisfy this. A monthly threat intel review logged in your risk register, with a clear decision trail, does.

**5.23 Information security for use of cloud services.** Your cloud security policy must address shared responsibility. You need documented supplier assessments for each IaaS, PaaS, and SaaS provider that processes in-scope data. Supplier questionnaires sent annually and filed away count — but only if the responses are reviewed and the review is logged.

**5.30 ICT readiness for business continuity.** This is separate from your BCP. You need evidence your IT infrastructure has been tested for recovery, with RTO and RPO targets tied to actual test results, not aspirations.

**7.4 Physical security monitoring.** CCTV, access logs, environmental sensors. Auditors want evidence the monitoring is continuous and regularly reviewed. Retention logs are common evidence.

**8.9 Configuration management.** Baseline configurations for production systems and evidence of deviation detection — ideally automated. This trips teams that manage infrastructure by convention rather than code.

**8.10 Information deletion.** Documented procedures covering secure erasure at end-of-life and on data subject request, plus logs showing deletion was performed for in-scope data categories.

**8.11 Data masking.** If developers use production-like data in test environments, this control applies. Evidence that masking or pseudonymization is applied before data leaves production.

**8.12 Data leakage prevention.** DLP tooling with documented scope and an exceptions log. Auditors will ask to see alert records and how DLP events are triaged.

**8.16 Monitoring activities.** Broader than 8.12 — covers logging strategy, anomaly detection, and alert response. Evidence includes SIEM configuration documentation and incident response records tied to monitoring alerts.

**8.23 Web filtering.** Documented policy for blocked web access categories, with evidence the controls are applied consistently, plus an exceptions process and approval log.

**8.28 Secure coding.** Evidence your development team follows documented secure coding standards. Code review checklists, SAST/DAST output, or training records all count, depending on scope.

## Documentation your auditor will request on day one

Auditors doing a 2022 transition audit typically open with four documents.

**Statement of Applicability (SoA).** Updated to reference 93 controls, not 114. Each control must be justified as applicable or excluded. The justification for exclusions is what gets scrutinized — "not relevant" without reasoning is a nonconformity.

**Risk treatment plan cross-referenced to the 2022 Annex A.** If your risk register still maps to 2013 controls, update it before the audit date. The crosswalk from 2013 to 2022 is one of the first documents checked [source: https://www.konfirmity.com/blog/iso-27001-what-changed-in-2026].

**ISMS scope statement.** The 2022 revision made Clause 4.1 (internal and external issues) and Clause 4.2 (interested parties) explicitly tied to scope. Scope statements that describe only systems and locations without addressing context miss this.

**Supplier security management records (5.19 through 5.23).** Five consecutive controls govern supplier relationships. Auditors will pull your supplier list, select a sample, and trace the evidence from initial assessment through ongoing monitoring.

## Common gaps teams miss on their first transition audit

**The SoA still says 2013.** It sounds obvious. It happens constantly. If you use a GRC tool, verify whether it auto-updated the SoA template or left you with the old control set.

**New controls marked "applicable: no" with no justification.** Threat intelligence (5.7) and data masking (8.11) frequently appear as excluded without supporting rationale. "We don't need this" isn't an acceptable justification — you need a documented risk decision showing why the control isn't applicable to your context.

**Supplier assessments exist but reviews don't.** Sending a questionnaire is step one. Review, risk-rating, and corrective-action tracking complete the evidence chain for 5.19. Programs that stop at the questionnaire stage are missing the ongoing part of the control [source: https://elevateconsult.com/insights/iso-27001-audit-blueprint-costs-timelines-2026/].

**Threat intelligence isn't reviewed on a schedule.** Control 5.7 requires that intelligence is collected, analyzed, and acted on. Subscribing to a threat feed without documenting review cadence leaves you with a control that's technically in place but evidentially empty.

**Configuration baselines don't exist.** Control 8.9 requires documented baseline configurations. Teams using cloud-managed services often assume vendor defaults are sufficient. They aren't — you need to document your configuration decisions and show evidence those decisions are enforced.

## Getting to closed findings faster

The common thread across transition audit failures is evidence maturity, not technical capability. Most ISMS programs already run the activities the new controls require. The gap is documentation: structured review records, approval trails, and explicit linkage between control activity and the 2022 Annex A reference.

Before your next audit, work through the eleven new controls and produce one piece of evidence per control that directly maps to the 2022 reference. That gives you a defensible baseline even if your program is still maturing. The evidence doesn't need to be perfect — it needs to exist and demonstrate intentional control activity.

The three finding categories that consistently appear across transition audits: an outdated SoA, missing new-control evidence, and supplier assessment gaps that stop at the questionnaire stage. Closing those three before the auditor walks in eliminates the majority of corrective-action backlog.

ISO 27001:2022 transition audits are surfacing the same evidence gaps across certification bodies. CloudAnzen continuously maps your control activities to the 2022 Annex A, flags missing evidence before your surveillance audit, and keeps your SoA in sync with your actual risk treatment decisions. [Talk to us](/demo).