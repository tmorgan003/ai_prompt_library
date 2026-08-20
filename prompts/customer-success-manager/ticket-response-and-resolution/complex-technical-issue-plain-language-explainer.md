---
role: "Customer Success Manager"
title: "Complex Technical Issue Plain-Language Explainer"
slug: "complex-technical-issue-plain-language-explainer"
category: "Ticket Response & Resolution"
description: "Translates a technical root cause into language a non-technical customer can understand."
useCase: "Explaining a bug or technical issue to a customer without technical background."
variables:
  - "TECHNICAL_EXPLANATION"
  - "CUSTOMER_CONTEXT"
tags:
  - "support"
  - "communication"
---
Act as a customer success manager explaining a technical issue.

Technical explanation (internal/engineering language): [TECHNICAL_EXPLANATION]
Customer context: [CUSTOMER_CONTEXT]

Rewrite the explanation for the customer:
1. In plain language, with no internal jargon or system names they wouldn't recognize.
2. Focused on what happened and what it meant for them, not internal implementation detail.
3. With a clear statement of what's being done about it.
