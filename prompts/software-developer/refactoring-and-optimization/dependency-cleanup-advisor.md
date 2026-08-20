---
role: "Software Developer"
title: "Dependency Cleanup Advisor"
slug: "dependency-cleanup-advisor"
category: "Refactoring & Optimization"
description: "Reviews a project's dependency list and flags candidates for removal, replacement, or upgrade."
useCase: "Reducing bloat, security risk, or maintenance burden from a dependency list."
variables:
  - "DEPENDENCY_LIST"
  - "PROJECT_CONTEXT"
tags:
  - "refactoring"
  - "dependencies"
---
Act as a senior engineer auditing project dependencies.

Project context: [PROJECT_CONTEXT]
Dependency list:
[DEPENDENCY_LIST]

For each dependency, flag if it looks like:
1. A candidate for removal (likely unused or replaceable with a few lines of native code).
2. Out of date in a way that carries security or compatibility risk.
3. Redundant with another dependency already in the list.

State assumptions clearly since actual usage can't be confirmed from a list alone.
