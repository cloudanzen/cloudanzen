---
title: "How to scope your ISO 27001 ISMS at Series B: the four decisions that hold up at audit"
summary: "Before your consultant writes a single policy, one document determines whether your ISO 27001 program runs clean or generates expensive Stage 1 remediation work"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001 scope","ISMS boundaries","Series B SaaS","certification prep"]
sortOrder: 208
publishedAt: "2026-11-14"
author: "sarah-jenkins"
---
Your sales team just landed the enterprise deal that justifies Series B. The contract has a clause: ISO 27001 within six months. Before your consultant touches a policy template, there is one document the auditor will read at Stage 1 that determines whether your program runs clean or generates expensive remediation work: the ISMS scope statement.

Getting scope right is not about making it large or small. It is about making it consistent, defensible, and accurate to how your systems actually operate.

## Why Stage 1 auditors start with the scope document

ISO 27001 Clause 4.3 requires the organization to determine the boundaries and applicability of the information security management system, taking into account external and internal issues, the requirements of interested parties, and the interfaces and dependencies between activities performed by the organization and those performed by other organizations [source: https://www.iso.org/standard/27001]. The scope statement is the written output of that requirement.

An auditor arrives at Stage 1 with your scope statement and uses it as a map. Every other document—your asset register, your risk assessment, your Statement of Applicability, your policies—is evaluated against that map. If the map is inconsistent with what they find, they write a nonconformity.

The common failure mode is not a scope that is too narrow. It is a scope that claims to cover things the organization's controls do not actually reach. If your scope statement includes engineering laptops but your endpoint management platform shows only half of them enrolled, that is a gap. If your scope includes your staging environment but your access review process covers only production accounts, that is a gap.

Stage 2 is an operational audit. Stage 1 is a documentation review. The discipline of the scope statement is to describe a boundary you can actually defend with evidence.

## Which environments belong in scope

Production is always in scope. The judgment calls start at the edges.

Development and staging environments are the most common point of contention. You can exclude them if you can demonstrate that no real customer data flows into them [source: https://www.isms.online/iso-27001/]. If your engineering team regularly clones production databases to debug issues—even anonymized clones where re-identification is possible—those environments are processing customer data and belong inside the scope boundary.

The cleaner your data-flow diagram, the cleaner your scope decision. If you do not have a current diagram that shows where customer data moves across environments, make one before the scoping conversation. Auditors do not accept theoretical boundaries. They want evidence that the boundary reflects how data actually flows in production.

Data warehouse and analytics pipelines need a separate judgment. If they receive only aggregated or anonymized event data, exclusion is defensible. If raw customer records land in them, even temporarily during a pipeline run, they are in scope.

Cloud-hosted CI/CD infrastructure that builds and deploys directly to production is typically in scope because a compromise there can affect production integrity. If your build pipeline can push to production without a human gate, the controls around it need to match what you have on production itself.

## Which corporate systems you can and cannot exclude

Your cloud infrastructure accounts, identity provider, endpoint management platform, and source code repositories are in scope. These systems control access to, or the integrity of, your production environment. Including them is not a choice.

What is typically excludable with a written rationale:

- HR and payroll systems, because they handle employee personal data rather than the information assets the ISMS protects
- Marketing automation tools that process only prospect-level data before a customer contract exists
- General project management tools, unless they contain your open security vulnerability backlog, incident records, or customer-facing delivery commitments

The standard permits exclusions where excluded activities do not affect the organization's ability to provide information security conforming to its requirements [source: https://www.iso.org/standard/27001]. That is not a blank check. If your project management tool contains your security risk register, it is in scope whether the exclusion feels convenient or not.

Write the rationale for each exclusion before the auditor asks for it. At Stage 1, every exclusion in your scope statement gets a question. "We did not think it was relevant" is not a defensible answer.

## Who is in scope: employment model does not matter

Everyone with access to in-scope systems is in scope. That includes contractors, offshore engineering teams, and outsourced support functions if they can reach production systems, handle production data, or administer in-scope corporate accounts [source: https://www.isms.online/iso-27001/].

At a typical Series B SaaS, this covers your engineering organization, your platform or DevOps team, and whoever holds elevated roles in your identity provider, cloud accounts, or source code repositories. Senior finance and operations staff sometimes hold administrative access to corporate systems and need to be included.

This matters because your ISMS controls—security awareness training, background verification, access review cycles, and offboarding procedures—must demonstrably cover every person in scope. If a contractor with production database credentials falls outside your ISMS controls, that gap will surface in your Stage 1 documentation review before the auditor visits a single system.

## Third-party dependencies: what you own and what you delegate

ISO 27001 recognizes that organizations depend on suppliers and that some security obligations can be satisfied through supplier contracts and assessments rather than direct technical control [source: https://www.isms.online/iso-27001/].

Your cloud provider's physical infrastructure is a reasonable exclusion. You rely on their ISO 27001 or SOC 2 certifications and reference those certifications in your supplier assessment documentation. What you cannot exclude is your own configuration of that cloud environment. Misconfigured access policies, absent logging, and overly permissive roles are your controls to implement and evidence.

Annex A.5.19 through A.5.23 covers supplier relationships. You need a supplier management procedure and documented evidence that you have assessed the security posture of critical vendors—your cloud provider, your identity provider, any sub-processors that handle customer data. You do not need to audit data centers yourself.

For each supplier exclusion, document the supplier name, the certification reference, and the date you last verified it. That is the evidence chain the auditor will follow.

ISMS scope decisions happen in the first month of a certification program, not when the auditor arrives. CloudAnzen maps your cloud infrastructure, identity systems, and supplier connections to ISO 27001 requirements so you walk into those decisions with a live view of what actually touches customer data—not a blank spreadsheet. [Talk to us](/demo).