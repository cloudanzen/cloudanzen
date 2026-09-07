---
title: "ISO 27001 ISMS scoping: three decisions every Series B SaaS team gets wrong"
summary: "The scope document is the first thing a Stage 1 auditor reads — here are the three scoping decisions that trip up most Series B teams and how to get each one right"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS compliance","certification"]
sortOrder: 143
publishedAt: "2026-09-07"
author: "sarah-jenkins"
---
The scope document is the first artefact a Stage 1 auditor reads. Before they open your risk register, review your Annex A controls, or examine a single policy — they read the scope. If it is vague, too narrow, or inconsistent with your actual environment, you spend the next two months rewriting evidence packages and defending exclusions you never thought to document. Get scope right the first time.

Three decisions determine whether that happens. Each one looks obvious in hindsight. None of them is obvious when you are building a product, closing enterprise deals, and trying to get certified without stopping everything else.

## Decision 1: Separate "the service" from "the business"

ISO 27001 requires you to understand the external and internal context of the organisation before you draw a scope boundary [source: https://www.isms.online/iso-27001/]. For SaaS companies, the consistent mistake is scoping around the product and forgetting the infrastructure that delivers it.

Your production environment is obvious. Your CI/CD pipeline is not. The corporate identity provider a developer uses to push code is not. The incident management tool your on-call team uses to respond to production alerts is not. The secrets management system that stores your production API keys is definitely not.

A defensible scope statement names the products and features covered, the cloud environments and accounts in scope, the internal systems that support those environments — identity management, endpoint management, secrets management, logging and monitoring — and the geographies of your data subjects if relevant to your certification goals.

A scope statement that says "our SaaS platform hosted on AWS" is not sufficient. Stage 1 auditors ask which AWS accounts, which regions, and which supporting services are included. If you cannot answer those questions in writing before the audit begins, the scope document is not finished. The boundary you write is the boundary you will be audited against — so make it accurate before you hand it to the auditor, not after.

## Decision 2: Draw the line on third-party dependencies

Every SaaS product depends on sub-processors. Payment processors, CDNs, error trackers, customer data platforms, analytics warehouses. You cannot place a third-party service inside your ISMS — you can only manage the risk that service represents within your own controls.

The question is which third-party services touch data or systems inside your scope boundary, and how do you demonstrate that you manage them adequately.

ISO 27001 expects documented supplier relationships for in-scope dependencies [source: https://www.isms.online/iso-27001/]. The scope document should explicitly name the categories of services that sit outside the ISMS boundary but are managed under Annex A controls for supplier relationships. This is not an exclusion you hope auditors overlook — it is a documented risk management decision you can defend.

Three patterns cause problems:

**Over-scoping third parties.** Some teams try to pull their entire vendor risk management programme into ISMS scope. This creates an auditing surface you do not control. Certify your own controls. Document your oversight of your suppliers' controls. Those are two different things.

**Under-scoping infrastructure services.** A team excludes their centralised logging and monitoring stack because it "just stores logs." Logs are evidence. Logs contain event and access data. If that stack sits in a different AWS account managed by the same engineering team, it belongs in scope.

**Treating internal SaaS tools inconsistently.** Corporate productivity tools are generally out of scope. An internal admin panel that modifies customer records is in scope. The deciding question is whether a service stores, processes, or has privileged access to data that falls within your ISMS boundary. Apply that test consistently across every tool in your environment.

## Decision 3: Handle shared services clearly

Series B teams often have more than one product, or a platform engineering team managing shared infrastructure that product teams consume. The scoping question becomes: do you certify the platform, the products, or both?

The practical first approach is to start with the smallest defensible scope that covers your highest-risk, most customer-facing service [source: https://www.isms.online/iso-27001/]. ISO 27001 allows you to expand scope in subsequent surveillance cycles. Expanding scope in year two of certification is far cheaper than reworking an ISMS that tried to cover everything from the beginning.

If you have a shared platform team, the scope document should clearly define what that team delivers and what product teams consume from it. Put the platform in scope if it hosts customer data or controls access to systems that do. Treat product teams as internal consumers of that platform, with the interface between them documented — how they provision services, how access is granted and reviewed, how changes flow through.

A shared Kubernetes cluster running all your products needs to be in scope. A shared internal wiki used for engineering documentation does not. When in doubt, apply the same test: does it store, process, or have privileged access to data within your boundary? If yes, include it and document the controls. If no, exclude it and document why.

## What a complete scope statement must contain

The scope document is a standing control artefact, not a paragraph in a policy. A complete scope statement contains: a description of the organisation and the service being certified; the locations and geographies covered, including cloud regions; which assets — systems, data stores, people, and supplier relationships — fall inside the boundary; what is explicitly excluded and the justification for each exclusion; and the interfaces between in-scope and out-of-scope assets, such as network perimeters, API call patterns, and IAM trust relationships [source: https://www.isms.online/iso-27001/].

Write it for an auditor who has never worked at your company and has thirty minutes to understand your environment before asking questions. If they cannot determine from the document alone whether a given system is in or out of scope, the document is not done. Precision here pays dividends across every subsequent audit cycle.

## Keep scope accurate as you grow

The scope document is a living control. ISO 27001 requires reviewing the ISMS when significant changes occur — new products, new infrastructure, acquisitions, entry into new markets. Series B is precisely when that change accelerates. Build a lightweight change-trigger process into your operating rhythm so the scope document stays accurate between audits.

Events that should prompt a scope review: a new cloud account or region coming online, a new data category entering the environment, a product team taking ownership of a system that was previously managed by a platform team, a new third-party integration that touches in-scope data, and entry into a new geography or legal entity structure.

A scope review does not need to change the document every time. It needs to confirm that the current scope accurately reflects your environment — and record that confirmation. Auditors look for evidence that scope was reviewed, not just that a document exists. Date your reviews. Note who participated and what was examined. A brief scope review record filed quarterly is evidence. A scope document with no review history is a gap waiting to be found.

Getting scope right before Stage 1 is the single fastest way to reduce audit prep time on every certification cycle that follows. CloudAnzen maps your infrastructure, people, and supplier dependencies to ISO 27001 controls — so your scope document stays current as your environment evolves and your evidence is ready when the auditor arrives. [Talk to us](/demo).