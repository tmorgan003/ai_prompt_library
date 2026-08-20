---
role: "Project Manager"
title: "Milestone Definition Builder"
slug: "milestone-definition-builder"
category: "Planning & Scheduling"
description: "Converts a rough project plan into clear, verifiable milestones."
useCase: "Setting up a project tracking structure that stakeholders can follow without reading a full schedule."
variables:
  - "PROJECT_PLAN_NOTES"
tags:
  - "planning"
---
Act as a project manager defining project milestones.

Project plan notes: [PROJECT_PLAN_NOTES]

Produce a milestone list where each milestone:
1. Has a clear, binary completion criterion (done or not done, no partial credit).
2. Is tied to a business-visible outcome, not just an internal task.
3. Has a target date derived from the plan notes.
4. Notes what depends on this milestone being hit on time.
