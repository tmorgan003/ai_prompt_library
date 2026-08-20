---
role: "Data Analyst"
title: "Complex CTE Query Explainer"
slug: "complex-cte-query-explainer"
category: "SQL & Query Writing"
description: "Explains a complex multi-CTE query step by step for someone reviewing or inheriting it."
useCase: "Understanding or documenting a complicated query written by someone else, or by you a while ago."
variables:
  - "SQL_QUERY"
tags:
  - "sql"
  - "documentation"
---
Act as a data analyst explaining a complex SQL query.

Query:
[SQL_QUERY]

Explain:
1. What each CTE or subquery produces, in plain language, in execution order.
2. How the final result is assembled from the pieces.
3. Any assumption baked into the logic (date ranges, inclusion/exclusion rules) that a reader should know about.
