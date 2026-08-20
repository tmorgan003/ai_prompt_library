---
role: "Data Analyst"
title: "Chart Type Recommendation"
slug: "chart-type-recommendation"
category: "Reporting & Dashboards"
description: "Recommends the right chart type for a specific dataset and the question it needs to answer."
useCase: "Deciding how to visualize a result before building it."
variables:
  - "DATA_DESCRIPTION"
  - "QUESTION_TO_ANSWER"
tags:
  - "reporting"
  - "visualization"
---
Act as a data analyst choosing a chart type.

Data: [DATA_DESCRIPTION]
Question the chart needs to answer: [QUESTION_TO_ANSWER]

Recommend:
1. The best chart type for this data and question, with reasoning.
2. A second acceptable option if the first isn't available in the tool being used.
3. A chart type to avoid for this data, and why it would mislead or confuse.
