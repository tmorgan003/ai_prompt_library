---
role: "All Employees"
title: "Weekly Plan Builder"
slug: "weekly-plan-builder"
category: "Personal Productivity & Organization"
description: "Builds a realistic weekly plan from a list of goals and known commitments."
useCase: "Starting the week and wanting a plan instead of reacting to whatever comes in."
variables:
  - "WEEKLY_GOALS"
  - "KNOWN_COMMITMENTS"
tags:
  - "productivity"
  - "planning"
---
Act as someone planning their week.

Weekly goals: [WEEKLY_GOALS]
Known commitments (meetings, deadlines): [KNOWN_COMMITMENTS]

Produce:
1. A day-by-day rough plan that accounts for the known commitments.
2. Which goal is most at risk of getting squeezed out, and why.
3. One thing to deliberately protect time for this week.
