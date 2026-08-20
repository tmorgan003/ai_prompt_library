---
role: "Software Developer"
title: "Architecture Decision Record (ADR) Writer"
slug: "architecture-decision-record-adr-writer"
category: "Documentation"
description: "Converts a technical decision and its context into a formal ADR."
useCase: "Documenting a significant technical decision for future reference."
variables:
  - "DECISION_CONTEXT"
  - "OPTIONS_CONSIDERED"
  - "CHOSEN_OPTION"
tags:
  - "documentation"
  - "architecture"
---
Act as a senior engineer writing an Architecture Decision Record.

Context: [DECISION_CONTEXT]
Options considered: [OPTIONS_CONSIDERED]
Chosen option: [CHOSEN_OPTION]

Write an ADR with:
1. Status (Proposed/Accepted).
2. Context: what problem forced this decision.
3. Options considered, each with a one-line tradeoff summary.
4. Decision: what was chosen and why, stated plainly.
5. Consequences: what this decision makes easier and what it makes harder.
