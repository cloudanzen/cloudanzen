---
title: "SOC 2 Type II: evidence gaps that add months to your audit window"
summary: "The five evidence categories that routinely stall SOC 2 Type II audits and the collection cadence that closes the audit tail fast"
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["SOC 2","Type II","evidence collection","audit readiness","compliance"]
sortOrder: 47
publishedAt: "2026-05-24"
author: "chloe-thompson"
---
You scheduled your SOC 2 Type II observation window for six months. Your auditor arrives ready with an evidence request list. Three months later, you're still chasing GitHub merge logs, access review sign-offs, and incident tickets from last quarter. The observation period didn't add months to your audit. The missing evidence did.

## The five evidence categories auditors flag most

Most SOC 2 Type II failures trace back to five control areas where evidence collection consistently breaks down [source: https://accorppartners.com/blogs/soc-2/the-most-common-soc-2-audit-failures-and-how-smart-companies-avoid-them]. Each represents a control that ran — but left no usable trail.

### Logical access reviews

The criterion is clear: someone with authority reviews who has access to production systems, confirms each account is still needed, and removes what should not be there. The gap is documentation. An engineer runs the review in a spreadsheet. There is no timestamped export showing what was reviewed, what was found, and what action was taken.

Auditors sample across the observation period. A missing quarterly review is an exception. An exception triggers a remediation request. That request adds weeks.

### Change management

SOC 2's common criteria CC8.1 requires that changes to production go through an authorized approval workflow [source: https://www.a-lign.com/articles/what-is-soc-2-complete-guide]. The gap appears when teams merge to main with single-reviewer rules disabled, or when the approver and committer are the same person. It also appears when an incident forces a hotfix outside normal process with no compensating control documented afterward.

The process existed. The evidence did not.

### Vendor due diligence

Subservice organizations — your cloud provider, your payment processor, your identity vendor — require periodic risk assessment inside the observation window. Most teams conduct a vendor review at contract time and do not repeat it during the audit period. The auditor looks for evidence that reviews happened inside the window being tested. No review inside the window means an exception.

### Incident logging

Every security event during the observation period needs a formal record: what happened, who responded, what actions were taken, when it was resolved. Verbal standups and Slack threads are not sufficient unless they can be exported with full timestamps. Most teams cannot produce that export reliably.

### Monitoring reviews

Controls require not just that alerts are configured, but that alert output is reviewed and acted on. The gap here is common: alerts fire, someone checks, nothing is written down. Auditors want evidence that the monitoring control operated — not just that the tooling exists.

## Why these gaps survive until audit time

The root cause is not negligence. It is the difference between a control *running* and a control *leaving a usable trail*.

Access reviews get done. The evidence lives in a spreadsheet on a desktop or in a Jira ticket with no export path. Change management runs correctly for ten months — then one incident forces a hotfix with the approval step bypassed. Vendors are assessed at onboarding and not revisited during the observation period. None of this is wrong from an operations perspective. It is invisible to an auditor.

SOC 2 Type II covers a fixed observation period, typically six to twelve months [source: https://www.a-lign.com/articles/what-is-soc-2-complete-guide]. The auditor samples across that entire period. The sample will hit the one quarter where the access review output was not stored centrally. The sample will hit the incident that bypassed normal change management. The sample will hit the vendor whose review expired early in the window.

Teams preparing for their first Type II audit frequently find that controls were running correctly, but evidence for a significant portion of sampled control instances is missing or incomplete [source: https://dev.to/narendra_sahoo_a2aeff1193/why-many-companies-fail-soc-2-type-ii-and-how-to-avoid-the-same-mistakes-4nci]. That is not a process failure. It is a documentation failure — and documentation failures are preventable.

## What the timeline math actually looks like

Here is the sequence that turns a six-month observation period into nine or ten months of elapsed calendar time.

**Months 1–6:** The observation period runs. Controls operate.

**Month 7:** Your auditor delivers the initial evidence request list. The number of line items depends on how many trust services criteria are in scope and how well your control descriptions match your actual operating procedures.

**Months 7–8:** Your team hunts for evidence. Some items are ready. Others require reconstructing logs that were not preserved, or tracking down engineers who have left the company.

**Month 8:** The auditor issues exceptions for evidence that cannot be located or that does not match the control description on record.

**Months 8–9:** Remediation, re-testing, and in some cases a shorter additional observation period for controls that had no usable evidence.

**Month 9–10:** Audit report issued.

The gap between observation period end and report issuance is the audit tail. Teams that gather evidence at the moment controls run — not during fieldwork — close that tail dramatically [source: https://accorppartners.com/blogs/soc-2/the-most-common-soc-2-audit-failures-and-how-smart-companies-avoid-them]. The difference is not about working harder during the audit. It is about what was captured during the observation period.

## A collection cadence that does not eat engineering time

The fix is not to hire a compliance analyst before audit season. The fix is to capture evidence at the moment the control runs, in a format an auditor can use without reconstruction.

**Access reviews.** Automate the export. Run the review inside your identity provider — Okta, Google Workspace, or Azure AD — and export the output to a shared folder with a date-prefixed filename. The export is the evidence. A scanned spreadsheet is not.

**Change management.** Require at least one approver who is not the committer in your source control configuration. Disable force-pushes to main. For hotfixes that bypass normal review, require a post-merge approval documented in the pull request itself within 24 hours.

**Vendor reviews.** Schedule quarterly vendor risk reviews on the calendar before the observation period starts. Use a consistent template. Store the completed template — not just a calendar entry showing the meeting occurred.

**Incident logs.** Require a written post-incident summary for every significant event. One paragraph is enough: what happened, who responded, what was done, when it was closed. Store it somewhere your auditor can retrieve it without a data export request.

**Monitoring.** Create a recurring log confirming that alert output was reviewed during that period. A timestamped record showing who reviewed, what the alert volume was, and what action was taken. The log does not need to be long. It needs to exist.

## The cost of hunting versus collecting

Reconstruction costs more than collection — in engineering hours, in audit time, and in exceptions.

When an auditor requests access review evidence for Q2 and you must reconstruct it from memory and partial Git history, you are spending engineer hours that could ship product. When that reconstruction produces output that does not match the control description in your audit scope, you are generating an exception that extends the audit.

Teams that collect continuously have a cleaner audit conversation. The auditor requests evidence. You produce it in hours. The exception rate drops. The audit tail shrinks. Your engineering team is not pulled into compliance fieldwork for months [source: https://dev.to/narendra_sahoo_a2aeff1193/why-many-companies-fail-soc-2-type-ii-and-how-to-avoid-the-same-mistakes-4nci].

The observation period does not need to be painful. The fieldwork does not need to consume a quarter. Both are outcomes of evidence collection choices made before the auditor arrives.

Evidence gaps are an operational problem, not a security problem. Your controls are likely running — the trail is what is missing. CloudAnzen continuously maps your stack to SOC 2 controls and surfaces evidence gaps before your auditor does, so the observation period closes fast and the audit report follows. [Talk to us](/demo).