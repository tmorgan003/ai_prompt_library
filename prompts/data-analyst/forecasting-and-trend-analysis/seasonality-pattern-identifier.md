---
role: "Data Analyst"
title: "Seasonality Pattern Identifier"
slug: "seasonality-pattern-identifier"
category: "Forecasting & Trend Analysis"
description: "Identifies likely seasonal patterns in a metric's historical behavior description."
useCase: "Understanding whether a metric's ups and downs are seasonal before building a forecast or setting a target."
variables:
  - "METRIC_HISTORY_DESCRIPTION"
tags:
  - "forecasting"
  - "trend-analysis"
---
Act as a data analyst identifying seasonality.

Metric history description: [METRIC_HISTORY_DESCRIPTION]

Identify:
1. Likely seasonal patterns (weekly, monthly, quarterly, annual) based on the description.
2. A plausible business reason for each seasonal pattern.
3. How to adjust a target-setting or forecasting process to account for this seasonality rather than treating a normal seasonal dip as bad performance.
