---
role: "Product Manager"
title: "Feature Flag and Rollout Plan"
slug: "feature-flag-and-rollout-plan"
category: "Requirements & Specs"
description: "Builds a rollout plan for a feature including flagging strategy and rollback conditions."
useCase: "Planning a phased or controlled feature launch."
variables:
  - "FEATURE_NAME"
  - "RISK_LEVEL"
  - "TARGET_AUDIENCE"
tags:
  - "specs"
  - "launch"
---
Act as a product manager planning a feature rollout.

Feature: [FEATURE_NAME]
Risk level: [RISK_LEVEL]
Target audience: [TARGET_AUDIENCE]

Produce:
1. A phased rollout plan (internal, beta, percentage rollout, full launch) with criteria to advance each phase.
2. Metrics to watch during rollout that would indicate a problem.
3. Rollback criteria and process.
4. Who needs to be notified at each phase.
