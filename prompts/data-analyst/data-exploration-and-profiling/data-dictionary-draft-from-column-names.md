---
role: "Data Analyst"
title: "Data Dictionary Draft from Column Names"
slug: "data-dictionary-draft-from-column-names"
category: "Data Exploration & Profiling"
description: "Drafts a starting data dictionary from column names and sample values, flagging what needs confirmation."
useCase: "Documenting a table with no existing data dictionary."
variables:
  - "TABLE_NAME"
  - "COLUMNS_WITH_SAMPLES"
tags:
  - "exploration"
  - "documentation"
---
Act as a data analyst drafting a data dictionary.

Table: [TABLE_NAME]
Columns with sample values: [COLUMNS_WITH_SAMPLES]

For each column, produce:
1. A best-guess definition based on the name and sample values.
2. Likely data type and format.
3. A confidence flag (High/Medium/Low) on whether this guess needs confirmation from someone who owns the data.

Mark clearly that this is a draft pending business owner review.
