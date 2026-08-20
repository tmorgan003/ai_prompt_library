---
role: "Data Analyst"
title: "Forecast Assumption Documentation"
slug: "forecast-assumption-documentation"
category: "Forecasting & Trend Analysis"
description: "Documents the assumptions behind a forecast so stakeholders understand what could change the outcome."
useCase: "Presenting a forecast to stakeholders who will make decisions based on it."
variables:
  - "FORECAST_SUMMARY"
  - "KEY_INPUTS"
tags:
  - "forecasting"
  - "documentation"
---
Act as a data analyst documenting forecast assumptions.

Forecast summary: [FORECAST_SUMMARY]
Key inputs: [KEY_INPUTS]

Produce:
1. Every material assumption baked into the forecast, stated explicitly.
2. Which assumption the forecast is most sensitive to.
3. A best case and worst case scenario based on that most-sensitive assumption moving.
