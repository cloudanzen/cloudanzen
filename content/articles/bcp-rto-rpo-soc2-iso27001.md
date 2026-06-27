---
title: "SaaS BCP: aligning RTO, RPO, and recovery tiers with SOC 2 and ISO 27001"
summary: "How to align BCP recovery objectives with SOC 2 availability criteria and ISO 27001 A.5.29 so your evidence holds up at audit"
type: "blog"
collection: null
category: "Risk management"
readTime: "5 min read"
tags: ["business continuity","RTO RPO","SOC 2","ISO 27001","BCP"]
sortOrder: 78
publishedAt: "2026-06-27"
author: "james-peterson"
---
Business continuity planning is the test no one wants to fail in front of an auditor. Most SaaS teams have a BCP document — few have mapped it to SOC 2 availability criteria or ISO 27001 Annex A. Auditors are not checking whether the plan exists. They are checking whether RTO and RPO targets are tested, justified, and defensible.

## Why RTO and RPO become audit exhibits

Recovery Time Objective (RTO) is the maximum time a system can be down before it causes unacceptable business impact. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time. These are not just disaster recovery terms — they are evidence anchors.

Under SOC 2, the Trust Services Criteria require you to set availability commitments and match your system design to them. Under ISO 27001, Annex A control A.5.29 requires documented continuity objectives. Both frameworks ask the same question: where did these numbers come from, and when did you last verify them?

If the answer is "we picked them three years ago in a spreadsheet," that is a finding.

Setting RTO and RPO starts with a Business Impact Analysis (BIA). The BIA identifies which systems are business-critical, what the operational consequence of downtime is, and how quickly each system needs to be restored. NIST SP 800-34r1 provides a structured methodology for this process [source: https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final].

## How SOC 2 availability criteria map to your BCP

The SOC 2 Trust Services Criteria for Availability (A1.1–A1.3) require you to:

- **A1.1**: Identify and document availability commitments in customer agreements
- **A1.2**: Monitor capacity, detect incidents, and respond to availability events
- **A1.3**: Test recovery procedures and demonstrate they meet commitments

The CC9.1 risk mitigation criterion also requires identification of risks to service continuity and controls to address them.

Common audit gaps:

- RTO/RPO targets set in the BCP but not reflected in the customer-facing SLA
- Recovery procedures documented but never tested
- Test results not retained as evidence

The fix is not a longer document. It is a test log with timestamps and a clear mapping from test results back to your BCP targets.

## ISO 27001 and the business continuity control cluster

ISO 27001:2022 reorganized business continuity controls into Annex A section A.5.29 (Information security continuity) and A.5.30 (ICT readiness for business continuity). These replace A.17.1 and A.17.2 from the 2013 edition.

ISO 22301 is the standalone standard for business continuity management systems [source: https://www.iso.org/standard/50050.html]. ISO 22301 certification is not required to satisfy ISO 27001 requirements, but the framework is a useful reference for structuring the BCP.

What auditors look for in ISO 27001 audits:

- A documented BCP scope that maps to the ISMS scope
- Roles and responsibilities during a continuity event
- Evidence that continuity plans have been tested and results reviewed by management
- Integration of lessons learned into the next iteration

One pattern that trips teams: the ISMS scope is defined as "production systems in AWS us-east-1" but the BCP does not specify which systems within that scope are covered and at what tier. The auditor will ask. Have the answer ready before they do.

## Structuring recovery tiers so auditors do not ask twice

Not every system needs a four-hour RTO. Recovery tiers help allocate resources and justify priorities. A three-tier model works for most SaaS teams:

**Tier 1 — Critical** (RTO ≤ 4 hours, RPO ≤ 1 hour): Core application, authentication, and payment processing. Customer-facing. Downtime triggers an SLA breach.

**Tier 2 — Important** (RTO ≤ 24 hours, RPO ≤ 4 hours): Internal tools, reporting pipelines, secondary APIs. Downtime is operationally painful but not an SLA event.

**Tier 3 — Standard** (RTO ≤ 72 hours, RPO ≤ 24 hours): Development environments, archived data, batch processing. Restored in an ordered queue.

CISA recommends mapping tiers to BIA findings so each classification is grounded in actual business impact [source: https://www.cisa.gov/topics/risk-management/business-continuity-planning]. Tier assignments without BIA justification look arbitrary to auditors and reviewers alike.

Each tier should specify: backup frequency, restore target environment, owner, and test cadence.

## Building the evidence package auditors actually check

Documentation is necessary but not sufficient. Auditors want evidence of operation — not just of intent. The minimum evidence set for BCP audits:

**BIA documentation**: System inventory, criticality ratings, and the business impact of downtime for each system. Date-stamped and reviewed annually.

**BCP document**: Scope, objectives, roles, escalation paths, communication templates, and recovery procedures by tier. Linked to the ISMS policy.

**Test records**: Tabletop exercise logs, failover test results, and restoration test reports. Every test record should include: date, participants, scenario tested, outcome against RTO/RPO target, and corrective actions identified.

**Plan maintenance log**: Evidence that the BCP is reviewed and updated after significant infrastructure changes, incidents, or annually — whichever comes first.

**Customer notification playbook**: For SOC 2, you need a documented process for notifying customers during availability events. This should reference your service description commitments and map to A1.1 criteria.

A common efficiency gain is linking the BCP test record directly to your access review and incident response cadence — one audit cycle, one evidence pull.

Treating BCP testing as an operational habit rather than a compliance exercise means running at least one tabletop per quarter and one full failover per year, with documented results each time [source: https://www.accrets.com/backupanddr/business-continuity-planning-and-disaster-recovery-bcp-dr/].

BCP preparation consumes engineering and legal cycles every time an auditor asks for it. CloudAnzen maps your recovery objectives to SOC 2 and ISO 27001 controls continuously, so the evidence is ready when the auditor is. [Talk to us](/demo).