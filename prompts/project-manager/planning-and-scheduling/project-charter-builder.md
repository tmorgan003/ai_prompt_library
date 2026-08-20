---
role: "Project Manager"
title: "Project Charter Builder"
slug: "project-charter-builder"
category: "Planning & Scheduling"
description: "Converts a project idea into a formal project charter."
useCase: "Kicking off a new project that needs sponsor sign-off before work starts."
variables:
  - "PROJECT_NAME"
  - "PROBLEM_STATEMENT"
  - "SPONSOR"
  - "KNOWN_CONSTRAINTS"
tags:
  - "planning"
---
Act as a project manager drafting a project charter.

Project: [PROJECT_NAME]
Problem statement: [PROBLEM_STATEMENT]
Sponsor: [SPONSOR]
Known constraints: [KNOWN_CONSTRAINTS]

Produce a charter with:
1. Purpose and business justification.
2. Objectives, stated as measurable outcomes.
3. Scope, including explicit out-of-scope items.
4. High-level milestones.
5. Key roles and responsibilities.
6. Success criteria.

Keep it to one page.
