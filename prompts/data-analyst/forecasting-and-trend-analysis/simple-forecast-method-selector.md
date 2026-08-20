---
role: "Data Analyst"
title: "Simple Forecast Method Selector"
slug: "simple-forecast-method-selector"
category: "Forecasting & Trend Analysis"
description: "Recommends an appropriate forecasting approach given the data pattern and forecast horizon."
useCase: "Deciding how to forecast a metric without overengineering the approach."
variables:
  - "METRIC_DESCRIPTION"
  - "HISTORICAL_PATTERN"
  - "FORECAST_HORIZON"
tags:
  - "forecasting"
---
Act as a data analyst selecting a forecasting method.

Metric: [METRIC_DESCRIPTION]
Historical pattern (trend, seasonality, volatility): [HISTORICAL_PATTERN]
Forecast horizon: [FORECAST_HORIZON]

Recommend:
1. An appropriate forecasting approach given the pattern and horizon (e.g. moving average, linear trend, seasonal decomposition), with reasoning.
2. The main risk of this approach given the data's known behavior.
3. What would make the forecast unreliable (a structural change, a one-time event) and how to flag that risk to stakeholders.
