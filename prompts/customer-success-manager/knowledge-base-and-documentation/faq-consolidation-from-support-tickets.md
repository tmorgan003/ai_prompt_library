---
role: "Customer Success Manager"
title: "FAQ Consolidation from Support Tickets"
slug: "faq-consolidation-from-support-tickets"
category: "Knowledge Base & Documentation"
description: "Builds an FAQ from a batch of raw support tickets covering similar questions."
useCase: "Noticing the same question keeps coming in and wanting to build documentation to reduce ticket volume."
variables:
  - "RAW_TICKETS"
tags:
  - "documentation"
  - "self-serve"
---
Act as a customer success manager building an FAQ from support tickets.

Raw tickets: [RAW_TICKETS]

Produce:
1. The distinct questions being asked, deduplicated and grouped by theme.
2. A clear, direct answer for each, based on the resolutions in the tickets.
3. Which FAQ entry would likely reduce the most ticket volume if published, based on frequency.
