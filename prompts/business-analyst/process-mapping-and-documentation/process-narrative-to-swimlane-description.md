---
role: "Business Analyst"
title: "Process Narrative to Swimlane Description"
slug: "process-narrative-to-swimlane-description"
category: "Process Mapping & Documentation"
description: "Converts a written process narrative into a structured swimlane-ready format (roles, steps, handoffs, decision points)."
useCase: "Preparing content for a process diagram before building it in Visio, Lucidchart, or similar."
variables:
  - "PROCESS_NAME"
  - "PROCESS_NARRATIVE"
tags: []
---
Act as a business analyst preparing a process for swimlane diagramming.

Process: [PROCESS_NAME]
Narrative: [PROCESS_NARRATIVE]

Produce:
1. A table: Step Number, Role/Swimlane, Action, Decision Point (Yes/No), Handoff To.
2. A list of decision points with the branching outcomes spelled out.
3. Flag any step where the role or actor is unclear.
