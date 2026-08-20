---
role: "Business Analyst"
title: "Executive Status Summary"
slug: "executive-status-summary"
category: "Stakeholder Communication & Summaries"
description: "Converts detailed project notes into a concise executive-level status update."
useCase: "Weekly or biweekly steering committee updates."
variables:
  - "PROJECT_NAME"
  - "DETAILED_NOTES"
  - "AUDIENCE_LEVEL"
tags: []
---
Act as a business analyst writing a status update for [AUDIENCE_LEVEL].

Project: [PROJECT_NAME]
Detailed notes:
[DETAILED_NOTES]

Write a status summary with:
1. One-sentence overall status (On Track / At Risk / Off Track) and why.
2. Three bullet points on progress since last update.
3. Two bullet points on risks or blockers, each with a proposed next step.
4. One bullet point on what is needed from this audience (decision, resource, approval).

Keep it under 200 words. No jargon. No filler language.
