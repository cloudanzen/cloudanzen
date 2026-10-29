---
title: "Scoping your ISO 27001 ISMS when you ship open-source components"
summary: "How to draw a defensible ISMS scope boundary when your Series B SaaS team maintains open-source code alongside your commercial product"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS boundaries","SaaS compliance","open source"]
sortOrder: 192
publishedAt: "2026-10-29"
author: "sarah-jenkins"
---
Most ISO 27001 scoping guides assume your entire product is proprietary. They describe three inputs — your services, your assets, your interested parties — and send you off to write a scope statement. Add open-source components to that picture and the boundary gets messier fast. Is the fork you maintain in scope? What about the public GitHub repos your engineers commit to as part of their day job? What about the open-source SDK your commercial customers embed? These are real decisions with audit consequences. This article walks through each one.

## Why a public repo does not move the risk outside your ISMS

The ISMS scope under ISO 27001 covers the assets and processes that create, process, or transmit information that matters to your organization [source: https://www.isms.online/iso-27001/]. Open-source code your team actively maintains sits inside that boundary.

Here is the distinction that matters at stage 1: code your engineers commit to under their employment role — whether the repository is public or private — is in scope. The committers are employees. The development environment is your SDLC. The secrets risk (accidentally committing a token, an internal hostname, a private key) is yours.

A public repository does not move the information risk outside your boundary. It changes the exposure profile. That is a threat model input, not a scope exclusion.

Where you can legitimately exclude: a fork your team has not touched in over a year that is not embedded in your production product. Document the exclusion with a one-paragraph rationale. Stage 1 auditors will ask; a written rationale is far better than silence.

## Three open-source scenarios a Series B team will face

**Scenario 1: You consume open-source packages (most teams)**

Your application pulls dependencies from npm, PyPI, Maven, or similar registries. The packages themselves are not in your ISMS scope — you do not control them. What is in scope: your process for selecting, vetting, and updating those packages.

Control A.8.8 (management of technical vulnerabilities in ISO 27001:2022) applies here [source: https://www.isms.online/iso-27001/]. Your evidence for this control is your dependency scanning process, your policy for acting on CVEs, and your SLA for critical patches. The scope statement does not need to enumerate every package. It needs to cover the process that governs them.

**Scenario 2: You maintain an open-source project alongside your commercial product**

This is common for Series B infrastructure and developer-tools companies. You open-sourced a library, a CLI tool, or an SDK. Community contributors send pull requests. Your employees review and merge them.

The scoping question here is the merge process and your release pipeline. If external contributors can introduce code that ends up in your production product, that supply chain path is in scope. Your relevant controls are your code review standard and your CI gates on external PRs.

You do not need to scope the community contributors themselves — you have no employment or contractual relationship with them. You scope your controls around what you accept from them.

**Scenario 3: Your product is itself open-source**

Some B2B SaaS companies ship an open-source core and sell a managed or enterprise layer on top. The managed deployment is in your ISMS scope. The open-source repository is in scope as an asset your organization controls. Self-hosted installations by customers are not in scope unless you have a support or hosting relationship that brings them under your control.

This scenario requires attention in your context-of-organization analysis (Clause 4.1 and 4.2). Interested parties include your open-source community users, not just paying customers. Their expectations around CVE disclosure timelines, responsible disclosure, and security advisories are part of your external context and feed your Statement of Applicability decisions.

## Writing a scope statement that covers open-source activity

A scope statement does not need to enumerate every repository. It needs to describe your ISMS boundary with enough specificity that someone reading it understands what is in and what is out.

A workable formulation: *"The ISMS covers the development, operation, and maintenance of [Product Name], including the software development lifecycle for all proprietary and open-source components created or maintained by [Company] employees, and the cloud infrastructure used to operate [Product Name] in production."*

If you want to explicitly exclude something — archived forks, community-maintained derivatives — add a short annex: *"The following are excluded from scope with rationale: [item] — [one-line rationale]."*

Stage 1 auditors compare your scope statement against your asset register. If your asset register includes a GitHub organization, the scope statement needs to address it. Inconsistency between documents is the finding, not the open-source presence itself.

## A pre-stage-1 checklist for open-source-forward teams

Run through this before your stage 1 preparation call with your auditor.

**Inventory your GitHub organizations.** List every org your company controls. Identify which repos are proprietary, which are open-source releases, which are inactive forks. Mark the ones that touch production or contain secrets.

**Identify contributors who are employees.** Their work under their employment role is in scope. Check that your HR-to-GitHub joiners and leavers process is documented.

**Map your dependency management controls.** What scans run in CI? What is your documented policy for acting on critical CVEs? Is it followed and evidenced?

**Check your release pipeline for external contribution paths.** For any open-source project you maintain, confirm that PRs from external contributors pass the same CI checks as internal code before merge.

**Write one-paragraph exclusion rationale for anything you are leaving out.** "We forked library X in 2022 but have not merged commits since; it is not linked from the production product and is archived on GitHub" is a complete rationale. It takes ten minutes to write and prevents a stage 1 finding.

This is process-level scoping work, not a technical audit. It takes a few hours with your engineering lead. The output feeds directly into your scope statement and your asset register — the two documents your auditor reads first.

ISO 27001 scoping for open-source teams is not structurally harder than scoping for proprietary-only products. It requires deliberate documentation of your development process and a clear position on what you control versus what you do not. CloudAnzen continuously maps your development controls to ISO 27001 Annex A requirements so the evidence is ready when the auditor is. [Talk to us](/demo).