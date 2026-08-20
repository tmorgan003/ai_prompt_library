---
role: "Data Analyst"
title: "A/B Test Result Interpretation"
slug: "a-b-test-result-interpretation"
category: "Statistical Analysis"
description: "Interprets A/B test results in plain language, including whether the result is trustworthy."
useCase: "A test has concluded and the result needs interpretation for a non-technical audience."
variables:
  - "TEST_RESULTS"
  - "TEST_DURATION_AND_SAMPLE"
tags:
  - "statistics"
  - "experimentation"
---
Act as a data analyst interpreting an A/B test result.

Test results: [TEST_RESULTS]
Test duration and sample size: [TEST_DURATION_AND_SAMPLE]

Produce:
1. A plain-language statement of the result and whether it's statistically significant.
2. Whether the test ran long enough and with enough sample to trust the result.
3. Practical significance versus statistical significance: is the effect size big enough to matter for the business.
4. A recommendation: ship, extend the test, or don't ship.
