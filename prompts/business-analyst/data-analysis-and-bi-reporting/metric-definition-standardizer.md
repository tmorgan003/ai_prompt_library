---
role: "Business Analyst"
title: "Metric Definition Standardizer"
slug: "metric-definition-standardizer"
category: "Data Analysis & BI Reporting"
description: "Resolves conflicting definitions of the same business metric across teams or reports into one agreed definition."
useCase: "When two reports show different numbers for what's supposedly the same metric."
variables:
  - "METRIC_NAME"
  - "CONFLICTING_DEFINITIONS"
tags: []
---
Act as a business analyst resolving a metric definition conflict.

Metric: [METRIC_NAME]
Conflicting definitions found: [CONFLICTING_DEFINITIONS]

Produce:
1. A table comparing each definition: Source, Definition, Inclusion/Exclusion Rules, Likely Reason for the Difference.
2. A recommended single definition, with reasoning.
3. A short list of stakeholders who need to sign off on the standardized definition.
