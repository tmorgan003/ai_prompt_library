---
role: "Customer Success Manager"
title: "Onboarding Check-In Message"
slug: "onboarding-check-in-message"
category: "Customer Health & Retention"
description: "Drafts a check-in message at a specific stage of new customer onboarding."
useCase: "Standard onboarding touchpoints for a new customer."
variables:
  - "ONBOARDING_STAGE"
  - "CUSTOMER_CONTEXT"
tags:
  - "retention"
  - "onboarding"
---
Act as a customer success manager checking in during onboarding.

Onboarding stage: [ONBOARDING_STAGE]
Customer context: [CUSTOMER_CONTEXT]

Write a check-in message that:
1. Confirms progress at this specific stage, referencing something concrete, not generic.
2. Surfaces any blocker they might be hesitant to bring up themselves.
3. Sets a clear expectation for what's next in onboarding.
