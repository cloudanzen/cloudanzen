---
title: "CI/CD pipeline security controls: the compliance evidence package for SOC 2 and ISO 27001"
summary: "How to map your CI/CD pipeline's security controls to SOC 2 CC criteria and ISO 27001 Annex A controls, and collect the evidence auditors actually want"
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["ci-cd","soc-2","iso-27001","devsecops","evidence"]
sortOrder: 0
publishedAt: "2026-07-07"
author: "chloe-thompson"
---
Your deployment pipeline ships code every day. It also produces the most scrutinised evidence in a SOC 2 or ISO 27001 audit. Auditors know CI/CD is where access gates get bypassed, secrets leak, and change-approval rituals get skipped under release pressure. If your evidence package for pipeline controls is a screenshot folder and a Confluence page, you are one audit cycle away from a significant finding.

## Why CI/CD is a compliance blind spot

Modern SaaS teams ship dozens of deploys a week. Speed is the point. But compliance frameworks were written for change-management rhythms measured in weeks, not minutes. That mismatch creates a structural gap: the controls exist in principle, but the evidence trail is thin or inconsistent.

Three failure modes auditors see most often [source: https://www.practical-devsecops.com/devsecops-best-practices/]:

**No pipeline-level access control.** Anyone with repo access can trigger a production deploy. The CC6 criteria under SOC 2 require logical access controls on all systems processing in-scope data. A pipeline that accepts a merge from any collaborator and auto-deploys to production without a role gate fails that criterion.

**Secrets in the repo or plain-text variables.** Hardcoded tokens, API keys, and credentials committed to the repo or stored as plain-text pipeline variables are a CC6.1 and ISO 27001 A.8.7 issue. Static analysis results showing zero secrets findings count as evidence; the absence of a secrets-scanning step does not.

**No change-approval audit trail.** ISO 27001 A.8.32 requires a record of who authorised each change, when, and what it covered. Many teams rely on commit history alone. That is insufficient when the pipeline can be retriggered, hotpatched, or overridden without a pull-request gate.

## SOC 2 CC criteria your pipeline must satisfy

Four criteria clusters apply directly to CI/CD:

**CC6.1 — Logical access controls.** Pipeline permissions must be role-based. Developers trigger builds; a separate deployer role — or a service account with least privilege — promotes artefacts to production. Evidence: role configuration export from your CI platform, IAM policy document for the deployer service account.

**CC6.2 — Credential management.** Secrets must be stored in a vault and injected at runtime. Evidence: vault policy showing rotation schedule, SAST or secrets-scan report confirming no credentials in source code.

**CC7.2 — System monitoring.** Pipeline runs must be logged, and alerts must fire on build failures, policy violations, and anomalous deploy patterns. Evidence: log retention configuration, sample alert history from your observability or SIEM tooling.

**CC8.1 — Change management.** All production deployments must trace to an approved change. The cleanest implementation: require a merged, approved pull request before the CD step can execute. Evidence: branch protection rules export, sample pull-request approval timeline covering a representative deployment window.

CC6 and CC8 are the criteria most frequently cited in SOC 2 Type II management letters. Building the evidence package before the audit window opens is materially easier than reconstructing it after auditors ask.

## ISO 27001 Annex A controls that map to CI/CD

ISO 27001:2022 Annex A has several controls that apply directly to pipeline operations:

**A.8.7 — Protection against malware.** This covers static application security testing (SAST) and software composition analysis (SCA) as preventive controls. Evidence: scan configuration, scheduled scan reports, policy blocking merges when critical findings are open [source: https://www.practical-devsecops.com/devsecops-best-practices/].

**A.8.9 — Configuration management.** Infrastructure-as-code templates deployed through the pipeline must be versioned and reviewed. Evidence: IaC scanner results (Checkov, tfsec), a policy requiring IaC changes to pass a linting gate before merge.

**A.8.32 — Change management.** Every production deployment is a change event. Evidence: deployment log showing the approval chain, rollback capability documentation, post-deployment verification steps.

**A.5.37 — Documented operating procedures.** Your pipeline runbook — covering deployment steps, rollback procedure, and emergency break-glass access — must exist and be accessible to those who need it. Evidence: versioned runbook, confirmation it was reviewed within the ISMS review cycle [source: https://www.openspaceservices.com/blog/devops/dev-sec-ops-in-2026-how-to-build-security-into-your-ci-cd-pipeline-without-slowing-teams-down].

A common audit finding: teams treat the pipeline as infrastructure rather than a documented procedure. Annex A.5.37 makes the pipeline a procedure that must be owned, documented, and reviewed on a defined cycle.

## Building the evidence package

The evidence package maps each control to a specific, dated artefact. A complete package covers:

| Control | Evidence artefact |
|---|---|
| CC6.1 / A.5.15 | CI platform role export, IAM policy for deployer |
| CC6.2 / A.8.7 | Vault policy, secrets scan report |
| CC7.2 | Log retention config, sample alert history |
| CC8.1 / A.8.32 | Branch protection rules, PR approval records |
| A.8.9 | IaC scan results, linting policy config |
| A.5.37 | Deployment runbook, review record |

Three collection practices that reduce audit workload:

**Automate exports.** Most CI platforms expose APIs for role and permission configuration. A scheduled export job that writes a timestamped snapshot to a compliance artefact store produces continuous evidence without manual work.

**Tie deployments to tickets.** Require a ticket reference in every deploy job. The deploy log then maps to the change-approval record automatically, satisfying CC8.1 and A.8.32 in one step.

**Run a quarterly pipeline controls review.** Access lists drift. Secrets scanner exclusions accumulate. A scheduled review that audits each control against its evidence artefact catches drift before the auditor does [source: https://www.testtriangle.com/ci-cd-pipeline-security-best-practices-the-2026-strategic-enterprise-checklist/].

## What auditors actually check

Evidence artefacts matter, but auditors look beyond the artefact itself:

**Consistency across the audit window.** A single clean SAST report is not evidence of a continuous control. Auditors want the report running throughout the audit period, not only at its start.

**Change velocity versus approval rate.** If your logs show frequent deploys but pull-request approval records cover only a fraction of them, the gap will generate a finding.

**Break-glass access logs.** Emergency deploy access that bypasses normal approval gates must be documented, logged, and reviewed after each use. An undocumented admin-override role assigned broadly is a CC6.1 and A.5.18 gap.

**Open finding remediation timelines.** SAST findings that remain open for months without a documented risk acceptance or fix timeline are a CC7.4 and A.8.8 issue. Close them or accept them formally with a written rationale and review date.

Pipeline compliance is an operational discipline, not a pre-audit scramble. The teams that pass SOC 2 Type II and ISO 27001 surveillance audits cleanly are the ones who built evidence collection into the pipeline itself — automated exports, ticket-linked deploys, and scheduled scans with policy gates. CloudAnzen continuously maps your pipeline controls to both frameworks so the evidence package is ready when auditors ask. [Talk to us](/demo).