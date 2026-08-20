---
role: "Data Analyst"
title: "Report Automation Feasibility Check"
slug: "report-automation-feasibility-check"
category: "Reporting & Dashboards"
description: "Assesses whether a manually built report is a good candidate for automation."
useCase: "Deciding whether to invest time automating a recurring manual report."
variables:
  - "REPORT_DESCRIPTION"
  - "CURRENT_PROCESS"
  - "FREQUENCY"
tags:
  - "reporting"
  - "automation"
---
Act as a data analyst assessing report automation feasibility.

Report: [REPORT_DESCRIPTION]
Current manual process: [CURRENT_PROCESS]
Frequency: [FREQUENCY]

Assess:
1. How much manual time this costs over a year at the stated frequency.
2. Whether the underlying data sources are stable and structured enough to automate reliably.
3. The riskiest step in the manual process to get wrong if automated without a human check.
4. A recommendation: automate fully, automate with a manual review step, or keep manual.
