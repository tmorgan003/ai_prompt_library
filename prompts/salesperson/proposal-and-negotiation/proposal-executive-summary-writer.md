---
role: "Salesperson"
title: "Proposal Executive Summary Writer"
slug: "proposal-executive-summary-writer"
category: "Proposal & Negotiation"
description: "Writes the executive summary section of a sales proposal."
useCase: "Finalizing a proposal document for a prospect's decision-makers."
variables:
  - "PROSPECT_NEEDS"
  - "PROPOSED_SOLUTION"
  - "KEY_OUTCOMES"
tags:
  - "proposal"
---
Act as a sales rep writing a proposal executive summary.

Prospect needs: [PROSPECT_NEEDS]
Proposed solution: [PROPOSED_SOLUTION]
Key expected outcomes: [KEY_OUTCOMES]

Write a summary that:
1. Opens by restating their problem in their own language, not generic industry language.
2. States the proposed solution and how it addresses that problem directly.
3. States the expected outcomes in terms that matter to a decision-maker, not just features.

Keep it under 200 words.
