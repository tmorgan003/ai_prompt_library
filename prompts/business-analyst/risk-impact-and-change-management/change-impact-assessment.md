---
role: "Business Analyst"
title: "Change Impact Assessment"
slug: "change-impact-assessment"
category: "Risk, Impact & Change Management"
description: "Assesses who and what a proposed change affects across people, process, technology, and data."
useCase: "Before submitting a change request or planning a rollout."
variables:
  - "CHANGE_DESCRIPTION"
  - "AFFECTED_SYSTEMS"
tags: []
---
Act as a business analyst assessing the impact of a proposed change.

Change: [CHANGE_DESCRIPTION]
Affected systems: [AFFECTED_SYSTEMS]

Produce:
1. A table: Impact Area (People/Process/Technology/Data), Description of Impact, Severity (High/Medium/Low), Groups Affected.
2. A list of stakeholders who must approve or be notified before this change proceeds.
3. A recommendation on whether this needs a formal change advisory review.
