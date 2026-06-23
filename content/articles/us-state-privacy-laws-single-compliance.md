---
title: "19 active US state privacy laws: one compliance program for all of them"
summary: "Nineteen US states have active consumer privacy statutes in 2026 — here is how GRC teams build one control set instead of nineteen separate programs"
type: "blog"
collection: null
category: "Compliance strategy"
readTime: "5 min read"
tags: ["US state privacy","compliance program","data protection","privacy law"]
sortOrder: 54
publishedAt: "2026-05-26"
author: "maria-rodriguez"
---
At the start of 2026, nineteen US states have enacted comprehensive consumer privacy laws — and more are likely on the way [source: https://lowerplane.com/blog/us-state-privacy-laws/]. If you run GRC for a SaaS company with any US user base, that number probably made your stomach drop. The instinct is to build nineteen separate compliance tracks. The smarter move is to build one.

## What nineteen laws actually means for a GRC team

Walk through the active stack: California (CPRA), Colorado, Connecticut, Virginia, Utah, Iowa, Indiana, Tennessee, Montana, Texas, Florida, Delaware, New Hampshire, New Jersey, Kentucky, Nebraska, Minnesota, Maryland, and Rhode Island [source: https://lowerplane.com/blog/us-state-privacy-laws/]. Each has its own effective date, opt-out triggers, consent thresholds, and data subject request deadlines. The surface differences are real — California's cure period has expired, Texas enforcement runs through the AG, Florida's scope is narrower — but the underlying control requirements cluster around the same five pillars.

Most GRC teams hit a wall when they try to map each state statute separately. They end up with a spreadsheet that nobody maintains after the first audit. A unified approach does not mean ignoring state-specific rules; it means identifying the superset of controls and flagging the narrow exceptions.

## The five control pillars that appear in every statute

**Data inventory and mapping.** Every statute requires knowing what personal data you collect, where it lives, and who receives it. California's CPRA and New Jersey's law both require reasonable security measures calibrated to the type of data collected [source: https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/]. An accurate data map answers any state's disclosure requirement. Without one, every statute exposes a gap.

**Privacy notice and disclosure.** All nineteen states require a publicly accessible privacy notice covering categories of data collected, processing purposes, and consumer rights. California's CPRA notice requirements are the most detailed, so building to that standard satisfies the others with minor additions.

**Consumer rights handling.** The rights vary at the margins — California includes the right to correct and the right to limit sensitive data use — but every state requires access, deletion, and opt-out of sale or sharing [source: https://www.hinshawlaw.com/en/insights/privacy-cyber-and-ai-decoded-alert/2026-privacy-compliance-california-and-colorado-regulations]. Build a single data subject request intake workflow and configure it to apply state-specific rules based on the requestor's residence. Most statutes require a response within 45 days [source: https://www.hinshawlaw.com/en/insights/privacy-cyber-and-ai-decoded-alert/2026-privacy-compliance-california-and-colorado-regulations], with a possible extension of up to an additional 45 days [source: https://www.hinshawlaw.com/en/insights/privacy-cyber-and-ai-decoded-alert/2026-privacy-compliance-california-and-colorado-regulations] where reasonably necessary.

**Data processing agreements.** All nineteen statutes require contracts with service providers and processors that limit data use to specified purposes. Your DPA template needs a few jurisdiction-specific clauses, but the core obligation is identical across all states.

**Risk assessments for high-risk processing.** Colorado, Connecticut, and Virginia require data protection impact assessments for targeted advertising, sale of data, and sensitive category processing [source: https://www.bdo.com/insights/advisory/2026-is-a-pivotal-year-for-privacy]. California uses a similar instrument under CPRA. Build one DPIA template to the most demanding standard and apply it universally.

## Building the unified program

**Identify which laws actually apply.** Not every statute triggers for every company. Colorado covers businesses processing data of 100,000 [source: https://lowerplane.com/blog/us-state-privacy-laws/] or more consumers annually, or 25,000 [source: https://lowerplane.com/blog/us-state-privacy-laws/] or more consumers if data sales revenue is a factor. Florida's law targets large data controllers and data brokers, not most mid-market SaaS companies. Map your user base by state before deciding which statutes apply.

**Anchor to the California superset.** CPRA is the right foundation — it is the most comprehensive statute, has the most enforcement history, and complying with it typically satisfies the others. Layer in Colorado and Connecticut for the DPIA obligation. Everything else becomes a delta document.

**Maintain a state delta register.** Document only the differences from the superset. Texas has no cure period and enforces through the AG's Consumer Protection Division — flag that in your incident response runbook [source: https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/]. Florida's narrow scope means you may fall outside it entirely. These deltas live in a single register, not in nineteen separate programs. When Rhode Island activates, you add one row — not one program.

**Automate DSR routing.** When a user submits a deletion request, routing logic should determine which state laws apply based on the requestor's address, apply the correct deadline, and log the response. A manual spreadsheet breaks at volume. Most teams underinvest here in the first year and pay for it when enforcement picks up.

**Update your vendor DPA library.** Pull your current template and add a multistate addendum. Most vendors are already handling CPRA and have updated addendums ready. The Colorado-specific requirements — subprocessor notification and explicit audit rights language — are the most common additions to negotiate [source: https://www.hinshawlaw.com/en/insights/privacy-cyber-and-ai-decoded-alert/2026-privacy-compliance-california-and-colorado-regulations].

## What changes in 2026

2026 is a pivotal year for US state privacy enforcement [source: https://www.bdo.com/insights/advisory/2026-is-a-pivotal-year-for-privacy]. Minnesota, Maryland, and Rhode Island have laws taking effect, with full enforcement following. New Jersey entered its first full year of AG enforcement. The AI-specific provisions in Colorado and Texas are drawing enforcement attention — the obligation to disclose when automated processing drives consequential decisions is no longer theoretical.

Programs anchored only to California and Virginia are now materially undercovering. If your state privacy register has not been updated since 2024, that is the first item on this quarter's GRC backlog [source: https://www.bdo.com/insights/advisory/2026-is-a-pivotal-year-for-privacy].

## The failure mode GRC teams keep repeating

Teams that build state-by-state end up with a matrix nobody owns. When New Hampshire's law activates six months after the initial program launched, the column in the spreadsheet is blank because the person who built it has moved on.

The unified program model assigns one owner to the core controls and one reviewer to the delta register. New statutes get added as rows in the delta register, not as new workstreams. The maintenance cost stays linear [source: https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/]. Nineteen statutes managed as one program is tractable. Nineteen separate programs managed in parallel is not.

Running a unified privacy program across nineteen state statutes requires accurate data maps, a disciplined delta register, and automated DSR routing that keeps pace with new effective dates. CloudAnzen continuously tracks your control coverage against the full stack of applicable statutes and surfaces gaps before they become enforcement exposure. [Talk to us](/demo).