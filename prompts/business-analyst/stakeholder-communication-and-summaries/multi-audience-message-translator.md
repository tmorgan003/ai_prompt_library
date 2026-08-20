---
role: "Business Analyst"
title: "Multi-Audience Message Translator"
slug: "multi-audience-message-translator"
category: "Stakeholder Communication & Summaries"
description: "Takes one message and rewrites it for three different audiences (executive, technical team, end users) at appropriate detail levels."
useCase: "Communicating a change, delay, or decision to different groups without redoing the writing from scratch."
variables:
  - "CORE_MESSAGE"
  - "PROJECT_NAME"
tags: []
---
Act as a business analyst adapting one message for three audiences.

Project: [PROJECT_NAME]
Core message:
[CORE_MESSAGE]

Produce three versions:
1. Executive version: outcome and business impact, under 75 words.
2. Technical team version: what changed and what it means for their work, with any technical detail needed.
3. End user version: plain language, what changes for them and when, no internal jargon.

Keep the facts identical across all three. Only the framing and detail level should change.
