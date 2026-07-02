---
title: "Texas TDPSA enforcement: what your business must document and implement now"
summary: "A practical guide to TDPSA compliance: privacy notices, consumer rights workflows, data protection assessments, and website obligations"
type: "blog"
collection: null
category: "Data protection"
readTime: "5 min read"
tags: ["TDPSA","Texas privacy law","data protection","state privacy","consumer rights"]
sortOrder: 78
publishedAt: "2026-06-22"
author: "maria-rodriguez"
---
Texas started enforcing the Texas Data Privacy and Security Act on July 1, 2024 [source: https://www.akingump.com/en/insights/alerts/texas-data-privacy-act-what-businesses-need-to-know]. If your SaaS product reaches Texas residents and the compliance work has not started, the Attorney General is already a possible next step. Here is what the documentation trail needs to look like before that happens.

## Who TDPSA applies to — and why SaaS teams often undercount their exposure

TDPSA applies to businesses that conduct business in Texas or produce products and services consumed by Texas residents, and that control or process personal data of 100,000 or more Texas consumers per year [source: https://usercentrics.com/knowledge-hub/texas-data-privacy-and-security-act-tdpsa/], or 25,000 or more consumers when the sale of personal data accounts for more than 50% of gross revenue [source: https://usercentrics.com/knowledge-hub/texas-data-privacy-and-security-act-tdpsa/].

The headcount math trips people up. "Consumer" means a Texas resident acting in a personal or household context — not a business purchaser. Teams that count only paying accounts miss trial users, free tier members, and anyone who enters a product-led growth motion without converting. Count every category honestly before deciding you fall below the threshold.

There is no private right of action. Enforcement sits exclusively with the Texas AG. That said, violations can reach $7,500 per violation [source: https://www.akingump.com/en/insights/alerts/texas-data-privacy-act-what-businesses-need-to-know], and at the scale most growth-stage SaaS companies operate, per-violation penalties compound quickly across a large user base.

## What your privacy notice must actually say

The privacy notice is the first document an AG investigator will request. It must identify the categories of personal data you process, the purpose for each category, the third parties who receive that data, and how consumers can exercise their rights — including the right to opt out of the sale of personal data, targeted advertising, and certain profiling.

The word "categories" carries real weight here. Every logging vendor, analytics tool, session replay platform, and marketing pixel your team has added creates a disclosure requirement. Teams that started with a generic privacy policy template often have two structural gaps: incomplete third-party disclosures and missing opt-out mechanisms [source: https://www.feroot.com/blog/texas-data-privacy-security-act-tdpsa-website-requirements/].

The opt-out must be clear, conspicuous, and functional. It cannot require consumers to create an account to exercise it. A buried "Do Not Sell" footer link that routes to a contact form sending email to a shared inbox is not a compliant implementation — the mechanism must function end-to-end without friction.

## Consumer rights: the workflows you must be able to run

TDPSA gives Texas residents six core rights: access (confirm you process their data and receive a copy), correction (fix inaccuracies), deletion (remove their data), portability (receive their data in a usable format), and opt-out of both the sale of personal data and targeted advertising. There is also the right to opt out of profiling that produces legal or similarly significant effects on consumers.

Responses are due within 45 days. A single 45-day extension is available when reasonably necessary, provided you notify the consumer beforehand. If you deny a request, an appeals process is required — consumers must be able to challenge that denial, and you must respond to appeals within 60 days [source: https://usercentrics.com/knowledge-hub/texas-data-privacy-and-security-act-tdpsa/].

Most B2B SaaS teams can route deletion through an existing offboarding workflow. Portability and correction are harder because they depend on having a reliable data map. If you cannot pull a structured export of a specific user's personal data within the response window, the portability right is not yet operable. The correction right requires write-back access to every system where that data lives — including replicated copies in analytics warehouses and third-party CRM syncs.

Run a tabletop exercise: submit a mock request through your existing intake channel and time how long fulfillment takes. Track which systems need to be touched, where approvals are required, and whether an appeals path exists. The gaps that surface are your remediation list.

## Website-level obligations that show up in technical audits

TDPSA imposes specific obligations that manifest at the web and product layer [source: https://www.feroot.com/blog/texas-data-privacy-security-act-tdpsa-website-requirements/]. Running behavioral advertising scripts, cross-site tracking pixels, or session recording tools that fingerprint users typically triggers the "targeted advertising" definition, which requires an opt-out mechanism before data collection begins.

A few specific requirements that catch teams off guard:

**Sensitive data requires opt-in, not opt-out.** Processing health information, biometric identifiers, precise geolocation, racial or ethnic origin, immigration status, or data about a consumer's sexual orientation requires explicit consent before collection begins. "Processing" includes routing the data through a third-party SDK that collects it on your behalf.

**Universal opt-out signals must be honored.** TDPSA requires recognition of universal opt-out mechanisms such as Global Privacy Control. If a user arrives with GPC enabled, your systems must respect that signal for the data processing in scope.

**The opt-out regime governs non-sensitive targeted advertising.** TDPSA does not require opt-in consent for general behavioral advertising — but the opt-out must be functional and prominent. Tacking it onto a cookie banner that loads after the scripts run does not satisfy the requirement.

Audit every third-party script on your marketing site and inside your product. A/B testing frameworks, ad attribution tools, and third-party chat widgets may pull your tech stack into the targeted advertising perimeter even when advertising revenue is not your primary model [source: https://www.feroot.com/blog/texas-data-privacy-security-act-tdpsa-website-requirements/].

## Data protection assessments and building your enforcement record

TDPSA requires data protection assessments for processing activities that present a heightened risk of harm — specifically, targeted advertising, selling personal data, processing sensitive personal data, and profiling that poses a reasonably foreseeable risk of harm to consumers.

A data protection assessment is an internal analysis that weighs the business purpose against potential consumer harm. There is no prescribed format, but the assessment must be produced to the AG on request. A document drafted after an investigation opens will not demonstrate that you evaluated risk before the processing began.

Teams already running Data Protection Impact Assessments under GDPR Article 35 can adapt the same structure. For teams building from scratch: document the processing activity, the data categories involved, the business justification, the safeguards in place, and a proportionality conclusion. Assign an owner, set a review date, and maintain version history so the record shows when the assessment was completed [source: https://secureprivacy.ai/blog/us-state-privacy-law-tracker-2026].

Texas is one of more than a dozen US states with active privacy enforcement frameworks in 2026 [source: https://secureprivacy.ai/blog/us-state-privacy-law-tracker-2026]. The documentation model you build for TDPSA — privacy notice, rights workflows, assessments — maps directly to the requirements in Virginia, Colorado, Connecticut, and the states that follow. Build it correctly once, and the compliance work compounds in your favor rather than against it.

TDPSA compliance is operational discipline, not a project with a completion date. CloudAnzen maps your data flows to TDPSA controls, keeps your privacy notice current as your tech stack changes, and maintains the evidence trail that holds up when the AG comes asking. [Talk to us](/demo).