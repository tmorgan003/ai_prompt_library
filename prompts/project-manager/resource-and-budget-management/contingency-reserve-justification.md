---
role: "Project Manager"
title: "Contingency Reserve Justification"
slug: "contingency-reserve-justification"
category: "Resource & Budget Management"
description: "Builds a justification for a contingency budget reserve based on identified project risk."
useCase: "Requesting a contingency reserve as part of budget approval."
variables:
  - "PROJECT_NAME"
  - "RISK_SUMMARY"
  - "PROPOSED_RESERVE"
tags:
  - "budget"
  - "risk"
---
Act as a project manager justifying a contingency reserve.

Project: [PROJECT_NAME]
Risk summary: [RISK_SUMMARY]
Proposed reserve amount or percentage: [PROPOSED_RESERVE]

Write a justification that:
1. Ties the reserve amount to specific identified risks, not a generic percentage.
2. States the cost of having no reserve if one of these risks materializes.
3. Defines the approval process for drawing down the reserve during the project.
