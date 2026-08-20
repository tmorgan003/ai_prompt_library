---
role: "Salesperson"
title: "Renewal Risk Assessment"
slug: "renewal-risk-assessment"
category: "Account Management & Renewals"
description: "Assesses renewal risk for an account based on usage and engagement signals."
useCase: "Ahead of a renewal date, deciding how much attention this account needs."
variables:
  - "ACCOUNT_SIGNALS"
  - "RENEWAL_DATE"
tags:
  - "account-management"
  - "retention"
---
Act as an account manager assessing renewal risk.

Account signals (usage trend, engagement, support tickets, stakeholder changes): [ACCOUNT_SIGNALS]
Renewal date: [RENEWAL_DATE]

Produce:
1. A risk rating (Low/Medium/High) with the specific signals driving it.
2. The most likely reason this account wouldn't renew, based on the signals.
3. A recommended action plan given the time remaining before the renewal date.
