---
role: "Business Analyst"
title: "Backlog Refinement Session Prep"
slug: "backlog-refinement-session-prep"
category: "Meeting Facilitation & Agile Ceremonies"
description: "Prepares a prioritized set of items and discussion points for a backlog refinement session."
useCase: "Before a refinement or grooming session with the delivery team."
variables:
  - "CANDIDATE_ITEMS"
  - "TEAM_CAPACITY"
tags: []
---
Act as a business analyst preparing for backlog refinement.

Candidate items: [CANDIDATE_ITEMS]
Team capacity for next sprint: [TEAM_CAPACITY]

Produce:
1. A prioritized order for discussion, with a one-line rationale for the order.
2. For each item, the specific question the team needs to answer (sizing, clarification, splitting, or readiness).
3. A flag on any item that looks too large to size as-is and should be split first.
