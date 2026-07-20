---
title: "ISO 27001:2022 gap closure: implementing the 11 new controls before your surveillance audit"
summary: "The 11 new Annex A controls in ISO 27001:2022 catch many certified organisations off-guard at surveillance — here is how to close the gap before your auditor arrives"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","Annex A","gap closure","surveillance audit"]
sortOrder: 100
publishedAt: "2026-07-20"
author: "sarah-jenkins"
---
The surveillance audit is where implementations that slid by during initial certification get real scrutiny. If you certified against ISO 27001:2013 or transitioned to ISO 27001:2022 in the early window, chances are some of the 11 new Annex A controls are still on a backlog. That backlog is now an audit risk.

Here is how to close the gap methodically.

## Why the 11 new controls catch teams off-guard

ISO 27001:2022 restructured Annex A from 114 controls across 14 domains to 93 controls in 4 themes [source: https://www.strongdm.com/blog/iso-27001-requirements]. The headline number looks smaller, which is misleading. Eleven controls are entirely new — meaning no legacy implementation to carry forward, no evidence archive to dust off.

The new controls cluster around four operational realities the 2013 standard did not adequately address: cloud dependencies, threat intelligence, configuration drift, and data handling at rest. Most teams certified against 2013 had partial processes for these, but lacked the explicit Annex A ownership and documented evidence that surveillance requires.

## The 11 controls and where implementations typically stall

### Threat intelligence (A.5.7)

You need a process to collect, analyse, and act on threat intelligence relevant to your risk landscape. Generic news subscriptions do not satisfy this. The auditor will ask how intelligence informs your controls. Build a simple workflow: source → triage → control-update decision → documented rationale.

### Cloud service security (A.5.23)

If you consume IaaS, PaaS, or SaaS — and nearly every Series A–C company does — you need documented rules for procurement, configuration, and exit of cloud services [source: https://www.strongdm.com/blog/iso-27001-requirements]. The common gap: security requirements exist in vendor intake but are not formally linked to Annex A. Fix this with a one-page cloud security addendum to your vendor risk process.

### ICT readiness for business continuity (A.5.30)

Business continuity planning and ICT readiness are tested separately. Many organisations have BCPs that mention IT but lack an ICT-specific plan with RTO/RPO targets per system, tested failover evidence, and owner sign-off.

### Information security event reporting (A.6.8)

This is narrower than incident response: employees must have a clear, low-friction mechanism to report suspected events. The gap is usually process documentation. You need a policy statement, a reporting channel, and evidence that staff know about it — typically satisfied through security awareness training records.

### Physical security monitoring (A.7.4)

Monitoring of physical premises must be documented as a control, not just assumed practice. For most offices this means logging your CCTV scope, reviewing access logs periodically, and recording that review.

### Configuration management (A.8.9)

Configuration management carries the most surveillance audit exposure. The control requires a process to define, implement, monitor, and review secure configurations for hardware, software, services, and networks [source: https://www.konfirmity.com/blog/iso-27001-what-changed-in-2026]. Spreadsheet inventories rarely satisfy this at surveillance — you need versioned baselines and evidence of review.

### Information deletion (A.8.10)

Data destruction records. Every organisation has a retention policy; few have evidence that scheduled deletions are actually running. Pull your storage deletion logs and automate the evidence capture.

### Data masking (A.8.11)

Masking requirements apply where PII or sensitive data is used in non-production environments. The gap is usually in development and test: production data copied into staging without sanitisation. Document your masking approach and pull evidence from the environment.

### Data leakage prevention (A.8.12)

DLP does not require a DLP product, but you need a documented approach to preventing unauthorised data exfiltration. Email filtering rules, clipboard controls in your MDM, and egress monitoring on your IdP all count — document what you have and map it explicitly to this control.

### Monitoring activities (A.8.16)

Log aggregation and alert triage. The auditor will ask for evidence of active monitoring, not just a SIEM licence. Capture alert triage records — even a simple ticket per alert disposition satisfies this.

### Web filtering (A.8.23)

Outbound web filtering to block access to malicious or policy-prohibited categories. DNS filtering satisfies this for most teams. Document the policy categories, the tooling, and exception handling.

## A six-week gap-closure sprint

A surveillance audit gives you a fixed window. Six weeks is enough to close most of these if you prioritise evidence generation over perfection.

**Weeks 1–2: Assess and assign.** Run a gap assessment against each of the 11 controls. For each, identify the evidence owner and the gap type — missing policy, missing process, missing evidence, or missing tooling. Configuration management and cloud security are most likely to need tooling; start those in parallel.

**Weeks 3–4: Document first.** Policy and process gaps close faster than tooling gaps. Draft the missing policy statements, link existing processes to the new control numbers, and get owner sign-off.

**Weeks 5–6: Generate and collect evidence.** Evidence collection is the bottleneck. Automate where you can: scheduled export of deletion logs, DLP rule exports, alert triage tickets. Manual evidence — like physical access log reviews — should be dated within the audit window.

## What auditors actually check at surveillance

The surveillance audit is not a full recertification. Auditors sample. They pick controls where they saw softness during initial certification, controls appearing in recent incident trends, and some of the new controls to validate your transition [source: https://growskills.store/a-closer-look-at-the-2025-updates-to-iso-27001-and-iso-27701/]. Configuration management, cloud service security, and data masking are high-frequency picks based on what the 2026 update has emphasised [source: https://www.konfirmity.com/blog/iso-27001-what-changed-in-2026].

Prepare a transition evidence pack: one document that maps each of the 11 new controls to your implementation, the evidence artefact, and the date of last review. It signals maturity and shortens interview time.

Gap closure across 11 new controls is a months-long coordination problem when done manually. CloudAnzen continuously maps your stack to ISO 27001:2022 controls and surfaces evidence gaps before your auditor arrives. [Talk to us](/demo) to see how teams close their surveillance audit backlog without the spreadsheet chaos.