---
role: "Data Analyst"
title: "Outlier Investigation Plan"
slug: "outlier-investigation-plan"
category: "Data Exploration & Profiling"
description: "Builds a plan to investigate whether flagged outliers are real, data errors, or expected edge cases."
useCase: "Outliers show up during exploration and need investigation before they're excluded or explained."
variables:
  - "OUTLIER_DESCRIPTION"
  - "DATASET_CONTEXT"
tags:
  - "exploration"
  - "data-quality"
---
Act as a data analyst investigating outliers.

Outlier description: [OUTLIER_DESCRIPTION]
Dataset context: [DATASET_CONTEXT]

Produce:
1. Three possible explanations for the outlier (data entry error, legitimate edge case, upstream system bug, unit mismatch).
2. For each explanation, a specific check to confirm or rule it out.
3. A recommendation on how to handle the outlier in analysis until it's fully explained (exclude, flag, keep with a note).
