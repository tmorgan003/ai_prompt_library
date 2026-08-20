---
role: "Project Manager"
title: "Schedule Risk Reviewer"
slug: "schedule-risk-reviewer"
category: "Planning & Scheduling"
description: "Reviews a project schedule for unrealistic assumptions, missing buffer, and critical path risk."
useCase: "Before committing a schedule to stakeholders."
variables:
  - "SCHEDULE_SUMMARY"
  - "TEAM_CAPACITY"
tags:
  - "planning"
  - "risk"
---
Act as a project manager reviewing a schedule for risk.

Schedule summary: [SCHEDULE_SUMMARY]
Team capacity notes: [TEAM_CAPACITY]

Review for:
1. Tasks with no buffer that sit on the critical path.
2. Resource overallocation across concurrent tasks.
3. Dependencies that look optimistic given the team's actual capacity.
4. A recommendation on where to add buffer or adjust sequencing.
