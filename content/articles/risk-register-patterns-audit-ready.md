---
title: "Risk register patterns that survive your first audit"
summary: "Most risk registers fail on first audit contact — here's how to structure yours so the evidence actually holds up"
type: "blog"
collection: null
category: "Risk management"
readTime: "5 min read"
tags: ["risk register","audit prep","risk management","ISO 27001","GRC"]
sortOrder: 38
publishedAt: "2026-05-17"
author: "james-peterson"
---
Your risk register is the document the auditor reaches for first. It tells them whether you've been thinking about risk or just documenting it. Most teams treat it as a spreadsheet they filled out once and never touched again. Auditors know this — and they look for the signs.

## What auditors actually test in your risk register

When the auditor opens your risk register, they're not checking whether you listed the right risks. They're checking whether the register shows signs of life.

Specifically, they want to see:

- **Dates that make sense.** If every risk was entered on the same day, that's a red flag. A mature risk register has entries added at different times, reviewed on different dates.
- **Risk owners who are real people.** "IT team" or "Security" as a risk owner means no one owns it. The auditor will ask to speak to that person. If they don't know they own it, you have a problem.
- **Treatment decisions that changed.** Accepting a risk, then treating it, then re-accepting it after a control fails — that's what a live risk process looks like. A register where every risk has been "treated" since inception looks fabricated.
- **Evidence links that actually work.** If your register says "control implemented," there should be a link or reference to the evidence. A URL to a broken internal Wiki page doesn't count.

ISO 31000 [source: https://www.iso.org/standard/31000] frames risk management as a continuous process, not a point-in-time exercise. Auditors across ISO 27001, SOC 2, and similar frameworks have internalized this. If your register looks static, it fails that test — even if the risks you've listed are technically accurate.

## The four structural problems that kill registers at audit time

**Problem 1: Inherent risk and residual risk columns that look identical.**

You have a risk rated high inherent. After control implementation, it's still high residual. What did the control do? If you can't explain the delta, the auditor will conclude you didn't think about it. The residual rating must reflect what the control actually reduces — not just a default entry.

**Problem 2: Risk appetite with no teeth.**

Every register has a risk appetite statement somewhere. Most of them are ignored when filling out actual risk entries. If your appetite says you won't accept risks above a certain likelihood threshold, but you have multiple "accepted" risks rated above it, you need to explain why. Either the appetite is wrong or the acceptance decision was undocumented. Both are problems.

**Problem 3: Missing the treatment plan versus treatment evidence distinction.**

"We will implement MFA" is a treatment plan. A screenshot of your identity provider showing MFA enforced with a timestamp is treatment evidence. Auditors care about the latter. Your register should link to evidence, not just describe intent.

**Problem 4: No connection between the register and your asset inventory.**

Risk has to attach to something. If your register lists "unauthorized access to sensitive data" with no reference to which systems hold that data, the auditor can't trace the risk to the controls. ISMS.online [source: https://www.isms.online/] describes this as the core linkage problem in risk management — risk must be anchored to assets, processes, or services, not floating in the abstract.

## Patterns that consistently hold up

Operators who pass their first audit without a remediation sprint typically share a few structural habits.

**Keep the register in a format the auditor can export.** A spreadsheet with consistent columns exports cleanly. A wiki page with nested tables does not. Whatever your tool, make sure the auditor can get a dated snapshot in under five minutes.

**Run quarterly reviews that leave a trail.** The review doesn't have to be long. It does have to be documented. A calendar invite, a notes document with the date and attendees, and a list of what changed — that's enough. The auditor wants to see that someone looked at the register between now and a year ago.

**Separate accepted risks from mitigated risks in your view.** Accepted risks require explicit re-review on a schedule. Mitigated risks require evidence maintenance. Conflating the two means you'll be scrambling during fieldwork when the auditor asks for the last review date of an "accepted" risk you haven't touched in eighteen months.

**Use consistent severity scoring.** Whichever scale you use — 3x3, 5x5, qualitative — apply it consistently across every entry. Inconsistent scoring signals that different people filled out the register at different times without coordination. That's not a data quality problem; it's a governance problem, and auditors treat it that way.

## Getting your risk owners audit-ready

The register lists names. Those names have to be able to answer questions.

Before your audit window opens, run a short check-in with each risk owner. Not a full rehearsal — a fifteen-minute conversation. Ask them: what's the risk you own, what control are you relying on, and when did you last check it was working?

If they can't answer the third question, you have a control gap to close, not a training problem. Fix the gap first, then document the fix before the auditor arrives.

Risk owners who've been told they own a risk in a register they've never seen are a common failure mode. The fix is simple: send them their row, ask for acknowledgment, and keep that acknowledgment on file.

## The week before fieldwork begins

Stop adding new risks. Your register should be in evidence-gathering mode, not discovery mode.

Ensure every open treatment item has either been completed with evidence or formally accepted with a documented decision. "In progress" is not an audit-ready state.

Export a dated snapshot and save it somewhere the auditor can access without asking you for a link.

Check every risk owner one more time. Make sure they know their risks and where the evidence lives.

The auditor is not trying to catch you. They're trying to verify that you've been doing what you said you'd do. A well-maintained risk register is the clearest signal that you have.

Audit prep shouldn't require a sprint to pull together. CloudAnzen continuously maps your risk register to your controls and tracks evidence status in real time, so when the auditor arrives the trail is already there. [Talk to us](/demo).