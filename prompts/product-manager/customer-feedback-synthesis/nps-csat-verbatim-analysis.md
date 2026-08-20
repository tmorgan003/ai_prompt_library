---
role: "Product Manager"
title: "NPS/CSAT Verbatim Analysis"
slug: "nps-csat-verbatim-analysis"
category: "Customer Feedback Synthesis"
description: "Analyzes open-ended NPS or CSAT survey comments for actionable patterns."
useCase: "Reviewing a batch of survey verbatims after a survey wave closes."
variables:
  - "SURVEY_VERBATIMS"
  - "SCORE_CONTEXT"
tags:
  - "feedback"
  - "analysis"
---
Act as a product manager analyzing survey verbatim comments.

Score context (e.g. distribution of scores): [SCORE_CONTEXT]
Verbatim comments: [SURVEY_VERBATIMS]

Produce:
1. Themes among detractor comments, ranked by frequency.
2. Themes among promoter comments, to understand what's working.
3. One specific, actionable recommendation tied to the most common detractor theme.
