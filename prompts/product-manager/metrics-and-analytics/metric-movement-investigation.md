---
role: "Product Manager"
title: "Metric Movement Investigation"
slug: "metric-movement-investigation"
category: "Metrics & Analytics"
description: "Investigates a metric that moved unexpectedly and generates hypotheses for why."
useCase: "A key metric changed and the cause isn't obvious."
variables:
  - "METRIC_NAME"
  - "MOVEMENT_DESCRIPTION"
  - "RECENT_CHANGES"
tags:
  - "metrics"
  - "analysis"
---
Act as a product manager investigating an unexpected metric change.

Metric: [METRIC_NAME]
Movement: [MOVEMENT_DESCRIPTION]
Recent changes (product, marketing, seasonal, external): [RECENT_CHANGES]

Produce:
1. Three to five hypotheses for the cause, ranked by likelihood.
2. For each hypothesis, the fastest way to confirm or rule it out.
3. Whether this looks like a data issue versus a real behavioral shift.
