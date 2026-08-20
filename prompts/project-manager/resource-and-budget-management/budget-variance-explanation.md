---
role: "Project Manager"
title: "Budget Variance Explanation"
slug: "budget-variance-explanation"
category: "Resource & Budget Management"
description: "Explains a budget variance in plain language suitable for a finance or leadership audience."
useCase: "Reporting on a project budget that's over or under plan."
variables:
  - "BUDGET_DATA"
  - "PROJECT_NAME"
tags:
  - "budget"
---
Act as a project manager explaining a budget variance.

Project: [PROJECT_NAME]
Budget data: [BUDGET_DATA]

Produce:
1. The variance amount and percentage, stated plainly.
2. The specific driver(s) of the variance.
3. Whether this is a timing difference (money will still be spent, just later/earlier) or a real overrun/underrun.
4. The forecast to project completion given this variance.
