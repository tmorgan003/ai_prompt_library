---
role: "All Employees"
title: "Out-of-Office Message Writer"
slug: "out-of-office-message-writer"
category: "Email & Written Communication"
description: "Writes a clear out-of-office message with the right level of detail for the situation."
useCase: "Setting up an autoresponder before time off."
variables:
  - "DATES_AWAY"
  - "COVERAGE_CONTACT"
  - "URGENCY_LEVEL"
tags:
  - "email"
---
Act as a professional writing an out-of-office message.

Dates away: [DATES_AWAY]
Coverage contact: [COVERAGE_CONTACT]
Urgency level of role (low/medium/high-touch): [URGENCY_LEVEL]

Write a message that states the return date, who to contact for anything urgent, and sets expectations on response time, calibrated to the stated urgency level. Keep it under 50 words.
