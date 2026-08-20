---
role: "Business Analyst"
title: "Stakeholder Map and Communication Plan"
slug: "stakeholder-map-and-communication-plan"
category: "Stakeholder Communication & Summaries"
description: "Builds a stakeholder map with influence/interest levels and a tailored communication cadence for each group."
useCase: "Project kickoff or when a project's stakeholder list has grown unmanaged."
variables:
  - "PROJECT_NAME"
  - "STAKEHOLDER_LIST"
tags: []
---
Act as a business analyst building a stakeholder communication plan.

Project: [PROJECT_NAME]
Stakeholders: [STAKEHOLDER_LIST]

For each stakeholder:
1. Rate influence (High/Medium/Low) and interest (High/Medium/Low).
2. Recommend a communication method (status report, meeting, email, dashboard).
3. Recommend a cadence (weekly, biweekly, monthly, ad hoc).
4. Note what this stakeholder cares about most, based on their role.

Group the output into a 2x2 grid summary (Manage Closely, Keep Satisfied, Keep Informed, Monitor) plus the detail table.
