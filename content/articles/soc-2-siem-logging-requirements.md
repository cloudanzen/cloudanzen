---
title: "SOC 2 logging requirements: what your SIEM must capture to satisfy auditors"
summary: "Auditors pull specific log types under CC6 and CC7 that most SIEM configurations miss — here is what to capture and retain before your audit window opens"
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "5 min read"
tags: ["SOC 2","SIEM","logging","audit evidence","CC7"]
sortOrder: 53
publishedAt: "2026-05-31"
author: "chloe-thompson"
---
The auditor's request list landed three weeks before fieldwork. Item seven: "Provide evidence your SIEM captures and retains all access, change, and incident events required under the applicable trust services criteria." You scroll to your dashboard. Retention is 90 days. The audit window is 12 months.

You have a problem.

## What SOC 2 actually requires from your logging stack

SOC 2 does not prescribe a log format or vendor. CC6 (Logical and Physical Access Controls) and CC7 (System Operations) require evidence that your environment can detect and respond to unauthorized access, configuration changes, and security events occurring in production.

Translated to your SIEM, that means three distinct obligations: capture the right event types, retain them for the full audit period, and maintain documented alert rules that would trigger on a real incident. Auditors do not treat logging as a checkbox — they trace specific events or hypothetical scenarios through your evidence and expect log data to support each step of the reconstruction.

A SIEM ingesting everything for 90 days but alerting on nothing passes the first obligation and fails the other two.

## The five log categories auditors actually pull

Auditors under CC6 and CC7 typically request evidence from five categories. Missing any one will generate a finding in your Type II report.

**Authentication events.** Every login attempt — success and failure — from every system in scope: cloud console, production database, VPN gateway, and SSO provider. Auditors look for evidence that you monitor failed-login rates and review anomalies. If your SIEM ingests only your application's auth logs and skips AWS CloudTrail console sign-ins, expect a gap note.

**Privilege escalation and access changes.** Any time permissions change — `sudo` grants, IAM role assumption, group membership modifications — that event must land in your SIEM. CC6.3 requires removing access when it is no longer needed. Without privilege-change logs you cannot demonstrate that quarterly access reviews drove actual deprovisioning, not just documentation.

**Configuration and change events.** CC7.1 covers change management monitoring. Your SIEM needs to ingest infrastructure events: Terraform applies, AWS Config evaluations, cloud security group changes, Kubernetes RBAC updates. Most environments miss this category because connecting IaC pipelines and cloud governance tooling to a SIEM requires more effort than forwarding operating system logs.

**Data-layer access.** Database audit logs — who queried what, when — matter for CC6 and for any organization processing PII or financial records. PostgreSQL's `pgaudit`, MySQL's general query log, or your data warehouse's query history all qualify. Auditors increasingly request raw database access logs to verify that access reviews led to real access changes, not just sign-offs on a spreadsheet.

**SIEM alerts and incident records.** The alert log is itself evidence. Auditors under CC7.4 want to see that detection rules fire, someone triages the output, and outcomes are documented in a ticket or incident record. A SIEM with no alert history over the audit period tells the auditor that detection controls have never been exercised in production.

## Retention: the number that surprises most teams

A SOC 2 Type II audit covers a defined period — typically six or twelve months. To issue an unqualified opinion, auditors need log evidence accessible for the entire period, not just the most recent 90 days.

Ninety-day retention is the default on most SIEM SaaS plans [source: https://www.bytebase.com/blog/soc2-audit-logging/]. When fieldwork opens and your hot storage only goes back 90 days, the options narrow: restore from cold archive if you planned ahead and tested the process, or accept a finding that delays your Type II report.

Plan for 13 months of hot or warm retention. The extra month creates buffer for the audit kickoff period and handles edge cases where fieldwork begins in January for a prior full calendar year. Tiered retention works if cost is a constraint — full fidelity for 90 days, compressed or cold for months four through thirteen — as long as logs are retrievable on demand during fieldwork. Auditors will ask you to pull a sample during testing. Have the retrieval process documented before that moment arrives.

## Alert coverage: what "operating effectively" means in practice

Capturing logs is necessary but not sufficient. CC7.2 requires monitoring for and detecting security events, which means your SIEM needs documented detection rules that are actively tuned and connected to a response workflow.

Coverage should include at minimum:

- Brute-force and credential stuffing, measured as failed logins per time window
- Impossible travel or anomalous login geography
- Privilege escalation outside approved change windows
- Bulk data export or unusual production query volume
- Infrastructure changes arriving outside the approved deployment pipeline

Auditors will ask for your rule configuration and whether any alerts fired during the period. "No alerts fired" is an acceptable answer only if you can demonstrate the rules are correctly tuned and the absence of activity reflects reality — not a silent failure in your detection pipeline [source: https://security-docs.com/blog/soc2-logging-monitoring]. Quarterly alert-rule reviews documented in a configuration record are the standard way to make that case.

## Before the audit window opens: a four-step check

If your audit starts in the next three months, run this check before readiness fieldwork begins — not during it.

**Inventory log sources.** List every system in scope. Confirm each has a tested, active SIEM integration. Verify that CloudTrail, your SSO provider, database audit logs, and your infrastructure change pipeline are all ingesting events that are queryable today [source: https://www.konfirmity.com/blog/soc-2-logging-pipelines-for-soc-2].

**Check retention settings.** Attempt to retrieve a log from 13 months ago. If you cannot, extend hot or warm retention before the audit window opens. Test the retrieval process, not just the policy setting.

**Review alert coverage.** Map active detection rules to CC6 and CC7 criteria. Identify any of the five categories above without active rule coverage and assign remediation owners with a deadline.

**Document the review.** The act of checking is not evidence — the record of it is. Create a ticket, a spreadsheet row, or a policy update documenting when you reviewed logging coverage, what gaps you found, and what changes you made to close them. That record surfaces when auditors ask how you validate that controls are operating.

**Assign an ongoing owner.** Logging configuration drifts. Cloud accounts get added, services get deployed, and retention policies get quietly changed during cost-reduction cycles. A named person reviewing log source coverage on a quarterly cadence is the control that keeps these gaps from reopening between audits.

Logging gaps are among the most common CC7 findings in SOC 2 audits, and most are preventable before the window opens. CloudAnzen continuously maps your active log sources against SOC 2 criteria, surfaces coverage gaps before fieldwork begins, and keeps the evidence package organized so it is ready when the auditor asks for it. [Talk to us](/demo).