---
role: "Project Manager"
title: "Capacity Planning Estimator"
slug: "capacity-planning-estimator"
category: "Planning & Scheduling"
description: "Estimates whether a team has enough capacity for a proposed set of work in a given period."
useCase: "Planning the next sprint, quarter, or release cycle."
variables:
  - "TEAM_SIZE_AND_ROLES"
  - "PROPOSED_WORK"
  - "TIME_PERIOD"
tags:
  - "planning"
  - "resourcing"
---
Act as a project manager estimating team capacity.

Team: [TEAM_SIZE_AND_ROLES]
Proposed work: [PROPOSED_WORK]
Time period: [TIME_PERIOD]

Produce:
1. A rough capacity estimate for the team in this period, accounting for meetings, PTO, and support work if mentioned.
2. A comparison against the proposed work's estimated effort.
3. A clear statement of whether the plan is realistic, overcommitted, or has slack, and by roughly how much.
4. What to cut or defer first if overcommitted.
