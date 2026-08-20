---
role: "Product Manager"
title: "Product Update for Leadership"
slug: "product-update-for-leadership"
category: "Stakeholder Communication"
description: "Builds a concise product update for a leadership audience covering progress, metrics, and risks."
useCase: "Recurring leadership or executive update on a product area."
variables:
  - "PRODUCT_AREA"
  - "PROGRESS_NOTES"
  - "METRICS_SNAPSHOT"
tags:
  - "stakeholder-communication"
---
Act as a product manager writing a leadership update.

Product area: [PRODUCT_AREA]
Progress notes: [PROGRESS_NOTES]
Metrics snapshot: [METRICS_SNAPSHOT]

Produce an update with:
1. Headline status in one sentence.
2. What shipped or progressed since the last update.
3. Metrics that matter, with context on whether they're trending the right way.
4. One risk or ask that needs leadership attention.

Keep under 200 words.
