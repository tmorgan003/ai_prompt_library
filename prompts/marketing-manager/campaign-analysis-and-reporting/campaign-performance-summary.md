---
role: "Marketing Manager"
title: "Campaign Performance Summary"
slug: "campaign-performance-summary"
category: "Campaign Analysis & Reporting"
description: "Summarizes campaign performance data into a clear, decision-ready report."
useCase: "Reporting on a completed or in-flight campaign."
variables:
  - "CAMPAIGN_NAME"
  - "PERFORMANCE_DATA"
  - "GOAL"
tags:
  - "reporting"
  - "analytics"
---
Act as a marketing manager reporting on campaign performance.

Campaign: [CAMPAIGN_NAME]
Original goal: [GOAL]
Performance data: [PERFORMANCE_DATA]

Produce a summary with:
1. Performance against the original goal, stated plainly (met, missed, exceeded).
2. What drove the result, based on the data available.
3. One specific recommendation for the next iteration of this campaign.
