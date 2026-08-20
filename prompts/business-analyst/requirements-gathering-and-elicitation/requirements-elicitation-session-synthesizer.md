---
role: "Business Analyst"
title: "Requirements Elicitation Session Synthesizer"
slug: "requirements-elicitation-session-synthesizer"
category: "Requirements Gathering & Elicitation"
description: "Converts raw interview or workshop notes into structured, categorized requirements."
useCase: "Immediately after a discovery session, while notes are fresh."
variables:
  - "SESSION_NOTES"
  - "PROJECT_NAME"
tags: []
---
Act as a business analyst turning raw session notes into structured requirements.

Project: [PROJECT_NAME]
Raw notes:
[SESSION_NOTES]

From these notes:
1. Extract discrete requirements and label each as Functional, Non-Functional, or Business Rule.
2. Flag any requirement that is vague, contradictory, or missing an owner.
3. Group requirements by business process area.
4. List open questions that need stakeholder follow-up before these requirements are finalized.

Output as a table with columns: ID, Requirement, Type, Source, Confidence (High/Medium/Low).
