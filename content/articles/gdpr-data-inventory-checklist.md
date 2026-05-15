---
title: "GDPR data inventory checklist"
summary: "A practical checklist for documenting systems, processing activities, vendors, and retention logic."
type: "checklists"
collection: "gdpr"
category: "GDPR"
readTime: "7 min read"
tags: ["GDPR","Privacy","Checklists"]
sortOrder: 5
author: "maria-rodriguez"
---
## What a usable data inventory should answer

Your inventory should make it easy to explain what data you collect, why you collect it, where it flows, who can access it, and how long you keep it.

For SaaS teams, the inventory should cover both product data and operational data. Customer account records, support tickets, analytics events, billing records, marketing contacts, logs, and vendor exports can all contain personal data.

## Checklist

- [ ] List each product and internal system that stores personal data
- [ ] Document categories of personal data processed in each system
- [ ] Record the lawful basis or business purpose
- [ ] Identify subprocessors or external recipients
- [ ] Record data residency and transfer considerations
- [ ] Document retention expectations and deletion workflows
- [ ] Link the process owner for each record
- [ ] Identify integrations that move data between systems
- [ ] Note whether data is manually exported or uploaded
- [ ] Record which systems support DSAR search or deletion
- [ ] Link vendors and subprocessors to each processing activity
- [ ] Record last reviewed date for each inventory item

## Common gap

Most inventories describe applications but not data movement. Add integrations, exports, and manual handoffs so the record reflects reality.

## Suggested fields

Use a simple table:

| Field | Example |
| --- | --- |
| System | Support platform |
| Data categories | Name, email, ticket content, logs |
| Purpose | Customer support |
| Data subjects | Customer users |
| Recipients | Support vendor, hosting provider |
| Location | US or EU region |
| Retention | Contract term plus support history period |
| Owner | Customer operations |
| DSAR support | Search and export available |
| Last reviewed | Quarterly |

The inventory does not need to be perfect on day one. It needs to be owned and maintained.

## Review triggers

Update the inventory when:

- A new feature collects personal data.
- A new vendor receives personal data.
- Data retention changes.
- A new region or hosting location is added.
- Support, analytics, or marketing workflows change.
- A DSAR reveals a missing system.

The inventory is most useful when connected to product and vendor change workflows. Otherwise it becomes stale shortly after creation.
