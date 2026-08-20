---
role: "Customer Success Manager"
title: "Internal Escalation Triage Assessment"
slug: "internal-escalation-triage-assessment"
category: "Escalation Management"
description: "Assesses an incoming escalation to determine urgency and the right internal response path."
useCase: "A new escalation just came in and needs to be triaged quickly."
variables:
  - "ESCALATION_DESCRIPTION"
  - "ACCOUNT_VALUE"
tags:
  - "escalation"
  - "triage"
---
Act as a customer success manager triaging a new escalation.

Escalation: [ESCALATION_DESCRIPTION]
Account value/importance: [ACCOUNT_VALUE]

Assess:
1. Severity, considering both the technical issue and the account's importance.
2. Who needs to be looped in immediately versus who can wait for a fuller picture.
3. The single most important thing to communicate to the customer in the next hour.
