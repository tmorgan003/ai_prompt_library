---
role: "Software Developer"
title: "Migration Plan Builder"
slug: "migration-plan-builder"
category: "Architecture & Design"
description: "Builds a phased migration plan for moving from one system, schema, or library version to another."
useCase: "Planning a non-trivial migration with production risk."
variables:
  - "CURRENT_STATE"
  - "TARGET_STATE"
  - "CONSTRAINTS"
tags:
  - "architecture"
  - "migration"
---
Act as a senior engineer planning a technical migration.

Current state: [CURRENT_STATE]
Target state: [TARGET_STATE]
Constraints (downtime tolerance, team size, deadline): [CONSTRAINTS]

Produce a phased migration plan:
1. Pre-migration steps (data backup, feature freeze, dual-write setup if needed).
2. Migration steps in order, each with a rollback option.
3. Validation steps to confirm success at each phase.
4. Cutover plan and monitoring to watch immediately after.
