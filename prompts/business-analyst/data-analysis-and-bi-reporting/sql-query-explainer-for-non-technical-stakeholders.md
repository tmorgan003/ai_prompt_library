---
role: "Business Analyst"
title: "SQL Query Explainer for Non-Technical Stakeholders"
slug: "sql-query-explainer-for-non-technical-stakeholders"
category: "Data Analysis & BI Reporting"
description: "Translates a SQL query's logic into plain language a business stakeholder can verify."
useCase: "Confirming query logic matches business intent before a report goes live."
variables:
  - "SQL_QUERY"
tags: []
---
Act as a business analyst explaining a SQL query to a non-technical stakeholder.

Query:
[SQL_QUERY]

Explain:
1. What data this query pulls, in plain language.
2. What filters or conditions are applied, and what they mean for the business.
3. Any aggregation or calculation logic, explained without SQL syntax.
4. Any assumption baked into the query that the stakeholder should confirm is correct.
