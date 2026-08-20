---
role: "Business Analyst"
title: "Epic Breakdown into Stories"
slug: "epic-breakdown-into-stories"
category: "User Stories & Acceptance Criteria"
description: "Breaks a large epic into a sequenced set of smaller user stories."
useCase: "Release planning or backlog refinement for a large initiative."
variables:
  - "EPIC_DESCRIPTION"
  - "RELEASE_GOAL"
tags: []
---
Act as a business analyst breaking down an epic for a development team.

Epic: [EPIC_DESCRIPTION]
Release goal: [RELEASE_GOAL]

Produce:
1. A list of 5-10 user stories that together deliver the epic.
2. A suggested sequence, noting any story that blocks another.
3. A note on which stories represent the minimum viable slice versus later enhancements.

Keep each story independently testable and deliverable on its own.
