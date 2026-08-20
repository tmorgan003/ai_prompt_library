---
role: "Customer Success Manager"
title: "At-Risk Account Save Plan"
slug: "at-risk-account-save-plan"
category: "Customer Health & Retention"
description: "Builds a save plan for an account showing signs of churn risk."
useCase: "An account is trending toward churn and needs a deliberate intervention plan."
variables:
  - "ACCOUNT_CONTEXT"
  - "RISK_SIGNALS"
tags:
  - "retention"
  - "churn-prevention"
---
Act as a customer success manager building an account save plan.

Account context: [ACCOUNT_CONTEXT]
Risk signals: [RISK_SIGNALS]

Produce:
1. The most likely underlying reason for the risk, based on the signals.
2. A specific intervention plan, not just "reach out and check in."
3. Who internally needs to be looped in (sales, product, leadership) given the account's importance.
4. A timeline for the save effort, with a clear point at which to escalate if it's not working.
