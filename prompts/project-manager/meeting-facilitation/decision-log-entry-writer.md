---
role: "Project Manager"
title: "Decision Log Entry Writer"
slug: "decision-log-entry-writer"
category: "Meeting Facilitation"
description: "Converts a meeting discussion into a formal decision log entry."
useCase: "Documenting a decision made in a meeting so it doesn't get relitigated later."
variables:
  - "DECISION_CONTEXT"
  - "MEETING_DATE"
tags:
  - "facilitation"
  - "documentation"
---
Act as a project manager logging a project decision.

Meeting date: [MEETING_DATE]
Decision context (discussion notes): [DECISION_CONTEXT]

Write a decision log entry with:
1. The decision, stated in one clear sentence.
2. The options that were considered.
3. Why this option was chosen.
4. Who made or approved the decision.
5. What would trigger revisiting this decision.
