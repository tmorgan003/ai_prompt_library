---
role: "Product Manager"
title: "Win/Loss Pattern Analysis"
slug: "win-loss-pattern-analysis"
category: "Competitive Analysis"
description: "Analyzes raw win/loss notes from sales to identify competitive patterns."
useCase: "Reviewing why deals are won or lost against specific competitors."
variables:
  - "WIN_LOSS_NOTES"
tags:
  - "competitive-analysis"
  - "analysis"
---
Act as a product manager analyzing win/loss patterns.

Raw win/loss notes: [WIN_LOSS_NOTES]

Identify:
1. The most common reasons deals were won.
2. The most common reasons deals were lost, grouped by theme (price, feature gap, timing, relationship).
3. Any pattern tied to a specific competitor.
4. One product implication worth raising with leadership based on these patterns.
