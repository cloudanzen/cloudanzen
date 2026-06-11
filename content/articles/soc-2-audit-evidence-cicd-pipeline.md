---
title: "Generating SOC 2 audit evidence automatically inside your CI/CD pipeline"
summary: "Wire your CI/CD pipeline to capture the artefacts your SOC 2 auditor needs—without building a parallel evidence-collection process."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "5 min read"
tags: ["SOC 2","CI/CD","audit evidence","DevSecOps","compliance automation"]
sortOrder: 55
publishedAt: "2026-06-01"
author: "chloe-thompson"
---
The evidence request lands two weeks before fieldwork. Your auditor wants change management records, deployment approvals, code review logs, and access records for every production push over the past twelve months. Your CI/CD pipeline generated all of it. The gap is extraction: nobody built the plumbing to pull it into auditor-readable form.

## What auditors look for in CI/CD systems

SOC 2 CC8 governs change management. CC6 governs logical and physical access controls. CC7 covers system monitoring. All three depend on CI/CD as a primary evidence source for SaaS companies—it is where changes originate, where access is exercised, and where monitoring events are generated.

The evidence list auditors request typically includes:

- Every production deployment: who triggered it, when, which commit or image tag
- Pull request approvals: reviewer identity, timestamp, linked ticket or change request
- Test gate outcomes: did security and functional tests pass before merge?
- Force-push and bypass events: every instance where a standard control was overridden
- Pipeline failure records: failed builds and whether they were retried or escalated

Most mature CI/CD platforms emit this data natively. The challenge is that it exists in event logs, not in an auditor-ready format, and platform default retention windows are often shorter than the SOC 2 review period.

## Four pipeline instrumentation points

**Pull request approval records**

Every merge to a protected branch should emit a structured record: reviewer ID, timestamp, target branch, and associated ticket or change request identifier. GitHub Actions, GitLab CI, and Bitbucket Pipelines support webhook-to-storage patterns that write these records to an append-only data store in real time [source: https://www.stldigital.tech/blog/integrating-soc-with-devsecops-pipelines-a-technical-deep-dive/].

With this in place, an auditor asking for every production deployment in Q3 and its approval chain gets a query result instead of a two-day manual effort.

**Test run attestations**

SOC 2 CC7 asks about system monitoring and anomaly detection. A build that fails its security scanning step and is force-merged anyway is a control gap. Capturing test outcomes—pass/fail state, test suite name, run timestamp—as a structured artefact attached to each deployment makes the gap visible. The format does not need to be complex: a JSON file written by the CI runner at pipeline completion is sufficient, as long as it is immutable and retained for the full audit window [source: https://cloudaware.com/blog/devsecops-compliance/].

**Deployment manifests**

A deployment manifest records what shipped: container image digest or artifact hash, target environment, operator identity, timestamp, and the commit that triggered the run. This one record connects a change request to a live production state. Without it, auditors reconstruct from cloud console logs and git history—both slower to query and more open to interpretation.

**Privileged-action and bypass logs**

Direct pushes to protected branches, pipeline configuration edits, and emergency deploy bypasses sit outside the standard review gate. They still need to appear in evidence. Many teams miss this because these events are infrequent—until an auditor finds an undocumented direct push and asks for the exception approval record that should accompany it [source: https://lazarusalliance.com/soc-2-and-devsecops-integrating-compliance-into-the-software-development-lifecycle/].

## Structuring exports that hold up

Evidence stored exclusively inside your CI/CD platform is fragile. Platforms change retention limits, restructure log schemas, and gate access behind pricing tiers without notice.

Two storage patterns work well for compliance purposes:

**Immutable object storage.** Write artefacts to a versioned S3 or GCS bucket with object lock enabled. Set a lifecycle policy that retains objects for at least 13 months—covering a full audit period with buffer. Tag each object with `env`, `pipeline-run-id`, and an ISO date so records are queryable without a separate database, and give the auditor a stable URI for each evidence item.

**Centralised log aggregator with packaging layer.** For teams already running a SIEM, shipping pipeline events as structured JSON log lines into the existing stream avoids a parallel storage system. The trade-off is that log aggregators are optimised for search, not evidence packaging—you need an export script that pulls the relevant time window and formats records for the auditor, typically as CSVs or PDFs with consistent column headers [source: https://cycode.com/blog/devsecops-automation/].

Regardless of storage approach, deliver evidence in a format the auditor can navigate without a platform login. Login links to a tool they do not have credentials for can add days to fieldwork.

## Where teams run into trouble

**The 90-day retention cliff.** Default CI/CD log retention is commonly set to 90 days. SOC 2 Type II covers a 12-month period. Teams discover the mismatch during fieldwork when they try to pull Q1 deployments in August and find the records are gone.

Fix: set retention periods explicitly in platform settings and test the setting. Pull a record from six months ago today—before the auditor asks.

**The broken chain.** Auditors trace the thread from ticket to PR to build to deployment. If three weeks of deployments were triggered manually from a developer's machine during an incident, that segment of the chain is missing. The auditor treats missing links as control failures, not operational exceptions.

Fix: manual deployment paths must emit the same structured records as the automated pipeline. Operational exceptions need their own evidence rather than an absence of records.

**Field name drift.** CI/CD configurations change over time, and with them the field names in log output. Records from eight months ago may use `actor_id` while recent records use `user.login`. An evidence export script querying twelve months silently drops records that match neither pattern.

Fix: write a schema version tag to every record at creation time. Build export scripts to handle known schema versions explicitly. This is a short change that prevents a significant problem during fieldwork.

Audit evidence gaps form over months and surface in days. CloudAnzen continuously maps your CI/CD pipeline events to SOC 2 controls, flags gaps before fieldwork starts, and packages evidence exports in auditor-ready format. [Talk to us](/demo).