---
title: "Third-party risk review checklist"
summary: "A lean checklist for assessing a new vendor without losing the basics during intake."
type: "checklists"
collection: "vendor-risk"
category: "Vendor Risk"
readTime: "6 min read"
tags: ["Vendor risk","Checklists","Procurement"]
sortOrder: 15
author: "maria-rodriguez"
---
## Intake checklist

- [ ] Confirm business owner and intended use case
- [ ] Identify sensitive data categories involved
- [ ] Record access level to production systems or internal users
- [ ] Confirm security documentation requested and received
- [ ] Assign risk tier and review depth
- [ ] Capture contractual or privacy dependencies
- [ ] Set renewal review date and accountable owner
- [ ] Confirm whether the vendor is replacing an existing tool
- [ ] Document hosting region and subprocessor dependencies
- [ ] Record integration method and permissions requested
- [ ] Capture approval decision and conditions
- [ ] Link vendor record to relevant controls or customer commitments

## Practical note

The goal is not to create the longest questionnaire. The goal is to decide quickly whether the vendor fits, needs deeper review, or should be blocked.

## Risk signals to check

Escalate the review when the vendor:

- Stores or processes customer data
- Handles employee, financial, health, or regulated data
- Has access to production systems
- Can affect availability of customer-facing services
- Uses many subprocessors
- Cannot provide current security evidence
- Requires broad OAuth or API permissions
- Has weak incident notification terms

These signals do not always mean the vendor should be rejected. They mean the decision needs more evidence and clearer ownership.

## Evidence to request

For higher-risk vendors, request:

- Security report or certification
- Security questionnaire
- DPA or privacy terms
- Subprocessor list
- Incident response or notification terms
- Business continuity summary
- Data retention and deletion documentation

For lower-risk vendors, a basic intake record and business approval may be enough.

## Decision outcomes

Use standard outcomes:

- Approved
- Approved with conditions
- Needs more evidence
- Escalated to privacy, legal, or security
- Rejected

Document the rationale. Future reviewers should understand why the vendor was approved and what needs to be checked at renewal.
