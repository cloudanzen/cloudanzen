---
title: "Privacy-by-design review checklist"
summary: "A checklist for reviewing new features or workflows that collect, use, or expose personal data."
type: "checklists"
collection: "gdpr"
category: "GDPR"
readTime: "6 min read"
tags: ["GDPR","Privacy by design","Checklists"]
sortOrder: 35
author: "maria-rodriguez"
---
## Before launch

- [ ] Define the purpose for collecting the data
- [ ] Confirm the minimum data needed for that purpose
- [ ] Check where the data is stored and who can access it
- [ ] Review vendor or subprocessor involvement
- [ ] Confirm retention and deletion expectations
- [ ] Identify whether user-facing notices or workflow changes are needed
- [ ] Confirm whether the feature changes the RoPA or data inventory
- [ ] Identify whether vendors or subprocessors are involved
- [ ] Review analytics, logging, and export behavior
- [ ] Confirm whether consent, preference, or opt-out flows are affected
- [ ] Decide whether a DPIA or deeper privacy review is needed

## Why teams use this

It turns privacy review into a repeatable product workflow instead of a last-minute legal checkpoint.

## Product questions

Ask:

- What user problem does the feature solve?
- What personal data is required?
- Can the same outcome be achieved with less data?
- Will data be visible to new roles or teams?
- Will data be shared with a new vendor?
- Does the feature introduce new automated decisions or profiling?
- Does the feature affect children, employees, patients, or other sensitive groups?

These questions help product and privacy teams identify risk early without blocking every release.

## Engineering questions

Confirm:

- Data location
- Access controls
- Logging behavior
- Retention and deletion logic
- Encryption expectations
- Admin or support access paths
- Export or integration behavior

Privacy-by-design is not only a notice review. It needs technical implementation details.

## Review outcome

Close the checklist with one of these outcomes:

- Approved
- Approved with changes
- More information needed
- Requires legal or privacy review
- Requires DPIA or security review before launch

Record the decision, owner, and any required follow-up. A lightweight record makes future audits, DSARs, and customer questions easier to answer.
