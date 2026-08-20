---
role: "Customer Success Manager"
title: "Support Ticket Response Drafter"
slug: "support-ticket-response-drafter"
category: "Ticket Response & Resolution"
description: "Drafts a clear, empathetic response to a customer support ticket."
useCase: "Responding to an incoming customer issue."
variables:
  - "TICKET_DESCRIPTION"
  - "RESOLUTION_OR_STATUS"
tags:
  - "support"
---
Act as a customer success manager responding to a support ticket.

Ticket: [TICKET_DESCRIPTION]
Resolution or current status: [RESOLUTION_OR_STATUS]

Write a response that:
1. Acknowledges the issue specifically, not with a generic "sorry for the inconvenience."
2. States the resolution or next step clearly.
3. Explains what happened in plain language if the customer needs that context, without overly technical detail.
4. Ends with a clear next step or an invitation to follow up.
