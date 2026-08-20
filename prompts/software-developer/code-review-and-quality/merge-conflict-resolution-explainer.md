---
role: "Software Developer"
title: "Merge Conflict Resolution Explainer"
slug: "merge-conflict-resolution-explainer"
category: "Code Review & Quality"
description: "Explains a merge conflict in plain terms and proposes a resolution."
useCase: "Resolving a non-trivial merge or rebase conflict without guessing."
variables:
  - "CONFLICT_BLOCK"
  - "BRANCH_CONTEXT"
tags:
  - "git"
  - "code-review"
---
Act as a senior engineer resolving a merge conflict.

Branch context: [BRANCH_CONTEXT]
Conflict block:
[CONFLICT_BLOCK]

Explain:
1. What each side of the conflict was trying to do.
2. Whether the changes are actually incompatible or just textually overlapping.
3. A recommended resolution, written out in full.
4. Anything to double check after resolving (tests, imports, related files).
