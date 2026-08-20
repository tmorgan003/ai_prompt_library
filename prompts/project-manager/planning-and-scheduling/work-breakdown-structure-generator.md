---
role: "Project Manager"
title: "Work Breakdown Structure Generator"
slug: "work-breakdown-structure-generator"
category: "Planning & Scheduling"
description: "Breaks a project scope into a structured work breakdown with phases and tasks."
useCase: "Early planning, before building a detailed schedule."
variables:
  - "PROJECT_SCOPE"
  - "KNOWN_PHASES"
tags:
  - "planning"
  - "scheduling"
---
Act as a project manager building a work breakdown structure.

Project scope: [PROJECT_SCOPE]
Known phases (if any): [KNOWN_PHASES]

Produce a WBS:
1. Phases in logical order.
2. Under each phase, tasks needed to complete it.
3. For each task, a rough effort estimate (in days) and dependency on any other task.
4. Flag any task that looks large enough to need further breakdown.
