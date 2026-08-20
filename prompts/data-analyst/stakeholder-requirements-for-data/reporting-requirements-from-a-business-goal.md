---
role: "Data Analyst"
title: "Reporting Requirements from a Business Goal"
slug: "reporting-requirements-from-a-business-goal"
category: "Stakeholder Requirements for Data"
description: "Derives specific reporting requirements from a stated business goal."
useCase: "A stakeholder states a goal and needs help translating it into what to actually measure and report."
variables:
  - "BUSINESS_GOAL"
  - "STAKEHOLDER_CONTEXT"
tags:
  - "requirements"
---
Act as a data analyst deriving reporting requirements from a business goal.

Business goal: [BUSINESS_GOAL]
Stakeholder context: [STAKEHOLDER_CONTEXT]

Produce:
1. The metric(s) that would actually indicate progress toward this goal.
2. Metrics to avoid because they'd be easy to game without real progress.
3. The reporting cadence and format that fits how this goal will be reviewed.
4. Data sources likely needed, flagging any that may not currently exist.
