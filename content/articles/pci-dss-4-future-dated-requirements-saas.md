---
title: "PCI DSS 4.0: the future-dated requirements SaaS teams got wrong"
summary: "PCI DSS 4.0 future-dated requirements became mandatory in March 2025 — here is what 6.4.3, 11.6.1, and 12.3.2 actually demand from SaaS payment teams"
type: "blog"
collection: null
category: "PCI DSS"
readTime: "5 min read"
tags: ["PCI DSS 4.0","future-dated requirements","SAQ A","payment security","gap assessment"]
sortOrder: 56
publishedAt: "2026-05-27"
author: "james-peterson"
---
The March 2025 deadline for PCI DSS 4.0 future-dated requirements has passed. Most teams were aware the deadline existed. Far fewer were ready for what the requirements actually demand in evidence, tooling, and ongoing operational process. The same cluster of controls is showing up in almost every gap assessment right now. Here is what those controls require and what a compliant implementation looks like in practice.

## What “future-dated” actually meant

PCI DSS 4.0 was published in March 2022. Organizations had until March 31, 2024, to migrate from v3.2.1 [source: https://www.pcicompliance.com/pci-dss-4-0-timeline/]. A second tier of requirements — ones the Council explicitly labeled “best practices at the time of publication” — became mandatory on March 31, 2025 [source: https://www.pcicompliance.com/pci-dss-4-0-timeline/].

The Council’s intent was clear: organizations had time to plan and budget. What many teams miscalculated was the operational lift. Reading the spec is not the same as building the process, assigning the tooling, and generating the evidence your QSA will pull against.

## The requirements that caught teams off guard

### 6.4.3 and 11.6.1: payment page scripts

Requirements 6.4.3 and 11.6.1 are the pair most SaaS payment teams were least prepared for. Together, they require that every script executing in a consumer’s browser on a payment page is authorized via a documented inventory, verified for integrity on each page load, and monitored for unauthorized modification.

Requirement 11.6.1 adds a specific technical mandate: an automated mechanism must check HTTP headers and script contents at minimum every seven days [source: https://www.feroot.com/blog/saq-a-ep-top-5-actions-merchants-must-take-to-comply-with-pci-dss-4-requirements-6-4-3-and-11-6-1-by-march-31-2025/].

The practical implication: a standard third-party checkout integration — payment provider JavaScript embedded in your page — falls inside scope for 6.4.3. You need a documented, authorized inventory of every script, its purpose, and evidence that its integrity is verified on each load. Most SaaS teams had no tooling for this before the deadline.

### 8.3.6 and 8.4.2: authentication in the CDE

Minimum password length for cardholder data environment access moved to 12 characters [source: https://blog.basistheory.com/pci-requirements-in-2025] under requirement 8.3.6. Requirement 8.4.2 requires multi-factor authentication for all non-console access into the CDE — not only admin accounts.

If your environment still had service accounts with long-lived passwords, or any interactive access path to CDE-scope systems protected by a password alone, March 2025 was the deadline to close those gaps.

### 12.3.2: targeted risk analysis

Requirement 12.3.2 mandates a documented targeted risk analysis for every PCI DSS requirement where the standard gives you flexibility on implementation frequency or method.

This sounds administrative. In practice, it adds a non-trivial evidence burden to every control that uses language like “periodically” or “at a frequency defined by the entity.” A quarterly access review justified by “we always do it quarterly” does not satisfy 12.3.2. You need a documented analysis explaining why your chosen frequency and method is appropriate for the specific risk profile of your environment.

## Where SAQ A merchants got surprised

SAQ A has historically been the low-burden self-assessment path. You redirect to a payment processor; the processing happens server-side at the payment provider; minimal surface area falls inside your scope.

Under PCI DSS 4.0, SAQ A merchants are in scope for requirements 6.4.3 and 11.6.1 if they embed payment processing scripts in their pages, even when the actual transaction processing is handled by the payment provider [source: https://www.feroot.com/blog/saq-a-ep-top-5-actions-merchants-must-take-to-comply-with-pci-dss-4-requirements-6-4-3-and-11-6-1-by-march-31-2025/]. The fact that a payment provider handles the transaction does not remove your obligation to maintain an authorized script inventory for their JavaScript running in your payment page context.

This expanded scope catches SaaS teams who assumed SAQ A meant the payment compliance burden primarily sits with the payment provider.

## What compliant implementation looks like

For 6.4.3 and 11.6.1, you need three things running continuously: a maintained inventory of every authorized script on payment pages, an integrity verification mechanism (subresource integrity attributes or equivalent), and an automated monitoring solution that checks script content and HTTP headers on the required cadence. A manual review process does not satisfy 11.6.1’s automation requirement.

For 12.3.2, every control in your scope that has flexibility language needs a corresponding risk analysis document. The analysis must be reviewed at least annually and whenever significant changes occur to your environment or risk profile. Build the review cadence into your GRC calendar now rather than assembling documents under pressure before your QSA engagement.

For 8.3.6 and 8.4.2, the implementation is straightforward but the scope is broader than most teams assume: break-glass accounts, service accounts that human operators can authenticate to, and CI/CD pipeline access into CDE-scope systems all need to meet the new authentication requirements.

## Running the gap assessment before your next QSA

If you have not reviewed your environment against the future-dated requirements since March 2025, start here:

1. Pull your current SAQ or RoC and identify every control with a flexibility provision — language like “periodically,” “as needed,” or “at a frequency defined by the entity.”
2. Confirm you have a documented 12.3.2 targeted risk analysis for each of those controls.
3. Run an inventory audit on your payment pages — load them with network tracing enabled and log every script source against your authorized inventory list.
4. Verify your 11.6.1 monitoring mechanism is operational and generating dated evidence records.

The Council has published guidance on the v4.x transition to help organizations understand the scope of change [source: https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x]. Evidence you produce during this process becomes what your QSA pulls from. Gaps found during the assessment cost more in time and remediation than gaps found during your own review.

PCI DSS compliance cycles are expensive when you discover gaps during the QSA engagement rather than before it. CloudAnzen maps your controls to PCI DSS 4.0 requirements and surfaces evidence gaps before they become audit findings. [Talk to us](/demo).