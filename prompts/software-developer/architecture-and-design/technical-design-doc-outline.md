---
role: "Software Developer"
title: "Technical Design Doc Outline"
slug: "technical-design-doc-outline"
category: "Architecture & Design"
description: "Structures a technical design document from a rough feature idea."
useCase: "Starting a design doc before writing code for a non-trivial feature."
variables:
  - "FEATURE_DESCRIPTION"
  - "CONSTRAINTS"
tags:
  - "architecture"
---
Act as a senior engineer writing a technical design document.

Feature: [FEATURE_DESCRIPTION]
Constraints (performance, timeline, existing systems): [CONSTRAINTS]

Produce a design doc outline with:
1. Problem statement and goals.
2. Non-goals (explicitly out of scope).
3. Proposed approach, with a high-level component breakdown.
4. Alternatives considered and why they were rejected.
5. Risks and open questions.
6. Rollout plan (feature flag, phased release, migration needs).
