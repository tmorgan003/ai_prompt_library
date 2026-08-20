---
role: "Project Manager"
title: "Cross-Team Dependency Status Summary"
slug: "cross-team-dependency-status-summary"
category: "Status Reporting & Communication"
description: "Summarizes the status of dependencies owed by or to other teams."
useCase: "Coordinating a multi-team program or reporting up in a program-level sync."
variables:
  - "DEPENDENCY_NOTES"
tags:
  - "status-reporting"
  - "dependencies"
---
Act as a project manager summarizing cross-team dependency status.

Raw dependency notes: [DEPENDENCY_NOTES]

Produce a table: Dependency, Owning Team, Needed By, Status (On Track/At Risk/Late), Impact if Late.

Follow with a short summary of which dependencies need escalation this week.
