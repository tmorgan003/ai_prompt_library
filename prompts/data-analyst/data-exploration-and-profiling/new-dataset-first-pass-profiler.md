---
role: "Data Analyst"
title: "New Dataset First-Pass Profiler"
slug: "new-dataset-first-pass-profiler"
category: "Data Exploration & Profiling"
description: "Guides a structured first look at an unfamiliar dataset before any analysis begins."
useCase: "Receiving a new dataset or table you haven't worked with before."
variables:
  - "DATASET_DESCRIPTION"
  - "COLUMN_LIST"
tags:
  - "exploration"
---
Act as a data analyst doing a first-pass profile of a new dataset.

Dataset description: [DATASET_DESCRIPTION]
Column list: [COLUMN_LIST]

Produce a checklist to work through:
1. Which columns are likely keys, dimensions, or metrics based on naming and description.
2. Columns likely to have null or missing value issues, and why.
3. Columns that likely need a data dictionary entry because their meaning isn't obvious from the name.
4. The first three profiling queries to run (row counts, null rates, distinct value counts) before trusting this data.
