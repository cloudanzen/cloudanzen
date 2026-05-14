---
title: "Continuous monitoring for SOC 2 without alert fatigue"
summary: "How to build a SOC 2 continuous monitoring program that catches real control failures without burying your team in noise"
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "7 min read"
tags: ["SOC 2","continuous monitoring","alert fatigue","evidence management"]
sortOrder: 0
---
You set up automated alerting across your AWS environment, Okta logs, and GitHub audit trail. Six weeks before your SOC 2 Type II window closes, the team is ignoring most alerts because too many fire on routine activity. Continuous monitoring is supposed to keep you audit-ready. Done wrong, it creates a second job: triaging noise. Here is how to build a program that catches real control failures without burying the people responsible for them.

## What SOC 2 actually requires from monitoring

The AICPA's Trust Services Criteria does not mandate a specific monitoring tool or architecture [source: https://www.aicpa.org/soc4so]. What it requires is that your organization detect deviations from your stated control objectives — and respond to them. CC7.1 through CC7.4 under the Common Criteria cover logical and physical access monitoring, anomaly detection, and response procedures. CC9.1 covers risk mitigation through vendor and partner oversight.

This matters because most teams conflate infrastructure alerting with SOC 2 monitoring. Infrastructure alerting is about uptime. SOC 2 monitoring is about whether your controls are working. An alert that fires because CPU hit a high threshold tells your auditor nothing. An alert that fires because a production IAM role was modified outside your change-management window tells them a great deal.

The AICPA's guidance focuses on control effectiveness, not system performance. The auditor reviewing your Type II will sample the period and look for evidence that your monitoring detected and responded to real deviations [source: https://www.aicpa.org/soc4so].

## The alert-fatigue trap: where most teams go wrong

Alert fatigue happens when the volume of alerts forces humans to apply a mental filter they never explicitly designed. That filter is dangerous because it is invisible. Your team starts categorizing alerts as "probably fine" based on frequency rather than content. Real control failures start slipping through.

Three patterns cause most alert fatigue in SOC 2 programs:

**Alerting at the wrong layer.** Cloud provider logs generate enormous volumes of events. Alerting on every CloudTrail API call is not monitoring — it is log streaming with anxiety. You want rules triggered on control-relevant events: privilege escalation, policy changes, access outside business hours for sensitive systems, new service-account creation.

**No owner per alert.** Alerts that go to a shared Slack channel die there. Every monitoring rule in your SOC 2 program should have one named owner — usually the control owner for the corresponding Trust Services Criterion. Without a named owner, nobody is accountable for resolution, and the evidence trail your auditor needs never gets created.

**Threshold drift.** You set a threshold in January. By June, legitimate usage has changed and the threshold fires constantly. Without a periodic review cycle for your alert rules, thresholds accumulate false positives. The Security Compass blog notes that sustainable compliance programs treat monitoring rules as living documents, subject to the same review cadence as policy documents [source: https://www.securitycompass.com/blog/].

## Mapping controls to monitoring rules before writing a single query

Before you open your SIEM or write a CloudWatch rule, map your SOC 2 control environment to monitoring objectives. For each control in your control matrix, ask:

1. What does a failure of this control look like in log data?
2. Which system generates that evidence?
3. What is the acceptable time-to-detect?

A few examples from a typical Series A SaaS environment:

| Control | Failure signal | Source system | Target TTD |
|---|---|---|---|
| Least-privilege access | Admin role attached to service account | AWS IAM logs | 1 hour |
| Change management | Merge to production without PR approval | GitHub audit log | 15 min |
| Encryption at rest | S3 bucket created without default encryption | AWS Config | 30 min |
| Offboarding | Account active 24 hours after HR termination | Okta + HRIS | 2 hours |

Building this table first means your monitoring rules are traceable to controls. Traceable rules are auditable. Your auditor can inspect a rule, understand which criterion it addresses, and verify that failures get handled. That is what a SOC 2 Type II report measures: not whether you have monitoring, but whether monitoring is part of a functioning control system [source: https://www.aicpa.org/soc4so].

## A prioritized monitoring stack for SOC 2 Type II

You do not need a purpose-built SIEM in your first SOC 2 cycle. You need coverage on the highest-risk control categories, routed to accountable owners.

**Start with access control.** Privileged access changes, account creation and deletion, MFA status changes, and after-hours logins to admin consoles cover the bulk of CC6 and CC7 monitoring requirements. These events are available from your IdP (Okta, Google Workspace, Azure AD) and your cloud IAM service with minimal configuration.

**Add change management second.** Your CI/CD pipeline and code repository generate audit events for every deployment and every merge. Rules checking for direct pushes to production, bypassed branch protections, or deployments during change-freeze windows address CC8 without additional tooling.

**Automate evidence collection, not just alerting.** Each time a monitoring rule fires and is resolved, that resolution is evidence. Capture the ticket number, the timestamp, the owner, and the action taken. Your auditor will ask for evidence of how you handled exceptions — a resolved alert with a linked ticket is clean evidence.

The Security Compass blog recommends aligning your monitoring cadence to your audit observation period rather than the calendar, so evidence is continuous and gap-free across the entire Type II window [source: https://www.securitycompass.com/blog/].

**Review zero-firing rules on a quarterly cadence.** A rule that never fires is either catching nothing real or configured too narrowly. Both are problems. Control owners should review quiet rules each quarter to confirm the underlying control is active and the rule is correctly scoped.

## Keeping your evidence clean for the auditor

The audit observation period for a SOC 2 Type II is typically six to twelve months. Your auditor will sample events from across that window. The most common evidence failure is not that monitoring was absent — it is that log retention was shorter than the observation period, or that alert records lived in a system the auditor could not access.

Minimum evidence hygiene for a clean Type II:

- **Log retention**: 12 months minimum, stored in a system accessible to your auditor's review team.
- **Alert disposition**: every triggered rule has a closed record showing who reviewed it and what action was taken, even if the action is "false positive, suppression rule created."
- **Rule change history**: every modification to a monitoring rule is logged with a justification. Auditors spot-check rule histories to verify you did not silence controls during the observation period.
- **Mapping document**: a one-page table linking each monitoring rule to its Trust Services Criterion saves your auditor hours and reduces the back-and-forth that extends audit windows.

Continuous monitoring is not about automation for its own sake. It is about shrinking the gap between when a control fails and when someone with authority to fix it finds out. When that gap is short and the evidence is clean, your SOC 2 Type II becomes a confirmation of what you already know — not a surprise.

Continuous monitoring fails when it is bolted onto existing tooling without a clear map to your SOC 2 controls. CloudAnzen maps your infrastructure to the Trust Services Criteria continuously, so the right evidence surfaces automatically — before the auditor asks. [Talk to us](/demo).