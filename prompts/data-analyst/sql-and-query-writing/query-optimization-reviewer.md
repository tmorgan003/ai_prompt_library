---
role: "Data Analyst"
title: "Query Optimization Reviewer"
slug: "query-optimization-reviewer"
category: "SQL & Query Writing"
description: "Reviews a slow query and suggests optimizations specific to the stated dialect."
useCase: "A query is running slowly and needs a performance pass."
variables:
  - "SQL_QUERY"
  - "SQL_DIALECT"
  - "PERFORMANCE_CONTEXT"
tags:
  - "sql"
  - "performance"
---
Act as a data analyst optimizing a slow SQL query.

Dialect: [SQL_DIALECT]
Performance context (table sizes, current runtime): [PERFORMANCE_CONTEXT]
Query:
[SQL_QUERY]

Review for:
1. Unnecessary full table scans or missing filter pushdown.
2. Inefficient joins (join order, missing indexes/clustering keys, cartesian risk).
3. Redundant subqueries or CTEs that could be simplified.
4. A rewritten version with the specific improvements applied.
