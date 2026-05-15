---
title: "Vendor risk tiering template"
summary: "A simple tiering model to decide which vendors need fast review, deep review, or ongoing monitoring."
type: "templates"
collection: "vendor-risk"
category: "Vendor Risk"
readTime: "6 min read"
tags: ["Vendor risk","Templates","Procurement"]
featured: true
sortOrder: 4
author: "maria-rodriguez"
---
## Goal

Use a consistent tiering model before sending long questionnaires to every vendor. Tiering helps teams decide which vendors need deep review, which need standard review, and which can move through a lighter approval path.

Without tiering, teams either over-review low-risk vendors or under-review vendors that matter. Both create problems. A good model focuses effort where vendor failure would create real customer, compliance, privacy, or operational risk.

## Recommended tiers

| Tier | When to use | Review depth |
| --- | --- | --- |
| Tier 1 | Vendor handles sensitive customer, employee, or regulated data | Full review with security evidence and contractual checks |
| Tier 2 | Vendor supports important business operations but limited sensitive data | Standard review with lighter evidence requests |
| Tier 3 | Low-impact tools with limited or no sensitive data access | Intake plus lightweight approval |

You can rename tiers to critical, high, medium, and low if that fits your program. The important part is that each tier has clear criteria and review expectations.

## Decision inputs

- Data sensitivity
- Access to production systems
- Business criticality
- Regulatory impact
- Subprocessor dependency
- Availability dependency
- Contract value or strategic importance
- Access to employee or customer support data
- Ability to modify or influence customer-facing systems

## Intake checklist

- [ ] Confirm business owner
- [ ] Confirm data types involved
- [ ] Confirm integration method and access level
- [ ] Confirm required contract and security documents
- [ ] Assign renewal review date
- [ ] Confirm whether the vendor is customer-facing or internal only
- [ ] Identify subprocessors or downstream dependencies
- [ ] Record approval decision and conditions

## Review requirements by tier

| Requirement | Tier 1 | Tier 2 | Tier 3 |
| --- | --- | --- | --- |
| Business owner | Required | Required | Required |
| Data review | Detailed | Standard | Basic |
| Security evidence | SOC 2, ISO, questionnaire, or equivalent | Questionnaire or security summary | Usually not required |
| Contract or DPA review | Required when data is involved | As needed | As needed |
| Renewal review | Annual or before renewal | Annual or risk-based | Lightweight confirmation |
| Exception tracking | Required | Required for material gaps | Optional |

This gives reviewers a consistent path and helps business teams understand what will be requested.

## Approval outcomes

Use standard outcomes:

- Approved
- Approved with condition
- More information needed
- Escalated for security, privacy, or legal review
- Rejected

For conditional approvals, document the condition, owner, and due date. For example, a vendor may be approved only after a DPA is signed or after SSO is enabled.

## Tip

Your tiering model should reduce noise. If every vendor lands in Tier 1, the model is not doing its job.

Review the model every few months. If reviewers keep overriding tiers, your criteria may be unclear. If business owners do not understand why a vendor is high risk, add examples. The tiering model should make decisions faster and more consistent, not add another confusing step.
