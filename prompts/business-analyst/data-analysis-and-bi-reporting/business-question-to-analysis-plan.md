---
role: "Business Analyst"
title: "Business Question to Analysis Plan"
slug: "business-question-to-analysis-plan"
category: "Data Analysis & BI Reporting"
description: "Converts a vague business question into a structured analysis plan before any query is written."
useCase: "Start of any ad hoc data request from a stakeholder."
variables:
  - "BUSINESS_QUESTION"
  - "AVAILABLE_DATA_SOURCES"
tags: []
---
Act as a business analyst scoping a data analysis request.

Business question: [BUSINESS_QUESTION]
Available data sources: [AVAILABLE_DATA_SOURCES]

Produce:
1. A restated, sharper version of the question.
2. The specific metrics or fields needed to answer it.
3. Any assumptions that need stakeholder confirmation before analysis starts.
4. A suggested output format (table, chart, dashboard, narrative summary).
