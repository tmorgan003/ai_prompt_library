---
role: "Project Manager"
title: "Resource Allocation Conflict Resolver"
slug: "resource-allocation-conflict-resolver"
category: "Resource & Budget Management"
description: "Analyzes competing resource requests across projects and proposes a resolution approach."
useCase: "Two or more projects need the same person or team at the same time."
variables:
  - "COMPETING_REQUESTS"
  - "PROJECT_PRIORITIES"
tags:
  - "resourcing"
---
Act as a project manager resolving a resource allocation conflict.

Competing requests: [COMPETING_REQUESTS]
Known project priorities: [PROJECT_PRIORITIES]

Produce:
1. A summary of the conflict and what's at stake for each project if it loses the resource.
2. Two or three resolution options (full allocation to one, split time, sequential allocation, backfill).
3. A recommended option based on stated priorities.
4. What to communicate to the losing project's stakeholders.
