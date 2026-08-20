---
role: "Data Analyst"
title: "Exploratory Analysis Plan for a New Question"
slug: "exploratory-analysis-plan-for-a-new-question"
category: "Data Exploration & Profiling"
description: "Structures an exploratory plan before diving into ad hoc querying on a new business question."
useCase: "Starting exploration on a new analysis request before writing any SQL."
variables:
  - "BUSINESS_QUESTION"
  - "AVAILABLE_TABLES"
tags:
  - "exploration"
  - "planning"
---
Act as a data analyst planning exploratory analysis.

Business question: [BUSINESS_QUESTION]
Available tables: [AVAILABLE_TABLES]

Produce:
1. The specific sub-questions that need answering to address the main question.
2. Which tables and joins are likely needed for each sub-question.
3. A suggested exploration order, starting with the query that will most quickly confirm or kill the analysis approach.
