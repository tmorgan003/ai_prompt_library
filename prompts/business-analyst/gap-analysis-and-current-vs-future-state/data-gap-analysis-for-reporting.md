---
role: "Business Analyst"
title: "Data Gap Analysis for Reporting"
slug: "data-gap-analysis-for-reporting"
category: "Gap Analysis & Current vs. Future State"
description: "Identifies missing, inconsistent, or low-quality data needed to support a reporting or analytics requirement."
useCase: "Before building a dashboard or report when data quality is uncertain."
variables:
  - "REPORTING_GOAL"
  - "AVAILABLE_DATA_SOURCES"
  - "REQUIRED_METRICS"
tags: []
---
Act as a business analyst assessing data readiness for a reporting requirement.

Reporting goal: [REPORTING_GOAL]
Available data sources: [AVAILABLE_DATA_SOURCES]
Required metrics: [REQUIRED_METRICS]

Produce:
1. A table: Required Metric, Data Source Available (Yes/Partial/No), Data Quality Concern, Gap.
2. A list of data governance or ownership questions that need answers before the report can be trusted.
3. A recommendation on whether to proceed, delay, or scope down the reporting goal.
