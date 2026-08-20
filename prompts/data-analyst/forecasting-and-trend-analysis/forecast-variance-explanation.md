---
role: "Data Analyst"
title: "Forecast Variance Explanation"
slug: "forecast-variance-explanation"
category: "Forecasting & Trend Analysis"
description: "Explains why actual results differed from a previous forecast."
useCase: "Reviewing forecast accuracy after the period being forecasted has closed."
variables:
  - "FORECAST_VALUE"
  - "ACTUAL_VALUE"
  - "PERIOD_CONTEXT"
tags:
  - "forecasting"
  - "analysis"
---
Act as a data analyst explaining a forecast variance.

Forecasted value: [FORECAST_VALUE]
Actual value: [ACTUAL_VALUE]
Period context (what happened during this period): [PERIOD_CONTEXT]

Produce:
1. The size of the variance in absolute and percentage terms.
2. The most likely driver(s) of the miss, tied to what's known about the period.
3. Whether the forecasting method itself needs adjustment or this was a one-off event.
