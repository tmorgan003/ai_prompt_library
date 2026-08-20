---
role: "Software Developer"
title: "Algorithmic Complexity Reviewer"
slug: "algorithmic-complexity-reviewer"
category: "Refactoring & Optimization"
description: "Analyzes the time and space complexity of code and identifies opportunities to improve it."
useCase: "Reviewing code that may not scale well with larger input sizes."
variables:
  - "CODE_SNIPPET"
  - "EXPECTED_SCALE"
tags:
  - "refactoring"
  - "performance"
---
Act as a senior engineer analyzing algorithmic complexity.

Expected scale (data size, request volume): [EXPECTED_SCALE]
Code:
[CODE_SNIPPET]

Provide:
1. Current time and space complexity, stated in Big O notation with a plain-language explanation.
2. Whether this complexity is acceptable given the expected scale.
3. If not acceptable, a specific alternative approach with its resulting complexity.
