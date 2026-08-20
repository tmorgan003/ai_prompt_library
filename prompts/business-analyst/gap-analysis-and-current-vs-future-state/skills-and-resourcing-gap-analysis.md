---
role: "Business Analyst"
title: "Skills and Resourcing Gap Analysis"
slug: "skills-and-resourcing-gap-analysis"
category: "Gap Analysis & Current vs. Future State"
description: "Identifies gaps between the team's current skill set and what a project or initiative requires."
useCase: "Project planning, staffing decisions, training budget requests."
variables:
  - "INITIATIVE_NAME"
  - "TEAM_SKILLS"
  - "REQUIRED_SKILLS"
tags: []
---
Act as a business analyst assessing team readiness for an initiative.

Initiative: [INITIATIVE_NAME]
Current team skills: [TEAM_SKILLS]
Required skills: [REQUIRED_SKILLS]

Produce:
1. A table: Required Skill, Currently Covered (Yes/Partial/No), Gap, Recommended Path (Hire/Train/Contract/Reassign).
2. A prioritized list of the two or three gaps that pose the highest project risk.
3. A rough timeline estimate for closing each gap through training versus hiring.
