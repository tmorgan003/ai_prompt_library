---
role: "Product Manager"
title: "Spec Review for Engineering Handoff"
slug: "spec-review-for-engineering-handoff"
category: "Requirements & Specs"
description: "Reviews a spec for the clarity and completeness engineering needs before estimation."
useCase: "Before a spec review meeting with engineering."
variables:
  - "FEATURE_SPEC"
tags:
  - "specs"
  - "code-review"
---
Act as a product manager preparing a spec for engineering handoff.

Spec: [FEATURE_SPEC]

Review for:
1. Requirements that are ambiguous enough that two engineers could reasonably build them differently.
2. Missing acceptance criteria.
3. Dependencies on other systems or teams not called out.
4. A list of the top questions engineering is likely to ask, answered proactively where possible.
