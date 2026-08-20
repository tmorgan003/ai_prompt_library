---
role: "Data Analyst"
title: "Data Lineage Documentation from a Pipeline Description"
slug: "data-lineage-documentation-from-a-pipeline-description"
category: "Data Quality & Governance"
description: "Documents data lineage from a description of how a dataset is built."
useCase: "Documenting where a reported number actually comes from, for audit or trust purposes."
variables:
  - "PIPELINE_DESCRIPTION"
tags:
  - "data-quality"
  - "documentation"
---
Act as a data analyst documenting data lineage.

Pipeline description: [PIPELINE_DESCRIPTION]

Produce:
1. A source-to-report lineage summary: source system, transformation steps, final destination.
2. Every transformation step that changes the meaning of the data (aggregation, filtering, join), called out specifically.
3. Points in the pipeline most likely to introduce an error, based on complexity.
