---
role: "Data Analyst"
title: "Data Quality Rule Definition"
slug: "data-quality-rule-definition"
category: "Data Quality & Governance"
description: "Defines specific, testable data quality rules for a critical dataset."
useCase: "Setting up data quality monitoring for a table that feeds important reporting."
variables:
  - "DATASET_NAME"
  - "CRITICAL_FIELDS"
tags:
  - "data-quality"
  - "governance"
---
Act as a data analyst defining data quality rules.

Dataset: [DATASET_NAME]
Critical fields: [CRITICAL_FIELDS]

For each critical field, define:
1. A completeness rule (acceptable null rate, if any).
2. A validity rule (format, allowed values, range).
3. A consistency rule (relationship to other fields or tables that must hold true).
4. What severity a violation of each rule should carry (Critical/Warning).
