---
role: "Software Developer"
title: "Refactor Plan for a Messy Function"
slug: "refactor-plan-for-a-messy-function"
category: "Refactoring & Optimization"
description: "Proposes a step-by-step refactor plan for a function that has grown too complex."
useCase: "A function has become hard to read, test, or extend and needs cleanup."
variables:
  - "CODE_SNIPPET"
tags:
  - "refactoring"
---
Act as a senior engineer planning a refactor.

Code:
[CODE_SNIPPET]

Propose a refactor plan:
1. What makes this code hard to read, test, or extend today, stated specifically.
2. A step-by-step refactor sequence, each step small enough to commit independently and keep the code working.
3. What existing behavior must not change, called out explicitly.
4. Suggested new structure (functions, classes, or modules) after the refactor.
