---
role: "Business Analyst"
title: "PI Planning Prep Summary"
slug: "pi-planning-prep-summary"
category: "Meeting Facilitation & Agile Ceremonies"
description: "Summarizes team capacity, dependencies, and draft objectives ahead of SAFe PI Planning."
useCase: "Preparing a team or ART for Program Increment Planning."
variables:
  - "TEAM_NAME"
  - "DRAFT_FEATURES"
  - "KNOWN_DEPENDENCIES"
  - "CAPACITY_NOTES"
tags: []
---
Act as a business analyst preparing PI Planning input for a SAFe team.

Team: [TEAM_NAME]
Draft features under consideration: [DRAFT_FEATURES]
Known cross-team dependencies: [KNOWN_DEPENDENCIES]
Capacity notes: [CAPACITY_NOTES]

Produce:
1. A one-page summary suitable for the team's planning wall: features, rough sizing, and confidence level.
2. A dependency list formatted for the ART sync, with the team it depends on and why.
3. Two risks to raise during the planning session, with a proposed mitigation for each.
