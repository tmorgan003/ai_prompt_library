---
role: "Customer Success Manager"
title: "Product Adoption Gap Analysis"
slug: "product-adoption-gap-analysis"
category: "Customer Health & Retention"
description: "Identifies gaps between what a customer purchased and what they're actually using."
useCase: "A customer's usage suggests they're not getting full value from what they bought."
variables:
  - "PURCHASED_FEATURES"
  - "USAGE_DATA"
tags:
  - "retention"
  - "adoption"
---
Act as a customer success manager analyzing product adoption.

Purchased features/tier: [PURCHASED_FEATURES]
Usage data: [USAGE_DATA]

Produce:
1. Which purchased capabilities are underused or unused.
2. A likely reason for the gap (lack of awareness, onboarding gap, not a fit for their workflow, technical blocker).
3. A specific, low-effort next step to close the highest-value gap.
