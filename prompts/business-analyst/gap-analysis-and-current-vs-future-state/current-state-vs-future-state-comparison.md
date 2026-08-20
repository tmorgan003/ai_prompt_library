---
role: "Business Analyst"
title: "Current State vs. Future State Comparison"
slug: "current-state-vs-future-state-comparison"
category: "Gap Analysis & Current vs. Future State"
description: "Structures a side-by-side comparison of current and future process states, with gaps called out explicitly."
useCase: "Early in a modernization or transformation project."
variables:
  - "PROCESS_NAME"
  - "CURRENT_STATE_NOTES"
  - "FUTURE_STATE_NOTES"
tags: []
---
Act as a business analyst performing a gap analysis.

Process: [PROCESS_NAME]
Current state notes: [CURRENT_STATE_NOTES]
Future state notes: [FUTURE_STATE_NOTES]

Produce:
1. A table with columns: Process Step, Current State, Future State, Gap, Gap Type (People/Process/Technology/Data).
2. A ranked list of the three highest-impact gaps and why they matter most.
3. A short list of dependencies that must be resolved before the future state is achievable.
