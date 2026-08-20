---
role: "Data Analyst"
title: "Trend Significance Assessment"
slug: "trend-significance-assessment"
category: "Statistical Analysis"
description: "Assesses whether an observed trend over time is likely meaningful or within normal variation."
useCase: "A metric appears to be trending up or down and someone wants to know if it's real."
variables:
  - "TREND_DESCRIPTION"
  - "HISTORICAL_VARIATION_CONTEXT"
tags:
  - "statistics"
  - "trend-analysis"
---
Act as a data analyst assessing trend significance.

Trend: [TREND_DESCRIPTION]
Historical variation context: [HISTORICAL_VARIATION_CONTEXT]

Assess:
1. Whether the current movement looks larger than typical historical variation for this metric.
2. Seasonal or cyclical patterns that could explain the trend without a real underlying change.
3. A recommendation on whether to act now or wait for more data points to confirm the trend.
