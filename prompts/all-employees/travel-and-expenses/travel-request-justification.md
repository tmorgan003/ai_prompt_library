---
role: "All Employees"
title: "Travel Request Justification"
slug: "travel-request-justification"
category: "Travel & Expenses"
description: "Builds a justification for a business trip that needs manager or budget approval."
useCase: "Requesting approval for travel that isn't automatically pre-approved."
variables:
  - "TRIP_PURPOSE"
  - "EXPECTED_OUTCOME"
  - "COST_ESTIMATE"
tags:
  - "travel"
---
Act as someone requesting travel approval.

Trip purpose: [TRIP_PURPOSE]
Expected outcome: [EXPECTED_OUTCOME]
Estimated cost: [COST_ESTIMATE]

Write a justification that:
1. States the business reason for the trip plainly.
2. Ties the trip to a specific expected outcome, not just general relationship-building.
3. States the cost and why it's worth it relative to that outcome.
