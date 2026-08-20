---
role: "Product Manager"
title: "Experiment Design Brief"
slug: "experiment-design-brief"
category: "Metrics & Analytics"
description: "Structures an A/B test or experiment design before it's built."
useCase: "Planning an experiment to validate a product change."
variables:
  - "HYPOTHESIS"
  - "TARGET_METRIC"
  - "AUDIENCE"
tags:
  - "metrics"
  - "experimentation"
---
Act as a product manager designing an experiment.

Hypothesis: [HYPOTHESIS]
Target metric: [TARGET_METRIC]
Audience: [AUDIENCE]

Produce:
1. A clearly stated hypothesis in the format: If we [change], then [metric] will [effect], because [reasoning].
2. Control and treatment group definitions.
3. Guardrail metrics to monitor for unintended harm.
4. What sample size or duration is likely needed to detect a meaningful effect, stated as a rough estimate, not a precise calculation.
