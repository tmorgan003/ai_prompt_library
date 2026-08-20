---
role: "Business Analyst"
title: "Post-Implementation Gap Review"
slug: "post-implementation-gap-review"
category: "Gap Analysis & Current vs. Future State"
description: "Compares delivered functionality against original requirements after go-live to identify what was missed or deferred."
useCase: "Post-implementation review or lessons-learned session."
variables:
  - "PROJECT_NAME"
  - "ORIGINAL_REQUIREMENTS"
  - "DELIVERED_FUNCTIONALITY"
tags: []
---
Act as a business analyst conducting a post-implementation gap review.

Project: [PROJECT_NAME]
Original requirements: [ORIGINAL_REQUIREMENTS]
Delivered functionality: [DELIVERED_FUNCTIONALITY]

Produce:
1. A table: Requirement, Delivered (Yes/Partial/No), Reason if Not Delivered, Recommended Action (Backlog/Close/Escalate).
2. A short narrative on whether the gaps were scope decisions, technical limitations, or missed requirements.
3. Two process recommendations to reduce this type of gap on future projects.
