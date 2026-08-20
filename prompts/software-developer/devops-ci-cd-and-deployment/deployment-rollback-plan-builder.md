---
role: "Software Developer"
title: "Deployment Rollback Plan Builder"
slug: "deployment-rollback-plan-builder"
category: "DevOps/CI-CD & Deployment"
description: "Builds a rollback plan for a deployment before it goes out, not after something breaks."
useCase: "Preparing a risky or first-time deployment."
variables:
  - "DEPLOYMENT_DESCRIPTION"
  - "SYSTEM_CONTEXT"
tags:
  - "devops"
  - "deployment"
---
Act as a senior DevOps engineer preparing a rollback plan.

Deployment: [DEPLOYMENT_DESCRIPTION]
System context: [SYSTEM_CONTEXT]

Produce:
1. The specific signal(s) that indicate this deployment needs to be rolled back (metrics, error rates, alerts).
2. Exact rollback steps, in order.
3. Data or state considerations that make rollback harder than just reverting code (migrations, queued jobs, cache).
4. Who needs to be notified if a rollback happens.
