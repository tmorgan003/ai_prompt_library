---
role: "Business Analyst"
title: "Definition of Ready / Definition of Done Checklist Builder"
slug: "definition-of-ready-definition-of-done-checklist-builder"
category: "User Stories & Acceptance Criteria"
description: "Builds a tailored Definition of Ready and Definition of Done checklist for a team or project type."
useCase: "Standing up a new team, or fixing a team with inconsistent story quality."
variables:
  - "TEAM_CONTEXT"
  - "PROJECT_TYPE"
tags: []
---
Act as a business analyst standardizing backlog quality for a team.

Team context: [TEAM_CONTEXT]
Project type: [PROJECT_TYPE]

Produce:
1. A Definition of Ready checklist: what a story must have before it enters a sprint.
2. A Definition of Done checklist: what must be true before a story is considered complete.
3. One sentence on the most common gap teams like this tend to have, and how the checklist addresses it.
