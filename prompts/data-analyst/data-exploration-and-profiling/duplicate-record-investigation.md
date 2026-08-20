---
role: "Data Analyst"
title: "Duplicate Record Investigation"
slug: "duplicate-record-investigation"
category: "Data Exploration & Profiling"
description: "Investigates why a dataset has more rows than expected, distinguishing true duplicates from legitimate repeats."
useCase: "Row counts don't match expectations and duplication is suspected."
variables:
  - "TABLE_DESCRIPTION"
  - "EXPECTED_GRAIN"
tags:
  - "exploration"
  - "data-quality"
---
Act as a data analyst investigating potential duplicate records.

Table description: [TABLE_DESCRIPTION]
Expected grain (what one row should represent): [EXPECTED_GRAIN]

Produce:
1. A query approach to check for records that violate the expected grain.
2. Likely causes if duplicates are found (join fan-out, double-loaded batch, legitimate multiple events).
3. How to distinguish a true duplicate from a legitimate repeated event at the same grain.
