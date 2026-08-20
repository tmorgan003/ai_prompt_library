---
role: "Project Manager"
title: "Budget Forecast to Completion"
slug: "budget-forecast-to-completion"
category: "Resource & Budget Management"
description: "Projects total project cost at completion based on spend to date and remaining work."
useCase: "Mid-project budget check-in or forecast update."
variables:
  - "SPEND_TO_DATE"
  - "REMAINING_WORK_ESTIMATE"
  - "ORIGINAL_BUDGET"
tags:
  - "budget"
  - "forecasting"
---
Act as a project manager forecasting budget to completion.

Original budget: [ORIGINAL_BUDGET]
Spend to date: [SPEND_TO_DATE]
Remaining work estimate: [REMAINING_WORK_ESTIMATE]

Produce:
1. A forecasted total cost at completion.
2. The variance against the original budget, in dollars and percent.
3. The main assumption driving the forecast, stated explicitly.
4. A recommendation: proceed as planned, request additional budget, or reduce scope.
