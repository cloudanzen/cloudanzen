---
title: "How to scope ISO 27001 ISMS for a Series B SaaS"
summary: "Scoping your ISMS wrong is the fastest path to a failed audit — here is how to define defensible boundaries as your SaaS scales"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS","scoping","SaaS","audit readiness"]
sortOrder: 49
publishedAt: "2026-05-19"
author: "sarah-jenkins"
---
Scoping the ISMS wrong is the fastest way to fail an ISO 27001 audit you thought you were ready for. Most Series B SaaS teams discover this during Stage 1 — when the auditor starts pulling on a thread that sits just outside the boundary the team defined twelve months earlier. Getting it right the first time saves months of rework.

## Why ISMS scope is harder at Series B than at Series A

ISO 27001:2022 Clause 4.3 requires you to determine the boundaries and applicability of your ISMS [source: https://www.iso.org/standard/27001]. That sentence sounds simple. It is not.

The standard does not prescribe how large or small the scope must be. It requires you to consider the external and internal issues identified in Clause 4.1, the requirements of interested parties from Clause 4.2, and the interfaces and dependencies between your activities and those of external parties.

At Series A, that ambiguity is almost a gift. Scope it narrow, get certified, expand later. At Series B, you have grown into the ambiguity. Your product processes customer data across multiple cloud accounts. Your engineering team has doubled. Enterprise prospects are asking to review the scope statement before they sign a contract.

Getting the scope right early matters. Getting it wrong produces one of two failure modes: an auditor finding control gaps on systems you excluded but should not have, or an over-broad scope that buries the team in evidence collection for systems that carry no meaningful risk.

## Start with customer data flows, not your org chart

The instinct at Series B is to scope the ISMS around the company — "everything we do." That is fine if your company is simple. Companies at Series B are almost never simple.

A more defensible starting point is your customer data flow map. Trace each customer record from ingestion through processing, storage, and deletion. Every system that directly touches that data — or connects to a system that does — is a candidate for scope inclusion.

The ISO 27001 standard explicitly requires that you consider interfaces and dependencies with external organizations [source: https://www.isms.online/iso-27001/]. That phrase carries real weight. Your scope boundary does not end at your own infrastructure. If a sub-processor handles customer personal data on your behalf, your controls over that sub-processor belong inside the scope boundary.

In practice, the scope statement for a typical Series B SaaS product should include:

- Production cloud infrastructure — all accounts and projects that handle production workloads
- Source code repositories and CI/CD pipelines that deploy to production
- Identity providers and SSO systems used to access production environments
- Third-party sub-processors that process customer personal data
- Remote working arrangements where team members access production systems

Corporate IT — internal wikis, marketing tools, expense software — can often sit outside scope as long as it has no path to customer data and no direct connection to production environments.

## Define and document what you are explicitly excluding

Auditors do not only examine what you included. They examine what you excluded and whether the exclusion holds up.

ISO 27001:2022 requires a documented rationale for any part of the organization omitted from scope [source: https://www.iso.org/standard/27001]. "We decided not to include it" is not a rationale. "This system processes only internal HR data, has no network connection to customer environments, and is governed under a separate HR data retention policy" is a rationale.

A clean exclusion statement does three things. First, it names the excluded system specifically — "Internal HR platform (BambooHR), distinct from the identity provisioning service." Second, it states the data category that system handles. Third, it explains the isolation — a network segment boundary, the absence of production credentials, or a contractual separation.

This discipline also forces a useful internal question: does this system have a path to production that we have not yet mapped?

Build the habit of documenting exclusions at the same time you document inclusions. Waiting until the audit to explain why something is out of scope produces rushed justifications that auditors can see through.

## Handle your cloud architecture deliberately

ISO 27001 was designed before cloud-native architecture was standard. Applying it to a multi-account AWS organization or a GCP project hierarchy requires explicit thought.

The shared responsibility model means your controls apply above the hypervisor boundary — you own configuration, access management, and data handling; the cloud provider owns physical security and the hardware layer [source: https://www.isms.online/iso-27001/]. Document which controls you own versus which you inherit from your cloud provider. Your cloud provider's ISO 27001 certification can be referenced as evidence for the infrastructure layer, but you still own every control applied on top of it.

Practically, list each AWS account or GCP project by name and classify each as production or non-production. Production and staging environments that process real customer data are generally in scope. Development sandboxes using only synthetic data are often defensible exclusions — but document that the data is synthetic and that access controls prevent production data from reaching the sandbox.

This account-level inventory also makes Annex A control mapping tractable. Instead of mapping controls to a vague "cloud environment," you map them to named accounts with known data classifications.

## Write the scope statement your auditor can audit

The scope statement produced under Clause 4.3 becomes a live document. Your auditor uses it to determine which systems to test, which policies to pull, and which people to interview. A vague scope statement is an invitation for the auditor to expand scope during fieldwork.

A strong scope statement covers four dimensions. Who is in scope: the organizational units, team locations, and contractors with production access. What is in scope: named services and infrastructure layers. Where scope applies: cloud regions and office locations. What is explicitly excluded: named systems with rationale.

Keep it to one or two pages. Specificity matters more than length. A ten-page scope document usually signals the team is not confident about what belongs inside the boundary.

Build scope review into your quarterly ISMS management review cycle. Each quarter, run a delta check against recent changes. New sub-processor, new cloud account, new data category, new team location — each of those triggers a scope update and a brief impact assessment on existing controls [source: https://www.iso.org/standard/27001]. Scope drift between annual audits is one of the most common reasons teams show up to surveillance audits unprepared.

Scope is where auditors find the gaps you did not know you had. CloudAnzen continuously maps your cloud infrastructure and sub-processors to ISO 27001 controls, so your scope statement reflects your actual stack rather than a snapshot from last year's audit kick-off. [Talk to us](/demo).