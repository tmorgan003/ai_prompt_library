---
role: "All Employees"
title: "Daily Priority Sorter"
slug: "daily-priority-sorter"
category: "Personal Productivity & Organization"
description: "Sorts a messy to-do list into a realistic, prioritized plan for the day."
useCase: "Starting the day with too much on the list and no clear order."
variables:
  - "TASK_LIST"
  - "TIME_AVAILABLE"
  - "DEADLINES"
tags:
  - "productivity"
---
Act as someone planning their workday.

Task list: [TASK_LIST]
Time available today: [TIME_AVAILABLE]
Known deadlines: [DEADLINES]

Produce:
1. A prioritized order for today, with reasoning tied to deadline and impact, not just what feels urgent.
2. What realistically won't fit today, stated plainly.
3. One task to protect focus time for if the day gets interrupted.
