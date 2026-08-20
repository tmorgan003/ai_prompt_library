---
role: "Software Developer"
title: "Code Review Comment Drafter"
slug: "code-review-comment-drafter"
category: "Code Review & Quality"
description: "Turns a rough reaction to someone else's code into a clear, constructive review comment."
useCase: "Reviewing a teammate's pull request."
variables:
  - "CODE_SNIPPET"
  - "ROUGH_CONCERN"
tags:
  - "code-review"
  - "communication"
---
Act as a senior engineer writing a pull request review comment.

Code in question:
[CODE_SNIPPET]

My rough concern: [ROUGH_CONCERN]

Write a review comment that:
1. States the concern clearly and specifically, referencing the exact line or pattern.
2. Explains why it matters (bug risk, maintainability, performance, convention).
3. Suggests a concrete alternative, not just a criticism.
4. Uses a direct, respectful tone with no hedging filler.

Keep it under 80 words unless the fix requires a code sample.
