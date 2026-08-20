---
role: "Business Analyst"
title: "Ambiguous Requirement Rewriter"
slug: "ambiguous-requirement-rewriter"
category: "Requirements Gathering & Elicitation"
description: "Rewrites vague or compound requirements into clear, testable, single-purpose statements."
useCase: "Cleaning up a requirements document before it goes to development or QA."
variables:
  - "RAW_REQUIREMENTS"
tags: []
---
Act as a business analyst reviewing requirements for clarity and testability.

Raw requirements:
[RAW_REQUIREMENTS]

For each requirement:
1. Rewrite it as a single, testable, unambiguous statement.
2. Split any compound requirement into separate items.
3. Flag missing acceptance criteria.
4. Note any requirement that describes a solution instead of a need, and restate it as a need.

Output as a table: Original, Rewritten, Issue Flagged, Notes.
