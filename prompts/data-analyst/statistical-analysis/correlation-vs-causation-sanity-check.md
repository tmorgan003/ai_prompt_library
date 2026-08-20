---
role: "Data Analyst"
title: "Correlation vs. Causation Sanity Check"
slug: "correlation-vs-causation-sanity-check"
category: "Statistical Analysis"
description: "Reviews a claimed relationship between two variables and stress-tests whether causation is actually supported."
useCase: "Before presenting a finding that implies one thing causes another."
variables:
  - "CLAIMED_RELATIONSHIP"
  - "DATA_CONTEXT"
tags:
  - "statistics"
  - "critical-thinking"
---
Act as a data analyst stress-testing a causal claim.

Claimed relationship: [CLAIMED_RELATIONSHIP]
Data context: [DATA_CONTEXT]

Assess:
1. What evidence would be needed to support causation versus correlation.
2. Plausible confounding variables that could explain the relationship without causation.
3. Whether the available data can rule out the most likely confounder.
4. How to state the finding accurately without overclaiming.
