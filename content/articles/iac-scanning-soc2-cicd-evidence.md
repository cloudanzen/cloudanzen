---
title: "IaC security scanning in CI/CD: Checkov, Terraform, and SOC 2 evidence"
summary: "How to run Checkov against Terraform in your CI/CD pipeline and convert scan artifacts into SOC 2 audit evidence auditors can follow"
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["IaC","SOC 2","Checkov","Terraform","CI/CD"]
sortOrder: 72
publishedAt: "2026-06-17"
author: "chloe-thompson"
---
The compliance team wants evidence. The security team wants failing scans remediated. Engineering wants to keep shipping. In most Series A–C SaaS shops those three goals live in separate tools—until IaC security scanning gives them a shared artifact that satisfies all three.

Checkov tests your Terraform, CloudFormation, or Pulumi against CIS benchmark and SOC 2 policy rules before infrastructure reaches production. The output is deterministic, timestamped, and tied to a commit SHA. This article explains how to wire it into your pipeline and pull audit-ready evidence out of the other end.

## Why IaC scanning maps onto SOC 2

SOC 2 Trust Services Criteria do not mention Terraform. But CC6 (Logical and Physical Access Controls), CC7 (System Operations), and CC8 (Change Management) all require evidence that production infrastructure changes go through a consistent review and approval process.

When teams provision infrastructure through the cloud console, the evidence of a change review is typically a Slack message, an email thread, or a ticket comment. When infrastructure is code, every change produces a pull request diff, a CI run log, and scan artifacts—all timestamped and tied to a commit SHA. Auditors can trace that chain.

IaC scanning adds an enforcement layer: the system blocks deployment if the change fails a policy check. That shifts the control assertion from "we reviewed it" to "the pipeline enforced it." The second is a stronger control and a cleaner story for your auditor.

## Setting up Checkov in a Terraform pipeline

Checkov is an open-source static analysis tool that ships with rules mapped to CIS benchmarks and SOC 2 criteria. A GitHub Actions integration takes about ten lines of configuration. [source: https://www.hams.tech/blog/terraform-devsecops-checkov-github-actions-soc2.html]

```yaml
- name: Run Checkov
  uses: bridgecrewio/checkov-action@master
  with:
    directory: ./terraform
    framework: terraform
    output_format: sarif
    soft_fail: false
```

The `soft_fail: false` setting is not optional for an evidence-grade pipeline. If a scan fails but the pull request merges anyway, your auditor will ask why. The answer "we had soft-fail mode enabled" is a finding. Block the merge.

Add `terraform validate` before the Checkov step and a supplemental tool such as tfsec or trivy after it. Checkov focuses on policy-level rules. tfsec and trivy catch Terraform-specific anti-patterns—unencrypted instances, public buckets, missing encryption flags—that Checkov's rules may not cover. Layering tools demonstrates defense-in-depth and surfaces different classes of misconfiguration across the same commit. [source: https://www.securityscientist.net/blog/12-questions-and-answers-about-infrastructure-as-code-controls-for-soc-2-and-iso-27001-complete-guide-for-2026/]

For teams on Terraform Cloud or Atlantis: trigger the scan as a pre-plan hook so the SARIF artifact lands in your store before the plan runs. This creates an unambiguous evidence timestamp that precedes deployment.

## Generating auditor-ready evidence from scan output

Raw SARIF is useful for developers. Auditors need a different artifact: a record that a specific control was tested on a specific date against a specific resource, with a pass or fail result.

**Archive SARIF files as CI artifacts.** GitHub Actions supports this with `actions/upload-artifact`. Set the retention period to at least twelve months—your full SOC 2 audit scope period. When an auditor asks for evidence that your S3 encryption policy was enforced last October, you retrieve the artifact from the CI run that deployed that module.

**Link CI runs to change management records.** Adopt a commit message convention that references your ticketing system. When you can show a closed change ticket, a pull request, and a passing Checkov artifact from the same deployment event, you have satisfied CC8 for that change.

**Export a rule-to-criterion mapping table.** Checkov rules carry CIS and SOC 2 criterion tags. Export this table quarterly and include it as an exhibit in your evidence package. It preempts the auditor question about how a given scan covers CC6.1. [source: https://www.wiz.io/academy/application-security/iac-scanning]

**Use the `--baseline` flag for regression gating.** After your first clean scan, generate a baseline file. Future runs report only new findings. This keeps alert noise low without erasing the evidence trail.

## Scoping your IaC modules correctly

Not every Terraform file is in scope for SOC 2. The audit boundary covers systems that store, process, or transmit customer data. A CI runner that spins up a developer sandbox is not in scope. Treating it as if it were generates noise that dilutes real findings.

Define scope at the workspace or directory level. A common structure is `terraform/prod/`, `terraform/staging/`, and `terraform/tools/`. Run Checkov with `soft_fail: false` on the production path and with `soft_fail: true` on staging to catch regressions without blocking test runs. Document the scoping decision in your control narrative—one paragraph explaining why each module is in or out of scope. [source: https://www.aikido.dev/learn/compliance/compliance-frameworks/compliant-pipelines]

The risk of over-scoping is alert fatigue that trains engineers to dismiss findings. The risk of under-scoping is a Stage 2 audit finding when an auditor notices your boundary includes a database cluster that lives in a module you never scanned.

## Misconfigurations Checkov catches before auditors do

These appear most often in pre-audit IaC reviews:

- **Encryption at rest missing.** Rule CKV_AWS_119 checks RDS encryption; CKV_AWS_17 checks S3 public access blocks. Both map to CC6.1.
- **Overly permissive security groups.** CKV_AWS_24 flags unrestricted SSH access. Maps to CC6.6.
- **Missing VPC flow logs.** CKV2_AWS_19 catches this. Flow logs are a monitoring evidence requirement under CC7.2.
- **IAM wildcard policies.** CKV_AWS_40 flags policies with wildcard actions or resources. A wildcard IAM policy in production is a near-certain audit finding.
- **Unversioned S3 buckets.** Not always a hard fail, but auditors ask about versioning when testing data integrity controls under CC9.

When you fix these in Terraform, the remediation is a commit—permanent, tied to a pull request, reviewable by anyone on the team. When you fix them in the console, the fix is a settings change that may or may not have an associated record.

## Making the case to your auditor

Most SOC 2 auditors have seen spreadsheets and screenshots. Fewer have seen a Checkov SARIF artifact. Before your Stage 1 assessment, prepare a one-page primer that explains:

- What Checkov is and how it runs
- Which pipeline events trigger a scan
- Where artifacts are stored and how long they are retained
- A table mapping Checkov rule IDs to the SOC 2 criteria you are asserting

Then walk through one real example: a pull request from three months ago where a finding was raised, the engineer fixed it in the Terraform source, and the PR merged after the scan passed. That narrative—finding, remediation, evidence of closure—is exactly what CC8 asks for.

SOC 2 rewards consistency over perfection. An auditor who sees twelve months of CI logs showing every infrastructure change went through the same scan process will weight that evidence heavily. The scan shows the control ran. That is what the criterion requires.

Collecting IaC evidence manually—screenshots, CSV exports, ticket annotations per deployment—takes weeks of prep before each audit cycle. CloudAnzen maps your Terraform pipeline outputs to SOC 2 controls continuously and keeps the evidence package current between audits, so there is nothing to sprint through before the auditor arrives. [Talk to us](/demo).