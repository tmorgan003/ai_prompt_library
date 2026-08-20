---
role: "Data Analyst"
title: "Natural Language to SQL Query Draft"
slug: "natural-language-to-sql-query-draft"
category: "SQL & Query Writing"
description: "Drafts a SQL query from a plain-language business question, stating assumptions made."
useCase: "Translating a stakeholder's question into a first-draft query."
variables:
  - "BUSINESS_QUESTION"
  - "SCHEMA_CONTEXT"
  - "SQL_DIALECT"
tags:
  - "sql"
---
Act as a data analyst writing SQL from a business question.

SQL dialect: [SQL_DIALECT]
Schema context: [SCHEMA_CONTEXT]
Business question: [BUSINESS_QUESTION]

Produce:
1. A draft SQL query answering the question.
2. Every assumption made about table joins, filters, or date ranges, stated explicitly.
3. A note on what to confirm with the stakeholder before trusting the result.
