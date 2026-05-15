---
title: "SOC 2 evidence matrix template"
summary: "A simple way to track each control, its evidence source, owner, and review cadence before fieldwork starts."
type: "templates"
collection: "soc-2"
category: "SOC 2"
readTime: "7 min read"
tags: ["SOC 2","Evidence","Templates"]
sortOrder: 11
author: "chloe-thompson"
---
## Why teams need an evidence matrix

Audit prep breaks down when controls are defined but evidence is still tribal knowledge. An evidence matrix closes that gap. It gives every control an owner, a proof source, a refresh cadence, and a status before the auditor starts asking for samples.

The matrix is also useful before readiness. It shows which controls are not actually producing evidence yet. That makes it easier to fix gaps while there is still time.

## Recommended columns

| Field | Why it matters |
| --- | --- |
| Control | The exact control being tested |
| Owner | Who is accountable for the evidence |
| Evidence source | System, report, or document used |
| Frequency | How often evidence should refresh |
| Reviewer | Who confirms it still supports the control |
| Status | Ready, missing, stale, or under review |
| Sample period | Shows which time range the evidence covers |
| System of record | Identifies where the evidence is generated |
| Automation status | Manual, semi-automated, or automated |
| Exception notes | Captures known gaps or accepted deviations |
| Last refreshed | Keeps stale evidence visible |

## Operating tip

Do not wait until auditors ask for a sample. Build the matrix while implementing controls so missing evidence shows up early.

## Best use

Use the matrix during weekly readiness reviews to identify stale evidence before it becomes a late-stage blocker.

## Example rows

| Control area | Evidence source | Owner | Cadence | Status |
| --- | --- | --- | --- | --- |
| Access reviews | Identity review campaign export | IT owner | Quarterly | Ready |
| Change approvals | Pull request approval records | Engineering owner | Continuous | Ready |
| Vendor reviews | Vendor risk records | Security owner | Annual or renewal | Stale |
| Incident response | Incident tickets and postmortems | Security owner | Event-driven | Ready |
| Policy acknowledgment | HR or policy platform report | Compliance owner | Annual | Missing |

The matrix should make weak spots visible. If one control has no evidence source, the next action is not "ask later." The next action is to design the evidence path.

## Status definitions

Use clear statuses:

- Ready: evidence exists and was reviewed.
- Missing: evidence source does not exist or has not been collected.
- Stale: evidence exists but is outside the expected period.
- Under review: evidence exists but needs owner confirmation.
- Exception: control did not operate as expected and has a documented explanation.

Do not let "under review" become a parking lot. Every non-ready status should have an owner and due date.

## How to maintain it

Update the matrix whenever:

- A control changes.
- A system of record changes.
- An owner changes.
- The audit period changes.
- A test fails.
- Evidence becomes automated.

The best evidence matrix becomes a control operations tool, not just an audit artifact. It helps the team see where proof is reliable and where readiness is still fragile.
