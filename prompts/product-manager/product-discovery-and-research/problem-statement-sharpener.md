---
role: "Product Manager"
title: "Problem Statement Sharpener"
slug: "problem-statement-sharpener"
category: "Product Discovery & Research"
description: "Turns a vague product idea into a sharp, evidence-anchored problem statement."
useCase: "Early discovery, before writing a single requirement."
variables:
  - "ROUGH_IDEA"
  - "KNOWN_EVIDENCE"
tags:
  - "discovery"
---
Act as a product manager sharpening a problem statement.

Rough idea: [ROUGH_IDEA]
Known evidence (data, quotes, tickets): [KNOWN_EVIDENCE]

Produce:
1. A problem statement in the format: [User segment] struggles with [problem] when [context], which causes [impact].
2. The evidence that supports this statement, and what evidence is still missing.
3. Two competing hypotheses for the root cause of the problem.
4. What would disprove this problem statement if it turned out to be wrong.
