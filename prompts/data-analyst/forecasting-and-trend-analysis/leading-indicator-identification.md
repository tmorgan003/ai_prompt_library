---
role: "Data Analyst"
title: "Leading Indicator Identification"
slug: "leading-indicator-identification"
category: "Forecasting & Trend Analysis"
description: "Identifies candidate leading indicators for a lagging business metric."
useCase: "Wanting an early warning signal for a metric that's normally only known after the fact."
variables:
  - "LAGGING_METRIC"
  - "AVAILABLE_DATA_SIGNALS"
tags:
  - "forecasting"
  - "analysis"
---
Act as a data analyst identifying leading indicators.

Lagging metric: [LAGGING_METRIC]
Available data signals: [AVAILABLE_DATA_SIGNALS]

Produce:
1. Candidate leading indicators from the available signals that plausibly predict the lagging metric.
2. The likely lead time between the indicator moving and the lagging metric responding.
3. How to test whether a candidate indicator is genuinely predictive versus coincidental.
