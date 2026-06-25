---
title: "Cloud IAM misconfigurations that derail SOC 2 audits"
summary: "The IAM settings auditors flag most often on SOC 2 Type II engagements — and the AWS and Azure controls you need documented before audit day."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["SOC 2","IAM","cloud security","AWS","Azure"]
sortOrder: 7
publishedAt: "2026-06-07"
author: "chloe-thompson"
---
Your SOC 2 audit prep looked solid — evidence packages staged, change logs clean, policies signed. Then your auditor opened the IAM export.

IAM misconfigurations are among the most common root causes of SOC 2 Type II exceptions on cloud SaaS products. The issues are rarely exotic — they are configurations your team flagged and deferred when sprint capacity tightened. This checklist covers what auditors look for on AWS and Azure, and what evidence to produce before they arrive.

## Why IAM misconfigs drive SOC 2 exceptions

SOC 2 Trust Service Criteria CC6.1 through CC6.3 govern logical access. CC6.1 requires that access is restricted to authorized individuals. CC6.2 covers authentication strength. CC6.3 covers authorization and least privilege.

Auditors evaluate your IAM posture against all three criteria. They are not running penetration tests — they are asking a documentation question: can you demonstrate that access is restricted, authentication is strong, and permissions are appropriately scoped? If you cannot produce evidence — not just a policy, but a record of the control operating over time — you will receive an observation or a qualified opinion.

Cloud environments accelerate IAM drift. A developer adds a wildcard policy during a late-night incident. A service account created for a vendor onboarding six months ago still holds active credentials. An engineer who left three months ago still appears as an active IAM user. Each of those is a finding waiting to be written.

## AWS IAM: the configurations auditors flag

**Root account exposure.** The root account should carry no active access keys and must have MFA enrolled. Auditors request evidence of both. Root account exposure is treated as a high-severity control gap under CC6.1 [source: https://www.konfirmity.com/blog/soc-2-cloud-compliance-on-aws].

**Long-lived IAM user credentials.** Access keys that are not rotated on a documented schedule are a recurring finding. Auditors look for a defined rotation interval and evidence of enforcement — AWS Config rules or access key age reports pulled at regular intervals satisfy the requirement.

**Overly permissive policies.** Wildcard actions on wildcard resources indicate that convenience outweighed least privilege in practice. Auditors compare your written policy statement against the IAM policies attached to in-scope resources. Gaps between what you documented and what you configured are recorded as exceptions [source: https://www.konfirmity.com/blog/soc-2-cloud-compliance-on-aws].

**MFA enforcement gaps.** MFA should be required for all human IAM users, not only administrators. Service Control Policies in AWS Organizations can enforce this at the account boundary. If MFA is recommended but not technically enforced, auditors record the gap under CC6.2.

**Inactive accounts and stale service principals.** Users who no longer require access and service accounts tied to decommissioned workloads must be disabled or removed. Your access review cadence — typically quarterly for SOC 2 Type II — should produce a signed artifact showing each account reviewed, the reviewer's assessment, and the action taken.

**CloudTrail coverage.** Management events, data events for sensitive S3 buckets, and IAM-related API calls should be logged and retained per your documented retention policy. Auditors pull CloudTrail evidence to confirm that your monitoring control captures the activity your policy claims it does.

## Azure IAM: where teams leave gaps

**Privileged Identity Management not enabled.** Azure PIM delivers just-in-time privileged access with approval workflows and time-limited activation. Without PIM, Global Administrators and Privileged Role Administrators hold standing access at all times. Auditors reviewing CC6.3 ask directly how you limit standing privileged access and what evidence supports that claim [source: https://exodata.io/cis-benchmarks-azure-hardening-checklist/].

**Conditional Access policy gaps.** Conditional Access is Microsoft's enforcement layer for context-aware authentication requirements. Common gaps include policies that exempt service accounts from MFA requirements, exclusions covering a significant share of the user population, and legacy authentication protocols left enabled. When legacy authentication remains active, Conditional Access enforcement — including MFA — can be bypassed entirely.

**Service principal credential hygiene.** Service principals using client secrets rather than certificates, secrets not rotated within the past year, and service principals holding Owner or Contributor on production subscriptions are findings auditors expect to surface. Document your rotation process and retain evidence of the most recent rotation for each in-scope service principal [source: https://exodata.io/cis-benchmarks-azure-hardening-checklist/].

**Guest account sprawl.** Guest accounts accumulate from vendor access, partner integrations, and one-off collaboration requests. Auditors expect a defined lifecycle: provisioning criteria, access review cadence, and offboarding steps. If your Entra ID directory contains guest accounts with no recent sign-in activity and no corresponding review record, that is a CC6.1 finding.

**Diagnostic settings and sign-in logs.** Azure sign-in logs and audit logs must be retained for a period consistent with your documented retention policy. Forwarding to Log Analytics or a SIEM is standard practice. Auditors verify that the configured retention period matches what your policy document states.

## Building evidence that holds up over the observation period

Auditors do not want a screenshot taken the week before fieldwork begins. They want evidence of controls operating throughout the observation period — often twelve months for a Type II report.

For IAM, that means retaining:

- Access review artifacts from at least two prior cycles, signed by an access owner, noting which accounts were reviewed and what action followed
- Access key age reports from AWS or credential expiry exports from Entra ID, dated and stored across the full observation period
- Provisioning and deprovisioning tickets showing that access was granted and revoked through a controlled process, not ad hoc
- IAM policy change logs confirming that configuration changes went through change management

The format matters less than completeness and timing. A CSV export with a dated header and a reviewer signature beats a polished dashboard screenshot produced the day before fieldwork opens.

Automation is what makes continuous evidence practical. When your tooling exports an IAM configuration snapshot on a schedule and writes it to a durable evidence store, you have a persistent record rather than a point-in-time sample. Auditors can then verify the control operated throughout the observation period, not just at its end [source: https://atlantsecurity.com/learn/cloud-security-best-practices].

IAM findings are preventable, and auditors treat them as indicators of how your team actually operates — not how your policy says it operates. CloudAnzen continuously maps your cloud IAM posture to SOC 2 Trust Service Criteria and surfaces evidence gaps before they become audit exceptions. [Talk to us](/demo).