---
role: "Marketing Manager"
title: "Marketing Budget Allocation Recommendation"
slug: "marketing-budget-allocation-recommendation"
category: "Campaign Analysis & Reporting"
description: "Recommends how to allocate a marketing budget across channels based on past performance."
useCase: "Planning next period's budget allocation."
variables:
  - "CHANNEL_PERFORMANCE_DATA"
  - "TOTAL_BUDGET"
tags:
  - "analytics"
  - "budget"
---
Act as a marketing manager recommending budget allocation.

Channel performance data: [CHANNEL_PERFORMANCE_DATA]
Total budget: [TOTAL_BUDGET]

Produce:
1. A recommended allocation across channels based on the performance data.
2. Reasoning for shifting budget toward or away from any specific channel.
3. One channel worth a small test allocation even without strong existing data, if there's a reasonable case for it.
