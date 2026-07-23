---
title: "NIST CSF 2.0 Govern function: building the policy map and roles your first assessment expects"
summary: "How to build the Govern function policy map and assign ownership roles before your first NIST CSF 2.0 assessment"
type: "blog"
collection: null
category: "NIST CSF"
readTime: "6 min read"
tags: ["NIST CSF 2.0","Govern function","policy map","roles responsibilities","assessment readiness"]
sortOrder: 103
publishedAt: "2026-07-23"
author: "maria-rodriguez"
---
Most teams preparing for a first NIST CSF 2.0 assessment focus their energy on Identify, Protect, and Detect. The Govern function — added as the sixth function in the 2024 revision — tends to be treated as a paperwork layer. That assumption fails on assessment day. Assessors use GV subcategories to anchor every other finding: if governance is thin, control gaps look deliberate.

## What the Govern function covers

NIST published CSF 2.0 with Govern as a standalone top-level function for the first time [source: https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf]. It has six subcategories:

- **GV.OC** — Organizational Context: mission, stakeholders, legal obligations, and the risk environment that sets the tone for everything else
- **GV.RM** — Risk Management Strategy: documented risk appetite and how the organization decides to treat risk
- **GV.RR** — Roles, Responsibilities, and Authorities: who owns what, and who has authority to make binding security decisions
- **GV.PO** — Policy: cybersecurity policies are established, communicated, and enforced
- **GV.OV** — Oversight: leadership reviews cybersecurity risk posture on a documented schedule
- **GV.SC** — Cybersecurity Supply Chain Risk Management: vendor and software dependency risk treated as governance, not just procurement

All six will surface in a first assessment. GV.PO and GV.RR are where most teams arrive with gaps they did not realize they had.

## Building the policy map

A policy map is not a SharePoint folder of PDFs. It is a structured inventory that links each Govern subcategory to the policy that covers it — including version date, named owner, review cadence, approval status, and exact location.

For GV.PO, assessors look for [source: https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf]:

1. A cybersecurity policy approved by leadership — not just filed
2. Evidence it was communicated to personnel with relevant responsibilities
3. A defined review cycle — annual is the common baseline
4. A scope statement that matches what is actually being assessed

The common failure mode: one omnibus Information Security Policy that handles acceptable use, incident response, vendor management, and access control in a single document. That is not a policy map. When an assessor asks which policy governs supply chain risk decisions, "it's all in section 7" is not a defensible answer.

Build the map as a table. Rows are the six GV subcategories. Columns are: policy name, owner, approval date, last reviewed, and document link. Fill every cell. Blank cells are findings waiting to happen — find them yourself first.

### What "communicated" means to an assessor

Communication in GV.PO is not a one-time email. Assessors look for:

- Signed acknowledgment records or training completion logs
- A shared location that personnel can actually navigate to
- Onboarding records showing new hires received relevant policies

A policy in a shared drive folder with no acknowledgment trail does not close this subcategory. Fix this before the assessment window opens.

## Assigning roles before the assessor asks

GV.RR is where governance programs built on unspoken assumptions collapse. The subcategory requires cybersecurity roles, responsibilities, and authorities to be established and understood across the organization [source: https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf].

Documented answers are required for:

- Who is accountable for cybersecurity outcomes at the executive level?
- Who owns each control domain?
- Who has authority to approve exceptions to policy?
- Who represents security in product and engineering decisions?

NIST CSF 2.0 implementation guidance explicitly states that these assignments must be documented — not implied by title or assumed from org charts [source: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1302.pdf]. "Head of Engineering" does not automatically mean that person owns Protect-domain controls.

### Building a defensible RACI

Build the RACI at function level, not control level. A control-level RACI for a full CSF program has hundreds of rows and rarely stays current past the first quarter. A function-level RACI has seven rows and survives organizational changes:

| Function | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Govern | CISO / Security Lead | CEO or Board | Legal, HR | All staff |
| Identify | Asset owners | CISO | Engineering | — |
| Protect | Engineering / IT | CISO | Vendors | — |
| Detect | SecOps | CISO | — | — |
| Respond | Incident Commander | CISO | Legal, Comms | Board |
| Recover | IT Ops | CISO | — | Board |

Assessors are not asking for names. They want to see that accountability is assigned at a level that can enforce decisions.

## Organizational context and oversight evidence

GV.OC asks for a documented view of the organization's mission, stakeholders, legal obligations, and the business context that shapes security priorities. In practice this means a scope statement covering which systems, data types, and geographies are in scope; named stakeholders whose requirements the program must address; and an explicit link between business objectives and cybersecurity priorities.

If your product processes data under GDPR, India's DPDP Act, or HIPAA, those obligations belong in GV.OC. Assessors use this section to calibrate the rest of the engagement [source: https://arcticwolf.com/resources/blog/nist-csf-2-0-understanding-and-implementing-the-govern-function/]. An organizational context document that omits active regulatory obligations reads as an oversight and will be flagged.

GV.OV is how leadership confirms the program is working. The evidence is more accessible than teams expect: board or risk committee meeting minutes that include a cybersecurity agenda item with documented discussion; metrics reports showing indicators were reviewed and acted on, not just generated; and prior audit results with management responses. For a smaller organization without a formal risk committee, a security agenda item in quarterly board meetings — with minutes capturing discussion and decisions — satisfies the intent. Documented leadership engagement is the requirement, not a committee. That bar is achievable and is still routinely missed.

## Five days to close the Govern gaps

If your assessment is six to eight weeks out and Govern is underdocumented, this sequence works:

**Days 1–2**: Audit every existing policy document. Confirm each has a version date, a named owner, and a leadership approval record.

**Day 3**: Build the policy map table. Flag every GV subcategory with no matching policy and assign an owner to each gap today.

**Day 4**: Draft role assignments using the function-level RACI above. Get written acknowledgment from the CISO and one executive.

**Day 5**: Check communication records for each policy. If acknowledgment records do not exist, send them now — six weeks is enough runway to collect responses before the assessment opens.

Six weeks is sufficient to close most Govern gaps. The only variable is when you start.

Governance documentation left until the last week is documentation that will not hold up under scrutiny. CloudAnzen continuously maps your control evidence to NIST CSF 2.0 subcategories — including the full Govern function — so you know what is missing before the assessor asks. [Talk to us](/demo).