---
role: "Data Analyst"
title: "Metric Definition Interview Guide"
slug: "metric-definition-interview-guide"
category: "Stakeholder Requirements for Data"
description: "Builds an interview guide to nail down exactly how a stakeholder wants a metric defined before building it."
useCase: "Before building a report or metric that has room for definitional ambiguity."
variables:
  - "METRIC_NAME"
  - "STAKEHOLDER_ROLE"
tags:
  - "requirements"
---
Act as a data analyst clarifying a metric definition with a stakeholder.

Metric: [METRIC_NAME]
Stakeholder role: [STAKEHOLDER_ROLE]

Produce interview questions covering:
1. Exact inclusion and exclusion criteria (what counts, what doesn't).
2. Time boundaries (as of when, over what period).
3. How this metric will be used, to catch mismatches between the definition and the actual decision it's meant to support.
4. Whether a similar-sounding metric already exists elsewhere that this could be confused with.
