---
role: "Product Manager"
title: "Churn Feedback Synthesis"
slug: "churn-feedback-synthesis"
category: "Customer Feedback Synthesis"
description: "Synthesizes exit survey or churn interview notes to identify the primary drivers of churn."
useCase: "Understanding why customers are leaving."
variables:
  - "CHURN_FEEDBACK_NOTES"
tags:
  - "feedback"
  - "churn"
---
Act as a product manager analyzing churn feedback.

Churn feedback notes: [CHURN_FEEDBACK_NOTES]

Produce:
1. The primary stated reasons for churn, ranked by frequency.
2. Which of these are product gaps versus pricing, onboarding, or support issues.
3. Whether any of these reasons are actually masking a deeper root cause.
4. One recommendation to address the top driver.
