---
title: "Customer security review intake guide"
summary: "How to route incoming buyer questionnaires and evidence requests before they derail engineering time."
type: "guides"
collection: "trust-center"
category: "Trust Center"
readTime: "7 min read"
tags: ["Questionnaires","Guides","Revenue support"]
sortOrder: 18
author: "james-peterson"
---
## The intake problem

Security reviews often arrive through sales channels without the context needed to answer them efficiently. A buyer sends a spreadsheet to an account executive, asks for a SOC 2 report in a thread, or requests a penetration test summary late in procurement. The request is forwarded to security, security asks for deal context, and the team loses time before the actual answer work begins.

The problem is not only volume. It is missing structure. Without intake discipline, every customer review feels new, even when most questions are repeats. Engineering gets pulled into avoidable clarifications, sales cannot see status, and the security team becomes the routing layer for work that should have been categorized at the start.

## Build a simple intake process

1. Capture account name, deal stage, due date, and customer requirements.
2. Check whether the buyer can self-serve from the trust center first.
3. Route technical questions to the right owner instead of broadcasting them broadly.
4. Reuse approved answers and attach current evidence.
5. Track unresolved questions centrally until the review closes.

The intake record should be lightweight but complete enough to support prioritization. At minimum, capture:

- Account and opportunity name
- Sales owner and security owner
- Deal stage and target close date
- Requested artifacts
- Questionnaire due date
- Required framework or certification
- Customer industry and data sensitivity
- Whether a mutual NDA is in place
- Links to the questionnaire, portal, or evidence request

This gives the team enough context to decide whether the request needs a standard response, a gated document, a technical owner, or an escalation.

## Triage the request before answering

Not every request deserves the same path. Split incoming reviews into four buckets:

- Self-service: the buyer can use public trust center content.
- Standard evidence: the buyer needs common gated artifacts like SOC 2, ISO status, insurance, or policy summaries.
- Questionnaire: the buyer needs structured answers in their format.
- Deep technical review: the buyer has architecture, product security, or data-flow questions that need a subject matter expert.

This prevents simple requests from entering the same queue as complex ones. It also helps sales understand why some reviews can close in hours while others need owner review.

## Use approved answer sources

A good intake process should reduce copy-paste risk. Maintain a reviewed answer bank for common topics:

- Access control
- Encryption
- Logging and monitoring
- Vulnerability management
- Secure development
- Incident response
- Business continuity
- Vendor management
- Privacy and subprocessors

Every answer should have an owner and a last-reviewed date. If the answer depends on a system state or policy, link the source. The goal is not to make responses sound generic. The goal is to make them accurate, consistent, and fast to reuse.

## Give sales a visible status model

Security review work becomes tense when sales cannot see progress. Use a simple status model:

- New
- Triage needed
- Waiting on customer
- In security review
- Waiting on owner
- Ready for sales
- Submitted
- Closed

Add due dates and blockers. If a questionnaire is stuck because a buyer has not granted portal access, that should be visible. If engineering owns one remaining architecture question, that should be visible too.

## Close the loop after each review

When a review closes, update the system of record. Add new reusable answers, note unusual buyer requirements, and record which artifacts were accepted. If three buyers ask the same unsupported question, that is a signal to improve trust center content or create a new approved answer.

## Why this matters

Without intake discipline, every questionnaire feels new. With intake discipline, your team answers faster and learns from each review.

The best intake process is not heavy. It is a short path that captures context, routes work cleanly, and turns repeated diligence into reusable knowledge. That keeps security reviews from becoming a tax on engineering time every time a serious buyer appears.
