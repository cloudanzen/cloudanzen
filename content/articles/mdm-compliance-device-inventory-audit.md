---
title: "MDM for compliance: device inventory that holds up at audit"
summary: "Most audit findings around device controls trace back to incomplete inventory, not missing MDM — here is how to build one that holds up"
type: "blog"
collection: null
category: "MDM"
readTime: "5 min read"
tags: ["MDM","device inventory","endpoint compliance","audit readiness","access control"]
sortOrder: 200
publishedAt: "2026-11-06"
author: "sarah-jenkins"
---
The question from the auditor is simple: can you give me a list of all devices that access your production environment? You have an MDM tool. You have a configuration management system. You have endpoint detection and response logs. But when you try to pull that list, the numbers do not match. That gap is where audit findings are born.

## Why device inventory breaks down before it matters

Most teams implement MDM to enforce device policies — disk encryption, screen lock, OS version requirements. The inventory is a byproduct, not the goal. This creates a structural problem: the MDM knows about devices it enrolled. It does not know about devices that were never enrolled, devices that were enrolled and then wiped without deprovisioning, contractor laptops, or personal devices accessing systems through browser-based tools.

ISO 27001 Annex A control 8.6 and SOC 2 CC6.1 both require an inventory of information assets, which includes endpoints. [source: https://www.isms.online/] The control does not require that inventory to be perfect at every moment. It does require that the inventory is maintained and accurate. An inventory that was last reviewed eight months ago fails that test even if the MDM tool is running fine.

The practical reality is that device sprawl accelerates during growth phases. Teams onboard fast, contractors cycle through, acquisition employees join mid-cycle. Each of those transitions is an opportunity for a device to miss enrollment or stay enrolled after the person has moved on.

## What auditors actually look for

Auditors reviewing device controls are checking three things. First, is there a defined population of devices? This means you can state, with confidence, how many devices should be in your inventory and why. Second, does the actual inventory match the defined population? Third, are the policy enforcement states current and consistent across enrolled devices?

The defined population question is where most teams get caught. A startup that grew quickly over eighteen months often added devices faster than the enrollment process could keep up. Contract engineers used personal machines for a quarter, then moved on. A developer joined from an acquisition and kept using an older laptop that never got enrolled. None of this is malicious, but all of it creates gaps that an auditor will note.

The difference between a finding and no finding is usually documentation. If you can produce an enrolment policy that defines which device categories require MDM, the date it was last reviewed, and evidence that it was followed consistently, you are in a defensible position. The auditor is looking for a managed process, not perfection. A documented gap with a remediation plan is better than an undocumented perfect state.

## Building an inventory process that survives growth

The practical fix is to anchor your device inventory to your identity provider, not to your MDM. Your IdP — Okta, Entra ID, Google Workspace — has a record of every human who authenticated to a managed service. Cross-reference that with your MDM enrollment list and you will find the gap. Any identity that authenticated from a device not in your MDM is an enrolment gap. [source: https://www.isms.online/]

Run this reconciliation quarterly, and before each audit. Automate it if you can: most MDM vendors expose APIs that your security tooling can query. Build a report that shows enrolled devices, unenrolled devices that accessed managed apps in the last ninety days, and devices that are enrolled but non-compliant with current policy.

Document the reconciliation. A single exported spreadsheet is not enough — auditors want to see the process, not just the output. Write a one-page runbook that describes how the inventory is maintained, how often it is reviewed, who owns it, and what happens when a gap is found. This runbook is the evidence that the control is operating, not just present.

## Handling contractor and BYOD devices

Contractors and BYOD devices are the hardest part of device inventory. Your MDM may not cover them. If contractors access only browser-based tools, you may rely on managed browser profiles or conditional access policies rather than full MDM enrollment. This is a defensible position, but it needs to be documented as a deliberate scoping decision, not an oversight.

Write down what classes of devices exist in your environment, which are covered by MDM, and which are covered by other controls. Explain why each category of coverage is appropriate for the data that device class can reach. If a contractor can only access a read-only dashboard with no customer PII, full MDM enrollment may be disproportionate. If a contractor can SSH into production, that device needs the same controls as a full-time employee's machine.

Auditors can accept tiered coverage. What they cannot accept is an inability to account for which devices exist and what they can reach. [source: https://www.isms.online/]

## Making the inventory useful between audits

The most common failure mode is building an inventory for the audit and then not maintaining it. By the next audit cycle, the inventory is stale and you are rebuilding it from scratch.

Assign a device inventory owner. This is usually someone in IT or security operations who has access to the MDM and the IdP. Their job is to run the quarterly reconciliation, action the gaps, and update the runbook when the process changes. This is not a full-time role — it is a named responsibility that someone carries in addition to other work.

Integrate device offboarding into your HR and IT processes. When an employee leaves, their device should be wiped and deprovisioned on their last day. If your offboarding checklist does not include an explicit MDM deprovisioning step, devices accumulate in your inventory as ghost records. Those ghost records will appear as anomalies in your next audit.

Treat your device inventory the same way you treat your access review — as a regular operating rhythm, not a pre-audit scramble. The difference between a clean audit result and a remediation action is usually whether that rhythm was in place before the auditor arrived.

Device inventory is one of those controls that looks easy on paper and breaks down in practice without an owner and a cadence. CloudAnzen maps your endpoint coverage to ISO 27001 and SOC 2 requirements and flags inventory gaps before your auditor does. [Talk to us](/demo).