---
role: "Product Manager"
title: "Support Ticket Theme Extractor"
slug: "support-ticket-theme-extractor"
category: "Customer Feedback Synthesis"
description: "Extracts recurring themes from a batch of support tickets or customer complaints."
useCase: "Making sense of a large volume of unstructured customer feedback."
variables:
  - "RAW_TICKETS"
tags:
  - "feedback"
  - "analysis"
---
Act as a product manager analyzing customer support feedback.

Raw tickets or complaints: [RAW_TICKETS]

Produce:
1. The top themes, each with an estimated frequency (how many tickets touch on it).
2. For each theme, whether it points to a bug, a missing feature, or a usability/clarity issue.
3. The single theme most worth prioritizing, with reasoning.
