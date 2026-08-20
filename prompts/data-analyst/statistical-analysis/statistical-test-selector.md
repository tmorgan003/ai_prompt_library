---
role: "Data Analyst"
title: "Statistical Test Selector"
slug: "statistical-test-selector"
category: "Statistical Analysis"
description: "Recommends the appropriate statistical test for a given comparison and data type."
useCase: "Deciding how to test whether an observed difference is statistically meaningful."
variables:
  - "COMPARISON_DESCRIPTION"
  - "DATA_TYPE"
  - "SAMPLE_SIZE_CONTEXT"
tags:
  - "statistics"
---
Act as a data analyst selecting a statistical test.

Comparison to make: [COMPARISON_DESCRIPTION]
Data type: [DATA_TYPE]
Sample size context: [SAMPLE_SIZE_CONTEXT]

Recommend:
1. The appropriate statistical test, with reasoning based on data type and sample size.
2. The key assumption of this test that should be checked before trusting the result.
3. How to interpret the result in plain language for a non-technical audience.
