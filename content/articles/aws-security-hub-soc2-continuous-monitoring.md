---
title: "AWS Security Hub for continuous SOC 2 monitoring"
summary: "How to wire AWS Security Hub into your SOC 2 evidence workflow so findings map directly to controls and auditors get automated, timestamped proof."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "7 min read"
tags: ["AWS Security Hub","SOC 2","continuous monitoring","cloud compliance","evidence automation"]
sortOrder: 75
publishedAt: "2026-06-21"
author: "chloe-thompson"
---
AWS Security Hub aggregates findings from GuardDuty, Inspector, Config, and partner tools into a single pane. Most teams enable it and then stop — findings pile up, nobody maps them to SOC 2 controls, and the evidence folder stays a spreadsheet someone updates the week before the audit. That gap is fixable. Here is how to turn Security Hub from a dashboard curiosity into a continuous evidence machine.

## What Security Hub actually gives you for SOC 2

AWS Security Hub aggregates results from native services — Config, GuardDuty, IAM Access Analyzer, Inspector — and integrated partner products into a normalized finding format called the AWS Security Finding Format (ASFF) [source: https://towardsthecloud.com/blog/aws-soc-2-compliance]. For SOC 2, the relevant Trust Service Criteria map as follows:

**CC6 (Logical access):** Config rules for IAM password policy, root MFA, unused credentials, and public S3 buckets feed directly into CC6.1–CC6.3. When a rule fires, the finding is timestamped, carries the resource ARN, and has a severity level. That timestamped finding is your evidence.

**CC7 (System operations):** GuardDuty findings land here. Unusual API calls, credential abuse, and port scanning events map to CC7.2 and CC7.3. Auditors want to see that you detect and investigate these events — Security Hub gives you the detection log.

**CC8 (Change management):** Config change timeline records are surfaced through Security Hub when you enable the relevant managed rules. Each change event is findable, exportable, and traceable to a specific resource.

The catch: Security Hub does not auto-label findings with SOC 2 control IDs. You have to build that mapping yourself — either in the finding workflow or downstream in your export.

## Enabling the right standards and rules

Security Hub ships with the AWS Foundational Security Best Practices (FSBP) standard and CIS AWS Foundations Benchmark. Neither is a direct SOC 2 map, but both are solid proxies [source: https://www.konfirmity.com/blog/soc-2-cloud-compliance-on-aws]. Enable both. Then layer on:

- **AWS Config managed rules**: `root-account-mfa-enabled`, `iam-password-policy`, `restricted-ssh`, `s3-bucket-public-access-prohibited`, `cloudtrail-enabled`. These are the controls auditors ask about in every SOC 2 fieldwork kickoff.
- **GuardDuty**: Required if you are asserting CC7.2. The cost scales with CloudTrail event volume; most early-stage SaaS teams find the bill proportionate.
- **IAM Access Analyzer**: Catches resource-based policies that grant external access. Maps cleanly to CC6.6 (restricting access to authorized users).
- **Inspector**: Vulnerability findings on EC2 and Lambda. Maps to CC7.1 if you can demonstrate remediation within a defined SLA.

Resist the urge to enable everything on day one. Every finding you cannot act on becomes alert fatigue that erodes the team's trust in the system. Start with the above, drive high-severity findings to zero, then expand.

## Mapping findings to controls: three patterns that work

Security Hub findings have a `Types` array and a `Compliance.Status` field. Neither speaks SOC 2. Three patterns work in practice:

**Pattern 1 — EventBridge to S3.** Route all `Security Hub Findings - Imported` events to an S3 bucket via EventBridge. Add a Lambda function that reads each finding and writes a JSON record tagged with your SOC 2 control IDs based on a lookup table. The S3 bucket becomes your audit evidence store [source: https://towardsthecloud.com/blog/aws-soc-2-compliance]. Auditors can query it directly, or you export a CSV for the evidence request.

**Pattern 2 — Security Hub Insights.** Create custom Insights filtered by resource type, severity, or finding type. An Insight titled "Root account MFA — all findings" gives you a real-time count and lets you capture the zero-finding state as CC6.1 evidence.

**Pattern 3 — Automation rules.** Available since 2023, Security Hub automation rules let you suppress, enrich, or route findings without Lambda. Use them to add custom `UserDefinedFields` like `{"SOC2Control": "CC6.1"}` to matching findings. Downstream exports carry the tag.

Pattern 1 is the most auditor-friendly because the evidence lands in S3 — timestamped, immutable, queryable. Pattern 3 requires the least code. For most teams, combining Pattern 3 for tagging with Pattern 1 for archiving is the right combination.

## Building an evidence package auditors will accept

Auditors have seen enough dashboard screenshots to know they prove nothing [source: https://soc2auditors.org/insights/aws-soc-2-compliance/]. What they want:

1. **Population evidence**: A list of all findings generated during the audit period, their severity, remediation status, and when they were closed.
2. **Exception evidence**: For any finding that stayed open beyond your defined SLA, a documented exception with a risk acceptance from a named approver.
3. **Control evidence**: For each in-scope control, at least one finding detected and closed — or a zero-finding report for the period.

The S3 archive from Pattern 1 covers items 1 and 3 automatically. Item 2 requires a process: when a finding ages past your SLA, someone must acknowledge and document it. A Jira ticket linked to the Security Hub finding ARN is sufficient.

One thing auditors flag consistently: findings set to Suppressed without a documented rationale. Suppressed findings disappear from active dashboards but stay in the archive. If you suppress `s3-bucket-public-read-access` for a bucket you intentionally made public, document that in the finding's Note field — otherwise the auditor sees a suppressed finding with no rationale and flags it as a gap.

## Common gaps that emerge at fieldwork

Even teams with Security Hub running for a full year hit the same fieldwork problems [source: https://squareops.com/knowledge/why-aws-soc-2-compliance-matters-for-saas-companies-in-2026/]:

**Multi-account coverage.** If you run multiple AWS accounts — separate accounts for production, staging, development — Security Hub must be enabled across all of them and findings must be aggregated to a central administrator account. Auditors scope the in-scope environment, not just the account you demo during walkthroughs.

**Stale findings at fieldwork start.** A finding from six months ago that is still open reads to the auditor as an unmitigated risk, not a historical artifact. Close old findings before fieldwork begins or document them as formally accepted risks with named owners.

**No evidence of human review.** Security Hub finding data alone is not sufficient. Auditors want to see that a person reviewed the findings — a weekly email digest, a ticket created, a status updated. A weekly scheduled rule that posts a findings summary to your security Slack channel, with that channel log in your evidence package, satisfies this requirement.

**Missing CloudTrail in all regions.** Security Hub needs CloudTrail enabled in every region for GuardDuty to detect lateral movement and unauthorized API calls. Auditors check. If CloudTrail is only active in one region, you have a coverage gap the auditor will find.

Audit prep should not be a sprint the month before your auditor arrives. CloudAnzen continuously maps your AWS environment to SOC 2 controls, surfaces finding gaps as they appear, and assembles the evidence package as you operate — so the evidence is ready when the auditor is. [Talk to us](/demo).