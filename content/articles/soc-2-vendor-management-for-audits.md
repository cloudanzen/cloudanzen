---
title: "SOC 2 vendor management for audits"
summary: "How to keep vendor oversight organized so third-party controls do not become late audit surprises."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "5 min read"
readTime: "7 min read"
tags: ["SOC 2","Vendor risk","Audits"]
sortOrder: 20
---
## The common issue

Teams remember to assess new vendors, but they do not maintain a review process for existing ones that support customer systems.
Teams usually remember to assess new vendors during onboarding. The harder part is maintaining oversight after the contract is signed. By the time SOC 2 evidence is due, vendor records may be scattered across procurement emails, security questionnaires, contract folders, renewal notices, and ticket comments.

That creates audit friction because vendor management is not only about choosing vendors once. It is about showing that the company understands which third parties affect the system, reviews them at an appropriate cadence, and responds to risks or exceptions.

For SaaS teams, vendor oversight is especially important because critical controls often depend on third parties: cloud hosting, identity providers, code repositories, customer support platforms, monitoring tools, payment processors, and data subprocessors.

## What auditors look for

- Clear inventory of in-scope vendors
- Evidence of review or due diligence
- Contracts and security commitments where relevant
- Follow-up on material risks or exceptions
- A risk-based review cadence
- Ownership for vendor relationships
- Evidence that reviews happened before or during the audit period

Auditors are not usually expecting a huge procurement program from a small SaaS company. They are expecting a process that is consistent, risk-aware, and documented.

The evidence story should answer:

- Which vendors support the service?
- Which vendors handle customer data?
- Which vendors are critical to availability or security?
- Who owns the relationship?
- What review was performed?
- What evidence was considered?
- What exceptions or follow-up actions were created?

If those answers are easy to produce, vendor management becomes a manageable audit area. If they are buried in individual inboxes, it becomes one of the late surprises.

## Build a vendor inventory that is useful

A vendor inventory should be more than a list of names. At minimum, track:

- Vendor name
- Business owner
- Service provided
- Data handled
- System or process supported
- Risk tier
- Contract or DPA location
- Last review date
- Next review date
- Current review status
- Exceptions or open risks

The risk tier matters because not every vendor needs the same depth of review. A vendor that hosts production data needs more diligence than a tool used for internal design drafts. A vendor that affects authentication needs more attention than a low-risk office utility.

Keep the inventory small enough to maintain. A stale vendor inventory is worse than a simple one because it gives the team false confidence.

## Tie reviews to vendor risk tiers

Use a practical tiering model:

- Critical: production hosting, identity, security monitoring, customer data stores, core service dependencies
- High: vendors that process customer data or can materially affect service commitments
- Medium: business systems with sensitive internal data or important operational dependencies
- Low: vendors with minimal data access and no production impact

Critical and high-risk vendors should have stronger evidence: security reports or certifications, privacy and data processing terms, incident notification commitments, and review notes. Medium vendors may need a lighter review. Low-risk vendors may only need basic ownership and approval records.

The point is not to over-document every vendor. The point is to show that review depth matches risk.

## Keep vendor evidence current

The most common vendor evidence problems are simple:

- The security report is expired.
- The vendor owner left the company.
- The review was never completed after onboarding.
- The vendor changed product scope but the risk tier was never updated.
- A noted exception has no follow-up.

Create a renewal review loop so vendor oversight does not depend on memory. Use renewal dates, contract review dates, or scheduled review campaigns to trigger reassessment.

For critical vendors, the review should confirm whether:

- The service is still used.
- The data handled is unchanged.
- The vendor's security posture is still acceptable.
- Any open risks have been resolved or accepted.
- Contract terms still match the way the vendor is used.

## The practical fix

Tie vendor reviews to your broader control program so renewals, exceptions, and evidence live in one place rather than scattered email threads.
- A risk-based review cadence
- Ownership for vendor relationships
- Evidence that reviews happened before or during the audit period

Auditors are not usually expecting a huge procurement program from a small SaaS company. They are expecting a process that is consistent, risk-aware, and documented.

The evidence story should answer:

- Which vendors support the service?
- Which vendors handle customer data?
- Which vendors are critical to availability or security?
- Who owns the relationship?
- What review was performed?
- What evidence was considered?
- What exceptions or follow-up actions were created?

If those answers are easy to produce, vendor management becomes a manageable audit area. If they are buried in individual inboxes, it becomes one of the late surprises.

## Build a vendor inventory that is useful

A vendor inventory should be more than a list of names. At minimum, track:

- Vendor name
- Business owner
- Service provided
- Data handled
- System or process supported
- Risk tier
- Contract or DPA location
- Last review date
- Next review date
- Current review status
- Exceptions or open risks

The risk tier matters because not every vendor needs the same depth of review. A vendor that hosts production data needs more diligence than a tool used for internal design drafts. A vendor that affects authentication needs more attention than a low-risk office utility.

Keep the inventory small enough to maintain. A stale vendor inventory is worse than a simple one because it gives the team false confidence.

## Tie reviews to vendor risk tiers

Use a practical tiering model:

- Critical: production hosting, identity, security monitoring, customer data stores, core service dependencies
- High: vendors that process customer data or can materially affect service commitments
- Medium: business systems with sensitive internal data or important operational dependencies
- Low: vendors with minimal data access and no production impact

Critical and high-risk vendors should have stronger evidence: security reports or certifications, privacy and data processing terms, incident notification commitments, and review notes. Medium vendors may need a lighter review. Low-risk vendors may only need basic ownership and approval records.

The point is not to over-document every vendor. The point is to show that review depth matches risk.

## Keep vendor evidence current

The most common vendor evidence problems are simple:

- The security report is expired.
- The vendor owner left the company.
- The review was never completed after onboarding.
- The vendor changed product scope but the risk tier was never updated.
- A noted exception has no follow-up.

Create a renewal review loop so vendor oversight does not depend on memory. Use renewal dates, contract review dates, or scheduled review campaigns to trigger reassessment.

For critical vendors, the review should confirm whether:

- The service is still used.
- The data handled is unchanged.
- The vendor's security posture is still acceptable.
- Any open risks have been resolved or accepted.
- Contract terms still match the way the vendor is used.

## The practical fix

Tie vendor reviews to your broader control program so renewals, exceptions, and evidence live in one place rather than scattered email threads.

Operationally, that means:

1. Assign every in-scope vendor an owner.
2. Assign a risk tier at onboarding.
3. Require review evidence before approving high-risk vendors.
4. Set a next review date.
5. Track exceptions with an owner and due date.
6. Reassess vendors before renewal.
7. Link vendor records to relevant SOC 2 controls.

This gives the audit team a clean path from control to evidence. It also helps the business make better renewal decisions because risk context is visible before the contract is already due.

## What good evidence looks like

Good vendor evidence is not only a downloaded security report. A complete record may include:

- Risk tier and rationale
- Data categories handled
- Security report or questionnaire
- Contract and data processing terms
- Approval decision
- Follow-up questions or exceptions
- Renewal review notes
- Owner attestation that the vendor is still needed

The evidence should show judgment. If a vendor has a known gap, document the decision: was the risk accepted, remediated, or mitigated another way? Auditors are generally more comfortable with a documented risk decision than an unexplained gap.

## Make vendor oversight part of normal operations

Vendor management fails when it is treated as an annual audit chore. It works when it connects procurement, security, legal, and business owners in a lightweight process.

The best audit outcome is not a perfect vendor file. It is a repeatable vendor oversight rhythm that shows the company knows which third parties matter, reviews them according to risk, and follows up when something changes.
