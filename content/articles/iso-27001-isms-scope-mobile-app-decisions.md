---
title: "ISO 27001 ISMS scope decisions for SaaS teams with a mobile app"
summary: "When your SaaS ships on iOS and Android alongside a web product, ISO 27001 scope decisions get complicated — here is how to decide deliberately"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","Mobile app","Series B","Certification"]
sortOrder: 213
publishedAt: "2026-11-20"
author: "sarah-jenkins"
---
Your Series B SaaS ships on iOS and Android. The backend is on AWS. When your ISO 27001 implementation partner asks what is in scope for the ISMS, the mobile app gets awkward silence. Some teams exclude it without rationale. Some include everything and regret the evidence burden. This article helps you make the decision deliberately, with documentation an auditor will accept.

## What Clause 4.3 actually says about scope

ISO 27001 Clause 4.3 requires you to determine the boundaries and applicability of the ISMS, taking into account your context, your stakeholder requirements, and the interfaces and dependencies between activities your organisation performs and those performed by other parties [source: https://www.iso.org/standard/27001].

Three inputs drive the scope decision: your context, your stakeholders, and your dependencies. The standard does not say include everything digital. It does not say exclude third-party platforms because you do not operate the infrastructure they run on.

The operative phrase is interfaces and dependencies. If your mobile app calls your own API, that interface is a dependency. If the app stores sensitive data on-device, that is an asset under your control. If it holds authentication tokens that give users access to your SaaS platform, that is a risk you are accountable for. All three pull the mobile app toward scope inclusion regardless of which company built the operating system.

Scope is a boundary you draw, not a boundary drawn for you by vendor responsibility matrices.

## The default answer most teams get wrong

The common shortcut is to call the mobile app just a client. It runs on Apple and Google infrastructure. The company does not operate the app store or the device operating system. Therefore, the argument goes, the app lives outside the ISMS boundary.

This reasoning fails audit. ISO 27001 does not care who operates the infrastructure the client runs on. It cares whether the application component handles the information assets you have identified in your asset register [source: https://www.isms.online/iso-27001/].

A mobile app that authenticates users to your platform, stores session tokens in device storage, caches customer data for offline use, and connects to your production API is handling the same information assets your web application handles. The delivery channel differs. The risk profile does not.

If your ISMS says nothing about the mobile app, the auditor will ask what controls govern it. The honest answer, in that situation, is: none documented. That is a finding.

The secondary mistake is scoping the mobile app in and then treating it identically to the web product. Mobile has distinct risk considerations — device loss, OS-level security controls you cannot configure, third-party keyboards with clipboard access, certificate pinning decisions — that need their own section in your risk assessment.

## When exclusion is defensible

There are real cases where mobile app exclusion holds up. The test is not who hosts it but what it processes.

**Companion apps with no independent data handling.** If the mobile app is a thin display client that only renders data fetched live from your API — no local storage of customer data, no credentials persisted beyond session duration, no access to sensitive functionality not also available via the web product — exclusion is defensible. You still need to document the rationale in your scope statement and demonstrate to the auditor why no information assets are at risk on the mobile client.

**Apps serving users outside your defined scope boundary.** If your ISMS covers your enterprise product and the mobile app exclusively serves a consumer tier your scope does not address, exclusion is defensible. This is uncommon for pure B2B SaaS but does arise in B2B2C models where the end-user tier is out of scope by design.

**Formally excluded components with written rationale.** ISO 27001 permits you to exclude parts of your organisation from scope provided the exclusion does not affect your ability to conform with the standard [source: https://www.iso.org/standard/27001]. An exclusion without a written rationale is a finding waiting to happen. Exclusion by omission — the mobile app exists, handles production credentials, and the ISMS simply does not mention it — is not an exclusion. It is a gap that a prepared auditor will surface on day one of the Stage 2 audit.

## What in-scope mobile means for your control set

If the mobile app is in scope, several Annex A control areas become relevant that many teams miss during the initial scoping exercise.

**User endpoint devices.** Your ISMS endpoint policies need to address mobile devices as a distinct endpoint class. This does not mean MDM on every user's personal device. It means your policies define what the mobile client does to protect session tokens at rest, what happens on session timeout, and how credentials are cleared when a user logs out or the app is uninstalled.

**Application security requirements.** Security requirements for applications include the mobile app. In practice this appears in your SDLC documentation: code signing, build provenance, library dependency scanning, and release approval processes for iOS and Android builds all become control activities the auditor can examine.

**Security testing in development and acceptance.** If the mobile app is in scope, security testing must cover it. This typically means mobile static analysis in CI, periodic penetration testing of the app and its API integration, and documented acceptance criteria for production releases. Test results become part of your evidence package.

**Information transfer controls.** The API channel between the mobile app and your backend is an information transfer boundary. Your data classification and transfer policies need to address what flows over that channel, what encryption standards apply, and how mutual authentication is enforced.

Most Series B SaaS teams already perform code signing, library scanning, and API authentication. The gap is usually documentation: the ISMS does not capture these activities as controls, so the auditor cannot trace them to Annex A requirements. The control work is done. The evidence is not.

## How to document the decision in your scope statement

Your scope document must do two things about the mobile app: state clearly whether it is in or out of scope, and show the reasoning.

For inclusion, identify the mobile app by platform, state which information assets it processes, and cross-reference the control activities that govern it. A reference such as the iOS and Android applications, which process user authentication tokens and customer data in transit, are included in the ISMS boundary — Annex A applicability detailed in Section 4 of the SoA gives the auditor a clear hook to follow.

For exclusion, write an explicit clause that names the component, describes what information it does or does not handle, and explains why exclusion does not affect ISMS conformity. An example: the iOS and Android companion applications are excluded from the ISMS scope because they operate as stateless display clients with no persistent storage of information assets subject to this ISMS; all classified information assets are processed exclusively by the backend services described in Section 2.1 of this scope document. That is defensible documentation [source: https://www.isms.online/iso-27001/].

What the scope document cannot say is nothing. A mobile app that processes authentication tokens and is not mentioned anywhere in the ISMS is an audit finding at Stage 1, before you have even reached the controls review.

## Avoiding the surveillance audit trap

Teams that handle the mobile app scope decision loosely at initial certification often find the gap in year two. The surveillance auditor reviews the scope document, opens the app, and finds it now handles data not addressed in the ISMS. The finding is a scope maintenance failure, not a technical control failure. The fix requires a scope revision, an updated risk assessment, and new control evidence — all while the surveillance audit clock is running.

ISO 27001 requires you to maintain and update your documented scope when changes to your context, stakeholders, or interfaces make the current scope inaccurate [source: https://www.iso.org/standard/27001]. A mobile app release that adds offline sync and persistent storage of customer records is a scope event. If the ISMS did not register it, the surveillance auditor will.

A lightweight change-trigger process helps significantly. When engineering ships a release that handles new data types or new user permissions, a brief scope-check question — does this change what our ISMS covers — costs almost nothing at review time. A formal scope revision is not always necessary. The question always is.

Run this check at each sprint release that touches the data model and during your quarterly ISMS management review. Document the outcome either way: in scope unchanged, in scope with updated asset register, or exclusion rationale confirmed. That documentation is evidence of scope maintenance, which is itself an audit criterion.

Audit prep accumulates debt when scope decisions are deferred. CloudAnzen maps your control inventory to your current ISMS scope and surfaces gaps between what your scope document says and what your product team is shipping. [Talk to us](/demo).