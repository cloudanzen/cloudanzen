---
title: "ISO 27001 ISMS scope: contractor and freelancer boundary decisions"
summary: "Where contractors and freelancers sit in your ISO 27001 ISMS scope — four boundary questions, documentation patterns, and common gaps that surface at Stage 1"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "7 min read"
tags: ["ISO 27001","ISMS scope","contractor compliance","access control","audit readiness"]
sortOrder: 159
publishedAt: "2026-09-23"
author: "sarah-jenkins"
---
Many Series B SaaS teams run lean. Your infrastructure engineer might be a full-time employee in Warsaw, a contractor invoicing through their LLC in Bangalore, and a freelance DevOps consultant in Austin who has production access three days a week. When you sit down to write your ISO 27001 ISMS scope statement, the question every auditor will ask is: which of those people are in scope?

Get the answer wrong and you either over-scope — paying to govern people and systems you did not need to include — or under-scope, leaving control gaps that surface in Stage 1.

## Why contractor boundaries matter in ISMS scope

ISO 27001 Clause 4.3 asks you to define the scope in terms of the external and internal context of the organisation [source: https://www.iso.org/standard/27001]. The standard does not define "employee" as the scope boundary. It asks where your information assets live, who touches them, and what controls apply.

Contractors and freelancers often fall into a grey zone. They are not employees, so your HR controls — background checks via a standard employment process, company-issued devices, mandatory training tracked in your LMS — may not automatically apply. But they frequently have access to production databases, source code repositories, or customer data: exactly the assets your ISMS exists to protect.

Certification bodies consistently document [source: https://www.isms.online/iso-27001/] that access provisioning, de-provisioning, training, and background verification must apply equally to contractors and employees where those contractors touch in-scope systems. If you cannot show that evidence, the contractor is functionally in scope whether or not your scope statement says so.

## The four boundary questions auditors will ask

Before you finalize your scope statement, run through these four questions for every active contractor and freelancer.

**Do they access systems or data defined as in-scope?**

If a contractor has read access to your production database or your object storage holding customer PII, they interact with in-scope information assets. Access alone is sufficient to bring them within the control perimeter — even if the underlying contract is with their limited company rather than with your company directly.

**Do they have the ability to affect confidentiality, integrity, or availability?**

A freelance DevOps engineer with deploy rights can cause an outage. A freelance data analyst with SQL access can extract customer records. Scope is about risk exposure, not employment status.

**Is the relationship ongoing or intermittent?**

A one-off graphic designer who never touches production systems is easy to exclude and document. A contractor who has held an active AWS IAM role for over a year is harder to argue out of scope, and the auditor will see that tenure in your access logs.

**Is the work performed from a controlled endpoint?**

If contractors use company-issued devices enrolled in your MDM, control evidence already covers them. If they use personal hardware, you need a separate answer to endpoint risk — a BYOD policy, a requirement to connect via a VDI, or a written acceptance of device standards before access is provisioned.

## How to document contractor scope decisions

The scope statement in ISO 27001 needs to be a living document, not a paragraph written during certification prep and never revisited. For contractor boundary decisions, the approach that holds up at audit is a short contractor access register — separate from your HR system but linked to your access review process.

The register should capture the contractor name or reference, the contracting entity (their company, not your payroll), the in-scope systems accessed, the access level (read, write, admin), the contract start date and expected end date, whether standard ISMS training has been completed, and the background verification method and date.

This is not bureaucracy for its own sake. When an auditor asks "show me how you manage access for non-employees," you can pull a single view rather than scrambling across four systems.

Keep the register in your GRC tool or a shared document with version history. Update it whenever a contractor's access profile changes — not just at annual review.

## Common scope mistakes that surface at Stage 1

**Including contractors in the scope statement without including them in controls.** This is the most common error. Companies write "the ISMS covers all personnel with access to information assets" in their scope document, then discover that several contractors have never completed awareness training and were never subject to background checks. The scope statement and the evidence must match.

**Excluding contractors to keep the scope tidy, then granting them production access.** Auditors review access logs, not just scope statements. If your access logs show a user without an internal email domain pulling from your production database, you will get a nonconformity even if the scope document excluded contractors entirely.

**Failing to de-provision contractors at contract end.** ISO 27001 Annex A control A.5.18 on access rights [source: https://www.isms.online/iso-27001/] requires that access rights are removed when the employment or contractual relationship ends. Extended access after contract expiry is a common finding in surveillance audits. Your offboarding checklist should treat contractor termination the same as employee resignation.

**Not re-evaluating scope when contractors change roles.** A contractor hired to write internal documentation who is later asked to support release management has a materially different access profile. Your scope and access review process should flag that transition — ideally via a change request that routes through your access governance process before the new access is granted.

## Practical steps before your Stage 1 audit

If your Stage 1 audit is approaching and you have not yet mapped your contractor population to scope, here is a practical sequence that takes roughly two weeks for a team up to fifty people.

First, pull an access inventory from your identity provider — filtered to non-employee accounts. The email domain or naming convention usually separates contractors from employees, but verify against your payroll or HR system to catch edge cases.

Second, for each account, check the access level against your in-scope system inventory. Any account with write access to production or read access to data classified as Restricted or Confidential is in scope.

Third, check whether ISMS training and background verification evidence exists for each of those accounts. Gaps become your remediation list before Stage 1.

Fourth, make the scope decision explicit: either include the contractor under your ISMS controls and close the evidence gaps before the audit, or exclude them with a documented rationale and revoke their in-scope access before the auditor arrives.

The rationale for exclusion needs to survive scrutiny. "They are a contractor, not an employee" is not sufficient on its own. "They have access only to systems classified as Internal with no customer data, and all access is read-only via a BYOD VDI session" is defensible because it addresses the risk, not just the employment relationship.

Run this exercise at every annual surveillance audit. Contractor populations turn over faster than employee headcount, and stale access is one of the most common surveillance findings.

Mapping contractor access to ISMS controls continuously is hard to do manually when you are running a lean team. CloudAnzen surfaces access gaps against your control framework before the auditor does, so your scope statement and your evidence stay aligned. [Talk to us](/demo).