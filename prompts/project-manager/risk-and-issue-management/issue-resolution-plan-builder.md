---
role: "Project Manager"
title: "Issue Resolution Plan Builder"
slug: "issue-resolution-plan-builder"
category: "Risk & Issue Management"
description: "Turns a logged issue into a resolution plan with clear next steps."
useCase: "An issue has moved from risk to reality and needs a plan, not just tracking."
variables:
  - "ISSUE_DESCRIPTION"
  - "IMPACT"
  - "CONSTRAINTS"
tags:
  - "risk"
  - "issues"
---
Act as a project manager building an issue resolution plan.

Issue: [ISSUE_DESCRIPTION]
Impact: [IMPACT]
Constraints: [CONSTRAINTS]

Produce:
1. Two or three resolution options, each with effort, timeline, and tradeoff.
2. A recommended option with reasoning.
3. Immediate next steps with owners.
4. What to communicate to affected stakeholders and when.
