---
role: "Project Manager"
title: "Project Closeout Report Builder"
slug: "project-closeout-report-builder"
category: "Retrospectives & Lessons Learned"
description: "Builds a formal project closeout report summarizing outcomes, budget, and lessons learned."
useCase: "Formally closing a project after delivery."
variables:
  - "PROJECT_NAME"
  - "OUTCOME_NOTES"
  - "BUDGET_SUMMARY"
tags:
  - "retrospective"
  - "documentation"
---
Act as a project manager writing a project closeout report.

Project: [PROJECT_NAME]
Outcome notes: [OUTCOME_NOTES]
Budget summary: [BUDGET_SUMMARY]

Produce a report with:
1. Summary of what was delivered against original scope.
2. Budget performance versus plan.
3. Schedule performance versus plan.
4. Three lessons learned, each with a specific recommendation for future projects.
5. Outstanding items to hand off, if any.
