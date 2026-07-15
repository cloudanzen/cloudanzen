---
title: "SOC 2 for AI products: controls and evidence auditors expect when ML is in scope"
summary: "When your product includes ML components, your SOC 2 evidence library needs to cover model access, training data provenance, and inference monitoring — here is how to map them to the TSC."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "5 min read"
tags: ["SOC 2","AI systems","ML controls","audit evidence"]
sortOrder: 95
publishedAt: "2026-07-15"
author: "chloe-thompson"
---
The audit request arrives and your product already ships an AI feature to customers. The auditor opens the evidence request and asks: "What controls govern your ML components?" Your existing SOC 2 evidence library — access reviews, change tickets, pen test reports — does not map cleanly to how your inference pipeline runs. That gap is common, and it is fixable before your next audit window opens.

## Why ML components create new control surface

AI features add system components that the original Trust Services Criteria (TSC) was not written to enumerate. The model itself, the training pipeline, the inference endpoint, the feature store, and the data pipelines feeding inputs all represent assets with distinct risk profiles.

Auditors working SOC 2 Type II engagements are increasingly asking about these components explicitly [source: https://soc2auditors.org/insights/soc-2-for-ai-companies/]. Three areas surface most often in fieldwork:

**Training data provenance.** Where did the data come from, who labelled it, and how is it versioned? A shared S3 bucket with no access log is not an answer an auditor will accept.

**Model access controls.** Who can update the model, re-train it, or roll back a version? If the answer is "anyone with an AWS key" and no MFA enforcement, expect a finding.

**Inference output monitoring.** Are you logging outputs, detecting drift, and alerting on anomalies? A dashboard you check occasionally is not the same as a documented alerting policy with response procedures.

None of these are exotic requirements. They are infrastructure asset management applied to ML artefacts.

## Mapping ML to TSC controls

The TSC categories that bear the most weight when ML is in scope are CC6 (logical access), CC7 (system operations), and CC8 (change management). If your AI feature carries a customer-facing SLA, A1 (availability) enters the picture too.

### CC6 — Logical access to model artefacts

Treat your model registry the same way you treat your production database: least-privilege IAM, access reviews every 90 days, and offboarding checklists that explicitly cover ML tooling accounts. The auditor will ask for a population of users with write access to your model store and evidence that access is periodically reviewed.

### CC7 — Monitoring the inference pipeline

SOC 2 expects anomaly detection in operations. For an AI system this means monitoring inference latency, error rates, and — where labelled ground truth exists — output quality metrics. Evidence needs to show an alerting policy with defined thresholds, plus at least one event where an alert fired, was acknowledged, and was resolved during the audit period.

### CC8 — Model deployments as change events

If your ML team pushes a new model to production outside your standard change management process, that is a CC8 finding waiting to be documented. The fix is to treat model deployments exactly like code deployments: a ticket, an approver, a deployment log, and a documented rollback procedure [source: https://www.techaheadcorp.com/blog/soc-2-ai-systems-controls/].

## Evidence auditors actually request

Practitioners who have guided teams through SOC 2 with AI components in scope report a consistent evidence list [source: https://www.techaheadcorp.com/blog/soc-2-ai-systems-controls/]:

- **Model registry access log** — who queried, pushed, or deleted model versions, with timestamps
- **Training data lineage document** — data source, preprocessing steps, quality checks, version tag
- **Inference monitoring screenshot** — alerting thresholds visible, at least one alert event with a resolution note
- **Model deployment changelog** — linked to change tickets, not just git commit hashes
- **Vendor assessment for AI APIs** — if you call an external LLM, your sub-processor assessment for that provider

That last item surprises teams most. If your product sends customer data to an external model provider, that vendor sits inside your SOC 2 scope. Your vendor due diligence file needs to include the provider's own SOC 2 report or equivalent attestation, a review of their data processing agreement, and your sub-processor disclosure policy.

## Scope: in versus out

Not every ML feature needs to be in scope. If the AI component processes no in-scope customer data, carries no customer-facing SLA, and is completely isolated from the system boundary described in your audit, you can argue it out. But you must make that case explicitly and in writing inside your system description — an auditor will not assume exclusion.

The memo you prepare should answer three questions [source: https://www.knowlee.ai/blog/soc-2-type-2-for-ai-companies-2026]:

1. Does the AI component process, store, or transmit data that falls within the in-scope system boundary?
2. Is the availability or accuracy of the AI feature covered by any customer-facing commitment?
3. Does a failure of the AI system affect the availability, integrity, or confidentiality of the in-scope system?

If the answer to any of them is yes, the component is in scope and controls must be mapped against it.

## Building the evidence habit before the audit window opens

The hardest part of SOC 2 for AI is that evidence is often ephemeral. Model versions get overwritten. Inference logs rotate off their default retention window. Training run metadata stays in a notebook that never gets committed to version control. By the time the audit window opens, the evidence for the first six months has been deleted.

Start collecting before the window. Tag your ML infrastructure resources in your monitoring stack with a label that flags them as in-scope. Set log retention to at least 12 months. Create a recurring quarterly task — slot it alongside your existing access review — that captures a dated screenshot of your inference monitoring dashboard, confirms retention settings are intact, and documents any model changes since the previous review. Thirty minutes per quarter produces the artefacts that answer the auditor's questions when the time comes.

The goal is to make audit evidence a side-effect of how you operate, not a separate scramble when the engagement letter arrives. Teams that wait until the audit window to instrument their ML pipeline almost always find that the historical evidence they need no longer exists.

SOC 2 for AI products is not a new framework — it is the same TSC applied to assets most compliance programmes were not tracking yet. CloudAnzen maps your ML infrastructure to the controls that matter and surfaces evidence gaps before your auditor does. [Talk to us](/demo).