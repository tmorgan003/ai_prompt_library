---
role: "Data Analyst"
title: "Report Footnote and Caveat Writer"
slug: "report-footnote-and-caveat-writer"
category: "Reporting & Dashboards"
description: "Writes clear footnotes and caveats for a report so readers don't misinterpret the data."
useCase: "Finalizing a report with known limitations, exclusions, or definition quirks."
variables:
  - "REPORT_DESCRIPTION"
  - "KNOWN_LIMITATIONS"
tags:
  - "reporting"
  - "documentation"
---
Act as a data analyst writing report caveats.

Report: [REPORT_DESCRIPTION]
Known limitations: [KNOWN_LIMITATIONS]

Write concise footnotes covering:
1. What's excluded from the numbers and why.
2. Any known data quality issue that affects interpretation.
3. The as-of date or refresh cadence of the underlying data.
4. Any metric whose definition differs from a similarly named metric elsewhere in the organization.
