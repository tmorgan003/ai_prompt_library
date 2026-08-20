---
role: "Customer Success Manager"
title: "Customer Health Score Narrative"
slug: "customer-health-score-narrative"
category: "Customer Health & Retention"
description: "Turns a customer health score and underlying signals into a narrative explanation."
useCase: "Explaining why a customer's health score changed, to yourself or to leadership."
variables:
  - "HEALTH_SCORE_SIGNALS"
  - "ACCOUNT_NAME"
tags:
  - "retention"
  - "customer-health"
---
Act as a customer success manager interpreting a customer health score.

Account: [ACCOUNT_NAME]
Health score signals (usage, support volume, engagement, sentiment): [HEALTH_SCORE_SIGNALS]

Produce:
1. A plain-language explanation of why the score is what it is.
2. Which signal is driving the score most, and whether it's a leading or lagging indicator.
3. A recommended action given the current health status.
