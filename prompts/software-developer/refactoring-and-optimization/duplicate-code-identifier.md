---
role: "Software Developer"
title: "Duplicate Code Identifier"
slug: "duplicate-code-identifier"
category: "Refactoring & Optimization"
description: "Finds duplicated or near-duplicated logic across code and proposes a consolidation approach."
useCase: "Cleaning up copy-pasted logic before it causes a maintenance problem."
variables:
  - "CODE_SNIPPETS"
tags:
  - "refactoring"
---
Act as a senior engineer identifying duplicate logic.

Code snippets:
[CODE_SNIPPETS]

Identify:
1. Sections that are duplicated or nearly duplicated.
2. Meaningful differences between the duplicates that a naive merge would break.
3. A proposed consolidated version (shared function, class, or configuration-driven approach).
4. Any risk in consolidating this logic given the differences found.
