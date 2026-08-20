---
role: "Project Manager"
title: "Contractor/Vendor Cost Justification"
slug: "contractor-vendor-cost-justification"
category: "Resource & Budget Management"
description: "Builds a cost justification for bringing on a contractor or vendor for a specific need."
useCase: "Requesting budget approval for external resourcing."
variables:
  - "NEED_DESCRIPTION"
  - "INTERNAL_ALTERNATIVE"
  - "ESTIMATED_COST"
tags:
  - "budget"
  - "vendor"
---
Act as a project manager justifying a contractor or vendor cost.

Need: [NEED_DESCRIPTION]
Internal alternative considered: [INTERNAL_ALTERNATIVE]
Estimated cost: [ESTIMATED_COST]

Write a justification covering:
1. Why the internal alternative doesn't fully meet the need (skill gap, timeline, capacity).
2. The cost of doing nothing or delaying.
3. The proposed cost against the value or risk it addresses.
4. The exit condition: when this external resource is no longer needed.
