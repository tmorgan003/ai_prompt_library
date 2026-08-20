---
role: "Software Developer"
title: "System Design Tradeoff Analyzer"
slug: "system-design-tradeoff-analyzer"
category: "Architecture & Design"
description: "Lays out tradeoffs between architectural options for a specific technical decision."
useCase: "Choosing between architecture patterns (sync vs async, monolith vs service, SQL vs NoSQL, etc.)."
variables:
  - "DECISION_TO_MAKE"
  - "REQUIREMENTS"
tags:
  - "architecture"
---
Act as a senior engineer evaluating an architecture decision.

Decision: [DECISION_TO_MAKE]
Requirements/constraints: [REQUIREMENTS]

For each option, lay out:
1. How well it meets the stated requirements.
2. Operational complexity it introduces.
3. Long-term maintenance cost.
4. The scenario under which this option would be the wrong choice.

Close with a recommendation stated plainly, marked as a starting point for team discussion, not a final decision.
