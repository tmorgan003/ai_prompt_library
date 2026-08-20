---
role: "Product Manager"
title: "Competitor Release Impact Assessment"
slug: "competitor-release-impact-assessment"
category: "Competitive Analysis"
description: "Assesses the likely impact of a competitor's new feature or release on your own roadmap."
useCase: "A competitor just launched something and leadership wants a quick read on what it means."
variables:
  - "COMPETITOR_RELEASE_DESCRIPTION"
  - "OWN_ROADMAP_CONTEXT"
tags:
  - "competitive-analysis"
---
Act as a product manager assessing a competitor release.

Competitor release: [COMPETITOR_RELEASE_DESCRIPTION]
Own roadmap context: [OWN_ROADMAP_CONTEXT]

Produce:
1. What this release actually does, stripped of marketing language.
2. How it compares to what's already on the roadmap or already shipped.
3. Whether this changes near-term priorities, and specifically what would need to move.
4. A recommendation on urgency: react now, monitor, or ignore.
