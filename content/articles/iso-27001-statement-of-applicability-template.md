---
title: "ISO 27001 statement of applicability template"
summary: "A lightweight way to document which Annex A controls apply, why they apply, and how they are implemented."
type: "templates"
collection: "iso-27001"
category: "ISO 27001"
readTime: "7 min read"
tags: ["ISO 27001","SoA","Templates"]
sortOrder: 21
author: "sarah-jenkins"
---
## What the SoA should capture

Your statement of applicability should connect three things clearly: the control, the implementation decision, and the reason behind it. The SoA is not just a list of Annex A controls. It is the bridge between your risk assessment, chosen controls, implementation status, and audit evidence.

Reviewers should be able to open the SoA and understand which controls apply, which do not, why those decisions were made, and where evidence lives.

## Recommended columns

| Field | Purpose |
| --- | --- |
| Control reference | Identifies the Annex A control |
| Applicable | Yes or no |
| Justification | Why it applies or does not |
| Implementation status | Planned, active, or not applicable |
| Evidence source | Where proof lives |
| Control owner | Who maintains the control |
| Risk link | Which risk or requirement the control supports |
| Review date | When the decision was last checked |
| Notes | Context for partial implementation or exceptions |

## Practical advice

Keep the SoA synchronized with your risk treatment logic. If they diverge, reviews become harder than they need to be.

## Decision language

Use consistent applicability decisions:

- Applicable: the control is relevant and implemented or planned.
- Not applicable: the control does not apply to the ISMS scope.
- Partially applicable: part of the control applies or implementation is staged.

Every "not applicable" decision needs a reason. For example, a control may not apply because the company does not operate a physical office, does not perform a specific activity, or relies on a cloud provider for a component outside its direct operation. The justification should be specific enough for an auditor to follow.

## Implementation status

Track implementation separately from applicability. A control can be applicable but not fully implemented. Useful status values:

- Implemented
- Implemented with exception
- Planned
- In progress
- Not applicable

This distinction helps management see where treatment work remains.

## Connect the SoA to evidence

Each applicable control should link to one or more evidence sources:

- Policy or procedure
- System configuration
- Access review record
- Risk treatment action
- Vendor evidence
- Monitoring output
- Internal audit result

Do not wait until audit prep to add evidence links. Maintaining them during normal operations keeps the SoA useful.

## Review cadence

Review the SoA when:

- The risk assessment changes.
- A new system, vendor, or business process enters scope.
- An internal audit finds a control gap.
- A control is retired or replaced.
- ISO 27001 certification or surveillance audit planning begins.

The SoA should evolve with the ISMS. If it only changes once a year, it is probably lagging behind reality.
