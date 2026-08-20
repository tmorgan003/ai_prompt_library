---
role: "Marketing Manager"
title: "A/B Test Result Marketing Interpretation"
slug: "a-b-test-result-marketing-interpretation"
category: "Campaign Analysis & Reporting"
description: "Interprets an A/B test result for a marketing asset in plain, decision-oriented language."
useCase: "A test has concluded and a decision on which variant to use is needed."
variables:
  - "TEST_RESULTS"
  - "SAMPLE_SIZE_CONTEXT"
tags:
  - "analytics"
  - "testing"
---
Act as a marketing manager interpreting an A/B test result.

Test results: [TEST_RESULTS]
Sample size context: [SAMPLE_SIZE_CONTEXT]

Produce:
1. A plain-language statement of which variant won and by how much.
2. Whether the sample size and duration are sufficient to trust the result.
3. A recommendation: roll out the winner, extend the test, or treat as inconclusive.
