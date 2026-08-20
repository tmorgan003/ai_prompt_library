---
role: "Project Manager"
title: "Weekly Status Report Generator"
slug: "weekly-status-report-generator"
category: "Status Reporting & Communication"
description: "Turns raw project notes into a clean weekly status report."
useCase: "Recurring weekly reporting to stakeholders or leadership."
variables:
  - "PROJECT_NAME"
  - "RAW_NOTES"
tags:
  - "status-reporting"
---
Act as a project manager writing a weekly status report.

Project: [PROJECT_NAME]
Raw notes: [RAW_NOTES]

Produce a report with:
1. Overall status (Green/Yellow/Red) with a one-sentence reason.
2. Key accomplishments this week.
3. Planned work for next week.
4. Risks or blockers, each with an owner and next step.
5. Decisions needed from the reader, if any.

Keep it scannable in under 30 seconds.
