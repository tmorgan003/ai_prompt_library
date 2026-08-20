---
role: "Customer Success Manager"
title: "Executive Escalation Summary"
slug: "executive-escalation-summary"
category: "Escalation Management"
description: "Summarizes a customer escalation for internal leadership, factually and without spin."
useCase: "An issue has escalated high enough that leadership needs a clear briefing."
variables:
  - "ESCALATION_DETAILS"
  - "ACCOUNT_CONTEXT"
tags:
  - "escalation"
---
Act as a customer success manager briefing leadership on an escalation.

Account context: [ACCOUNT_CONTEXT]
Escalation details: [ESCALATION_DETAILS]

Produce a briefing with:
1. What happened, factually, without minimizing or over-dramatizing.
2. Current status and what's already been done.
3. What's needed from leadership specifically (a decision, a call with the customer, a resource).
4. The risk if this isn't resolved quickly.
