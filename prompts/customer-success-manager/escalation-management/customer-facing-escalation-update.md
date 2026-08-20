---
role: "Customer Success Manager"
title: "Customer-Facing Escalation Update"
slug: "customer-facing-escalation-update"
category: "Escalation Management"
description: "Drafts an update to a customer during an active, unresolved escalation."
useCase: "Keeping a customer informed while an issue is still being worked, not yet resolved."
variables:
  - "ISSUE_SUMMARY"
  - "CURRENT_STATUS"
  - "NEXT_UPDATE_TIME"
tags:
  - "escalation"
  - "communication"
---
Act as a customer success manager updating a customer during an active escalation.

Issue: [ISSUE_SUMMARY]
Current status: [CURRENT_STATUS]
Next update time: [NEXT_UPDATE_TIME]

Write an update that:
1. States the current status honestly, even if there's no resolution yet.
2. Avoids vague reassurance ("we're on it") without any specific detail.
3. Commits to a specific next update time and holds to it.
