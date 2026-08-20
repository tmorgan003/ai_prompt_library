---
role: "Software Developer"
title: "Legacy Code Risk Assessment"
slug: "legacy-code-risk-assessment"
category: "Code Review & Quality"
description: "Assesses the risk of modifying an unfamiliar piece of legacy code before you touch it."
useCase: "Before making a change to old, undocumented, or poorly tested code."
variables:
  - "CODE_SNIPPET"
  - "PLANNED_CHANGE"
tags:
  - "code-review"
  - "legacy"
  - "risk"
---
Act as a senior engineer assessing risk before modifying legacy code.

Code:
[CODE_SNIPPET]

Planned change: [PLANNED_CHANGE]

Assess:
1. What this code currently does, in plain language.
2. Hidden dependencies or side effects that aren't obvious from a quick read.
3. What could break elsewhere if this change is made.
4. What test coverage should exist before making this change, even if it doesn't exist yet.

Rate overall risk (Low/Medium/High) with reasoning.
