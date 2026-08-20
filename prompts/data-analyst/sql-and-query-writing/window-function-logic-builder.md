---
role: "Data Analyst"
title: "Window Function Logic Builder"
slug: "window-function-logic-builder"
category: "SQL & Query Writing"
description: "Builds the correct window function logic for a specific analytical need (running totals, rank, period-over-period)."
useCase: "Needing a window function pattern and wanting to avoid a common logic mistake."
variables:
  - "ANALYTICAL_NEED"
  - "TABLE_STRUCTURE"
  - "SQL_DIALECT"
tags:
  - "sql"
---
Act as a data analyst building window function logic.

Dialect: [SQL_DIALECT]
Analytical need: [ANALYTICAL_NEED]
Table structure: [TABLE_STRUCTURE]

Produce:
1. The window function query that solves this need.
2. An explanation of the PARTITION BY and ORDER BY choices and why they're correct for this need.
3. A common mistake analysts make with this pattern, and how this query avoids it.
