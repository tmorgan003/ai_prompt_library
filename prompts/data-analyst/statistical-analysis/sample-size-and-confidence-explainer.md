---
role: "Data Analyst"
title: "Sample Size and Confidence Explainer"
slug: "sample-size-and-confidence-explainer"
category: "Statistical Analysis"
description: "Explains whether a result is based on a large enough sample to be trusted, in plain language."
useCase: "A stakeholder wants to act on a finding based on a small or uncertain sample."
variables:
  - "FINDING_DESCRIPTION"
  - "SAMPLE_SIZE"
tags:
  - "statistics"
---
Act as a data analyst assessing sample size reliability.

Finding: [FINDING_DESCRIPTION]
Sample size: [SAMPLE_SIZE]

Explain in plain language:
1. Whether this sample size is generally sufficient to draw a reliable conclusion for this kind of finding.
2. What could happen if a decision is made on this finding and the sample turns out to be too small.
3. What additional data, if any, would meaningfully increase confidence.
