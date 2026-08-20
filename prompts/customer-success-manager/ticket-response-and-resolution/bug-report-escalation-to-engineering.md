---
role: "Customer Success Manager"
title: "Bug Report Escalation to Engineering"
slug: "bug-report-escalation-to-engineering"
category: "Ticket Response & Resolution"
description: "Structures a customer-reported bug into a clear escalation for the engineering team."
useCase: "Escalating a customer issue that needs engineering investigation."
variables:
  - "CUSTOMER_REPORT"
  - "IMPACT"
  - "REPRO_STEPS_IF_KNOWN"
tags:
  - "support"
  - "escalation"
---
Act as a customer success manager escalating a bug to engineering.

Customer report: [CUSTOMER_REPORT]
Business impact: [IMPACT]
Reproduction steps, if known: [REPRO_STEPS_IF_KNOWN]

Produce an escalation with:
1. A clear, technical restatement of the issue.
2. The customer and business impact, including urgency.
3. Reproduction steps if available, or what's still needed to reproduce it.
4. What you've already told the customer, so engineering doesn't contradict it.
