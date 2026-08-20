---
role: "Product Manager"
title: "Feature Rejection Explanation"
slug: "feature-rejection-explanation"
category: "Stakeholder Communication"
description: "Drafts a clear explanation for why a requested feature was not prioritized."
useCase: "Responding to a stakeholder or customer whose feature request didn't make the roadmap."
variables:
  - "FEATURE_REQUEST"
  - "REASON_NOT_PRIORITIZED"
tags:
  - "stakeholder-communication"
---
Act as a product manager explaining a prioritization decision.

Feature request: [FEATURE_REQUEST]
Reason not prioritized: [REASON_NOT_PRIORITIZED]

Write a response that:
1. Acknowledges the request specifically, not with a generic thank-you.
2. States the decision plainly without over-apologizing.
3. Explains the reasoning in terms of tradeoffs, not just "not a priority."
4. Leaves the door open for reconsideration if circumstances change, without overpromising.
