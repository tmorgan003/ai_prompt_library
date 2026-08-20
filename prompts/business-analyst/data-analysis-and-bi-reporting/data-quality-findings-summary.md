---
role: "Business Analyst"
title: "Data Quality Findings Summary"
slug: "data-quality-findings-summary"
category: "Data Analysis & BI Reporting"
description: "Turns raw data profiling or QA findings into a business-readable summary with severity ratings."
useCase: "Reporting data quality issues found during migration, integration, or audit work."
variables:
  - "RAW_FINDINGS"
  - "DATASET_NAME"
tags: []
---
Act as a business analyst summarizing data quality findings for a business audience.

Dataset: [DATASET_NAME]
Raw findings: [RAW_FINDINGS]

Produce:
1. A table: Issue, Description, Severity (Critical/High/Medium/Low), Business Impact, Recommended Owner.
2. A short executive summary paragraph stating whether the data is fit for its intended use.
3. A prioritized remediation order.
