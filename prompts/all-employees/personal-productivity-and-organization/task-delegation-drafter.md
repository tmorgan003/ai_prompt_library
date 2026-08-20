---
role: "All Employees"
title: "Task Delegation Drafter"
slug: "task-delegation-drafter"
category: "Personal Productivity & Organization"
description: "Drafts a clear delegation message so a handed-off task doesn't come back with questions."
useCase: "Delegating a task to a colleague or direct report."
variables:
  - "TASK_DESCRIPTION"
  - "DELEGATE_NAME"
  - "DEADLINE"
tags:
  - "productivity"
  - "delegation"
---
Act as someone delegating a task.

Task: [TASK_DESCRIPTION]
Delegate: [DELEGATE_NAME]
Deadline: [DEADLINE]

Write a delegation message that:
1. States exactly what's needed and what "done" looks like.
2. Gives necessary context so the delegate doesn't have to guess.
3. States the deadline and any check-in point along the way.
4. Makes clear what to do if they hit a blocker.
